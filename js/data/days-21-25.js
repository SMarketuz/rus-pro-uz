window.DAYS = window.DAYS || {};

DAYS[21] = {
  goal: "Ob-havo haqida gaplashish, kiyim sotib olish va o'lchab ko'rish.",
  phrases: [
    ["Какая сегодня погода?", "kaKAya siVODnya paGOda?", "Bugun ob-havo qanday?"],
    ["Сегодня холодно.", "siVODnya XOladna.", "Bugun sovuq."],
    ["Сегодня тепло, но будет дождь.", "siVODnya tipLO, no BUdit dosht.", "Bugun iliq, lekin yomg'ir yog'adi."],
    ["Завтра будет снег.", "ZAftra BUdit snyek.", "Ertaga qor yog'adi."],
    ["Мне холодно.", "mne XOladna.", "Menga sovuq."],
    ["Мне нужна тёплая куртка.", "mne nuJNA TYOplaya KURTka.", "Menga issiq kurtka kerak."],
    ["Какой размер?", "kaKOY razMYER?", "Qanday razmer?"],
    ["Можно померить?", "MOJna pamiRIT?", "O'lchab ko'rsam bo'ladimi?"],
    ["Это мало. Есть больше?", "Eta MAla. yest BOlshe?", "Bu kichik. Kattaroq bormi?"],
    ["Где примерочная?", "gde primYEROchnaya?", "O'lchab ko'rish xonasi qayerda?"]
  ],
  words: [
    ["погода", "paGOda", "ob-havo"],
    ["дождь", "dosht", "yomg'ir"],
    ["снег", "snyek", "qor"],
    ["куртка", "KURTka", "kurtka"],
    ["обувь", "Obuf", "poyabzal"],
    ["шапка", "SHAPka", "bosh kiyim"]
  ],
  dialog: {
    scene: "Kiyim do'konida kurtka tanlaysiz.",
    roles: ["Siz", "Sotuvchi"],
    lines: [
      [0, "Здравствуйте! Мне нужна тёплая куртка.", "ZDRAstvuyte! mne nuJNA TYOplaya KURTka.", "Assalomu alaykum! Menga issiq kurtka kerak."],
      [1, "Здравствуйте! Какой у вас размер?", "ZDRAstvuyte! kaKOY u VAS razMYER?", "Assalomu alaykum! Razmeringiz qanday?"],
      [0, "Сорок восемь.", "SOrak VOsim.", "Qirq sakkiz."],
      [1, "Вот, пожалуйста.", "vot, paJAlusta.", "Mana, marhamat."],
      [0, "Можно померить? Где примерочная?", "MOJna pamiRIT? gde primYEROchnaya?", "O'lchab ko'rsam bo'ladimi? O'lchash xonasi qayerda?"],
      [1, "Направо.", "naPRAva.", "O'ngda."],
      [0, "Это мало. Есть больше?", "Eta MAla. yest BOlshe?", "Bu kichik. Kattaroq bormi?"],
      [1, "Да, вот пятьдесят.", "da, vot pidisYAT.", "Ha, mana ellik."],
      [0, "Хорошо, я возьму это.", "xaraSHO, ya vazMU Eta.", "Yaxshi, buni olaman."]
    ]
  },
  fill: [
    ["Сегодня ___.", "холодно", ["холодно", "холодный", "холод"], "Bugun sovuq."],
    ["Мне ___ куртка.", "нужна", ["нужна", "нужен", "нужно"], "Menga kurtka kerak."],
    ["Можно ___?", "померить", ["померить", "померил", "мерить"], "O'lchab ko'rsam bo'ladimi?"],
    ["Завтра ___ снег.", "будет", ["будет", "был", "есть"], "Ertaga qor yog'adi."]
  ],
  tip: {
    title: "«Мне холодно», «будет», «больше»",
    points: [
      ["Sezgi «Мне» + so'z: Мне холодно (sovuq), Мне жарко (issiq), Мне хорошо (yaxshi). «Я холодно» demang.", "Мне жарко.", "Menga issiq."],
      ["Kelasi zamon: «будет» — bo'ladi: Завтра будет дождь. Hozirgi zamon: Сегодня холодно (fe'lsiz)."],
      ["Razmer va miqdor: больше (kattaroq/ko'proq), меньше (kichikroq/kamroq): Есть меньше?"]
    ]
  }
};

DAYS[22] = {
  goal: "Qo'shnilar bilan tanishish, kommunal muammolarni aytish, usta chaqirish.",
  phrases: [
    ["Здравствуйте, я ваш новый сосед.", "ZDRAstvuyte, ya vash NOviy saSYET.", "Assalomu alaykum, men sizning yangi qo'shnitingizman."],
    ["Извините, не работает свет.", "izviNIte, ni raBOtayet svyet.", "Kechirasiz, chiroq (yorug'lik) ishlamayapti."],
    ["Нет горячей воды.", "nyet gaRYAchey vaDY.", "Issiq suv yo'q."],
    ["Где можно заплатить за квартиру?", "gde MOJna zaplaTIT za kvarTIru?", "Kvartira uchun qayerda to'lasa bo'ladi?"],
    ["Протекает кран.", "pratiKAyet kran.", "Kran oqayapti."],
    ["Можно вызвать мастера?", "MOJna VYzvat MASTira?", "Usta chaqirsam bo'ladimi?"],
    ["Когда придёт мастер?", "kagDA priDYOT MASTir?", "Usta qachon keladi?"],
    ["Пожалуйста, потише. Уже поздно.", "paJAlusta, patiSHE. uJE POZna.", "Iltimos, jimroq. Kech bo'ldi."],
    ["Где выбросить мусор?", "gde VYbrasit MUsar?", "Axlatni qayerga tashlash kerak?"],
    ["Спасибо, что помогли!", "spaSIba, shto pamagLI!", "Yordam bergani uchun rahmat!"]
  ],
  words: [
    ["свет", "svyet", "yorug'lik, chiroq"],
    ["кран", "kran", "kran"],
    ["мастер", "MASTir", "usta"],
    ["мусор", "MUsar", "axlat"],
    ["лифт", "lift", "lift"],
    ["подъезд", "padYEST", "kirish (pod'ezd)"]
  ],
  dialog: {
    scene: "Yangi uyda qo'shni bilan suhbat.",
    roles: ["Siz", "Qo'shni"],
    lines: [
      [0, "Добрый вечер! Я ваш новый сосед. Меня зовут Анвар.", "DObriy VYEchir! ya vash NOviy saSYET. minYA zaVUT anVAR.", "Xayrli kech! Men sizning yangi qo'shnitingizman. Ismim Anvar."],
      [1, "Добрый вечер! Очень приятно. Я Ирина.", "DObriy VYEchir! Ochin priYATna. ya iRIna.", "Xayrli kech! Juda yoqimli. Men Irinaman."],
      [0, "Извините, где можно выбросить мусор?", "izviNIte, gde MOJna VYbrasit MUsar?", "Kechirasiz, axlatni qayerga tashlasa bo'ladi?"],
      [1, "Во дворе, налево.", "va dvaRYE, naLYEva.", "Hovlida, chapda."],
      [0, "Спасибо. И ещё: нет горячей воды. Что делать?", "spaSIba. i yeSHO: nyet gaRYAchey vaDY. shto DYElat?", "Rahmat. Yana: issiq suv yo'q. Nima qilish kerak?"],
      [1, "Позвоните мастеру. Вот номер.", "pazvaNIte MASteru. vot NOmir.", "Ustaga qo'ng'iroq qiling. Mana raqam."],
      [0, "Спасибо большое!", "spaSIba balSHOye!", "Katta rahmat!"],
      [1, "Не за что!", "ne ZA shta!", "Arzimaydi!"]
    ]
  },
  fill: [
    ["Нет горячей ___.", "воды", ["воды", "вода", "воду"], "Issiq suv yo'q."],
    ["Не ___ свет.", "работает", ["работает", "работать", "работа"], "Chiroq ishlamayapti."],
    ["Когда ___ мастер?", "придёт", ["придёт", "пришёл", "приходить"], "Usta qachon keladi?"],
    ["Где можно ___ за квартиру?", "заплатить", ["заплатить", "заплатил", "плата"], "Kvartira uchun qayerda to'lasa bo'ladi?"]
  ],
  tip: {
    title: "«нет + -ы/-и», «потише»",
    points: [
      ["«Нет» dan keyin ot oxiri o'zgaradi: вода → нет воды, свет → нет света, интернет → нет интернета.", "Нет света.", "Yorug'lik yo'q."],
      ["Muloyim iltimos: «по-» + qiyoslash: потише (jimroq), помедленнее (sekinroq), попозже (keyinroq).", "Говорите помедленнее.", "Sekinroq gapiring."],
      ["Muammoni shunday ayting: «Не работает + nima» yoki «Протекает + nima». Qisqa va aniq."]
    ]
  }
};

DAYS[23] = {
  goal: "Sartaroshxona, kimyoviy tozalash va ta'mirlash xizmatlarida gaplashish.",
  phrases: [
    ["Я хочу подстричься.", "ya xaCHU patstRIchsa.", "Men soch oldirmoqchiman."],
    ["Можно записаться на завтра?", "MOJna zapiSAtsa na ZAftra?", "Ertagaga yozilsam bo'ladimi?"],
    ["Сколько стоит стрижка?", "SKOLka STOit STRIshka?", "Soch olish qancha turadi?"],
    ["Покороче, пожалуйста.", "pakaROche, paJAlusta.", "Qisqaroq, iltimos."],
    ["Не очень коротко.", "ni Ochin KOratka.", "Juda qisqa emas."],
    ["Подровняйте, пожалуйста, бороду.", "padravNYAyte, paJAlusta, BOradu.", "Iltimos, soqolni tekislang."],
    ["Где здесь химчистка?", "gde zdyes ximCHIstka?", "Bu yerda kimyoviy tozalash qayerda?"],
    ["Мне нужно починить обувь.", "mne NUJna pachiNIT Obuf.", "Menga poyabzalni ta'mirlash kerak."],
    ["Сколько ждать?", "SKOLka jdat?", "Qancha kutish kerak?"],
    ["Спасибо, отлично!", "spaSIba, atLIchna!", "Rahmat, a'lo!"]
  ],
  words: [
    ["парикмахерская", "parikMAxirskaya", "sartaroshxona"],
    ["стрижка", "STRIshka", "soch olish"],
    ["борода", "baraDA", "soqol"],
    ["ремонт", "rimONT", "ta'mirlash"],
    ["одежда", "aDYEjda", "kiyim"],
    ["ждать", "jdat", "kutmoq"]
  ],
  dialog: {
    scene: "Sartaroshxonada soch olasiz.",
    roles: ["Siz", "Sartarosh"],
    lines: [
      [0, "Здравствуйте! Можно записаться на завтра?", "ZDRAstvuyte! MOJna zapiSAtsa na ZAftra?", "Assalomu alaykum! Ertagaga yozilsam bo'ladimi?"],
      [1, "Здравствуйте! Да. На какое время?", "ZDRAstvuyte! da. na kaKOye VRYEmya?", "Assalomu alaykum! Ha. Qaysi vaqtga?"],
      [0, "На десять утра. Я хочу подстричься.", "na DYEsit utRA. ya xaCHU patstRIchsa.", "Ertalab o'nga. Men soch oldirmoqchiman."],
      [1, "Хорошо. Завтра в десять. До свидания!", "xaraSHO. ZAftra v DYEsit. da sviDAniya!", "Yaxshi. Ertaga soat o'nda. Xayr!"],
      [1, "Добрый день! Садитесь. Как будем стричься?", "DObriy den! saDItis. kak BUdim STRIchsa?", "Xayrli kun! O'tiring. Qanday olamiz?"],
      [0, "Покороче, пожалуйста. Но не очень коротко.", "pakaROche, paJAlusta. no ni Ochin KOratka.", "Qisqaroq, iltimos. Lekin juda qisqa emas."],
      [1, "Хорошо. Готово!", "xaraSHO. gaTOva!", "Yaxshi. Tayyor!"],
      [0, "Сколько стоит?", "SKOLka STOit?", "Qancha turadi?"],
      [1, "Пятьсот рублей.", "pitSOT rubLYEY.", "Besh yuz rubl."],
      [0, "Спасибо, отлично!", "spaSIba, atLIchna!", "Rahmat, a'lo!"]
    ]
  },
  fill: [
    ["Я хочу ___.", "подстричься", ["подстричься", "подстригся", "стрижка"], "Men soch oldirmoqchiman."],
    ["Сколько стоит ___?", "стрижка", ["стрижка", "стрижку", "стрижки"], "Soch olish qancha turadi?"],
    ["Покороче, ___.", "пожалуйста", ["пожалуйста", "спасибо", "извините"], "Qisqaroq, iltimos."],
    ["Сколько ___?", "ждать", ["ждать", "жду", "ждал"], "Qancha kutish kerak?"]
  ],
  tip: {
    title: "«-ся» fe'llari va «по-»",
    points: [
      ["O'ziga qaratilgan ishlar «-ся» bilan: подстричься (o'zimni oldirmoq), записаться (yozilmoq), помыться (yuvinmoq).", "Я хочу записаться.", "Men yozilmoqchiman."],
      ["«Покороче» — «biroz qisqaroq». «по-» + qiyoslash muloyim iltimos beradi: подлиннее (uzunroq), потоньше (yupqaroq)."],
      ["«Мне нужно + fe'l»: починить (ta'mirlash), постирать (yuvish), сдать (topshirish)."]
    ]
  }
};

DAYS[24] = {
  goal: "Do'st va hamkasblar bilan norasmiy («ты») suhbat: uchrashuv, taklif, rad etish.",
  phrases: [
    ["Привет! Как жизнь?", "priVYET! kak jizn?", "Salom! Hayot qalay?"],
    ["Что нового?", "shto NOvava?", "Yangilik nima?"],
    ["Давай встретимся!", "daVAY fstRYEtimsa!", "Keling, uchrashaylik!"],
    ["Когда ты свободен?", "kagDA ty svaBOdin?", "Qachon bo'shsan?"],
    ["Пойдём в кафе?", "paYDYOM f kaFE?", "Kafega boramizmi?"],
    ["Я с удовольствием.", "ya s udavOLstviyem.", "Mamnuniyat bilan."],
    ["К сожалению, я не могу.", "k sajaLYEniyu, ya ni maGU.", "Afsuski, qila olmayman."],
    ["Я опоздаю на десять минут.", "ya apazDAyu na DYEsit miNUT.", "O'n daqiqaga kechikaman."],
    ["Ты откуда? Давно здесь?", "ty atKUda? davNO zdyes?", "Sen qayerdansan? Anchadan beri shu yerdamisan?"],
    ["Хорошего дня! Увидимся!", "xaROshiva dnya! uVIdimsa!", "Kuning xayrli o'tsin! Ko'rishguncha!"]
  ],
  words: [
    ["подруга", "paDRUga", "do'st qiz"],
    ["встреча", "FSTRYEcha", "uchrashuv"],
    ["выходные", "vyhadNYE", "dam olish kunlari"],
    ["кино", "kiNO", "kino"],
    ["парк", "park", "bog'"],
    ["футбол", "futBOL", "futbol"]
  ],
  dialog: {
    scene: "Do'st (Dima) bilan uchrashuv kelishasiz.",
    roles: ["Siz", "Dima"],
    lines: [
      [0, "Привет, Дима! Что нового?", "priVYET, DIma! shto NOvava?", "Salom, Dima! Yangilik nima?"],
      [1, "Привет! Всё хорошо. А у тебя?", "priVYET! fsyo xaraSHO. a u tiBYA?", "Salom! Hammasi yaxshi. Senda-chi?"],
      [0, "Тоже хорошо. Давай встретимся в субботу!", "TOje xaraSHO. daVAY fstRYEtimsa f suBOtu!", "Menda ham yaxshi. Shanba kuni uchrashaylik!"],
      [1, "С удовольствием! Пойдём в кафе?", "s udavOLstviyem! paYDYOM f kaFE?", "Mamnuniyat bilan! Kafega boramizmi?"],
      [0, "Давай. Во сколько?", "daVAY. va SKOLka?", "Boramiz. Soat nechada?"],
      [1, "В шесть вечера.", "f shest VYEchira.", "Kechqurun oltida."],
      [0, "Хорошо. Я могу опоздать на десять минут.", "xaraSHO. ya maGU apazDAT na DYEsit miNUT.", "Yaxshi. Men o'n daqiqaga kechikishim mumkin."],
      [1, "Ничего страшного. Увидимся!", "nichiVO straSHnava. uVIdimsa!", "Hechqisi yo'q. Ko'rishguncha!"]
    ]
  },
  fill: [
    ["Давай ___!", "встретимся", ["встретимся", "встретился", "встреча"], "Uchrashaylik!"],
    ["___ нового?", "Что", ["Что", "Где", "Кто"], "Yangilik nima?"],
    ["К сожалению, я не ___.", "могу", ["могу", "может", "мочь"], "Afsuski, qila olmayman."],
    ["Пойдём ___ кафе?", "в", ["в", "на", "из"], "Kafega boramizmi?"]
  ],
  tip: {
    title: "«Ты» bilan gaplashish",
    points: [
      ["Do'st bilan «ты»: Как дела у тебя? Ты откуда? Когда ты свободен? Ish joyida boshliq va kattalarga hamon «вы» deng.", "Ты откуда?", "Sen qayerdansan?"],
      ["Taklif: «Давай + biz shakli» (Давай встретимся, Давай пойдём) yoki «Пойдём…?». Qabul: «С удовольствием!»; rad: «К сожалению, не могу»."],
      ["Kechiksangiz oldindan yozing/ayting: «Я опоздаю на … минут» — rusiyzabonlar vaqtga e'tibor beradi."]
    ]
  }
};

DAYS[25] = {
  goal: "21–24-kunlarni takrorlash: ob-havo, kiyim, uy muammolari, xizmatlar, do'stlar.",
  phrases: [
    ["Какая сегодня погода? Сегодня холодно.", "kaKAya siVODnya paGOda? siVODnya XOladna.", "Bugun ob-havo qanday? Bugun sovuq."],
    ["Мне нужна тёплая куртка. Можно померить?", "mne nuJNA TYOplaya KURTka. MOJna pamiRIT?", "Menga issiq kurtka kerak. O'lchab ko'rsam bo'ladimi?"],
    ["Нет горячей воды. Когда придёт мастер?", "nyet gaRYAchey vaDY. kagDA priDYOT MASTir?", "Issiq suv yo'q. Usta qachon keladi?"],
    ["Извините, где можно выбросить мусор?", "izviNIte, gde MOJna VYbrasit MUsar?", "Kechirasiz, axlatni qayerga tashlasa bo'ladi?"],
    ["Я хочу подстричься. Покороче, пожалуйста.", "ya xaCHU patstRIchsa. pakaROche, paJAlusta.", "Men soch oldirmoqchiman. Qisqaroq, iltimos."],
    ["Сколько стоит стрижка? Сколько ждать?", "SKOLka STOit STRIshka? SKOLka jdat?", "Soch olish qancha? Qancha kutish kerak?"],
    ["Привет! Что нового? Давай встретимся!", "priVYET! shto NOvava? daVAY fstRYEtimsa!", "Salom! Yangilik nima? Uchrashaylik!"],
    ["К сожалению, я не могу. Я опоздаю на десять минут.", "k sajaLYEniyu, ya ni maGU. ya apazDAyu na DYEsit miNUT.", "Afsuski, qila olmayman. O'n daqiqaga kechikaman."]
  ],
  words: [],
  dialog: {
    scene: "Do'st bilan telefonda, sovuq kun (21–24-kunlar).",
    roles: ["Siz", "Dima"],
    lines: [
      [1, "Привет! Как жизнь?", "priVYET! kak jizn?", "Salom! Hayot qalay?"],
      [0, "Привет! Всё хорошо. Сегодня очень холодно!", "priVYET! fsyo xaraSHO. siVODnya Ochin XOladna!", "Salom! Hammasi yaxshi. Bugun juda sovuq!"],
      [1, "Да. Давай встретимся в кафе?", "da. daVAY fstRYEtimsa f kaFE?", "Ha. Kafeda uchrashaylikmi?"],
      [0, "К сожалению, я не могу. Мне нужна тёплая куртка.", "k sajaLYEniyu, ya ni maGU. mne nuJNA TYOplaya KURTka.", "Afsuski, bora olmayman. Menga issiq kurtka kerak."],
      [1, "Хорошо. Тогда в субботу?", "xaraSHO. tagDA f suBOtu?", "Yaxshi. Unda shanba kuni?"],
      [0, "С удовольствием! Во сколько?", "s udavOLstviyem! va SKOLka?", "Mamnuniyat bilan! Soat nechada?"],
      [1, "В шесть вечера.", "f shest VYEchira.", "Kechqurun oltida."],
      [0, "Хорошо. Увидимся!", "xaraSHO. uVIdimsa!", "Yaxshi. Ko'rishguncha!"]
    ]
  },
  fill: [
    ["Сегодня ___.", "холодно", ["холодно", "холод", "холодная"], "Bugun sovuq."],
    ["Нет горячей ___.", "воды", ["воды", "вода", "воду"], "Issiq suv yo'q."],
    ["Я хочу ___.", "подстричься", ["подстричься", "подстригся", "стрижка"], "Men soch oldirmoqchiman."],
    ["К сожалению, я не ___.", "могу", ["могу", "может", "мочь"], "Afsuski, qila olmayman."],
    ["Мне ___ тёплая куртка.", "нужна", ["нужна", "нужен", "нужно"], "Menga issiq kurtka kerak."]
  ],
  tip: {
    title: "Takrorlash: 3 ta qolip",
    points: [
      ["«Мне холодно / жарко / нужна…» — sezgi va ehtiyoj «Мне» bilan aytiladi."],
      ["«Нет + -ы/-и» (нет воды), «Не работает» — muammoni qisqa aytish."],
      ["«Давай…», «Пойдём…», «К сожалению, не могу» — do'stlar bilan taklif va rad etish."]
    ]
  }
};
