window.DAYS = window.DAYS || {};

DAYS[16] = {
  goal: "Bankda hisob ochish, pul o'tkazish, ayirboshlash va kartadagi muammolar.",
  phrases: [
    ["Я хочу открыть счёт.", "ya xaCHU atkRYT shot.", "Men hisob ochmoqchiman."],
    ["Какие документы нужны?", "kaKIye dakuMYENty NUJny?", "Qanday hujjatlar kerak?"],
    ["Мне нужна банковская карта.", "mne nuJNA banKOFskaya KARta.", "Menga bank kartasi kerak."],
    ["Я хочу перевести деньги в Узбекистан.", "ya xaCHU piriviSTI DYENgi v uzbikisTAN.", "Men O'zbekistonga pul o'tkazmoqchiman."],
    ["Какая комиссия?", "kaKAya kaMIssiya?", "Komissiya qancha?"],
    ["Какой курс доллара?", "kaKOY kurs DOlara?", "Dollar kursi qancha?"],
    ["Я хочу обменять деньги.", "ya xaCHU abmiNYAT DYENgi.", "Men pul ayirboshlamoqchiman."],
    ["Где банкомат?", "gde bankaMAT?", "Bankomat qayerda?"],
    ["Карта не работает.", "KARta ni raBOtayet.", "Karta ishlamayapti."],
    ["Можно снять наличные?", "MOJna snyat naLICHnye?", "Naqd pul yechsam bo'ladimi?"]
  ],
  words: [
    ["банк", "bank", "bank"],
    ["счёт", "shot", "hisob"],
    ["карта", "KARta", "karta"],
    ["деньги", "DYENgi", "pul"],
    ["наличные", "naLICHnye", "naqd pul"],
    ["перевод", "piriVOT", "o'tkazma"]
  ],
  dialog: {
    scene: "Bankda hisob ochasiz.",
    roles: ["Siz", "Bank xodimi"],
    lines: [
      [0, "Здравствуйте! Я хочу открыть счёт.", "ZDRAstvuyte! ya xaCHU atkRYT shot.", "Assalomu alaykum! Men hisob ochmoqchiman."],
      [1, "Здравствуйте! Дайте, пожалуйста, паспорт.", "ZDRAstvuyte! DAyte, paJAlusta, PASpart.", "Assalomu alaykum! Iltimos, pasportni bering."],
      [0, "Вот паспорт. Какие ещё документы нужны?", "vot PASpart. kaKIye yeSHO dakuMYENty NUJny?", "Mana pasport. Yana qanday hujjatlar kerak?"],
      [1, "Нужна регистрация.", "nuJNA rigistRAtsiya.", "Ro'yxatga olish (registratsiya) kerak."],
      [0, "Мне нужна банковская карта.", "mne nuJNA banKOFskaya KARta.", "Menga bank kartasi kerak."],
      [1, "Хорошо. Заполните анкету.", "xaraSHO. zaPOLnite anKEtu.", "Yaxshi. Anketani to'ldiring."],
      [0, "Я хочу перевести деньги в Узбекистан. Какая комиссия?", "ya xaCHU piriviSTI DYENgi v uzbikisTAN. kaKAya kaMIssiya?", "Men O'zbekistonga pul o'tkazmoqchiman. Komissiya qancha?"],
      [1, "Один процент.", "aDIN praTSENT.", "Bir foiz."]
    ]
  },
  fill: [
    ["Я хочу ___ счёт.", "открыть", ["открыть", "открыл", "открыто"], "Men hisob ochmoqchiman."],
    ["Какие ___ нужны?", "документы", ["документы", "документ", "документа"], "Qanday hujjatlar kerak?"],
    ["Карта не ___.", "работает", ["работает", "работать", "работа"], "Karta ishlamayapti."],
    ["Где ___?", "банкомат", ["банкомат", "банкомата", "банкомату"], "Bankomat qayerda?"]
  ],
  tip: {
    title: "«Я хочу» + fe'l, «Какие…»",
    points: [
      ["Bankdagi deyarli hamma narsa «Я хочу + fe'l»: открыть (ochish), перевести (o'tkazish), обменять (ayirboshlash), снять (yechish).", "Я хочу снять деньги.", "Men pul yechmoqchiman."],
      ["Ko'plik savol: «Какие документы нужны?» (nechta hujjat bo'lsa ham). «Какая комиссия?» — bitta (ayol jinsi)."],
      ["«не работает» — «ishlamayapti»: Карта не работает. Банкомат не работает."]
    ]
  }
};

DAYS[17] = {
  goal: "Hujjatlar bilan ishlash: patent, registratsiya, navbat va qabulga yozilish.",
  phrases: [
    ["Вот мой паспорт.", "vot moy PASpart.", "Mana pasportim."],
    ["Мне нужна регистрация.", "mne nuJNA rigistRAtsiya.", "Menga ro'yxatga olish (registratsiya) kerak."],
    ["Мне нужен патент на работу.", "mne NUjen paTYENT na raBOtu.", "Menga ishlash patenti kerak."],
    ["Какие документы нужно подать?", "kaKIye dakuMYENty NUJna paDAT?", "Qanday hujjatlar topshirish kerak?"],
    ["Где можно сдать документы?", "gde MOJna sdat dakuMYENty?", "Hujjatlarni qayerga topshirsa bo'ladi?"],
    ["Когда будет готово?", "kagDA BUdit gaTOva?", "Qachon tayyor bo'ladi?"],
    ["Сколько нужно заплатить?", "SKOLka NUJna zaplaTIT?", "Qancha to'lash kerak?"],
    ["Сколько дней я могу здесь находиться?", "SKOLka dnyey ya maGU zdyes naHOditsa?", "Bu yerda necha kun bo'la olaman?"],
    ["Где миграционный центр?", "gde migraTSIonny tsentr?", "Migratsiya markazi qayerda?"],
    ["Можно записаться на приём?", "MOJna zapiSAtsa na priYOM?", "Qabulga yozilsam bo'ladimi?"]
  ],
  words: [
    ["паспорт", "PASpart", "pasport"],
    ["патент", "paTYENT", "patent"],
    ["виза", "VIza", "viza"],
    ["очередь", "Ochirit", "navbat"],
    ["справка", "SPRAFka", "ma'lumotnoma"],
    ["анкета", "anKEta", "anketa"]
  ],
  dialog: {
    scene: "Migratsiya markazida patent uchun hujjat topshirasiz.",
    roles: ["Siz", "Xodim"],
    lines: [
      [0, "Здравствуйте! Вот мой паспорт. Мне нужен патент на работу.", "ZDRAstvuyte! vot moy PASpart. mne NUjen paTYENT na raBOtu.", "Assalomu alaykum! Mana pasportim. Menga ishlash patenti kerak."],
      [1, "Здравствуйте! Какие документы у вас есть?", "ZDRAstvuyte! kaKIye dakuMYENty u VAS yest?", "Assalomu alaykum! Qanday hujjatlaringiz bor?"],
      [0, "Паспорт, миграционная карта и регистрация.", "PASpart, migraTSIonnaya KARta i rigistRAtsiya.", "Pasport, migratsiya kartasi va registratsiya."],
      [1, "Нужна ещё справка из поликлиники.", "nuJNA yeSHO SPRAFka iz paliKLInike.", "Yana poliklinikadan ma'lumotnoma kerak."],
      [0, "Где можно получить справку?", "gde MOJna paluCHIT SPRAFku?", "Ma'lumotnomani qayerdan olsa bo'ladi?"],
      [1, "В поликлинике.", "f paliKLInike.", "Poliklinikada."],
      [0, "Можно записаться на приём?", "MOJna zapiSAtsa na priYOM?", "Qabulga yozilsam bo'ladimi?"],
      [1, "Да. Приходите завтра в десять утра.", "da. priHOdite ZAftra v DYEsit utRA.", "Ha. Ertaga ertalab soat o'nda keling."],
      [0, "Спасибо!", "spaSIba!", "Rahmat!"]
    ]
  },
  fill: [
    ["Вот мой ___.", "паспорт", ["паспорт", "паспорта", "паспорту"], "Mana pasportim."],
    ["Мне нужна ___.", "регистрация", ["регистрация", "регистрацию", "регистрации"], "Menga registratsiya kerak."],
    ["Где можно ___ документы?", "сдать", ["сдать", "сдал", "сдача"], "Hujjatlarni qayerga topshirsa bo'ladi?"],
    ["Можно ___ на приём?", "записаться", ["записаться", "записал", "запись"], "Qabulga yozilsam bo'ladimi?"]
  ],
  tip: {
    title: "Rasmiy so'zlar va «-ся»",
    points: [
      ["«-ся» bilan tugaydigan fe'llar «o'zi» ma'nosida: записаться (yozilmoq), находиться (bo'lmoq/joylashmoq).", "Где находится центр?", "Markaz qayerda?"],
      ["Hujjat so'zlari jinsga qarab: нужен паспорт, нужна регистрация, нужна справка, нужен патент."],
      ["⚠️ Qoidalar va narxlar o'zgarib turadi. Muddat va hujjatlar ro'yxatini doim rasmiy sayt yoki migratsiya markazi xodimidan aniqlang, hujjat nusxalarini saqlang."]
    ]
  }
};

DAYS[18] = {
  goal: "SIM-karta olish, tarif tanlash, hisobni to'ldirish va telefonda gaplashish.",
  phrases: [
    ["Мне нужна SIM-карта.", "mne nuJNA sim-KARta.", "Menga SIM-karta kerak."],
    ["Какой тариф самый дешёвый?", "kaKOY taRIF SAmiy diSHOviy?", "Eng arzon tarif qaysi?"],
    ["Сколько стоит в месяц?", "SKOLka STOit v MYEsyats?", "Oyiga qancha turadi?"],
    ["Мне нужен интернет.", "mne NUjen intirNET.", "Menga internet kerak."],
    ["Как пополнить баланс?", "kak papalNIT balANS?", "Hisobni qanday to'ldiraman?"],
    ["Положите, пожалуйста, деньги на телефон.", "palaJIte, paJAlusta, DYENgi na tiliFON.", "Iltimos, telefonimga pul tushiring."],
    ["Мой номер телефона…", "moy NOmir tiliFOna…", "Mening telefon raqamim…"],
    ["Позвоните мне, пожалуйста.", "pazvaNIte mne, paJAlusta.", "Iltimos, menga qo'ng'iroq qiling."],
    ["Я вас не слышу. Говорите громче.", "ya vas ni SLIshu. gavaRIte GROMche.", "Sizni eshitmayapman. Balandroq gapiring."],
    ["Подождите, я перезвоню.", "padaJDIte, ya pirizvaNYU.", "Kuting, men qayta qo'ng'iroq qilaman."]
  ],
  words: [
    ["телефон", "tiliFON", "telefon"],
    ["баланс", "baLANS", "hisob (balans)"],
    ["тариф", "taRIF", "tarif"],
    ["звонок", "zvaNOK", "qo'ng'iroq"],
    ["сообщение", "saabSHEniye", "xabar"],
    ["связь", "svyaz", "aloqa"]
  ],
  dialog: {
    scene: "Aloqa salonida SIM-karta olasiz.",
    roles: ["Siz", "Xodim"],
    lines: [
      [0, "Здравствуйте! Мне нужна SIM-карта.", "ZDRAstvuyte! mne nuJNA sim-KARta.", "Assalomu alaykum! Menga SIM-karta kerak."],
      [1, "Здравствуйте! Дайте, пожалуйста, паспорт.", "ZDRAstvuyte! DAyte, paJAlusta, PASpart.", "Assalomu alaykum! Iltimos, pasportni bering."],
      [0, "Вот паспорт. Какой тариф самый дешёвый?", "vot PASpart. kaKOY taRIF SAmiy diSHOviy?", "Mana pasport. Eng arzon tarif qaysi?"],
      [1, "Триста рублей в месяц: интернет и звонки.", "TRIsta rubLYEY v MYEsyats: intirNET i zvanKI.", "Oyiga 300 rubl: internet va qo'ng'iroqlar."],
      [0, "Хорошо. Как пополнить баланс?", "xaraSHO. kak papalNIT balANS?", "Yaxshi. Hisobni qanday to'ldiraman?"],
      [1, "В приложении или в терминале.", "f priLOjenii ili f tirmiNAle.", "Ilovada yoki terminalda."],
      [0, "Понятно. Спасибо!", "paNYATna. spaSIba!", "Tushunarli. Rahmat!"],
      [1, "Готово. Вот ваш номер.", "gaTOva. vot vash NOmir.", "Tayyor. Mana raqamingiz."]
    ]
  },
  fill: [
    ["Какой тариф самый ___?", "дешёвый", ["дешёвый", "дешёвая", "дешёвое"], "Eng arzon tarif qaysi?"],
    ["Мне нужен ___.", "интернет", ["интернет", "интернета", "интернету"], "Menga internet kerak."],
    ["Как ___ баланс?", "пополнить", ["пополнить", "пополнил", "пополнение"], "Hisobni qanday to'ldiraman?"],
    ["Позвоните ___, пожалуйста.", "мне", ["мне", "меня", "я"], "Iltimos, menga qo'ng'iroq qiling."]
  ],
  tip: {
    title: "«самый», «громче», «мне»",
    points: [
      ["«самый» + sifat = eng …: самый дешёвый (eng arzon), самый быстрый (eng tez). Sifat ot jinsiga moslashadi.", "Самый дешёвый тариф.", "Eng arzon tarif."],
      ["Qiyoslash «-ее/-ше»: громче (balandroq), медленнее (sekinroq), дешевле (arzonroq).", "Говорите медленнее, пожалуйста.", "Iltimos, sekinroq gapiring."],
      ["«Позвоните мне» — «menga». «Меня» emas, «мне» ishlatiladi: Позвоните мне. Напишите мне."]
    ]
  }
};

DAYS[19] = {
  goal: "Favqulodda holatda yordam so'rash: politsiya, tez yordam, yo'qotilgan narsalar.",
  phrases: [
    ["Помогите!", "paMOgite!", "Yordam bering!"],
    ["Мне нужна помощь.", "mne nuJNA POmash.", "Menga yordam kerak."],
    ["Вызовите скорую помощь!", "VYzavite SKOruyu POmash!", "Tez yordam chaqiring!"],
    ["Вызовите полицию!", "VYzavite paLItsiyu!", "Politsiya chaqiring!"],
    ["У меня украли телефон.", "u minYA ukRAli tiliFON.", "Telefonimni o'g'irlashdi."],
    ["Я потерял документы.", "ya patiRYAL dakuMYENty.", "Men hujjatlarimni yo'qotdim."],
    ["Я не знаю, где я.", "ya ni ZNAyu, gde ya.", "Men qayerdaligimni bilmayman."],
    ["Здесь есть переводчик?", "zdyes yest pirivOTchik?", "Bu yerda tarjimon bormi?"],
    ["Позвоните, пожалуйста, моему другу.", "pazvaNIte, paJAlusta, mayiMU DRUgu.", "Iltimos, do'stimga qo'ng'iroq qiling."],
    ["Спасибо за помощь!", "spaSIba za POmashi!", "Yordam uchun rahmat!"]
  ],
  words: [
    ["полиция", "paLItsiya", "politsiya"],
    ["вор", "vor", "o'g'ri"],
    ["пожар", "paJAR", "yong'in"],
    ["опасно", "aPASna", "xavfli"],
    ["потерял", "patiRYAL", "yo'qotdim (erkak)"],
    ["переводчик", "pirivOTchik", "tarjimon"]
  ],
  dialog: {
    scene: "Ko'chada telefonni o'g'irlashdi.",
    roles: ["Siz", "Yo'lovchi"],
    lines: [
      [0, "Извините, мне нужна помощь!", "izviNIte, mne nuJNA POmash!", "Kechirasiz, menga yordam kerak!"],
      [1, "Что случилось?", "shto sluCHIlas?", "Nima bo'ldi?"],
      [0, "У меня украли телефон!", "u minYA ukRAli tiliFON!", "Telefonimni o'g'irlashdi!"],
      [1, "Позвоните в полицию: сто двенадцать.", "pazvaNIte v paLItsiyu: sto dviNAtsat.", "Politsiyaga qo'ng'iroq qiling: 112."],
      [0, "Вы можете позвонить? Я плохо говорю по-русски.", "vy MOjite pazvaNIT? ya PLOxa gavaRYU pa-RUSski.", "Siz qo'ng'iroq qila olasizmi? Men ruscha yomon gapiraman."],
      [1, "Конечно. Не волнуйтесь.", "kaNYEshna. ni valNUitis.", "Albatta. Xavotir olmang."],
      [0, "Спасибо за помощь!", "spaSIba za POmashi!", "Yordam uchun rahmat!"]
    ]
  },
  fill: [
    ["___ мне, пожалуйста.", "Помогите", ["Помогите", "Помощь", "Помогу"], "Menga yordam bering."],
    ["У меня ___ телефон.", "украли", ["украли", "украл", "красть"], "Telefonimni o'g'irlashdi."],
    ["Вызовите ___!", "полицию", ["полицию", "полиция", "полиции"], "Politsiya chaqiring!"],
    ["Спасибо за ___!", "помощь", ["помощь", "помогу", "помог"], "Yordam uchun rahmat!"]
  ],
  tip: {
    title: "Favqulodda so'zlar",
    points: [
      ["«Вызовите» + nima: «Вызовите полицию», «Вызовите скорую (помощь)». Ot oxiri «-ю» bo'ladi.", "Вызовите скорую!", "Tez yordam chaqiring!"],
      ["«У меня украли…» — «…ni o'g'irlashdi» (kim ekanligi noma'lum, fe'l ko'plikda): У меня украли деньги / сумку / телефон."],
      ["📞 Rossiyada yagona favqulodda raqam — 112 (mobil telefondan ham). Aniq raqamlarni ketishdan oldin rasmiy manbadan tekshirib qo'ying."]
    ]
  }
};

DAYS[20] = {
  goal: "16–19-kunlarni takrorlash: bank, hujjatlar, telefon, yordam so'rash.",
  phrases: [
    ["Я хочу открыть счёт. Какие документы нужны?", "ya xaCHU atkRYT shot. kaKIye dakuMYENty NUJny?", "Men hisob ochmoqchiman. Qanday hujjatlar kerak?"],
    ["Я хочу перевести деньги. Какая комиссия?", "ya xaCHU piriviSTI DYENgi. kaKAya kaMIssiya?", "Men pul o'tkazmoqchiman. Komissiya qancha?"],
    ["Карта не работает. Где банкомат?", "KARta ni raBOtayet. gde bankaMAT?", "Karta ishlamayapti. Bankomat qayerda?"],
    ["Мне нужен патент. Можно записаться на приём?", "mne NUjen paTYENT. MOJna zapiSAtsa na priYOM?", "Menga patent kerak. Qabulga yozilsam bo'ladimi?"],
    ["Вот мой паспорт. Где можно сдать документы?", "vot moy PASpart. gde MOJna sdat dakuMYENty?", "Mana pasportim. Hujjatlarni qayerga topshirsa bo'ladi?"],
    ["Мне нужна SIM-карта. Какой тариф самый дешёвый?", "mne nuJNA sim-KARta. kaKOY taRIF SAmiy diSHOviy?", "Menga SIM-karta kerak. Eng arzon tarif qaysi?"],
    ["Как пополнить баланс? Позвоните мне, пожалуйста.", "kak papalNIT balANS? pazvaNIte mne, paJAlusta.", "Hisobni qanday to'ldiraman? Iltimos, menga qo'ng'iroq qiling."],
    ["Мне нужна помощь! У меня украли телефон.", "mne nuJNA POmash! u minYA ukRAli tiliFON.", "Menga yordam kerak! Telefonimni o'g'irlashdi."]
  ],
  words: [],
  dialog: {
    scene: "Telefon va kartangiz o'g'irlandi, bankka kelasiz (16–19-kunlar).",
    roles: ["Siz", "Bank xodimi"],
    lines: [
      [0, "Здравствуйте! Мне нужна помощь. У меня украли телефон и карту.", "ZDRAstvuyte! mne nuJNA POmash. u minYA ukRAli tiliFON i KARtu.", "Assalomu alaykum! Menga yordam kerak. Telefon va kartamni o'g'irlashdi."],
      [1, "Здравствуйте! Не волнуйтесь. Дайте, пожалуйста, паспорт.", "ZDRAstvuyte! ni valNUitis. DAyte, paJAlusta, PASpart.", "Assalomu alaykum! Xavotir olmang. Iltimos, pasportni bering."],
      [0, "Вот мой паспорт.", "vot moy PASpart.", "Mana pasportim."],
      [1, "Мы заблокируем карту. Вам нужна новая карта?", "my zablaKIruyem KARtu. vam nuJNA NOvaya KARta?", "Kartani bloklaymiz. Sizga yangi karta kerakmi?"],
      [0, "Да, мне нужна новая карта. Сколько стоит?", "da, mne nuJNA NOvaya KARta. SKOLka STOit?", "Ha, menga yangi karta kerak. Qancha turadi?"],
      [1, "Это бесплатно.", "Eta bisPLATna.", "Bu bepul."],
      [0, "Спасибо большое!", "spaSIba balSHOye!", "Katta rahmat!"]
    ]
  },
  fill: [
    ["Я хочу ___ счёт.", "открыть", ["открыть", "открыл", "открыто"], "Men hisob ochmoqchiman."],
    ["У меня ___ телефон.", "украли", ["украли", "украл", "красть"], "Telefonimni o'g'irlashdi."],
    ["Какая ___?", "комиссия", ["комиссия", "документы", "паспорт"], "Komissiya qancha?"],
    ["Карта не ___.", "работает", ["работает", "работать", "работа"], "Karta ishlamayapti."],
    ["Позвоните ___, пожалуйста.", "мне", ["мне", "меня", "я"], "Iltimos, menga qo'ng'iroq qiling."]
  ],
  tip: {
    title: "Takrorlash: 3 ta qolip",
    points: [
      ["«Я хочу + fe'l»: открыть, перевести, снять, обменять — bankdagi hamma ish."],
      ["«Какой / Какая / Какие + ot?» — savol so'zi otga moslashadi: какой тариф, какая комиссия, какие документы."],
      ["Iltimos «-ите» bilan: Дайте, Позвоните, Вызовите, Покажите. Oxirida «пожалуйста»."]
    ]
  }
};
