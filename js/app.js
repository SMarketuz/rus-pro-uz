(function () {
  'use strict';

  /* ───────── yordamchilar ───────── */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const todayNum = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  const TOTAL = PLAN.length;
  const STEPS = [['phrases', 'Jumlalar', '📖'], ['dialog', 'Dialog', '💬'], ['listen', 'Talaffuz', '🔊'],
    ['speak', 'Gapirish', '🎤'], ['test', 'Test', '✅'], ['grammar', 'Grammatika', '💡']];

  /* ───────── saqlash (localStorage) ───────── */
  const KEY = 'rus30.v1';
  const defaults = () => ({ done: {}, steps: {}, scores: {}, speak: {}, cards: {}, visited: {}, theme: 'auto', rate: 0.9,
    voice: '', showTr: true, showUz: true, autoSpeak: true, cardDir: 'ru', streak: 0, last: 0 });
  let S = load();
  function load() { try { const r = localStorage.getItem(KEY); if (r) return Object.assign(defaults(), JSON.parse(r)); } catch (e) {} return defaults(); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function touch() { // kunlik ketma-ketlik (streak)
    const t = todayNum();
    if (S.last === t) return;
    S.streak = S.last === t - 1 ? S.streak + 1 : 1; S.last = t; save();
  }
  function streakNow() { const t = todayNum(); return (S.last === t || S.last === t - 1) ? S.streak : 0; }

  function applyTheme() {
    const r = document.documentElement;
    if (S.theme === 'auto') delete r.dataset.theme; else r.dataset.theme = S.theme;
    $('#themeBtn').textContent = { auto: '🌓', light: '☀️', dark: '🌙' }[S.theme];
    const dark = S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    const m = $('meta[name=theme-color]'); if (m) m.content = dark ? '#0e1120' : '#3b5bfd';
  }

  /* ───────── kontent ───────── */
  const ph = n => DAYS[n].phrases.map(([ru, tr, uz]) => ({ ru, tr, uz }));
  const planOf = n => PLAN[n - 1];
  const hasDay = n => !!(DAYS[n]);
  const dayStep = n => S.steps[n] || (S.steps[n] = {});

  /* ───────── ovoz chiqarish (TTS) ───────── */
  const hasTTS = 'speechSynthesis' in window;
  let voices = [], tok = 0;
  function loadVoices() { if (!hasTTS) return; voices = speechSynthesis.getVoices().filter(v => /^ru/i.test(v.lang.replace('_', '-'))); }
  if (hasTTS) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (cur.name === 'settings' || cur.tab === 'listen') draw(); }; }
  function pickVoice(alt) {
    if (!voices.length) return null;
    const main = voices.find(v => v.voiceURI === S.voice) || voices[0];
    return alt ? (voices.find(v => v !== main) || main) : main;
  }
  function speak(text, o = {}) {
    return new Promise(res => {
      if (!hasTTS) { toast('Bu brauzer ovoz chiqarishni qo\'llamaydi'); return res(); }
      try { speechSynthesis.cancel(); } catch (e) {}
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ru-RU'; u.rate = o.rate || S.rate; u.pitch = o.pitch || 1;
      const v = pickVoice(o.alt); if (v) u.voice = v;
      let fin = false; const end = () => { if (!fin) { fin = true; res(); } };
      u.onend = end; u.onerror = end;
      setTimeout(end, Math.max(4000, text.length * 220 / (u.rate || 1))); // ba'zi brauzerlarda onend kelmaydi
      speechSynthesis.speak(u);
    });
  }
  function say(text, slow, alt) { stopAll(); return speak(text, { rate: slow ? 0.55 : S.rate, alt }); }
  let recog = null;
  function stopAll() { tok++; if (hasTTS) try { speechSynthesis.cancel(); } catch (e) {} if (recog) { try { recog.abort(); } catch (e) {} recog = null; } }

  /* ───────── ovozni tanish (STT) ───────── */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen() {
    return new Promise((resolve, reject) => {
      const r = new SR(); recog = r;
      r.lang = 'ru-RU'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      let got = false;
      r.onresult = e => { got = true; resolve([...e.results[0]].map(a => a.transcript)); };
      r.onerror = e => reject(e.error || 'error');
      r.onend = () => { if (!got) reject('no-speech'); };
      try { r.start(); } catch (err) { reject('start'); }
    });
  }
  const ONES = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать',
    'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
  const TENS = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  const HUND = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
  function ruNum(n) { // 0–999 999: "25" → "двадцать пять"
    if (n >= 1000000) return String(n);
    if (n >= 1000) {
      const t = Math.floor(n / 1000), r = n % 1000, last = t % 10, two = t % 100;
      let w = ruNum(t).replace(/один$/, 'одна').replace(/два$/, 'две');
      w += t === 1 ? '' : (last >= 2 && last <= 4 && (two < 10 || two > 20)) ? ' тысячи' : ' тысяч';
      if (t === 1) w = 'тысяча';
      return r ? w + ' ' + ruNum(r) : w;
    }
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
    return HUND[Math.floor(n / 100)] + (n % 100 ? ' ' + ruNum(n % 100) : '');
  }
  const norm = s => String(s).toLowerCase().replace(/\d+/g, m => ' ' + ruNum(+m) + ' ').replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const row = [i];
      for (let j = 1; j <= n; j++) row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = row;
    }
    return prev[n];
  }
  const sim = (a, b) => { const x = norm(a), y = norm(b), m = Math.max(x.length, y.length); return m ? 1 - lev(x, y) / m : 1; };
  function evaluate(target, alts) {
    let best = alts[0], bs = -1;
    alts.forEach(a => { const s = sim(target, a); if (s > bs) { bs = s; best = a; } });
    const rt = norm(best).split(' ').filter(Boolean);
    const words = norm(target).split(' ').filter(Boolean).map(w => ({ w, ok: rt.some(r => 1 - lev(w, r) / Math.max(w.length, r.length) >= 0.7) }));
    return { pct: Math.max(0, Math.round(bs * 100)), said: best, words };
  }

  /* ───────── kartochkalar (Leitner: 1-3-7-14-30 kun) ───────── */
  const INTERVALS = [0, 1, 3, 7, 14, 30];
  function pool() {
    const out = [], seen = new Set();
    PLAN.forEach(p => {
      if (!S.visited[p.n] || !hasDay(p.n)) return;
      const d = DAYS[p.n];
      d.phrases.concat(d.words).forEach(([ru, tr, uz]) => { if (!seen.has(ru)) { seen.add(ru); out.push({ ru, tr, uz, day: p.n }); } });
    });
    return out;
  }
  function counts() {
    const t = todayNum(), P = pool();
    const due = P.filter(c => S.cards[c.ru] && S.cards[c.ru].d <= t).length;
    const fresh = P.filter(c => !S.cards[c.ru]).length;
    return { due, fresh, total: P.length };
  }

  /* ───────── marshrut va holat ───────── */
  let cur = { name: 'home' }, C = {}, curKey = '';
  function route() {
    const p = location.hash.replace(/^#\/?/, '').split('/');
    cur = p[0] === 'day' && hasDay(+p[1]) ? { name: 'day', n: +p[1], tab: STEPS.some(s => s[0] === p[2]) ? p[2] : 'phrases' }
      : p[0] === 'cards' ? { name: 'cards' } : p[0] === 'settings' ? { name: 'settings' } : { name: 'home' };
    const key = JSON.stringify(cur);
    if (key !== curKey) { stopAll(); C = {}; curKey = key; window.scrollTo(0, 0); }
    if (cur.name === 'day') { S.visited[cur.n] = true; save(); }
    draw();
  }
  function draw() {
    const app = $('#app');
    app.innerHTML = cur.name === 'day' ? viewDay() : cur.name === 'cards' ? viewCards() : cur.name === 'settings' ? viewSettings() : viewHome();
    document.querySelectorAll('.bottom a').forEach(a => a.classList.toggle('on', a.dataset.nav === cur.name || (cur.name === 'day' && a.dataset.nav === 'home')));
    const c = counts(), n = c.due + Math.min(c.fresh, 10), b = $('#dueBadge');
    b.hidden = !n; b.textContent = n;
    const on = $('.tab.on'); if (on) on.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600); }
  const go = h => { location.hash = h; };

  /* ───────── bosh sahifa ───────── */
  function viewHome() {
    const done = PLAN.filter(p => S.done[p.n]).length, pct = Math.round(done / TOTAL * 100);
    let next = PLAN.find(p => hasDay(p.n) && !S.done[p.n]);
    const c = counts();
    const started = done > 0 || Object.keys(S.visited).length > 0;
    const tiles = PLAN.map(p => {
      const ready = hasDay(p.n), isDone = !!S.done[p.n], isCur = next && next.n === p.n;
      const cls = ['tile', isDone ? 'done' : '', isCur ? 'cur' : '', ready ? '' : 'soon', p.review ? 'rev' : ''].join(' ');
      const inner = `<span class="e">${isDone ? '✅' : p.icon}</span><div class="n">${p.review ? 'Takrorlash · ' : ''}${p.n}-kun</div><div class="t">${esc(p.title)}</div>` +
        (S.scores[p.n] ? `<span class="sc">Test ${S.scores[p.n]}%</span>` : '') + (ready ? '' : '<span class="sc muted">tez orada</span>');
      return ready ? `<a class="${cls}" href="#/day/${p.n}">${inner}</a>` : `<button class="${cls}" data-act="soon">${inner}</button>`;
    }).join('');
    return `
      <section class="card hero">
        <h1>${started ? 'Davom etamiz! 💪' : 'Salom! Rus tilini 30 kunda boshlaymiz 🇷🇺'}</h1>
        <p>${next ? `Bugungi dars: <b>${next.n}-kun — ${esc(next.title)}</b>` : 'Hozirgi bosqichdagi barcha darslar tugadi. Kartochkalarni takrorlang!'}</p>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="small" style="margin-top:6px">${done} / ${TOTAL} kun · ${pct}%</div>
        ${next ? `<a class="btn" href="#/day/${next.n}">${started ? 'Darsni davom ettirish' : 'Birinchi darsni boshlash'} →</a>` : ''}
      </section>
      <div class="stats">
        <div class="stat"><b>🔥 ${streakNow()}</b><span>kun ketma-ket</span></div>
        <a class="stat" href="#/cards"><b>🃏 ${c.due + Math.min(c.fresh, 10)}</b><span>takrorlash kerak</span></a>
        <div class="stat"><b>⭐ ${Object.values(S.speak).filter(v => v >= 70).length}</b><span>yaxshi aytilgan</span></div>
      </div>
      <h2>30 kunlik reja</h2>
      <p class="muted small">Har 5-kun — takrorlash. Hozircha 1–20-kunlar tayyor, qolganlari keyingi bosqichda qo'shiladi.</p>
      <div class="grid">${tiles}</div>`;
  }

  /* ───────── dars sahifasi ───────── */
  function viewDay() {
    const n = cur.n, p = planOf(n), d = DAYS[n], st = dayStep(n);
    const tabs = STEPS.map(([k, name, ic]) => `<a class="tab ${k === cur.tab ? 'on' : ''} ${st[k] ? 'ok' : ''}" href="#/day/${n}/${k}">${st[k] ? '✓' : ic} ${name}</a>`).join('');
    const body = { phrases: tPhrases, dialog: tDialog, listen: tListen, speak: tSpeak, test: tTest, grammar: tGrammar }[cur.tab](n, d);
    return `
      <div class="dayhead"><span class="e">${p.icon}</span><div><div class="muted small">${n}-kun${p.review ? ' · takrorlash' : ''}</div><h2 style="margin:0">${esc(p.title)}</h2></div></div>
      <p class="muted">🎯 ${esc(d.goal)}</p>
      <div class="tabs">${tabs}</div>
      ${body}`;
  }
  const nextBtn = (label) => `<button class="btn" style="margin-top:14px" data-act="next">${label || 'Keyingi qadam →'}</button>`;
  const toggles = () => `<div class="chips">
      <button class="chip ${S.showTr ? 'on' : ''}" data-act="tgl" data-k="showTr">O'qilishi</button>
      <button class="chip ${S.showUz ? 'on' : ''}" data-act="tgl" data-k="showUz">Tarjima</button></div>`;

  function tPhrases(n, d) {
    const rows = ph(n).map((p, i) => `
      <div class="ph"><div class="grow">
        <div class="ru">${esc(p.ru)}</div>
        ${S.showTr ? `<div class="tr">${esc(p.tr)}</div>` : ''}
        ${S.showUz ? `<div class="uz">${esc(p.uz)}</div>` : ''}</div>
        <div class="btns"><button class="round p" data-act="say" data-t="${esc(p.ru)}" aria-label="Eshitish">🔊</button>
        <button class="round" data-act="say" data-t="${esc(p.ru)}" data-slow="1" aria-label="Sekin eshitish">🐢</button></div></div>`).join('');
    const words = d.words.length ? `<h3 style="margin-top:18px">Yangi so'zlar</h3>` + d.words.map(w => `
      <div class="ph"><div class="grow"><div class="ru">${esc(w[0])} <span class="tr" style="font-size:.9rem">${esc(w[1])}</span></div><div class="uz">${esc(w[2])}</div></div>
      <div class="btns"><button class="round" data-act="say" data-t="${esc(w[0])}">🔊</button></div></div>`).join('') : '';
    return `<p class="small muted">Har bir jumlani tinglang. <b>KATTA harflar</b> — urg'u tushadigan bo'g'in.</p>${toggles()}
      <div class="card">${rows}${words}</div>${nextBtn()}`;
  }

  function tDialog(n, d) {
    const dl = d.dialog;
    const lines = dl.lines.map((l, i) => `
      <button class="bub ${l[0] === 0 ? 'me' : ''}" data-act="line" data-i="${i}">
        <div class="who">${esc(dl.roles[l[0]])} 🔊</div><div class="ru">${esc(l[1])}</div>
        ${S.showTr ? `<div class="tr">${esc(l[2])}</div>` : ''}${S.showUz ? `<div class="uz">${esc(l[3])}</div>` : ''}</button>`).join('');
    return `<div class="card"><b>📍 ${esc(dl.scene)}</b><div class="small muted">Har bir gapni bosib eshiting. Siz — o'ng tomondagi rol.</div></div>
      ${toggles()}
      <div class="row" style="margin-bottom:12px"><button class="btn sm" data-act="playdlg">▶ Hammasini eshitish</button><button class="btn sm sec" data-act="stop">⏹ To'xtatish</button></div>
      <div class="chat">${lines}</div>
      <p class="small muted" style="margin-top:14px">💡 Mashq: o'ng tomondagi gaplarni yashirib (O'qilishi/Tarjimani o'chiring) o'zingiz ovoz chiqarib ayting.</p>
      ${nextBtn()}`;
  }

  function voiceHint() {
    if (!hasTTS) return `<div class="hint bad">Bu brauzer ovoz chiqarishni qo'llamaydi. Chrome yoki Safari'dan foydalaning.</div>`;
    return voices.length ? '' : `<div class="hint">Ruscha ovoz hali topilmadi. Telefon sozlamalarida <b>Til va kiritish → Matndan nutqqa</b> bo'limida rus tilini yuklab oling.</div>`;
  }
  function tListen(n) {
    const P = ph(n), i = C.li || 0, p = P[i];
    return `${voiceHint()}
      <div class="card big"><div class="muted small">${i + 1} / ${P.length}</div>
        <div class="ru">${esc(p.ru)}</div><div class="tr">${esc(p.tr)}</div><div class="uz">${esc(p.uz)}</div>
        <div class="row" style="justify-content:center;margin-top:16px">
          <button class="btn" style="width:auto;flex:1" data-act="say" data-t="${esc(p.ru)}">🔊 Oddiy</button>
          <button class="btn sec" style="width:auto;flex:1" data-act="say" data-t="${esc(p.ru)}" data-slow="1">🐢 Sekin</button></div></div>
      <div class="row"><button class="btn sec" data-act="lprev">←</button><button class="btn sec" data-act="lnext">→</button></div>
      <div class="gap"></div>
      <button class="btn ghost" data-act="${C.auto ? 'stop' : 'autolisten'}">${C.auto ? '⏹ To\'xtatish' : '🔁 Hammasini ketma-ket (oddiy + sekin)'}</button>
      <p class="small muted">Tinglang → ovoz chiqarib takrorlang. Sekin ovoz har bir bo'g'inni aniq eshitishga yordam beradi.</p>
      ${nextBtn()}`;
  }

  function tSpeak(n) {
    const P = ph(n), i = C.si || 0, p = P[i], best = S.speak[p.ru] || 0;
    const good = P.filter(x => (S.speak[x.ru] || 0) >= 70).length;
    const dots = P.map((x, k) => { const b = S.speak[x.ru] || 0; return `<button class="dot ${b >= 70 ? 'g' : b > 0 ? 'y' : ''} ${k === i ? 'cur' : ''}" data-act="sgo" data-i="${k}" aria-label="${k + 1}"></button>`; }).join('');
    const r = C.res && C.res.i === i ? C.res : null;
    let result = '';
    if (C.err) result = `<div class="hint bad">${esc(C.err)}</div>`;
    if (r) {
      const cls = r.pct >= 80 ? 'g' : r.pct >= 55 ? 'y' : 'r';
      const msg = r.pct >= 85 ? 'Ajoyib! 🎉' : r.pct >= 70 ? 'Yaxshi! 👍' : r.pct >= 50 ? 'Yomon emas, yana bir bor urinib ko\'ring' : 'Avval tinglang, keyin qayta ayting';
      result = `<div class="center"><div class="score ${cls}">${r.pct}%</div><div><b>${msg}</b></div>
        <div class="words">${r.words.map(w => `<span class="w ${w.ok ? 'ok' : 'no'}">${esc(w.w)}</span>`).join('')}</div>
        <div class="small muted">Eshitilgan: «${esc(r.said)}»</div></div>`;
    }
    const mic = SR ? `<button class="mic ${C.rec ? 'rec' : ''}" data-act="mic" aria-label="Gapirish">${C.rec ? '👂' : '🎤'}</button>
        <div class="center small muted">${C.rec ? 'Tinglayapman… ayting!' : 'Mikrofonni bosing va jumlani ayting'}</div>`
      : `<div class="hint">Bu brauzer ovozni tanishni qo'llamaydi (Android'da Chrome kerak). O'zingiz ovoz chiqarib ayting va belgilang.</div>
         <button class="btn ok" data-act="selfok">✔ Aytdim</button>`;
    return `<div class="muted small center">Yaxshi aytilgan: ${good} / ${P.length} (≥70%)</div><div class="dots">${dots}</div>
      <div class="card big"><div class="ru">${esc(p.ru)}</div><div class="tr">${esc(p.tr)}</div><div class="uz">${esc(p.uz)}</div>
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn sm sec" data-act="say" data-t="${esc(p.ru)}">🔊 Eshitish</button>
        <button class="btn sm sec" data-act="say" data-t="${esc(p.ru)}" data-slow="1">🐢 Sekin</button></div>
        ${best ? `<div class="small muted" style="margin-top:8px">Eng yaxshi natija: <b>${best}%</b></div>` : ''}</div>
      ${mic}${result}
      <div class="nav2"><button class="btn sec" data-act="sprev">← Oldingi</button><button class="btn sec" data-act="snext">Keyingi →</button></div>
      <p class="small muted">Eslatma: ovozni tanish ishlashi uchun internet va mikrofon ruxsati kerak. Natija taxminiy.</p>
      ${nextBtn()}`;
  }

  function buildTest(n) {
    const d = DAYS[n], P = ph(n), qs = [];
    shuffle(P).slice(0, 5).forEach((p, i) => {
      const type = i < 3 ? 'ru2uz' : 'uz2ru';
      const others = shuffle(P.filter(x => x !== p)).slice(0, 3);
      qs.push({ type, p, opts: shuffle([p].concat(others)).map(x => ({ text: type === 'ru2uz' ? x.uz : x.ru, ok: x === p })) });
    });
    d.fill.forEach(f => qs.push({ type: 'fill', s: f[0], a: f[1], uz: f[3], opts: shuffle(f[2]).map(t => ({ text: t, ok: t === f[1] })) }));
    return { qs, i: 0, score: 0, ans: null, done: false };
  }
  function tTest(n) {
    if (!C.test) C.test = buildTest(n);
    const T = C.test;
    if (T.done) {
      const pct = Math.round(T.score / T.qs.length * 100);
      return `<div class="card center"><div class="score ${pct >= 80 ? 'g' : pct >= 60 ? 'y' : 'r'}">${pct}%</div>
        <h2>${T.score} / ${T.qs.length} to'g'ri</h2>
        <p>${pct >= 80 ? 'Zo\'r natija! Keyingi bosqichga tayyorsiz. 🎉' : pct >= 60 ? 'Yaxshi. Xato qilgan jumlalar kartochkalarda qayta chiqadi.' : 'Hali mashq kerak: Jumlalar va Talaffuz bo\'limlarini qayta ko\'ring.'}</p>
        ${S.scores[n] ? `<div class="muted small">Eng yaxshi natija: ${S.scores[n]}%</div>` : ''}</div>
        <button class="btn sec" data-act="retest">🔄 Qayta topshirish</button>${nextBtn()}`;
    }
    const q = T.qs[T.i], answered = T.ans !== null;
    let head, label;
    if (q.type === 'ru2uz') { label = 'Tarjimasini toping'; head = `<div class="q">${esc(q.p.ru)} <button class="round" data-act="say" data-t="${esc(q.p.ru)}">🔊</button></div>`; }
    else if (q.type === 'uz2ru') { label = 'Ruscha qanday aytiladi?'; head = `<div class="q">${esc(q.p.uz)}</div>`; }
    else { label = 'Bo\'sh joyni to\'ldiring'; head = `<div class="q">${esc(q.s).replace('___', `<span class="gap-blank">${answered ? esc(q.a) : '&nbsp;'}</span>`)}</div><div class="muted small" style="margin:-8px 0 12px">${esc(q.uz)}</div>`; }
    const opts = q.opts.map((o, i) => {
      let c = ''; if (answered) { if (o.ok) c = 'right'; else if (i === T.ans) c = 'wrong'; }
      return `<button class="opt ${c}" data-act="opt" data-i="${i}" ${answered ? 'disabled' : ''}>${esc(o.text)}</button>`;
    }).join('');
    const ok = answered && q.opts[T.ans].ok;
    const fb = answered ? `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? '✔ To\'g\'ri!' : '✘ Noto\'g\'ri. To\'g\'ri javob yuqorida yashil bilan ko\'rsatilgan.'}</div>
      <button class="btn" style="margin-top:12px" data-act="tnext">${T.i + 1 >= T.qs.length ? 'Natijani ko\'rish' : 'Keyingi savol →'}</button>` : '';
    return `<div class="muted small">${label} · ${T.i + 1} / ${T.qs.length}</div><div class="bar"><i style="width:${T.i / T.qs.length * 100}%"></i></div><div class="gap"></div>
      <div class="card">${head}<div class="opts">${opts}</div>${fb}</div>`;
  }

  function tGrammar(n, d) {
    const t = d.tip;
    const pts = t.points.map(p => `<li>${p[0]}${p[1] ? `<div class="ex"><button class="round p" data-act="say" data-t="${esc(p[1])}">🔊</button><div><div class="ru" style="font-size:1.1rem">${esc(p[1])}</div><div class="uz">${esc(p[2] || '')}</div></div></div>` : ''}</li>`).join('');
    const last = n >= TOTAL || !hasDay(n + 1);
    return `<div class="card tip"><h3>💡 ${esc(t.title)}</h3><ul>${pts}</ul></div>
      <button class="btn ok" data-act="finish">🎉 Kunni yakunlash</button>
      <p class="small center muted" style="margin-top:10px">${last ? '' : 'Ertaga yangi dars. Bugun kartochkalarni takrorlashni unutmang!'}</p>`;
  }

  /* ───────── kartochkalar ───────── */
  function viewCards() {
    const c = counts();
    if (!c.total) return `<div class="card center"><div style="font-size:3rem">🃏</div><h2>Kartochkalar hali yo'q</h2><p class="muted">Darsni ochganingizda uning jumlalari va so'zlari shu yerga qo'shiladi.</p><a class="btn" href="#/">Darsga o'tish</a></div>`;
    const cs = C.cs;
    const dir = `<div class="seg" style="margin-bottom:12px"><button class="${S.cardDir === 'ru' ? 'on' : ''}" data-act="cdir" data-v="ru">Ruscha → O'zbekcha</button><button class="${S.cardDir === 'uz' ? 'on' : ''}" data-act="cdir" data-v="uz">O'zbekcha → Ruscha</button></div>`;
    if (!cs) return `<h2>Kartochkalar</h2><p class="muted">Takrorlash tizimi: bilgan so'zlaringiz 1 → 3 → 7 → 14 → 30 kundan keyin qaytadi, bilmaganlari tez-tez.</p>
      <div class="stats"><div class="stat"><b>${c.due}</b><span>takrorlash</span></div><div class="stat"><b>${Math.min(c.fresh, 10)}</b><span>yangi (bugun)</span></div><div class="stat"><b>${c.total}</b><span>jami</span></div></div>
      ${dir}<button class="btn" data-act="cstart" ${c.due + c.fresh ? '' : 'disabled'}>${c.due + c.fresh ? '▶ Boshlash' : 'Bugunga hammasi tayyor ✅'}</button>`;
    if (cs.i >= cs.q.length) return `<div class="card center"><div style="font-size:3rem">🎉</div><h2>Ajoyib!</h2><p>${cs.total} ta kartochka ko'rib chiqildi.<br>Bildim: ${cs.good} · Qayta: ${cs.again}</p></div><button class="btn" data-act="cend">Tayyor</button>`;
    const card = cs.q[cs.i], st = S.cards[card.ru] || { b: 0 };
    const front = S.cardDir === 'ru' ? `<div class="ru">${esc(card.ru)}</div>` : `<div class="ru" style="font-size:1.5rem">${esc(card.uz)}</div>`;
    const back = S.cardDir === 'ru' ? `<div class="tr" style="font-size:1.1rem">${esc(card.tr)}</div><div class="ru" style="font-size:1.4rem;margin-top:8px;color:var(--text)">${esc(card.uz)}</div>`
      : `<div class="ru">${esc(card.ru)}</div><div class="tr" style="font-size:1.1rem">${esc(card.tr)}</div>`;
    const ivl = b => { const v = INTERVALS[Math.min(5, b)]; return v ? v + ' kun' : 'hozir'; };
    return `<div class="muted small center">${cs.i + 1} / ${cs.q.length}</div><div class="bar"><i style="width:${cs.i / cs.q.length * 100}%"></i></div><div class="gap"></div>
      <div class="card fc" data-act="flip"><div class="lbl">${cs.flip ? 'Javob' : 'Savol — bosing'}</div>${front}
        ${cs.flip ? `<div style="margin-top:14px;border-top:1px solid var(--line);padding-top:14px;width:100%">${back}</div>` : ''}</div>
      <div class="row" style="justify-content:center"><button class="btn sm sec" data-act="say" data-t="${esc(card.ru)}">🔊 Eshitish</button></div>
      ${cs.flip ? `<div class="rate">
        <button class="btn" style="background:var(--bad);color:#fff" data-act="rate" data-r="0">Bilmadim<small>qayta</small></button>
        <button class="btn" style="background:var(--warn);color:#1a1a1a" data-act="rate" data-r="1">Qiyin<small>${ivl(Math.max(1, st.b))}</small></button>
        <button class="btn ok" data-act="rate" data-r="2">Bildim<small>${ivl(st.b + 1)}</small></button></div>`
        : `<button class="btn" style="margin-top:12px" data-act="flip">Javobni ko'rsatish</button>`}`;
  }

  /* ───────── sozlamalar ───────── */
  function viewSettings() {
    const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button class="${S[key] === v ? 'on' : ''}" data-act="set" data-k="${key}" data-v="${v}">${l}</button>`).join('')}</div>`;
    const vs = voices.length > 1 ? `<label class="f" for="voiceSel">Rus ovozi</label><select id="voiceSel">${voices.map(v => `<option value="${esc(v.voiceURI)}" ${S.voice === v.voiceURI ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select>` : '';
    return `<h2>Sozlamalar</h2>
      <div class="card">
        <label class="f" style="margin-top:0">Mavzu</label>${seg('theme', [['auto', 'Avto'], ['light', 'Yorug\''], ['dark', 'Qorong\'i']])}
        <label class="f">Ovoz tezligi</label>
        <div class="seg">${[[0.7, 'Sekin'], [0.9, 'Oddiy'], [1.1, 'Tez']].map(([v, l]) => `<button class="${S.rate === v ? 'on' : ''}" data-act="rate-set" data-v="${v}">${l}</button>`).join('')}</div>
        ${vs}
        <div class="gap"></div><button class="btn sec" data-act="say" data-t="Здравствуйте! Как дела?">🔊 Ovozni sinash</button>
        ${voiceHint()}
      </div>
      <div class="card"><h3>Imkoniyatlar</h3>
        <p>🔊 Ovoz chiqarish: <b>${hasTTS ? 'bor' : 'yo\'q'}</b> ${voices.length ? `(${voices.length} ta rus ovozi)` : ''}</p>
        <p>🎤 Ovozni tanish: <b>${SR ? 'bor' : 'yo\'q — Android Chrome tavsiya etiladi'}</b></p>
        <p class="small muted">Mikrofon faqat https:// yoki localhost orqali ochilgan sahifada ishlaydi.</p></div>
      <div class="card"><h3>Qanday o'qish kerak</h3>
        <p class="small">KATTA harflar — urg'uli bo'g'in: <b>xaraSHO</b>. Urg'usiz «о» — «a» deb o'qiladi. «ы» va «и» o'qilishida «i» deb yozilgan; «ж» — «j», «ч» — «ch», «щ» — «sh», «х» — «x», «ц» — «ts», «я» — «ya», «ю» — «yu».</p></div>
      <div class="card"><h3>Progress</h3>
        <div class="row wrap"><button class="btn sm sec" data-act="export">📋 Nusxalash</button><button class="btn sm sec" data-act="import">📥 Tiklash</button>
        <button class="btn sm ghost" style="color:var(--bad)" data-act="reset">🗑 Tozalash</button></div>
        <p class="small muted" style="margin-top:8px">Progress faqat shu brauzerda saqlanadi. Boshqa telefonga ko'chirish uchun «Nusxalash» va «Tiklash»dan foydalaning.</p></div>`;
  }

  /* ───────── harakatlar ───────── */
  const A = {
    soon() { toast('Bu kun keyingi bosqichda qo\'shiladi 🛠️'); },
    tgl(b) { const k = b.dataset.k; S[k] = !S[k]; save(); draw(); },
    say(b) { say(b.dataset.t, !!b.dataset.slow); },
    stop() { stopAll(); C.auto = false; document.querySelectorAll('.bub.play').forEach(x => x.classList.remove('play')); if (cur.tab === 'listen') draw(); },
    line(b) { const l = DAYS[cur.n].dialog.lines[+b.dataset.i]; stopAll(); speak(l[1], { alt: l[0] === 1, pitch: l[0] === 1 ? 1.12 : 1 }); },
    async playdlg() {
      stopAll(); const my = tok, L = DAYS[cur.n].dialog.lines;
      for (let i = 0; i < L.length; i++) {
        if (my !== tok) return;
        const el = document.querySelector(`[data-i="${i}"]`); if (el) { el.classList.add('play'); el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        await speak(L[i][1], { alt: L[i][0] === 1, pitch: L[i][0] === 1 ? 1.12 : 1 });
        if (el) el.classList.remove('play');
        await sleep(350);
      }
    },
    lprev() { const n = ph(cur.n).length; C.li = ((C.li || 0) + n - 1) % n; stopAll(); draw(); },
    lnext() { const n = ph(cur.n).length; C.li = ((C.li || 0) + 1) % n; stopAll(); draw(); },
    async autolisten() {
      stopAll(); const my = tok, P = ph(cur.n); C.auto = true; draw();
      for (let i = C.li || 0; i < P.length; i++) {
        if (my !== tok) return;
        C.li = i; draw();
        await speak(P[i].ru, { rate: S.rate }); if (my !== tok) return; await sleep(900);
        await speak(P[i].ru, { rate: 0.55 }); if (my !== tok) return; await sleep(1200);
      }
      if (my === tok) { C.auto = false; C.li = 0; draw(); toast('Tayyor! Endi o\'zingiz takrorlab ko\'ring 🎤'); }
    },
    sgo(b) { C.si = +b.dataset.i; C.err = ''; draw(); },
    sprev() { const n = ph(cur.n).length; C.si = ((C.si || 0) + n - 1) % n; C.err = ''; draw(); },
    snext() { const n = ph(cur.n).length; C.si = ((C.si || 0) + 1) % n; C.err = ''; draw(); },
    async mic() {
      if (C.rec) { stopAll(); C.rec = false; draw(); return; }
      stopAll(); C.rec = true; C.err = ''; draw();
      const i = C.si || 0, p = ph(cur.n)[i];
      try {
        const alts = await listen();
        const r = evaluate(p.ru, alts); r.i = i; C.res = r;
        S.speak[p.ru] = Math.max(S.speak[p.ru] || 0, r.pct); save(); touch();
      } catch (e) {
        const M = { 'not-allowed': 'Mikrofonga ruxsat berilmagan. Brauzer sozlamalarida ruxsat bering (sahifa https:// da ochilgan bo\'lishi kerak).',
          'service-not-allowed': 'Ovozni tanish xizmati ruxsat etilmagan. Sahifani https:// orqali oching.',
          'no-speech': 'Ovoz eshitilmadi. Mikrofonni bosib, aniq ayting.', 'audio-capture': 'Mikrofon topilmadi.',
          'network': 'Ovozni tanish uchun internet kerak.', 'aborted': '', 'start': 'Mikrofonni ishga tushirib bo\'lmadi.' };
        C.err = e in M ? M[e] : 'Xatolik: ' + e;
      }
      C.rec = false; recog = null; if (cur.tab === 'speak') draw();
    },
    selfok() { const p = ph(cur.n)[C.si || 0]; S.speak[p.ru] = Math.max(S.speak[p.ru] || 0, 70); save(); touch(); toast('Belgilandi ✔'); A.snext(); },
    opt(b) {
      const T = C.test; if (T.ans !== null) return;
      const q = T.qs[T.i], i = +b.dataset.i; T.ans = i;
      if (q.opts[i].ok) T.score++;
      else if (q.p) S.cards[q.p.ru] = { b: 0, d: todayNum() }; // xato qilingan jumla kartochkalarda qaytadi
      if (q.p && q.type === 'ru2uz') say(q.p.ru);
      if (q.type === 'fill') say(q.s.replace('___', q.a));
      save(); draw();
    },
    tnext() {
      const T = C.test; T.i++; T.ans = null;
      if (T.i >= T.qs.length) {
        T.done = true; const pct = Math.round(T.score / T.qs.length * 100);
        S.scores[cur.n] = Math.max(S.scores[cur.n] || 0, pct); dayStep(cur.n).test = true; touch(); save();
      }
      draw();
    },
    retest() { C.test = buildTest(cur.n); draw(); },
    next() {
      const idx = STEPS.findIndex(s => s[0] === cur.tab); dayStep(cur.n)[cur.tab] = true; touch(); save();
      go(`#/day/${cur.n}/${STEPS[Math.min(idx + 1, STEPS.length - 1)][0]}`);
    },
    finish() {
      const n = cur.n; dayStep(n).grammar = true; S.done[n] = true; touch(); save();
      toast(`🎉 ${n}-kun yakunlandi!`); go('#/');
    },
    flip() { C.cs.flip = !C.cs.flip; draw(); if (C.cs.flip && S.autoSpeak && S.cardDir === 'uz') say(C.cs.q[C.cs.i].ru); },
    cdir(b) { S.cardDir = b.dataset.v; save(); draw(); },
    cstart() {
      const t = todayNum(), P = pool();
      const due = P.filter(c => S.cards[c.ru] && S.cards[c.ru].d <= t).sort((a, b) => S.cards[a.ru].d - S.cards[b.ru].d);
      const fresh = P.filter(c => !S.cards[c.ru]).slice(0, 10);
      C.cs = { q: due.concat(fresh), i: 0, flip: false, total: due.length + fresh.length, good: 0, again: 0 }; draw();
    },
    rate(b) {
      const cs = C.cs, c = cs.q[cs.i], r = +b.dataset.r, t = todayNum(), st = S.cards[c.ru] || { b: 0, d: t };
      if (r === 0) { st.b = 0; st.d = t; cs.again++; if (cs.q.filter(x => x === c).length < 3) cs.q.push(c); }
      else { st.b = r === 1 ? Math.max(1, st.b) : Math.min(5, st.b + 1); st.d = t + INTERVALS[st.b]; cs.good++; }
      S.cards[c.ru] = st; cs.i++; cs.flip = false; touch(); save(); draw();
    },
    cend() { C.cs = null; draw(); },
    set(b) { S[b.dataset.k] = b.dataset.v; save(); applyTheme(); draw(); },
    'rate-set'(b) { S.rate = +b.dataset.v; save(); draw(); },
    export() {
      const txt = JSON.stringify(S);
      (navigator.clipboard ? navigator.clipboard.writeText(txt).then(() => toast('Nusxalandi 📋')) : Promise.reject()).catch(() => prompt('Nusxalang:', txt));
    },
    import() {
      const t = prompt('Nusxalangan progressni shu yerga joylang:'); if (!t) return;
      try { S = Object.assign(defaults(), JSON.parse(t)); save(); applyTheme(); draw(); toast('Tiklandi ✅'); } catch (e) { toast('Noto\'g\'ri format'); }
    },
    reset() { if (confirm('Barcha progress o\'chiriladi. Davom etamizmi?')) { S = defaults(); save(); applyTheme(); draw(); toast('Tozalandi'); } }
  };
  document.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (b && A[b.dataset.act]) A[b.dataset.act](b, e); });
  document.addEventListener('change', e => { if (e.target.id === 'voiceSel') { S.voice = e.target.value; save(); } });
  $('#themeBtn').addEventListener('click', () => { S.theme = { auto: 'light', light: 'dark', dark: 'auto' }[S.theme]; save(); applyTheme(); if (cur.name === 'settings') draw(); });
  window.addEventListener('hashchange', route);
  window.addEventListener('pagehide', stopAll);

  applyTheme(); route();
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
