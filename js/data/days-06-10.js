window.DAYS = window.DAYS || {};

DAYS[6] = {
  goal: "Avtobus, metro va taksida yurish: qayerga, necha pul, qayerda tushish.",
  phrases: [
    ["Где остановка автобуса?", "gde astaNOFka afTObusa?", "Avtobus bekati qayerda?"],
    ["Какой автобус идёт до центра?", "kaKOY afTObus iDYOT da TSENtra?", "Qaysi avtobus markazgacha boradi?"],
    ["Сколько стоит билет?", "SKOLka STOit biLYET?", "Chipta qancha turadi?"],
    ["Остановите здесь, пожалуйста.", "astanaVIte zdyes, paJAlusta.", "Iltimos, shu yerda to'xtating."],
    ["Мне нужно в аэропорт.", "mne NUJna v aeraPORT.", "Menga aeroportga kerak."],
    ["Сколько стоит до вокзала?", "SKOLka STOit da vagZAla?", "Vokzalgacha qancha turadi?"],
    ["Включите счётчик, пожалуйста.", "fklyuCHIte SHOTchik, paJAlusta.", "Iltimos, schyotchikni yoqing."],
    ["Какая следующая остановка?", "kaKAya SLYEdushaya astaNOFka?", "Keyingi bekat qaysi?"],
    ["Вы выходите?", "vy vyHOdite?", "Tushasizmi?"],
    ["Я выхожу на следующей.", "ya vyhaJU na SLYEdushey.", "Men keyingisida tushaman."]
  ],
  words: [
    ["автобус", "afTObus", "avtobus"],
    ["метро", "mitRO", "metro"],
    ["такси", "takSI", "taksi"],
    ["билет", "biLYET", "chipta"],
    ["остановка", "astaNOFka", "bekat"],
    ["вокзал", "vagZAL", "vokzal"]
  ],
  dialog: {
    scene: "Taksida vokzalga borasiz.",
    roles: ["Siz", "Taksichi"],
    lines: [
      [0, "Здравствуйте! Мне нужно на вокзал.", "ZDRAstvuyte! mne NUJna na vagZAL.", "Assalomu alaykum! Menga vokzalga kerak."],
      [1, "Садитесь.", "saDItis.", "O'tiring."],
      [0, "Сколько стоит до вокзала?", "SKOLka STOit da vagZAla?", "Vokzalgacha qancha turadi?"],
      [1, "Примерно триста рублей.", "priMYERna TRIsta rubLYEY.", "Taxminan 300 rubl."],
      [0, "Хорошо. Остановите здесь, пожалуйста.", "xaraSHO. astanaVIte zdyes, paJAlusta.", "Yaxshi. Iltimos, shu yerda to'xtating."],
      [1, "Приехали! С вас триста рублей.", "priYEhali! s VAS TRIsta rubLYEY.", "Yetib keldik! Sizdan 300 rubl."]
    ]
  },
  fill: [
    ["Мне нужно ___ аэропорт.", "в", ["в", "на", "из"], "Menga aeroportga kerak."],
    ["___ остановка автобуса?", "Где", ["Где", "Что", "Кто"], "Avtobus bekati qayerda?"],
    ["Остановите ___, пожалуйста.", "здесь", ["здесь", "там", "потом"], "Iltimos, shu yerda to'xtating."],
    ["Какой автобус идёт ___ центра?", "до", ["до", "в", "на"], "Qaysi avtobus markazgacha boradi?"]
  ],
  tip: {
    title: "«в» va «на», «до»",
    points: [
      ["Yo'nalish: «в» + yopiq joy (в аэропорт, в банк, в магазин); «на» + ochiq/tadbir joy (на вокзал, на рынок, на работу).", "Мне нужно на вокзал.", "Menga vokzalga kerak."],
      ["«до» + joy = «…gacha». Nomi oxirida odatda «-а/-я» paydo bo'ladi: до центра, до вокзала.", "Сколько до центра?", "Markazgacha qancha?"],
      ["«Мне нужно» + joy/fe'l — «menga … kerak». Eng foydali qolip."]
    ]
  }
};

DAYS[7] = {
  goal: "Yo'lni so'rash va tushunish: chap, o'ng, to'g'ri, uzoq, yaqin.",
  phrases: [
    ["Извините, где находится метро?", "izviNIte, gde naHOditsa mitRO?", "Kechirasiz, metro qayerda joylashgan?"],
    ["Как пройти в банк?", "kak praYTI v bank?", "Bankka qanday boraman?"],
    ["Это далеко отсюда?", "Eta daliKO atSYUda?", "Bu bu yerdan uzoqmi?"],
    ["Это близко.", "Eta BLIska.", "Bu yaqin."],
    ["Идите прямо.", "iDIte PRYAma.", "To'g'ri yuring."],
    ["Поверните налево.", "pavirNIte naLYEva.", "Chapga buriling."],
    ["Поверните направо.", "pavirNIte naPRAva.", "O'ngga buriling."],
    ["Это за углом.", "Eta za ugLOM.", "Bu burchak ortida."],
    ["Я потерялся. Покажите на карте, пожалуйста.", "ya patiRYAlsya. pakaJIte na KARte, paJAlusta.", "Men adashib qoldim. Iltimos, xaritada ko'rsating."],
    ["Сколько минут идти пешком?", "SKOLka miNUT idTI pishKOM?", "Piyoda necha daqiqa yuriladi?"]
  ],
  words: [
    ["улица", "Ulitsa", "ko'cha"],
    ["дом", "dom", "uy / bino"],
    ["площадь", "PLOshat", "maydon"],
    ["рядом", "RYAdam", "yonida"],
    ["прямо", "PRYAma", "to'g'ri"],
    ["номер", "NOmir", "raqam"]
  ],
  dialog: {
    scene: "Ko'chada bankni so'raysiz.",
    roles: ["Siz", "Yo'lovchi"],
    lines: [
      [0, "Извините, как пройти в банк?", "izviNIte, kak praYTI v bank?", "Kechirasiz, bankka qanday boraman?"],
      [1, "Идите прямо, потом поверните налево.", "iDIte PRYAma, paTOM pavirNIte naLYEva.", "To'g'ri yuring, keyin chapga buriling."],
      [0, "Это далеко?", "Eta daliKO?", "Bu uzoqmi?"],
      [1, "Нет, близко. Десять минут пешком.", "nyet, BLIska. DYEsit miNUT pishKOM.", "Yo'q, yaqin. Piyoda o'n daqiqa."],
      [0, "Спасибо большое!", "spaSIba balSHOye!", "Katta rahmat!"],
      [1, "Не за что!", "ne ZA shta!", "Arzimaydi!"]
    ]
  },
  fill: [
    ["___ налево.", "Поверните", ["Поверните", "Спасибо", "Сколько"], "Chapga buriling."],
    ["Это ___ отсюда?", "далеко", ["далеко", "далёкий", "дальше"], "Bu bu yerdan uzoqmi?"],
    ["Как ___ в банк?", "пройти", ["пройти", "иду", "прошёл"], "Bankka qanday boraman?"],
    ["Не за ___!", "что", ["что", "кто", "где"], "Arzimaydi!"]
  ],
  tip: {
    title: "Buyruq shakli: «-ите»",
    points: [
      ["«Вы»ga buyruq/iltimos «-ите» bilan tugaydi: идти → «Идите», повернуть → «Поверните», показать → «Покажите», подождать → «Подождите».", "Поверните направо.", "O'ngga buriling."],
      ["«налево», «направо», «прямо» o'zgarmaydi — shunday ayting."],
      ["«Как пройти в/на + joy?» — yo'l so'rashning asosiy qolipi. Javob eshitsangiz, faqat «налево / направо / прямо» va sonni ushlab oling."]
    ]
  }
};

DAYS[8] = {
  goal: "Kafe va restoranda stol, menyu, buyurtma, halol va hisob-kitob.",
  phrases: [
    ["Столик на двоих, пожалуйста.", "STOlik na dvaIX, paJAlusta.", "Ikki kishilik stol, iltimos."],
    ["Можно меню?", "MOJna minYU?", "Menyu bo'ladimi?"],
    ["Я хочу заказать.", "ya xaCHU zaKAzat.", "Men buyurtma bermoqchiman."],
    ["Мне, пожалуйста, суп и чай.", "mne, paJAlusta, sup i chay.", "Menga, iltimos, sho'rva va choy."],
    ["Что вы рекомендуете?", "shto vy rikaminDUite?", "Nimani tavsiya qilasiz?"],
    ["Без мяса, пожалуйста.", "byez MYAsa, paJAlusta.", "Go'shtsiz, iltimos."],
    ["Это халяль?", "Eta xaLYAL?", "Bu halolmi?"],
    ["Это очень вкусно!", "Eta Ochin FKUSna!", "Juda mazali!"],
    ["Счёт, пожалуйста.", "shot, paJAlusta.", "Hisob-kitob, iltimos."],
    ["Можно с собой?", "MOJna s saBOY?", "O'zim bilan olib ketsam bo'ladimi?"]
  ],
  words: [
    ["суп", "sup", "sho'rva"],
    ["чай", "chay", "choy"],
    ["кофе", "KOfe", "qahva"],
    ["салат", "saLAT", "salat"],
    ["курица", "KUritsa", "tovuq"],
    ["рис", "ris", "guruch"]
  ],
  dialog: {
    scene: "Restoranda kechki ovqat.",
    roles: ["Siz", "Ofitsiant"],
    lines: [
      [1, "Добрый вечер! Сколько вас?", "DObriy VYEchir! SKOLka vas?", "Xayrli kech! Necha kishisiz?"],
      [0, "Двое. Столик на двоих, пожалуйста.", "DVOye. STOlik na dvaIX, paJAlusta.", "Ikki kishi. Ikki kishilik stol, iltimos."],
      [1, "Пожалуйста, вот меню.", "paJAlusta, vot minYU.", "Marhamat, mana menyu."],
      [0, "Что вы рекомендуете?", "shto vy rikaminDUite?", "Nimani tavsiya qilasiz?"],
      [1, "Сегодня очень вкусный суп.", "siVODnya Ochin FKUSniy sup.", "Bugun sho'rva juda mazali."],
      [0, "Хорошо. Мне суп и чай. Это халяль?", "xaraSHO. mne sup i chay. Eta xaLYAL?", "Yaxshi. Menga sho'rva va choy. Bu halolmi?"],
      [1, "Да, конечно.", "da, kaNYEshna.", "Ha, albatta."],
      [0, "Очень вкусно! Счёт, пожалуйста.", "Ochin FKUSna! shot, paJAlusta.", "Juda mazali! Hisob-kitob, iltimos."],
      [1, "Сейчас принесу.", "siCHAS prinisU.", "Hozir olib kelaman."]
    ]
  },
  fill: [
    ["Столик ___ двоих.", "на", ["на", "в", "из"], "Ikki kishilik stol."],
    ["Мне суп ___ чай.", "и", ["и", "на", "у"], "Menga sho'rva va choy."],
    ["Это очень ___!", "вкусно", ["вкусно", "пешком", "спасибо"], "Juda mazali!"],
    ["Я ___ заказать.", "хочу", ["хочу", "хочет", "хотеть"], "Men buyurtma bermoqchiman."]
  ],
  tip: {
    title: "«Я хочу» va «Мне … пожалуйста»",
    points: [
      ["«Я хочу» + fe'l = «men … moqchiman». Fe'l o'zgarmaydi: Я хочу заказать / посмотреть / купить.", "Я хочу купить.", "Men sotib olmoqchiman."],
      ["Siz «вы» desangiz: «Вы хотите…?» (xohlaysizmi?). Ofitsiant shunday so'raydi.", "Вы хотите чай?", "Choy xohlaysizmi?"],
      ["Buyurtma uchun eng oson: «Мне, пожалуйста,» + ovqat nomi."]
    ]
  }
};

DAYS[9] = {
  goal: "Kvartira qidirish, ijara narxi, shartnoma va kommunal xizmatlar haqida so'rash.",
  phrases: [
    ["Я ищу квартиру.", "ya iSHU kvarTIru.", "Men kvartira qidiryapman."],
    ["Сколько стоит аренда в месяц?", "SKOLka STOit aRYENda v MYEsyats.", "Oyiga ijara qancha?"],
    ["Сколько комнат?", "SKOLka KOMnat?", "Nechta xona?"],
    ["Коммунальные услуги включены?", "kamuNALnie uSLUgi fklyuCHEny?", "Kommunal xizmatlar kiritilganmi?"],
    ["Нужен залог?", "NUjen zaLOK?", "Zalog kerakmi?"],
    ["Можно посмотреть квартиру?", "MOJna pasmatRET kvarTIru?", "Kvartirani ko'rsam bo'ladimi?"],
    ["Здесь есть интернет?", "zdyes yest intirNET?", "Bu yerda internet bormi?"],
    ["Мне нужен договор.", "mne NUjen dagaVOR.", "Menga shartnoma kerak."],
    ["Когда можно заехать?", "kagDA MOJna zaYEXat?", "Qachon ko'chib kirsam bo'ladi?"],
    ["Меня всё устраивает.", "minYA fsyo ustRAyvayet.", "Menga hammasi mos."]
  ],
  words: [
    ["квартира", "kvarTIra", "kvartira"],
    ["комната", "KOMnata", "xona"],
    ["аренда", "aRYENda", "ijara"],
    ["хозяин", "xaZYAin", "uy egasi"],
    ["сосед", "saSYET", "qo'shni"],
    ["ключ", "klyuch", "kalit"]
  ],
  dialog: {
    scene: "Uy egasi bilan kvartirani ko'rasiz.",
    roles: ["Siz", "Uy egasi"],
    lines: [
      [0, "Здравствуйте! Я ищу квартиру.", "ZDRAstvuyte! ya iSHU kvarTIru.", "Assalomu alaykum! Men kvartira qidiryapman."],
      [1, "Здравствуйте! Есть квартира, две комнаты.", "ZDRAstvuyte! yest kvarTIra, dve KOMnati.", "Assalomu alaykum! Kvartira bor, ikki xona."],
      [0, "Сколько стоит аренда в месяц?", "SKOLka STOit aRYENda v MYEsyats?", "Oyiga ijara qancha?"],
      [1, "Тридцать тысяч рублей.", "TRItsat TIsyach rubLYEY.", "O'ttiz ming rubl."],
      [0, "Коммунальные услуги включены?", "kamuNALnie uSLUgi fklyuCHEny?", "Kommunal xizmatlar kiritilganmi?"],
      [1, "Нет, отдельно.", "nyet, atDYELna.", "Yo'q, alohida."],
      [0, "Можно посмотреть квартиру?", "MOJna pasmatRET kvarTIru?", "Kvartirani ko'rsam bo'ladimi?"],
      [1, "Конечно, пойдёмте.", "kaNYEshna, paYDYOMte.", "Albatta, yuring."],
      [0, "Хорошо. Мне нужен договор.", "xaraSHO. mne NUjen dagaVOR.", "Yaxshi. Menga shartnoma kerak."],
      [1, "Договор будет.", "dagaVOR BUdet.", "Shartnoma bo'ladi."]
    ]
  },
  fill: [
    ["Я ___ квартиру.", "ищу", ["ищу", "ищет", "искать"], "Men kvartira qidiryapman."],
    ["Сколько ___?", "комнат", ["комнат", "комната", "комнаты"], "Nechta xona?"],
    ["Мне ___ договор.", "нужен", ["нужен", "нужна", "нужно"], "Menga shartnoma kerak."],
    ["Можно ___ квартиру?", "посмотреть", ["посмотреть", "посмотрел", "смотрю"], "Kvartirani ko'rsam bo'ladimi?"]
  ],
  tip: {
    title: "«Нужен / нужна / нужно / нужны»",
    points: [
      ["«Нужен» so'z jinsiga qarab o'zgaradi: erkak — нужен договор, ayol — нужна квартира, o'rta — нужно время, ko'plik — нужны документы.", "Мне нужна квартира.", "Menga kvartira kerak."],
      ["«тысяча» ham son kabi: 1 — тысяча, 2–4 — тысячи, 5+ — тысяч.", "тридцать тысяч рублей", "o'ttiz ming rubl"],
      ["«Сколько» + ko'plik (2-4 dan ortiq): Сколько комнат? Сколько денег? Savol shunday tuziladi."]
    ]
  }
};

DAYS[10] = {
  goal: "6–9-kunlarni takrorlash: transport, yo'l, kafe, uy ijarasi. Hammasini bog'lab gapiring.",
  phrases: [
    ["Извините, как пройти на вокзал?", "izviNIte, kak praYTI na vagZAL?", "Kechirasiz, vokzalga qanday boraman?"],
    ["Идите прямо, потом поверните направо.", "iDIte PRYAma, paTOM pavirNIte naPRAva.", "To'g'ri yuring, keyin o'ngga buriling."],
    ["Какой автобус идёт до центра? Сколько стоит билет?", "kaKOY afTObus iDYOT da TSENtra? SKOLka STOit biLYET?", "Qaysi avtobus markazgacha boradi? Chipta qancha?"],
    ["Остановите здесь, пожалуйста. Сколько с меня?", "astanaVIte zdyes, paJAlusta. SKOLka s minYA?", "Iltimos, shu yerda to'xtating. Men qancha beraman?"],
    ["Здравствуйте! Я ищу квартиру. Сколько стоит аренда в месяц?", "ZDRAstvuyte! ya iSHU kvarTIru. SKOLka STOit aRYENda v MYEsyats?", "Assalomu alaykum! Kvartira qidiryapman. Oyiga ijara qancha?"],
    ["Можно посмотреть квартиру? Мне нужен договор.", "MOJna pasmatRET kvarTIru? mne NUjen dagaVOR.", "Kvartirani ko'rsam bo'ladimi? Menga shartnoma kerak."],
    ["Столик на двоих, пожалуйста. Что вы рекомендуете?", "STOlik na dvaIX, paJAlusta. shto vy rikaminDUite?", "Ikki kishilik stol, iltimos. Nimani tavsiya qilasiz?"],
    ["Мне суп и чай, пожалуйста. Счёт, пожалуйста.", "mne sup i chay, paJAlusta. shot, paJAlusta.", "Menga sho'rva va choy, iltimos. Hisob-kitob, iltimos."]
  ],
  words: [],
  dialog: {
    scene: "Uy egasini topolmayapsiz: yo'l so'rab, kvartirani ko'rasiz (6–9-kunlar).",
    roles: ["Siz", "Uy egasi"],
    lines: [
      [0, "Здравствуйте! Я потерялся. Покажите на карте, пожалуйста.", "ZDRAstvuyte! ya patiRYAlsya. pakaJIte na KARte, paJAlusta.", "Assalomu alaykum! Men adashdim. Iltimos, xaritada ko'rsating."],
      [1, "Здравствуйте! Идите прямо, потом поверните налево.", "ZDRAstvuyte! iDIte PRYAma, paTOM pavirNIte naLYEva.", "Assalomu alaykum! To'g'ri yuring, keyin chapga buriling."],
      [0, "Это далеко?", "Eta daliKO?", "Bu uzoqmi?"],
      [1, "Нет, близко. Это за углом.", "nyet, BLIska. Eta za ugLOM.", "Yo'q, yaqin. Burchak ortida."],
      [0, "Спасибо! Можно посмотреть квартиру?", "spaSIba! MOJna pasmatRET kvarTIru?", "Rahmat! Kvartirani ko'rsam bo'ladimi?"],
      [1, "Конечно, заходите.", "kaNYEshna, zaHOdite.", "Albatta, kiring."],
      [0, "Сколько стоит аренда в месяц?", "SKOLka STOit aRYENda v MYEsyats?", "Oyiga ijara qancha?"],
      [1, "Тридцать тысяч рублей.", "TRItsat TIsyach rubLYEY.", "O'ttiz ming rubl."]
    ]
  },
  fill: [
    ["Мне нужна ___.", "квартира", ["квартира", "квартиру", "квартиры"], "Menga kvartira kerak."],
    ["Поверните ___.", "направо", ["направо", "потом", "рядом"], "O'ngga buriling."],
    ["Остановите ___.", "здесь", ["здесь", "там", "пока"], "Shu yerda to'xtating."],
    ["Столик ___ двоих.", "на", ["на", "в", "из"], "Ikki kishilik stol."],
    ["Сколько ___ билет?", "стоит", ["стоит", "стоят", "стоить"], "Chipta qancha turadi?"]
  ],
  tip: {
    title: "Takrorlash: 3 ta qolip",
    points: [
      ["Iltimos/buyruq «-ите» bilan: Идите, Поверните, Остановите, Покажите, Подождите.", "Покажите на карте, пожалуйста.", "Iltimos, xaritada ko'rsating."],
      ["«Мне нужен / нужна / нужно» — kerakli narsa jinsiga moslashadi: нужен договор, нужна квартира."],
      ["«Можно + fe'l?» — hamma joyda ruxsat so'rash: Можно посмотреть? Можно с собой? Можно оплатить картой?"]
    ]
  }
};
