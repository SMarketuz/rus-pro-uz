window.DAYS = window.DAYS || {};

DAYS[11] = {
  goal: "Ish qidirish, tajriba va oylik haqida so'rash, suhbatdan o'tish.",
  phrases: [
    ["Я ищу работу.", "ya iSHU raBOtu.", "Men ish qidiryapman."],
    ["У вас есть вакансии?", "u VAS yest vaKANsii?", "Sizda bo'sh ish o'rinlari bormi?"],
    ["Я работал строителем.", "ya raBOtal straITilem.", "Men quruvchi bo'lib ishlaganman."],
    ["У меня есть опыт.", "u minYA yest Opit.", "Menda tajriba bor."],
    ["У меня нет опыта, но я быстро учусь.", "u minYA nyet Opita, no ya BIStra uCHUS.", "Tajribam yo'q, lekin tez o'rganaman."],
    ["Какая зарплата?", "kaKAya ZARplata?", "Oylik qancha?"],
    ["Какой график работы?", "kaKOY GRAfik raBOty?", "Ish jadvali qanday?"],
    ["Когда можно начать?", "kagDA MOJna naCHAT?", "Qachon boshlasam bo'ladi?"],
    ["Я готов работать.", "ya gaTOF raBOtat.", "Men ishlashga tayyorman."],
    ["Спасибо за собеседование.", "spaSIba za sibisYEdavaniye.", "Suhbat uchun rahmat."]
  ],
  words: [
    ["вакансия", "vaKANsiya", "bo'sh ish o'rni"],
    ["зарплата", "ZARplata", "oylik maosh"],
    ["опыт", "Opit", "tajriba"],
    ["резюме", "rizyuME", "rezyume"],
    ["начальник", "naCHALnik", "boshliq"],
    ["стройка", "STROYka", "qurilish"]
  ],
  dialog: {
    scene: "Ish beruvchi bilan suhbat.",
    roles: ["Siz", "Ish beruvchi"],
    lines: [
      [1, "Здравствуйте! Садитесь. Расскажите о себе.", "ZDRAstvuyte! saDItis. raskaJIte a siBYE.", "Assalomu alaykum! O'tiring. O'zingiz haqingizda gapiring."],
      [0, "Здравствуйте! Меня зовут Анвар. Я из Узбекистана.", "ZDRAstvuyte! minYA zaVUT anVAR. ya iz uzbikisTAna.", "Assalomu alaykum! Mening ismim Anvar. Men O'zbekistondanman."],
      [1, "У вас есть опыт?", "u VAS yest Opit?", "Sizda tajriba bormi?"],
      [0, "Да, я работал строителем три года.", "da, ya raBOtal straITilem tri GOda.", "Ha, men uch yil quruvchi bo'lib ishlaganman."],
      [1, "Хорошо. Когда вы можете начать?", "xaraSHO. kagDA vy MOjite naCHAT?", "Yaxshi. Qachon boshlay olasiz?"],
      [0, "Я могу начать завтра. Какой график работы?", "ya maGU naCHAT ZAftra. kaKOY GRAfik raBOty?", "Ertaga boshlay olaman. Ish jadvali qanday?"],
      [1, "С понедельника по пятницу.", "s panidYELnika pa PYATnitsu.", "Dushanbadan jumagacha."],
      [0, "Спасибо за собеседование!", "spaSIba za sibisYEdavaniye!", "Suhbat uchun rahmat!"],
      [1, "Пожалуйста. Завтра в восемь утра.", "paJAlusta. ZAftra v VOsim utRA.", "Marhamat. Ertaga ertalab soat sakkizda."]
    ]
  },
  fill: [
    ["Я ___ работу.", "ищу", ["ищу", "ищет", "искать"], "Men ish qidiryapman."],
    ["Какой ___ работы?", "график", ["график", "зарплата", "вакансия"], "Ish jadvali qanday?"],
    ["Какая ___?", "зарплата", ["зарплата", "график", "опыт"], "Oylik qancha?"],
    ["Когда можно ___?", "начать", ["начать", "начал", "начало"], "Qachon boshlasam bo'ladi?"]
  ],
  tip: {
    title: "«Какой/Какая», «есть / нет», o'tgan zamon",
    points: [
      ["«Какой» (erkak), «Какая» (ayol), «Какое» (o'rta) so'zdan keyingi ot jinsiga moslashadi: какой график, какая зарплата.", "Какая зарплата?", "Oylik qancha?"],
      ["«Есть» — bor, «нет» — yo'q. «Нет»dan keyin ot oxiri o'zgaradi: есть опыт → нет опыта.", "У меня нет опыта.", "Tajribam yo'q."],
      ["O'tgan zamon: erkak «-л», ayol «-ла»: «Я работал» / «Я работала», «Я готов» / «Я готова»."]
    ]
  }
};

DAYS[12] = {
  goal: "Ish joyida topshiriqni tushunish, so'rash, tanaffus va kasallik haqida aytish.",
  phrases: [
    ["Что нужно делать?", "shto NUJna DYElat?", "Nima qilish kerak?"],
    ["Я понял. Я не понял.", "ya PONyal. ya ni PONyal.", "Tushundim. Tushunmadim."],
    ["Покажите, как это делать.", "pakaJIte, kak Eta DYElat.", "Buni qanday qilishni ko'rsating."],
    ["Где инструменты?", "gde instruMYENty.", "Asboblar qayerda?"],
    ["Во сколько начинается работа?", "va SKOLka naCHInayetsa raBOta?", "Ish soat nechada boshlanadi?"],
    ["Когда перерыв?", "kagDA piriRYEF?", "Tanaffus qachon?"],
    ["Можно выйти на пять минут?", "MOJna VYti na pyat miNUT?", "Besh daqiqaga chiqsam bo'ladimi?"],
    ["Я заболел. Сегодня не смогу прийти.", "ya zaBOlel. siVODnya ni smaGU priYTI.", "Men kasal bo'lib qoldim. Bugun kela olmayman."],
    ["Когда зарплата?", "kagDA ZARplata?", "Oylik qachon?"],
    ["Всё готово. Что дальше?", "fsyo gaTOva. shto DAL'she?", "Hammasi tayyor. Keyin nima?"]
  ],
  words: [
    ["коллега", "kaLYEga", "hamkasb"],
    ["смена", "SMYEna", "smena"],
    ["инструмент", "instruMYENT", "asbob"],
    ["перерыв", "piriRYEF", "tanaffus"],
    ["выходной", "vyhadNOY", "dam olish kuni"],
    ["склад", "sklat", "ombor"]
  ],
  dialog: {
    scene: "Ishning birinchi kuni, boshliq bilan.",
    roles: ["Siz", "Boshliq"],
    lines: [
      [1, "Доброе утро! Сегодня работаем до шести.", "DObraye UTra! siVODnya raBOtayem da shesTI.", "Xayrli tong! Bugun soat oltigacha ishlaymiz."],
      [0, "Доброе утро! Что нужно делать?", "DObraye UTra! shto NUJna DYElat?", "Xayrli tong! Nima qilish kerak?"],
      [1, "Нужно перенести коробки на склад.", "NUJna piriniSTI kaROPki na sklat.", "Qutilarni omborga ko'chirish kerak."],
      [0, "Я понял. Где склад?", "ya PONyal. gde sklat?", "Tushundim. Ombor qayerda?"],
      [1, "Налево, потом прямо.", "naLYEva, paTOM PRYAma.", "Chapga, keyin to'g'ri."],
      [0, "Хорошо. Когда перерыв?", "xaraSHO. kagDA piriRYEF?", "Yaxshi. Tanaffus qachon?"],
      [1, "В час.", "f chas.", "Soat birda."],
      [0, "Всё готово. Что дальше?", "fsyo gaTOva. shto DAL'she?", "Hammasi tayyor. Keyin nima?"],
      [1, "Хорошо. Спасибо. Завтра в восемь.", "xaraSHO. spaSIba. ZAftra v VOsim.", "Yaxshi. Rahmat. Ertaga soat sakkizda."]
    ]
  },
  fill: [
    ["Я ___.", "понял", ["понял", "понять", "понимать"], "Men tushundim."],
    ["Что нужно ___?", "делать", ["делать", "делаю", "делал"], "Nima qilish kerak?"],
    ["___ перерыв?", "Когда", ["Когда", "Сколько", "Какой"], "Tanaffus qachon?"],
    ["Сегодня не ___ прийти.", "смогу", ["смогу", "смог", "смочь"], "Bugun kela olmayman."]
  ],
  tip: {
    title: "«Нужно» + fe'l, «не смогу»",
    points: [
      ["«Нужно + fe'l (infinitiv)» — «…kerak». Boshliq shunday topshiriq beradi: Нужно перенести. Нужно помочь.", "Нужно работать до шести.", "Soat oltigacha ishlash kerak."],
      ["Kela olmasangiz oldindan ogohlantiring: «Я не смогу прийти» (kela olmayman) yoki «Я заболел» (ayol: «заболела»)."],
      ["Tushunmasangiz — «Я не понял, покажите, пожалуйста». Taxmin qilib ishlashdan ko'ra so'rash yaxshi."]
    ]
  }
};

DAYS[13] = {
  goal: "Shifokorga og'riqni, haroratni va allergiyani tushuntirish.",
  phrases: [
    ["Мне плохо.", "mne PLOxa.", "Menga yomon (o'zimni yomon his qilyapman)."],
    ["У меня болит голова.", "u minYA baLIT galaVA.", "Boshim og'riyapti."],
    ["У меня болит живот.", "u minYA baLIT jiVOT.", "Qornim og'riyapti."],
    ["У меня болит горло.", "u minYA baLIT GORla.", "Tomog'im og'riyapti."],
    ["У меня температура.", "u minYA timpiraTUra.", "Haroratim bor."],
    ["У меня кашель.", "u minYA KAshil.", "Yo'talim bor."],
    ["Болит уже два дня.", "baLIT uJE dva dnya.", "Ikki kundan beri og'riyapti."],
    ["У меня аллергия.", "u minYA allirGIya.", "Menda allergiya bor."],
    ["Мне нужен врач.", "mne NUjen vrach.", "Menga shifokor kerak."],
    ["Это серьёзно?", "Eta siRYOZna?", "Bu jiddiymi?"]
  ],
  words: [
    ["врач", "vrach", "shifokor"],
    ["больница", "balNItsa", "kasalxona"],
    ["лекарство", "likARstva", "dori"],
    ["рецепт", "riTSEPT", "retsept"],
    ["приём", "priYOM", "qabul"],
    ["боль", "bol", "og'riq"]
  ],
  dialog: {
    scene: "Poliklinikada shifokor qabulida.",
    roles: ["Siz", "Shifokor"],
    lines: [
      [1, "Здравствуйте! Что у вас болит?", "ZDRAstvuyte! shto u VAS baLIT?", "Assalomu alaykum! Nimangiz og'riyapti?"],
      [0, "Здравствуйте! У меня болит горло и голова.", "ZDRAstvuyte! u minYA baLIT GORla i galaVA.", "Assalomu alaykum! Tomog'im va boshim og'riyapti."],
      [1, "Какая у вас температура?", "kaKAya u VAS timpiraTUra?", "Haroratingiz qancha?"],
      [0, "У меня температура тридцать восемь.", "u minYA timpiraTUra TRItsat VOsim.", "Haroratim o'ttiz sakkiz."],
      [1, "Давно болит?", "davNO baLIT?", "Anchadan beri og'riyaptimi?"],
      [0, "Уже два дня.", "uJE dva dnya.", "Ikki kundan beri."],
      [1, "У вас есть аллергия?", "u VAS yest allirGIya?", "Sizda allergiya bormi?"],
      [0, "Нет, аллергии нет.", "nyet, allirGII nyet.", "Yo'q, allergiya yo'q."],
      [1, "Вот рецепт. Принимайте лекарство три раза в день.", "vot riTSEPT. priniMAyte likARstva tri RAza v den.", "Mana retsept. Dorini kuniga uch marta iching."],
      [0, "Спасибо, доктор!", "spaSIba, DOKtar!", "Rahmat, doktor!"]
    ]
  },
  fill: [
    ["У меня ___ голова.", "болит", ["болит", "болят", "боль"], "Boshim og'riyapti."],
    ["У меня ___.", "температура", ["температура", "температуру", "температуры"], "Haroratim bor."],
    ["Мне нужен ___.", "врач", ["врач", "врача", "врачу"], "Menga shifokor kerak."],
    ["Болит ___ два дня.", "уже", ["уже", "там", "очень"], "Ikki kundan beri og'riyapti."]
  ],
  tip: {
    title: "«У меня болит…» va tana a'zolari",
    points: [
      ["Og'riq: «У меня болит» + bitta a'zo; ko'p bo'lsa «болят»: У меня болят зубы (tishlarim), болят ноги (oyoqlarim).", "У меня болят зубы.", "Tishlarim og'riyapti."],
      ["Kerakli so'zlar: голова (bosh), горло (tomoq), живот (qorin), спина (bel/orqa), зуб (tish), рука (qo'l), нога (oyoq)."],
      ["Davomiylik: «уже два дня», «уже неделю». Shifokor «давно болит?» deb so'raydi."]
    ]
  }
};

DAYS[14] = {
  goal: "Dorixonada dori so'rash, qabul qilish tartibini va narxni aniqlash.",
  phrases: [
    ["Дайте, пожалуйста, таблетки от головной боли.", "DAyte, paJAlusta, tabLYETki at galavNOY BOli.", "Iltimos, bosh og'rig'iga tabletka bering."],
    ["У вас есть что-нибудь от температуры?", "u VAS yest shto-niBUT at timpiraTUry?", "Sizda haroratga biror dori bormi?"],
    ["Это по рецепту?", "Eta pa riTSEPtu?", "Bu retsept bilan beriladimi?"],
    ["Как принимать?", "kak priniMAT?", "Qanday ichish kerak?"],
    ["Три раза в день после еды.", "tri RAza v den POsli yiDY.", "Kuniga uch marta, ovqatdan keyin."],
    ["Сколько таблеток в день?", "SKOLka tabLYEtak v den?", "Kuniga nechta tabletka?"],
    ["Есть что-нибудь дешевле?", "yest shto-niBUT DYEshivlye?", "Arzonroq biror narsa bormi?"],
    ["Мне нужен пластырь.", "mne NUjen PLAstir.", "Menga plastir kerak."],
    ["Это можно детям?", "Eta MOJna DYEtim?", "Buni bolalarga berish mumkinmi?"],
    ["Мне плохо. Дайте воды, пожалуйста.", "mne PLOxa. DAyte vaDY, paJAlusta.", "Menga yomon. Iltimos, suv bering."]
  ],
  words: [
    ["аптека", "apTYEka", "dorixona"],
    ["таблетка", "tabLYETka", "tabletka"],
    ["пластырь", "PLAstir", "plastir"],
    ["бинт", "bint", "bint"],
    ["капли", "KAPli", "tomchi dori"],
    ["витамины", "vitaMIny", "vitaminlar"]
  ],
  dialog: {
    scene: "Dorixonada haroratga dori olasiz.",
    roles: ["Siz", "Dorixonachi"],
    lines: [
      [0, "Здравствуйте! У вас есть что-нибудь от температуры?", "ZDRAstvuyte! u VAS yest shto-niBUT at timpiraTUry?", "Assalomu alaykum! Sizda haroratga biror dori bormi?"],
      [1, "Да. Это таблетки, вот они.", "da. Eta tabLYETki, vot aNI.", "Ha. Bu tabletkalar, mana."],
      [0, "Это по рецепту?", "Eta pa riTSEPtu?", "Bu retsept bilan beriladimi?"],
      [1, "Нет, без рецепта.", "nyet, byez riTSEPta.", "Yo'q, retseptsiz."],
      [0, "Как принимать?", "kak priniMAT?", "Qanday ichish kerak?"],
      [1, "Три раза в день после еды.", "tri RAza v den POsli yiDY.", "Kuniga uch marta, ovqatdan keyin."],
      [0, "Сколько это стоит?", "SKOLka Eta STOit?", "Bu qancha turadi?"],
      [1, "Двести пятьдесят рублей.", "DVYEsti pidisYAT rubLYEY.", "Ikki yuz ellik rubl."],
      [0, "Есть что-нибудь дешевле?", "yest shto-niBUT DYEshivlye?", "Arzonroq biror narsa bormi?"],
      [1, "Да, вот аналог. Сто восемьдесят рублей.", "da, vot anaLOK. sto VOsimdisyat rubLYEY.", "Ha, mana analogi. Bir yuz sakson rubl."],
      [0, "Хорошо, я возьму это. Спасибо!", "xaraSHO, ya vazMU Eta. spaSIba!", "Yaxshi, buni olaman. Rahmat!"]
    ]
  },
  fill: [
    ["Это ___ рецепту?", "по", ["по", "на", "из"], "Bu retsept bilan beriladimi?"],
    ["Три раза ___ день.", "в", ["в", "на", "у"], "Kuniga uch marta."],
    ["Как ___?", "принимать", ["принимать", "принимаю", "принял"], "Qanday ichish kerak?"],
    ["Есть что-нибудь ___?", "дешевле", ["дешевле", "пешком", "спасибо"], "Arzonroq biror narsa bormi?"]
  ],
  tip: {
    title: "«от», «после», «что-нибудь»",
    points: [
      ["«от + nima» — «…ga qarshi/…dan»: таблетки от головной боли, от температуры, от кашля.", "Таблетки от кашля.", "Yo'tal uchun tabletka."],
      ["«после еды» (ovqatdan keyin), «до еды» (oldin), «перед сном» (uxlashdan oldin) — qabul vaqti.", "Два раза в день после еды.", "Kuniga ikki marta ovqatdan keyin."],
      ["«что-нибудь» — «biror narsa». «Дешевле» — «arzonroq» (solishtirish): дорого → дороже, дёшево → дешевле."]
    ]
  }
};

DAYS[15] = {
  goal: "11–14-kunlarni takrorlash: ish, ish joyi, shifokor, dorixona.",
  phrases: [
    ["Я ищу работу. У меня есть опыт.", "ya iSHU raBOtu. u minYA yest Opit.", "Men ish qidiryapman. Menda tajriba bor."],
    ["Какая зарплата? Какой график работы?", "kaKAya ZARplata? kaKOY GRAfik raBOty?", "Oylik qancha? Ish jadvali qanday?"],
    ["Когда можно начать? Я готов работать.", "kagDA MOJna naCHAT? ya gaTOF raBOtat.", "Qachon boshlasam bo'ladi? Men ishlashga tayyorman."],
    ["Что нужно делать? Я не понял. Покажите, пожалуйста.", "shto NUJna DYElat? ya ni PONyal. pakaJIte, paJAlusta.", "Nima qilish kerak? Tushunmadim. Iltimos, ko'rsating."],
    ["Мне плохо. У меня болит голова и температура.", "mne PLOxa. u minYA baLIT galaVA i timpiraTUra.", "Menga yomon. Boshim og'riyapti va haroratim bor."],
    ["Мне нужен врач. Болит уже два дня.", "mne NUjen vrach. baLIT uJE dva dnya.", "Menga shifokor kerak. Ikki kundan beri og'riyapti."],
    ["У вас есть что-нибудь от головной боли?", "u VAS yest shto-niBUT at galavNOY BOli?", "Sizda bosh og'rig'iga biror dori bormi?"],
    ["Как принимать? Три раза в день после еды.", "kak priniMAT? tri RAza v den POsli yiDY.", "Qanday ichish kerak? Kuniga uch marta ovqatdan keyin."]
  ],
  words: [],
  dialog: {
    scene: "Ish joyida o'zingizni yomon his qilasiz (11–14-kunlar).",
    roles: ["Siz", "Boshliq"],
    lines: [
      [1, "Что случилось?", "shto sluCHIlas?", "Nima bo'ldi?"],
      [0, "Мне плохо. У меня болит голова и температура.", "mne PLOxa. u minYA baLIT galaVA i timpiraTUra.", "Menga yomon. Boshim og'riyapti va haroratim bor."],
      [1, "Идите домой. Вам нужен врач.", "iDIte daMOY. vam NUjen vrach.", "Uyga boring. Sizga shifokor kerak."],
      [0, "Спасибо. Сегодня не смогу работать.", "spaSIba. siVODnya ni smaGU raBOtat.", "Rahmat. Bugun ishlay olmayman."],
      [1, "Ничего страшного. Выздоравливайте!", "nichiVO straSHnava. vyzdaraVLIvaytye!", "Hechqisi yo'q. Tezroq tuzaling!"],
      [0, "Извините, где аптека?", "izviNIte, gde apTYEka?", "Kechirasiz, dorixona qayerda?"],
      [1, "Направо, за углом.", "naPRAva, za ugLOM.", "O'ngda, burchak ortida."],
      [0, "Спасибо! До свидания!", "spaSIba! da sviDAniya!", "Rahmat! Xayr!"]
    ]
  },
  fill: [
    ["Я ___ работу.", "ищу", ["ищу", "ищет", "искать"], "Men ish qidiryapman."],
    ["Три ___ в день.", "раза", ["раза", "раз", "разов"], "Kuniga uch marta."],
    ["Какая ___?", "зарплата", ["зарплата", "график", "врач"], "Oylik qancha?"],
    ["Мне нужен ___.", "врач", ["врач", "врача", "врачу"], "Menga shifokor kerak."],
    ["Что нужно ___?", "делать", ["делать", "делаю", "делал"], "Nima qilish kerak?"]
  ],
  tip: {
    title: "Takrorlash: 3 ta qolip",
    points: [
      ["«У меня есть / нет / болит» — o'zingiz haqingizda eng ko'p kerak bo'ladigan qolip.", "У меня нет опыта. У меня болит голова.", "Tajribam yo'q. Boshim og'riyapti."],
      ["«Мне нужен / нужна» — kerakli narsa jinsiga moslashadi: нужен врач, нужна работа."],
      ["«Когда можно…?», «Что нужно делать?» — ishda va dorixonada ham ishlaydi."]
    ]
  }
};
