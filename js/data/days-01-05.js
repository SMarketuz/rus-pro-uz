/* Format:
   phrases: [ru, o'qilishi (KATTA = urg'u), uz]
   words:   [ru, o'qilishi, uz]
   dialog:  { scene, roles:[siz, sherik], lines:[[rol(0|1), ru, o'qilishi, uz], ...] }
   fill:    [gap ("___" bilan), to'g'ri javob, variantlar, uzbekcha ma'no]
   tip:     { title, points:[[matn, ru-misol|null, misol tarjimasi|null], ...] }
*/
window.DAYS = window.DAYS || {};

DAYS[1] = {
  goal: "Salomlashish, xayrlashish va «ruscha yaxshi bilmayman» deyish.",
  phrases: [
    ["Здравствуйте!", "ZDRAstvuyte!", "Assalomu alaykum! (rasmiy)"],
    ["Привет!", "priVYET!", "Salom! (do'stona)"],
    ["Доброе утро!", "DObraye UTra!", "Xayrli tong!"],
    ["Добрый день!", "DObriy den!", "Xayrli kun!"],
    ["Добрый вечер!", "DObriy VYEchir!", "Xayrli kech!"],
    ["Как дела?", "kak diLA?", "Ishlar qalay?"],
    ["Хорошо, спасибо.", "xaraSHO, spaSIba.", "Yaxshi, rahmat."],
    ["До свидания!", "da sviDAniya!", "Xayr! (ko'rishguncha)"],
    ["Приятно познакомиться.", "priYATna paznaKOmitsa.", "Tanishganimdan xursandman."],
    ["Извините, я плохо говорю по-русски.", "izviNIte, ya PLOxa gavaRYU pa-RUSski.", "Kechirasiz, men ruscha yomon gapiraman."]
  ],
  words: [
    ["Да", "da", "Ha"],
    ["Нет", "nyet", "Yo'q"],
    ["Спасибо", "spaSIba", "Rahmat"],
    ["Пожалуйста", "paJAlusta", "Marhamat / Iltimos"],
    ["Извините", "izviNIte", "Kechirasiz"],
    ["Хорошо", "xaraSHO", "Yaxshi"]
  ],
  dialog: {
    scene: "Ikki kishi birinchi marta uchrashadi.",
    roles: ["Siz", "Dmitriy"],
    lines: [
      [0, "Здравствуйте!", "ZDRAstvuyte!", "Assalomu alaykum!"],
      [1, "Здравствуйте! Как дела?", "ZDRAstvuyte! kak diLA?", "Assalomu alaykum! Ishlar qalay?"],
      [0, "Хорошо, спасибо. А у вас?", "xaraSHO, spaSIba. a u VAS?", "Yaxshi, rahmat. O'zingizda-chi?"],
      [1, "Тоже хорошо. Приятно познакомиться.", "TOje xaraSHO. priYATna paznaKOmitsa.", "Menda ham yaxshi. Tanishganimdan xursandman."],
      [0, "Мне тоже приятно. До свидания!", "mne TOje priYATna. da sviDAniya!", "Menga ham yoqimli. Xayr!"],
      [1, "До свидания!", "da sviDAniya!", "Xayr!"]
    ]
  },
  fill: [
    ["___ утро!", "Доброе", ["Доброе", "Добрый", "Добрая"], "Xayrli tong!"],
    ["Как ___?", "дела", ["дела", "день", "вечер"], "Ishlar qalay?"],
    ["Приятно ___.", "познакомиться", ["познакомиться", "спасибо", "извините"], "Tanishganimdan xursandman."],
    ["Хорошо, ___.", "спасибо", ["спасибо", "привет", "здравствуйте"], "Yaxshi, rahmat."]
  ],
  tip: {
    title: "«Вы» va «ты» + urg'u",
    points: [
      ["«Вы» — hurmat shakli. Notanish odam, kattalar, sotuvchi, shifokor bilan doim «вы» deng.", "Здравствуйте! Как дела у вас?", "Assalomu alaykum! Sizda ishlar qalay?"],
      ["«Ты» — do'st va tengdoshlar bilan: «Привет! Как дела?». Notanishga «ты» desangiz, qo'pol eshitiladi.", "Привет! Как дела?", "Salom! Ishlar qalay?"],
      ["Urg'u tushmagan «о» — «a» deb o'qiladi: «хорошо» — xaraSHO. Saytda urg'uli bo'g'in KATTA harf bilan yoziladi."]
    ]
  }
};

DAYS[2] = {
  goal: "Ismingiz, kelib chiqishingiz, yoshingiz haqida gapirish va tushunmasangiz so'rash.",
  phrases: [
    ["Меня зовут Анвар.", "minYA zaVUT anVAR.", "Mening ismim Anvar."],
    ["А как вас зовут?", "a kak vas zaVUT?", "Sizning ismingiz nima?"],
    ["Вы откуда?", "vy atKUda?", "Siz qayerdansiz?"],
    ["Я из Узбекистана.", "ya iz uzbikisTAna.", "Men O'zbekistondanman."],
    ["Мне двадцать пять лет.", "mne DVAtsat pyat let.", "Men 25 yoshdaman."],
    ["Я приехал работать.", "ya priYEhal raBOtat.", "Men ishlash uchun keldim."],
    ["Я говорю по-узбекски и немного по-русски.", "ya gavaRYU pa-uzBEKski i niMNOga pa-RUSski.", "Men o'zbekcha va ozgina ruscha gapiraman."],
    ["Я не понимаю.", "ya ni paniMAyu.", "Men tushunmayapman."],
    ["Повторите, пожалуйста.", "paftaRIte, paJAlusta.", "Iltimos, takrorlang."],
    ["Говорите медленно, пожалуйста.", "gavaRIte MYEDlinna, paJAlusta.", "Iltimos, sekinroq gapiring."]
  ],
  words: [
    ["имя", "IMya", "ism"],
    ["страна", "straNA", "mamlakat"],
    ["город", "GOrat", "shahar"],
    ["работа", "raBOta", "ish"],
    ["семья", "simYA", "oila"],
    ["друг", "druk", "do'st"]
  ],
  dialog: {
    scene: "Yotoqxonada yangi tanishuv.",
    roles: ["Siz", "Olga"],
    lines: [
      [1, "Здравствуйте! Меня зовут Ольга. А как вас зовут?", "ZDRAstvuyte! minYA zaVUT OLga. a kak vas zaVUT?", "Assalomu alaykum! Mening ismim Olga. Sizning ismingiz nima?"],
      [0, "Меня зовут Анвар. Приятно познакомиться.", "minYA zaVUT anVAR. priYATna paznaKOmitsa.", "Mening ismim Anvar. Tanishganimdan xursandman."],
      [1, "Вы откуда?", "vy atKUda?", "Siz qayerdansiz?"],
      [0, "Я из Узбекистана, из Ташкента.", "ya iz uzbikisTAna, iz tashKENta.", "Men O'zbekistondanman, Toshkentdanman."],
      [1, "Вы хорошо говорите по-русски!", "vy xaraSHO gavaRIte pa-RUSski!", "Siz ruscha yaxshi gapirasiz!"],
      [0, "Нет, я говорю немного. Говорите медленно, пожалуйста.", "nyet, ya gavaRYU niMNOga. gavaRIte MYEDlinna, paJAlusta.", "Yo'q, ozgina gapiraman. Iltimos, sekinroq gapiring."]
    ]
  },
  fill: [
    ["Меня ___ Анвар.", "зовут", ["зовут", "зовёт", "звать"], "Mening ismim Anvar."],
    ["Я не ___.", "понимаю", ["понимаю", "понимает", "понимать"], "Men tushunmayapman."],
    ["___ вас зовут?", "Как", ["Как", "Где", "Что"], "Sizning ismingiz nima?"],
    ["Мне двадцать пять ___.", "лет", ["лет", "год", "года"], "Men 25 yoshdaman."]
  ],
  tip: {
    title: "Qolip: «Меня зовут…», «Мне … лет»",
    points: [
      ["Ism aytishda qolip bitta: «Меня зовут» + ism. «Меня» — «meni», ya'ni «meni ... deb chaqirishadi».", "Меня зовут Анвар.", "Mening ismim Anvar."],
      ["Yosh: «Мне» + son + «лет». 1 — «год», 2–4 — «года», 5 dan boshlab — «лет».", "Мне тридцать лет.", "Men 30 yoshdaman."],
      ["Erkak «Я приехал», ayol «Я приехала» deydi: o'tgan zamonda ayolga «-а» qo'shiladi. «Я из + joy»: из Ташкента, из Самарканда."]
    ]
  }
};

DAYS[3] = {
  goal: "1 dan 1000 gacha asosiy sonlar, soatni so'rash va aytish.",
  phrases: [
    ["Сколько времени?", "SKOLka VRYEmini?", "Soat necha?"],
    ["Сейчас три часа.", "siCHAS tri chiSA.", "Hozir soat uch."],
    ["Сейчас десять тридцать.", "siCHAS DYEsit TRItsat.", "Hozir 10:30."],
    ["Во сколько?", "va SKOLka?", "Soat nechada?"],
    ["В восемь часов утра.", "v VOsim chiSOF utRA.", "Ertalab soat sakkizda."],
    ["Один, два, три, четыре, пять.", "aDIN, dva, tri, chiTIri, pyat.", "1, 2, 3, 4, 5."],
    ["Шесть, семь, восемь, девять, десять.", "shest, syem, VOsim, DYEvit, DYEsit.", "6, 7, 8, 9, 10."],
    ["Двадцать, тридцать, сорок, пятьдесят.", "DVAtsat, TRItsat, SOrak, pidisYAT.", "20, 30, 40, 50."],
    ["Сто, двести, тысяча.", "sto, DVYEsti, TIsicha.", "100, 200, 1000."],
    ["Подождите пять минут.", "padaJDIte pyat miNUT.", "Besh daqiqa kuting."]
  ],
  words: [
    ["сегодня", "siVODnya", "bugun"],
    ["завтра", "ZAftra", "ertaga"],
    ["вчера", "fchiRA", "kecha"],
    ["неделя", "niDYElya", "hafta"],
    ["минута", "miNUta", "daqiqa"],
    ["час", "chas", "soat"]
  ],
  dialog: {
    scene: "Bekatda notanish odamdan vaqtni so'raysiz.",
    roles: ["Siz", "Yo'lovchi"],
    lines: [
      [0, "Извините, сколько сейчас времени?", "izviNIte, SKOLka siCHAS VRYEmini?", "Kechirasiz, hozir soat necha?"],
      [1, "Сейчас три часа.", "siCHAS tri chiSA.", "Hozir soat uch."],
      [0, "Спасибо! А во сколько автобус?", "spaSIba! a va SKOLka afTObus?", "Rahmat! Avtobus soat nechada?"],
      [1, "В три пять. Подождите пять минут.", "f tri pyat. padaJDIte pyat miNUT.", "Uchdan besh daqiqada. Besh daqiqa kuting."],
      [0, "Хорошо, спасибо!", "xaraSHO, spaSIba!", "Yaxshi, rahmat!"],
      [1, "Пожалуйста.", "paJAlusta.", "Marhamat."]
    ]
  },
  fill: [
    ["Сейчас пять ___.", "часов", ["час", "часа", "часов"], "Hozir soat besh."],
    ["___ времени?", "Сколько", ["Сколько", "Где", "Кто"], "Soat necha?"],
    ["Во ___?", "сколько", ["сколько", "где", "кто"], "Soat nechada?"],
    ["Подождите ___ минут.", "пять", ["пять", "пятый", "пятая"], "Besh daqiqa kuting."]
  ],
  tip: {
    title: "Soat va daqiqa: 1 — 2-4 — 5+",
    points: [
      ["Son bilan so'z shakli o'zgaradi: 1 — «час», 2–4 — «часа», 5 va undan ko'p — «часов».", "один час, три часа, пять часов", "bir soat, uch soat, besh soat"],
      ["Daqiqa ham shunday: «минута», «минуты», «минут».", "одна минута, две минуты, пять минут", "bir daqiqa, ikki daqiqa, besh daqiqa"],
      ["«Во сколько?» — soat nechada? Javobda «в» + son: «в восемь», «в три пять».", "В восемь часов.", "Soat sakkizda."]
    ]
  }
};

DAYS[4] = {
  goal: "Do'kon va bozorda narx so'rash, savdolashish va to'lash.",
  phrases: [
    ["Сколько это стоит?", "SKOLka Eta STOit?", "Bu qancha turadi?"],
    ["Дайте, пожалуйста, один килограмм.", "DAyte, paJAlusta, aDIN kilagRAM.", "Iltimos, bir kilogramm bering."],
    ["Это дорого. Можно скидку?", "Eta DOraga. MOJna SKITku?", "Bu qimmat. Chegirma bo'ladimi?"],
    ["У вас есть хлеб?", "u VAS yest xlyep?", "Sizda non bormi?"],
    ["Покажите, пожалуйста, вот это.", "pakaJIte, paJAlusta, vot Eta.", "Iltimos, mana buni ko'rsating."],
    ["Я возьму это.", "ya vazMU Eta.", "Buni olaman."],
    ["Можно оплатить картой?", "MOJna aplaTIT KARtoy?", "Karta bilan to'lasam bo'ladimi?"],
    ["Где касса?", "gde KAssa?", "Kassa qayerda?"],
    ["Нет, спасибо, я просто смотрю.", "nyet, spaSIba, ya PROsta smatRYU.", "Yo'q, rahmat, men shunchaki qarayapman."],
    ["Чек, пожалуйста.", "chek, paJAlusta.", "Chek bering, iltimos."]
  ],
  words: [
    ["хлеб", "xlyep", "non"],
    ["молоко", "malaKO", "sut"],
    ["вода", "vaDA", "suv"],
    ["мясо", "MYAsa", "go'sht"],
    ["цена", "tsiNA", "narx"],
    ["рубль", "rubl", "rubl"]
  ],
  dialog: {
    scene: "Bozorda pomidor sotib olasiz.",
    roles: ["Siz", "Sotuvchi"],
    lines: [
      [1, "Добрый день! Что вам нужно?", "DObriy den! shto vam NUJna?", "Xayrli kun! Sizga nima kerak?"],
      [0, "Здравствуйте! У вас есть помидоры?", "ZDRAstvuyte! u VAS yest pamiDOri?", "Assalomu alaykum! Sizda pomidor bormi?"],
      [1, "Да, есть. Вот, смотрите.", "da, yest. vot, smaTRIte.", "Ha, bor. Mana, qarang."],
      [0, "Сколько это стоит?", "SKOLka Eta STOit?", "Bu qancha turadi?"],
      [1, "Сто двадцать рублей за килограмм.", "sto DVAtsat rubLYEY za kilagRAM.", "Bir kilogrammi 120 rubl."],
      [0, "Это дорого. Можно скидку?", "Eta DOraga. MOJna SKITku?", "Bu qimmat. Chegirma bo'ladimi?"],
      [1, "Хорошо, сто рублей.", "xaraSHO, sto rubLYEY.", "Yaxshi, 100 rubl."],
      [0, "Дайте, пожалуйста, один килограмм.", "DAyte, paJAlusta, aDIN kilagRAM.", "Iltimos, bir kilogramm bering."],
      [1, "Вот, пожалуйста. С вас сто рублей.", "vot, paJAlusta. s VAS sto rubLYEY.", "Mana, marhamat. Sizdan 100 rubl."]
    ]
  },
  fill: [
    ["У вас ___ хлеб?", "есть", ["есть", "был", "будет"], "Sizda non bormi?"],
    ["Дайте, ___, один килограмм.", "пожалуйста", ["пожалуйста", "спасибо", "извините"], "Iltimos, bir kilogramm bering."],
    ["Это ___. Можно скидку?", "дорого", ["дорого", "вкусно", "далеко"], "Bu qimmat. Chegirma bo'ladimi?"],
    ["Можно ___ картой?", "оплатить", ["оплатить", "оплата", "оплатил"], "Karta bilan to'lasam bo'ladimi?"]
  ],
  tip: {
    title: "«Можно», «У вас есть», «Дайте»",
    points: [
      ["«Можно» + fe'l (infinitiv) = «mumkinmi?». Ruxsat so'rashning eng oson yo'li.", "Можно посмотреть?", "Ko'rsam bo'ladimi?"],
      ["«У вас есть…?» — «Sizda … bormi?». Yo'q bo'lsa javob: «Нет, нету».", "У вас есть вода?", "Sizda suv bormi?"],
      ["Buyurtma: «Дайте, пожалуйста» + narsa. Doim «пожалуйста» qo'shing — muloyim eshitiladi."]
    ]
  }
};

DAYS[5] = {
  goal: "1–4-kunlarni takrorlash: tanishuv, vaqt, do'kon. Hammasini birlashtirib gapiring.",
  phrases: [
    ["Здравствуйте! Меня зовут Анвар. Приятно познакомиться.", "ZDRAstvuyte! minYA zaVUT anVAR. priYATna paznaKOmitsa.", "Assalomu alaykum! Mening ismim Anvar. Tanishganimdan xursandman."],
    ["Я из Узбекистана. Мне двадцать пять лет.", "ya iz uzbikisTAna. mne DVAtsat pyat let.", "Men O'zbekistondanman. Men 25 yoshdaman."],
    ["Извините, я не понимаю. Повторите, пожалуйста.", "izviNIte, ya ni paniMAyu. paftaRIte, paJAlusta.", "Kechirasiz, tushunmadim. Iltimos, takrorlang."],
    ["Извините, сколько сейчас времени?", "izviNIte, SKOLka siCHAS VRYEmini?", "Kechirasiz, hozir soat necha?"],
    ["Сейчас пять часов. Подождите десять минут.", "siCHAS pyat chiSOF. padaJDIte DYEsit miNUT.", "Hozir soat besh. O'n daqiqa kuting."],
    ["Сколько это стоит? Это дорого. Можно скидку?", "SKOLka Eta STOit? Eta DOraga. MOJna SKITku?", "Bu qancha? Bu qimmat. Chegirma bo'ladimi?"],
    ["Дайте, пожалуйста, два килограмма. Можно оплатить картой?", "DAyte, paJAlusta, dva kilagRAMa. MOJna aplaTIT KARtoy?", "Iltimos, ikki kilogramm bering. Karta bilan to'lasam bo'ladimi?"],
    ["Как дела? — Хорошо, спасибо. А у вас?", "kak diLA? — xaraSHO, spaSIba. a u VAS?", "Ishlar qalay? — Yaxshi, rahmat. O'zingizda-chi?"]
  ],
  words: [],
  dialog: {
    scene: "Kioskda suv va non olasiz (1–4-kunlar mavzulari).",
    roles: ["Siz", "Sotuvchi"],
    lines: [
      [1, "Добрый день! Что вам нужно?", "DObriy den! shto vam NUJna?", "Xayrli kun! Sizga nima kerak?"],
      [0, "Здравствуйте! У вас есть вода и хлеб?", "ZDRAstvuyte! u VAS yest vaDA i xlyep?", "Assalomu alaykum! Sizda suv va non bormi?"],
      [1, "Да, есть. Семьдесят рублей.", "da, yest. SYEmdisyat rubLYEY.", "Ha, bor. Yetmish rubl."],
      [0, "Можно оплатить картой?", "MOJna aplaTIT KARtoy?", "Karta bilan to'lasam bo'ladimi?"],
      [1, "Нет, извините.", "nyet, izviNIte.", "Yo'q, kechirasiz."],
      [0, "Хорошо. Вот деньги. Чек, пожалуйста.", "xaraSHO. vot DYENgi. chek, paJAlusta.", "Yaxshi. Mana pul. Chek bering, iltimos."],
      [1, "Пожалуйста. До свидания!", "paJAlusta. da sviDAniya!", "Marhamat. Xayr!"],
      [0, "До свидания!", "da sviDAniya!", "Xayr!"]
    ]
  },
  fill: [
    ["Меня ___ Анвар.", "зовут", ["зовут", "дела", "время"], "Mening ismim Anvar."],
    ["___ это стоит?", "Сколько", ["Сколько", "Какой", "Почему"], "Bu qancha turadi?"],
    ["Мне двадцать пять ___.", "лет", ["лет", "часов", "минут"], "Men 25 yoshdaman."],
    ["Сейчас два ___.", "часа", ["часа", "час", "часов"], "Hozir soat ikki."],
    ["У вас ___ вода?", "есть", ["есть", "был", "дела"], "Sizda suv bormi?"]
  ],
  tip: {
    title: "Takrorlash: 3 asosiy qolip",
    points: [
      ["«Меня зовут…» (ism), «Мне … лет» (yosh), «Я из…» (qayerdan) — o'zingizni tanishtirish uchun yetarli."],
      ["«Можно + fe'l?» (…mumkinmi?) va «У вас есть…?» (…bormi?) — do'kon, kafe, hamma joyda ishlaydi.", "Можно посмотреть? У вас есть вода?", "Ko'rsam bo'ladimi? Sizda suv bormi?"],
      ["Tushunmasangiz uyalmang: «Повторите, пожалуйста» va «Говорите медленно, пожалуйста» — eng foydali ikki gap."]
    ]
  }
};
