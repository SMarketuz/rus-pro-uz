window.DAYS = window.DAYS || {};

DAYS[26] = {
  goal: "Poyezd va samolyot: chipta, reys, platforma, yuk va kechikish.",
  phrases: [
    ["Один билет до Москвы, пожалуйста.", "aDIN biLYET da maskVY, paJAlusta.", "Moskvagacha bitta chipta, iltimos."],
    ["Туда и обратно.", "tuDA i abRATna.", "Borib-kelish (ikki tomonlama)."],
    ["Во сколько отправление?", "va SKOLka atpraVLYEniye?", "Jo'nash soat nechada?"],
    ["С какого пути отправляется поезд?", "s kaKOva puTI atpraVLYAyetsa POyist?", "Poyezd qaysi yo'ldan jo'naydi?"],
    ["Где регистрация на рейс?", "gde rigistRAtsiya na reys?", "Reysga ro'yxatdan o'tish qayerda?"],
    ["Где выход на посадку?", "gde VYxat na paSATku?", "Samolyotga chiqish eshigi qayerda?"],
    ["Рейс задерживается?", "reys zaDYERjivayetsa?", "Reys kechikyaptimi?"],
    ["Это мой багаж.", "Eta moy baGASH.", "Bu mening yukim."],
    ["Где камера хранения?", "gde KAmira xraNYEniya?", "Yuk saqlash xonasi qayerda?"],
    ["Я опоздал на поезд.", "ya apazDAL na POyist.", "Men poyezdga kech qoldim."]
  ],
  words: [
    ["поезд", "POyist", "poyezd"],
    ["рейс", "reys", "reys"],
    ["багаж", "baGASH", "yuk"],
    ["посадка", "paSATka", "samolyotga chiqish"],
    ["платформа", "platFORma", "platforma"],
    ["задержка", "zaDYERshka", "kechikish"]
  ],
  dialog: {
    scene: "Vokzal kassasida chipta olasiz.",
    roles: ["Siz", "Kassir"],
    lines: [
      [0, "Здравствуйте! Один билет до Москвы, пожалуйста.", "ZDRAstvuyte! aDIN biLYET da maskVY, paJAlusta.", "Assalomu alaykum! Moskvagacha bitta chipta, iltimos."],
      [1, "На какое число?", "na kaKOye CHISlo?", "Qaysi sanaga?"],
      [0, "На завтра. Во сколько отправление?", "na ZAftra. va SKOLka atpraVLYEniye?", "Ertagaga. Jo'nash soat nechada?"],
      [1, "В девять вечера. Туда и обратно?", "v DYEvit VYEchira. tuDA i abRATna?", "Kechqurun to'qqizda. Borib-kelishmi?"],
      [0, "Нет, только туда.", "nyet, TOlka tuDA.", "Yo'q, faqat borish."],
      [1, "Две тысячи рублей.", "dvye TIsyachi rubLYEY.", "Ikki ming rubl."],
      [0, "Можно оплатить картой?", "MOJna aplaTIT KARtoy?", "Karta bilan to'lasam bo'ladimi?"],
      [1, "Да. Платформа пять.", "da. platFORma pyat.", "Ha. Beshinchi platforma."],
      [0, "Спасибо!", "spaSIba!", "Rahmat!"]
    ]
  },
  fill: [
    ["Один ___ до Москвы.", "билет", ["билет", "билета", "билету"], "Moskvagacha bitta chipta."],
    ["Туда и ___.", "обратно", ["обратно", "налево", "прямо"], "Borib-kelish."],
    ["Где выход на ___?", "посадку", ["посадку", "посадка", "посадки"], "Samolyotga chiqish qayerda?"],
    ["Я ___ на поезд.", "опоздал", ["опоздал", "опоздать", "опоздаю"], "Men poyezdga kech qoldim."]
  ],
  tip: {
    title: "«до», «на», o'tgan zamon",
    points: [
      ["«до + joy» — …gacha: до Москвы, до Самары. «на + sana/vaqt» — …ga: на завтра, на пятницу.", "Билет на пятницу.", "Juma kuniga chipta."],
      ["«Туда» — u yoqqa, «обратно» — qaytish, «туда и обратно» — borib-kelish."],
      ["O'tgan zamon jinsga qarab: Я опоздал (erkak) / Я опоздала (ayol). Kechiksangiz darhol kassa yoki xodimdan so'rang: «Что делать?»"]
    ]
  }
};

DAYS[27] = {
  goal: "Shikoyat qilish: buzilgan narsani qaytarish, almashtirish, noto'g'ri buyurtmani tuzatish.",
  phrases: [
    ["Извините, это не работает.", "izviNIte, Eta ni raBOtayet.", "Kechirasiz, bu ishlamayapti."],
    ["Я хочу вернуть это.", "ya xaCHU virNUT Eta.", "Men buni qaytarmoqchiman."],
    ["Вот чек.", "vot chek.", "Mana chek."],
    ["Можно обменять?", "MOJna abmiNYAT?", "Almashtirsam bo'ladimi?"],
    ["Можно вернуть деньги?", "MOJna virNUT DYENgi?", "Pulni qaytarsam bo'ladimi?"],
    ["Это сломалось.", "Eta slaMAlas.", "Bu buzildi."],
    ["Мне дали не тот заказ.", "mne DAli ni tot zaKAS.", "Menga boshqa buyurtma berishdi."],
    ["Позовите, пожалуйста, начальника.", "pazaVIte, paJAlusta, naCHALnika.", "Iltimos, boshliqni chaqiring."],
    ["Это неправильно. Давайте проверим.", "Eta nipraVIlna. daVAYte praVYErim.", "Bu noto'g'ri. Keling, tekshiramiz."],
    ["Спасибо, что решили проблему.", "spaSIba, shto rishYli prabLYEmu.", "Muammoni hal qilgani uchun rahmat."]
  ],
  words: [
    ["проблема", "prabLYEma", "muammo"],
    ["возврат", "vazVRAT", "qaytarish"],
    ["заказ", "zaKAS", "buyurtma"],
    ["сломано", "slaMAna", "buzilgan"],
    ["правильно", "praVIlna", "to'g'ri"],
    ["неправильно", "nipraVIlna", "noto'g'ri"]
  ],
  dialog: {
    scene: "Do'konda buzilgan telefon zaryadkasini qaytarasiz.",
    roles: ["Siz", "Sotuvchi"],
    lines: [
      [0, "Извините, это не работает.", "izviNIte, Eta ni raBOtayet.", "Kechirasiz, bu ishlamayapti."],
      [1, "Здравствуйте! У вас есть чек?", "ZDRAstvuyte! u VAS yest chek?", "Assalomu alaykum! Chekingiz bormi?"],
      [0, "Да, вот чек.", "da, vot chek.", "Ha, mana chek."],
      [1, "Когда вы это купили?", "kagDA vy Eta kuPIli?", "Buni qachon sotib oldingiz?"],
      [0, "Вчера.", "fchiRA.", "Kecha."],
      [1, "Хорошо. Можно обменять или вернуть деньги.", "xaraSHO. MOJna abmiNYAT Ili virNUT DYENgi.", "Yaxshi. Almashtirish yoki pulni qaytarish mumkin."],
      [0, "Можно вернуть деньги?", "MOJna virNUT DYENgi?", "Pulni qaytarsam bo'ladimi?"],
      [1, "Конечно. Подождите, пожалуйста.", "kaNYEshna. padaJDIte, paJAlusta.", "Albatta. Iltimos, kuting."],
      [0, "Спасибо, что решили проблему.", "spaSIba, shto rishYli prabLYEmu.", "Muammoni hal qilgani uchun rahmat."]
    ]
  },
  fill: [
    ["Вот ___.", "чек", ["чек", "чека", "чеку"], "Mana chek."],
    ["Можно ___ деньги?", "вернуть", ["вернуть", "вернул", "возврат"], "Pulni qaytarsam bo'ladimi?"],
    ["Мне дали не ___ заказ.", "тот", ["тот", "та", "то"], "Menga boshqa buyurtma berishdi."],
    ["Позовите, пожалуйста, ___.", "начальника", ["начальника", "начальник", "начальнику"], "Boshliqni chaqiring."]
  ],
  tip: {
    title: "Muloyim shikoyat",
    points: [
      ["Shikoyatni «Извините…» yoki «К сожалению…» bilan boshlang va faktni ayting: «Это не работает», «Мне дали не тот заказ». Baqirmasdan ham eshitiladi.", "К сожалению, это сломалось.", "Afsuski, bu buzildi."],
      ["Eng foydali ikki so'z: «вернуть» (qaytarmoq) va «обменять» (almashtirmoq). Chekni saqlang: «Вот чек»."],
      ["«Давайте проверим» — «keling, tekshiramiz»: kelishmovchilikni yumshatadigan ibora."]
    ]
  }
};

DAYS[28] = {
  goal: "Mehmonga borish, bayram tabriklari, taom va taklifga javob berish.",
  phrases: [
    ["С праздником!", "s PRAZnikam!", "Bayramingiz bilan!"],
    ["С днём рождения!", "s dnYOM razhDYEniya!", "Tug'ilgan kuningiz bilan!"],
    ["Спасибо за приглашение.", "spaSIba za priglaSHEniye.", "Taklif uchun rahmat."],
    ["Можно войти?", "MOJna vayTI?", "Kirsam bo'ladimi?"],
    ["Это вам.", "Eta vam.", "Bu sizga (sovg'a)."],
    ["Очень вкусно, спасибо!", "Ochin FKUSna, spaSIba!", "Juda mazali, rahmat!"],
    ["Можно ещё воды?", "MOJna yeSHO vaDY?", "Yana suv bo'ladimi?"],
    ["Я не пью алкоголь.", "ya ni pyu alkaGOL.", "Men alkogol ichmayman."],
    ["Приятного аппетита!", "priYATnava apiTIta!", "Yoqimli ishtaha!"],
    ["Спасибо за гостеприимство.", "spaSIba za gastipriIMstva.", "Mehmondorchilik uchun rahmat."]
  ],
  words: [
    ["праздник", "PRAZnik", "bayram"],
    ["подарок", "paDArak", "sovg'a"],
    ["гость", "gost", "mehmon"],
    ["стол", "stol", "stol"],
    ["тост", "tost", "tost"],
    ["торт", "tort", "tort"]
  ],
  dialog: {
    scene: "Hamkasbingizning tug'ilgan kuniga mehmonga borasiz.",
    roles: ["Siz", "Mezbon"],
    lines: [
      [1, "Здравствуйте! Заходите, пожалуйста.", "ZDRAstvuyte! zaHOdite, paJAlusta.", "Assalomu alaykum! Kiring, marhamat."],
      [0, "Здравствуйте! С днём рождения! Это вам.", "ZDRAstvuyte! s dnYOM razhDYEniya! Eta vam.", "Assalomu alaykum! Tug'ilgan kuningiz bilan! Bu sizga."],
      [1, "Спасибо большое! Проходите к столу.", "spaSIba balSHOye! praHOdite k staLU.", "Katta rahmat! Stolga o'ting."],
      [0, "Спасибо за приглашение!", "spaSIba za priglaSHEniye!", "Taklif uchun rahmat!"],
      [1, "Угощайтесь! Хотите вина?", "ugaSHAYtis! xaTItye viNA?", "Marhamat, tortinmang! Vino xohlaysizmi?"],
      [0, "Нет, спасибо. Я не пью алкоголь.", "nyet, spaSIba. ya ni pyu alkaGOL.", "Yo'q, rahmat. Men alkogol ichmayman."],
      [1, "Хорошо. Чай?", "xaraSHO. chay?", "Yaxshi. Choy-chi?"],
      [0, "Да, пожалуйста. Очень вкусно! Можно ещё воды?", "da, paJAlusta. Ochin FKUSna! MOJna yeSHO vaDY?", "Ha, marhamat. Juda mazali! Yana suv bo'ladimi?"],
      [1, "Конечно!", "kaNYEshna!", "Albatta!"]
    ]
  },
  fill: [
    ["С ___ рождения!", "днём", ["днём", "день", "дня"], "Tug'ilgan kuningiz bilan!"],
    ["Это ___.", "вам", ["вам", "вас", "вы"], "Bu sizga."],
    ["Спасибо за ___.", "приглашение", ["приглашение", "приглашать", "приглашён"], "Taklif uchun rahmat."],
    ["Можно ещё ___?", "воды", ["воды", "вода", "водой"], "Yana suv bo'ladimi?"]
  ],
  tip: {
    title: "Tabrik va odob",
    points: [
      ["«С» + bayram: «С праздником!», «С днём рождения!», «С Новым годом!» — qo'shimcha fe'l kerak emas.", "С Новым годом!", "Yangi yil bilan!"],
      ["Rusiyzabonlar mehmonga bosh qo'l bilan bormaydi: tort, shirinlik yoki gul olib borish odat. Uyga kirishda poyabzalni yechish odatiy."],
      ["Alkogoldan odobli rad: «Нет, спасибо, я не пью». Qo'shimcha tushuntirish shart emas; choy yoki sok so'rang."]
    ]
  }
};

DAYS[29] = {
  goal: "O'z kundaligingiz haqida bog'lanib gapirish: odatlar, ish, oila, orzu.",
  phrases: [
    ["Я встаю в семь утра.", "ya fstaYU f syem utRA.", "Men ertalab yettida turaman."],
    ["Я работаю с восьми до пяти.", "ya raBOtayu s vasMI da pyaTI.", "Men sakkizdan beshgacha ishlayman."],
    ["Я обедаю в час.", "ya aBYEdayu f chas.", "Men soat birda tushlik qilaman."],
    ["После работы я иду домой.", "POsli raBOty ya iDU daMOY.", "Ishdan keyin uyga ketaman."],
    ["Вечером я учу русский язык.", "VYEchirom ya uCHU RUSski yaZYK.", "Kechqurun rus tilini o'rganaman."],
    ["Я живу в Москве.", "ya jiVU v maskVYE.", "Men Moskvada yashayman."],
    ["Я звоню семье каждый день.", "ya zvaNYU simYE KAJdiy den.", "Men har kuni oilamga qo'ng'iroq qilaman."],
    ["По выходным я отдыхаю.", "pa vyhadNYM ya atdyXAyu.", "Dam olish kunlari dam olaman."],
    ["Я скучаю по дому.", "ya skuCHAyu pa DOmu.", "Men uyni (yurtni) sog'inaman."],
    ["Я хочу говорить по-русски свободно.", "ya xaCHU gavaRIT pa-RUSski svaBODna.", "Men ruscha erkin gapirishni xohlayman."]
  ],
  words: [
    ["день", "den", "kun"],
    ["вечер", "VYEchir", "kechqurun"],
    ["ночь", "noch", "tun"],
    ["жить", "jit", "yashamoq"],
    ["отдыхать", "atdyXAT", "dam olmoq"],
    ["обедать", "aBYEdat", "tushlik qilmoq"]
  ],
  dialog: {
    scene: "Yangi tanish sizning kuningiz haqida so'raydi.",
    roles: ["Siz", "Tanish"],
    lines: [
      [1, "Расскажите, как проходит ваш день?", "raskaJIte, kak praHOdit vash den?", "Ayting-chi, kuningiz qanday o'tadi?"],
      [0, "Я встаю в семь утра. Потом иду на работу.", "ya fstaYU f syem utRA. paTOM iDU na raBOtu.", "Men ertalab yettida turaman. Keyin ishga ketaman."],
      [1, "Когда вы работаете?", "kagDA vy raBOtayete?", "Qachon ishlaysiz?"],
      [0, "Я работаю с восьми до пяти.", "ya raBOtayu s vasMI da pyaTI.", "Men sakkizdan beshgacha ishlayman."],
      [1, "А вечером?", "a VYEchirom?", "Kechqurun-chi?"],
      [0, "Вечером я учу русский язык.", "VYEchirom ya uCHU RUSski yaZYK.", "Kechqurun rus tilini o'rganaman."],
      [1, "Вы хорошо говорите!", "vy xaraSHO gavaRIte!", "Siz yaxshi gapirasiz!"],
      [0, "Спасибо! Я хочу говорить свободно.", "spaSIba! ya xaCHU gavaRIT svaBODna.", "Rahmat! Men erkin gapirishni xohlayman."]
    ]
  },
  fill: [
    ["Я ___ в Москве.", "живу", ["живу", "живёт", "жить"], "Men Moskvada yashayman."],
    ["Я работаю ___ восьми до пяти.", "с", ["с", "в", "на"], "Sakkizdan beshgacha ishlayman."],
    ["По выходным я ___.", "отдыхаю", ["отдыхаю", "отдыхает", "отдыхать"], "Dam olish kunlari dam olaman."],
    ["Вечером я ___ русский язык.", "учу", ["учу", "учит", "учить"], "Kechqurun rus tilini o'rganaman."]
  ],
  tip: {
    title: "«Я» + fe'l (-ю/-у) va vaqt",
    points: [
      ["«Я» bilan fe'l odatda «-ю» yoki «-у» bilan tugaydi: я работаю, я живу, я учу, я иду, я хочу.", "Я живу и работаю здесь.", "Men shu yerda yashayman va ishlayman."],
      ["Vaqt: «в семь» (yettida), «с восьми до пяти» (sakkizdan beshgacha), «по выходным» (dam olish kunlari), «каждый день» (har kuni)."],
      ["Bugun mustaqil mashq: shu 10 jumlani o'z hayotingizga moslab, ovoz chiqarib 2 daqiqa gapirib ko'ring."]
    ]
  }
};

DAYS[30] = {
  goal: "Yakuniy takrorlash: butun kursdagi asosiy gaplarni bog'lab ayting.",
  phrases: [
    ["Здравствуйте! Меня зовут Анвар. Я из Узбекистана. Я приехал работать.", "ZDRAstvuyte! minYA zaVUT anVAR. ya iz uzbikisTAna. ya priYEhal raBOtat.", "Assalomu alaykum! Ismim Anvar. Men O'zbekistondanman. Ishlash uchun keldim."],
    ["Извините, я плохо говорю по-русски. Говорите медленно, пожалуйста.", "izviNIte, ya PLOxa gavaRYU pa-RUSski. gavaRIte MYEDlinna, paJAlusta.", "Kechirasiz, ruscha yomon gapiraman. Iltimos, sekinroq gapiring."],
    ["Сколько это стоит? Можно оплатить картой?", "SKOLka Eta STOit? MOJna aplaTIT KARtoy?", "Bu qancha turadi? Karta bilan to'lasam bo'ladimi?"],
    ["Мне нужно на вокзал. Остановите здесь, пожалуйста.", "mne NUJna na vagZAL. astanaVIte zdyes, paJAlusta.", "Menga vokzalga kerak. Iltimos, shu yerda to'xtating."],
    ["Я ищу работу и квартиру. Сколько стоит аренда?", "ya iSHU raBOtu i kvarTIru. SKOLka STOit aRYENda?", "Men ish va kvartira qidiryapman. Ijara qancha?"],
    ["Мне плохо. Мне нужен врач. Где аптека?", "mne PLOxa. mne NUjen vrach. gde apTYEka?", "Menga yomon. Menga shifokor kerak. Dorixona qayerda?"],
    ["Я хочу открыть счёт. Мне нужна SIM-карта.", "ya xaCHU atkRYT shot. mne nuJNA sim-KARta.", "Men hisob ochmoqchiman. Menga SIM-karta kerak."],
    ["Мне нужна помощь! Вы можете позвонить?", "mne nuJNA POmash! vy MOjite pazvaNIT?", "Menga yordam kerak! Qo'ng'iroq qila olasizmi?"]
  ],
  words: [],
  dialog: {
    scene: "Yangi hamkasb bilan birinchi suhbat — butun kurs mavzulari.",
    roles: ["Siz", "Igor"],
    lines: [
      [1, "Привет! Меня зовут Игорь. А как вас зовут?", "priVYET! minYA zaVUT IGar'. a kak vas zaVUT?", "Salom! Mening ismim Igor. Sizning ismingiz nima?"],
      [0, "Здравствуйте! Меня зовут Анвар. Приятно познакомиться.", "ZDRAstvuyte! minYA zaVUT anVAR. priYATna paznaKOmitsa.", "Assalomu alaykum! Ismim Anvar. Tanishganimdan xursandman."],
      [1, "Вы откуда?", "vy atKUda?", "Siz qayerdansiz?"],
      [0, "Я из Узбекистана. Я приехал работать.", "ya iz uzbikisTAna. ya priYEhal raBOtat.", "Men O'zbekistondanman. Ishlash uchun keldim."],
      [1, "Вы хорошо говорите по-русски!", "vy xaraSHO gavaRIte pa-RUSski!", "Siz ruscha yaxshi gapirasiz!"],
      [0, "Спасибо! Я учу русский язык уже тридцать дней.", "spaSIba! ya uCHU RUSski yaZYK uJE TRItsat dnyey.", "Rahmat! Men rus tilini o'ttiz kundan beri o'rganyapman."],
      [1, "Молодец! Пойдём в кафе после работы?", "malaDYETS! paYDYOM f kaFE POsli raBOty?", "Barakalla! Ishdan keyin kafega boramizmi?"],
      [0, "С удовольствием!", "s udavOLstviyem!", "Mamnuniyat bilan!"],
      [1, "Отлично. Увидимся!", "atLIchna. uVIdimsa!", "A'lo. Ko'rishguncha!"]
    ]
  },
  fill: [
    ["Я ___ работать.", "приехал", ["приехал", "приехать", "приезжаю"], "Men ishlash uchun keldim."],
    ["Меня ___ Анвар.", "зовут", ["зовут", "зовёт", "звать"], "Ismim Anvar."],
    ["Я учу русский язык ___ тридцать дней.", "уже", ["уже", "там", "потом"], "O'ttiz kundan beri rus tilini o'rganyapman."],
    ["Пойдём ___ кафе?", "в", ["в", "на", "из"], "Kafega boramizmi?"],
    ["___ вас зовут?", "Как", ["Как", "Где", "Что"], "Ismingiz nima?"]
  ],
  tip: {
    title: "Kursdan keyin nima qilish kerak",
    points: [
      ["Har kuni 10 daqiqa kartochkalarni takrorlang: takrorlash tizimi kerakli so'zlarni o'zi qaytaradi."],
      ["Real hayotda har kuni kamida 3 ta ruscha gap ayting: salomlashish, «Сколько стоит?», «Спасибо». Xato qilishdan qo'rqmang — rusiyzabonlar sizni tushunishga harakat qiladi.", "Спасибо! До свидания!", "Rahmat! Xayr!"],
      ["Tushunmasangiz: «Повторите, пожалуйста» va «Говорите медленно, пожалуйста». Bu ikki gap sizni hamma joyda qutqaradi. Omad! 🇷🇺"]
    ]
  }
};
