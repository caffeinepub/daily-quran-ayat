// ============================================================
// Local fallback Ayat data — used when backend canister is offline
// Mirrors the backend ayatArray exactly so navigation works offline
// ============================================================

export interface LocalAyat {
  surahNumber: bigint;
  surahName: string;
  surahNameArabic: string;
  ayatNumber: bigint;
  arabic: string;
  english: string;
  hindi: string;
  urdu: string;
}

export const LOCAL_AYAT: LocalAyat[] = [
  // Al-Fatiha (The Opening)
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 1n,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    english:
      "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    hindi: "सनग्रहपालक एवं दयालु अल्लाह के नाम से।",
    urdu: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 2n,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    english: "All praise is due to Allah, Lord of the worlds—",
    hindi: "सब स्तुति अल्लाह के लिए है, जो सारे संसार का पालनहार है।",
    urdu: "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 3n,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    english: "The Entirely Merciful, the Especially Merciful",
    hindi: "वह अत्यंत दयालु और कृपालु है।",
    urdu: "بلکل مہربان, رحم والا ہے۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 4n,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    english: "Sovereign of the Day of Recompense.",
    hindi: "वह प्रतिफल के दिन का मालिक है।",
    urdu: "جزاء و سزا کے دن کا مالک ہے۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 5n,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    english: "It is You we worship and You we ask for help.",
    hindi: "हम केवल तुझी की पूजा करते हैं और तुझी से सहायता चाहते हैं।",
    urdu: "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد چاہتے ہیں۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 6n,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    english: "Guide us to the straight path—",
    hindi: "हमें सीधा मार्ग दिखा।",
    urdu: "ہمیں سیدھا راستہ دکھا۔",
  },
  {
    surahNumber: 1n,
    surahName: "Al-Fatiha",
    surahNameArabic: "الفاتحة",
    ayatNumber: 7n,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    english:
      "The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.",
    hindi:
      "उनका मार्ग, जिन पर तूने कृपा की; उनका नहीं, जो कुपथ में पड़े हैं और न ही उनका, जो भटके हुए हैं।",
    urdu: "کُن لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا راستہ جن پر غضب کیا گیا اور نہ اُن گمراہوں کا۔",
  },
  // Al-Baqarah (The Cow) — selected key verses
  {
    surahNumber: 2n,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayatNumber: 255n,
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    english:
      "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    hindi:
      "अल्लाह, उसके सिवा कोई पूज्य नहीं, वही जीवित रहनेवाला और सबका संरक्षक है। उसे न ऊँघ आती है और न नींद। आसमानों और ज़मीन में जो कुछ है, वह उसी का है।",
    urdu: "اللہ وہ ہے جس کے سوا کوئی معبود نہیں، زندہ رہنے والا، سب کا سنبھالنے والا ہے۔ اسے نہ اونگھ آتی ہے اور نہ نیند۔ آسمانوں اور زمین میں جو کچھ ہے سب اسی کا ہے۔",
  },
  {
    surahNumber: 2n,
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayatNumber: 286n,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
    english:
      "Allah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned.",
    hindi:
      "अल्लाह किसी भी जीव को उसकी सामर्थ्य से अधिक बोझ नहीं डालता। उसे वही मिलेगा जो उसने कमाया और उसी पर होगा जो उसने किया।",
    urdu: "اللہ کسی جان پر اس کی وسعت سے زیادہ بوجھ نہیں ڈالتا۔ اس کو وہی ملے گا جو اس نے کمایا اور اسی پر ہوگا جو اس نے کیا۔",
  },
  // Al-Imran
  {
    surahNumber: 3n,
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayatNumber: 26n,
    arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ",
    english:
      "Say, 'O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will.'",
    hindi:
      "कहो, 'हे अल्लाह, सल्तनत के मालिक, तू जिसे चाहे सल्तनत दे और जिससे चाहे सल्तनत ले ले।'",
    urdu: "کہہ دو: اے اللہ! ملک و سلطنت کے مالک، تو جسے چاہے سلطنت دے اور جس سے چاہے سلطنت چھین لے۔",
  },
  // Al-Kahf
  {
    surahNumber: 18n,
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayatNumber: 110n,
    arabic: "قُلْ إِنَّمَا أَنَا بَشَرٌ مِثْلُكُمْ يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ",
    english:
      "Say, 'I am only a man like you, to whom has been revealed that your god is one God.'",
    hindi:
      "कहो, 'मैं तो तुम्हारे ही समान एक मनुष्य हूँ। मुझ पर यह प्रकाशना होती है कि तुम्हारा पूज्य एक ही है।'",
    urdu: "کہہ دو: میں تو تمہارے ہی جیسا انسان ہوں، میری طرف وحی کی جاتی ہے کہ تمہارا معبود ایک ہی معبود ہے۔",
  },
  // An-Nasr
  {
    surahNumber: 110n,
    surahName: "An-Nasr",
    surahNameArabic: "النصر",
    ayatNumber: 1n,
    arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
    english: "When the victory of Allah has come and the conquest,",
    hindi: "जब अल्लाह की मदद और विजय आएगी,",
    urdu: "جب اللہ کی مدد اور فتح آجائے گی،",
  },
  {
    surahNumber: 110n,
    surahName: "An-Nasr",
    surahNameArabic: "النصر",
    ayatNumber: 2n,
    arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
    english:
      "And you see the people entering into the religion of Allah in multitudes,",
    hindi: "और तुम देखोगे कि लोग जत्थों में अल्लाह के धर्म में प्रवेश कर रहे हैं,",
    urdu: "اور تم دیکھو گے کہ لوگ جوق در جوق اللہ کے دین میں داخل ہو رہے ہیں،",
  },
  {
    surahNumber: 110n,
    surahName: "An-Nasr",
    surahNameArabic: "النصر",
    ayatNumber: 3n,
    arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
    english:
      "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.",
    hindi:
      "तो तुम अपने मालिक की प्रशंसा के साथ तस्बीह पढ़ो और उससे क्षमा माँगो, निश्चित ही वह तौबा क़बूल करने वाला है।",
    urdu: "پھر اپنے رب کی حمد کے ساتھ تسبیح بیان کرو اور اس سے مغفرت مانگو۔ بے شک وہ بڑا ہی توبہ قبول کرنے والا ہے۔",
  },
  // Al-Masad
  {
    surahNumber: 111n,
    surahName: "Al-Masad",
    surahNameArabic: "المسد",
    ayatNumber: 1n,
    arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
    english: "May the hands of Abu Lahab be ruined, and ruined is he.",
    hindi: "अबू लहब के दोनों हाथ टूट जाएँ और वह तबाह हो!",
    urdu: "ابو لہب کے دونوں ہاتھ ٹوٹ جائیں اور وہ برباد ہوجائے۔",
  },
  // Al-Ikhlas
  {
    surahNumber: 112n,
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayatNumber: 1n,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    english: "Say, 'He is Allah, [who is] One,'",
    hindi: "कहो, 'वह अल्लाह, बस एक है।'",
    urdu: "کہہ دو: وہ اللہ ایک ہے،",
  },
  {
    surahNumber: 112n,
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayatNumber: 2n,
    arabic: "اللَّهُ الصَّمَدُ",
    english: "Allah, the Eternal Refuge.",
    hindi: "अल्लाह सबसे निरपेक्ष और बेनियाज़ है।",
    urdu: "اللہ بے نیاز ہے۔",
  },
  {
    surahNumber: 112n,
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayatNumber: 3n,
    arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
    english: "He neither begets nor is born,",
    hindi: "न उसकी कोई संतान है और न वह किसी की संतान है।",
    urdu: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔",
  },
  {
    surahNumber: 112n,
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayatNumber: 4n,
    arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    english: "Nor is there to Him any equivalent.",
    hindi: "और न ही उसके बराबर कोई है।",
    urdu: "اس کے برابر کوئی بھی نہیں ہے۔",
  },
  // Al-Falaq
  {
    surahNumber: 113n,
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayatNumber: 1n,
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    english: "Say, 'I seek refuge in the Lord of daybreak'",
    hindi: "कहो, 'मैं सुबह के मालिक की शरण चाहता हूँ।'",
    urdu: "کہہ دو: میں صبح کے رب کی پناہ لیتا ہوں۔",
  },
  {
    surahNumber: 113n,
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayatNumber: 2n,
    arabic: "مِنْ شَرِّ مَا خَلَقَ",
    english: "From the evil of that which He created,",
    hindi: "उन सभी चीज़ों की बुराई से, जो उसने बनाई हैं,",
    urdu: "اس کی پیدا کی ہوئی چیزوں کے شر سے،",
  },
  {
    surahNumber: 113n,
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayatNumber: 3n,
    arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
    english: "And from the evil of darkness when it settles,",
    hindi: "और जब रात का अँधेरा छा जाए तो उसकी बुराई से,",
    urdu: "اور رات کی تاریکی کے شر سے جب وہ چھا جائے،",
  },
  {
    surahNumber: 113n,
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayatNumber: 4n,
    arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
    english: "And from the evil of the blowers in knots,",
    hindi: "और गाँठों में फूँकने वालों की बुराई से,",
    urdu: "اور گرہوں میں پھونکنے والیوں کے شر سے،",
  },
  {
    surahNumber: 113n,
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayatNumber: 5n,
    arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    english: "And from the evil of an envier when he envies.",
    hindi: "और ईर्ष्यालु की बुराई से, जब वह ईर्ष्या करे।",
    urdu: "اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔",
  },
  // Al-Nas
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 1n,
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    english: "Say, 'I seek refuge in the Lord of mankind,'",
    hindi: "कहो, 'मैं मानवता के पालनहार से शरण चाहता हूँ।'",
    urdu: "کہہ دو: میں ہر انسان کے رب کی پناہ لیتا ہوں،",
  },
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 2n,
    arabic: "مَلِكِ النَّاسِ",
    english: "The Sovereign of mankind.",
    hindi: "मानवता के राजा।",
    urdu: "ہر انسان کے بادشاہ کی پناہ لیتا ہوں۔",
  },
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 3n,
    arabic: "إِلَٰهِ النَّاسِ",
    english: "The God of mankind,",
    hindi: "मानवता के भगवान।",
    urdu: "ہر انسان کے خدا کی پناہ لیتا ہوں۔",
  },
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 4n,
    arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
    english: "From the evil of the retreating whisperer,",
    hindi: "उस कुचक्री की बुराई से जो पीछे हट जाता है,",
    urdu: "اس وسوسہ ڈالنے والے کے شر سے جو چھپ جاتا ہے،",
  },
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 5n,
    arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
    english: "Who whispers [evil] into the breasts of mankind,",
    hindi: "जो लोगों के दिलों में वसवसा डालता है,",
    urdu: "جو لوگوں کے دلوں میں وسوسے ڈالتا ہے،",
  },
  {
    surahNumber: 114n,
    surahName: "An-Nas",
    surahNameArabic: "الناس",
    ayatNumber: 6n,
    arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
    english: "Whether among the jinn or among men.",
    hindi: "चाहे जिन्नों में से हो या इंसानों में से।",
    urdu: "خواہ جنوں میں سے ہو یا انسانوں میں سے۔",
  },
  // Al-Kawthar
  {
    surahNumber: 108n,
    surahName: "Al-Kawthar",
    surahNameArabic: "الكوثر",
    ayatNumber: 1n,
    arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
    english: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
    hindi: "निश्चय ही हमने आपको कौसर दिया है।",
    urdu: "ہم نے تمہیں کوثر عطا کیا ہے۔",
  },
  {
    surahNumber: 108n,
    surahName: "Al-Kawthar",
    surahNameArabic: "الكوثر",
    ayatNumber: 2n,
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
    english: "So pray to your Lord and sacrifice [to Him alone].",
    hindi: "तो अपने पालनहार के लिए नमाज़ पढ़ो और क़ुरबानी करो।",
    urdu: "پس تم اپنے رب کے لیے نماز پڑھو اور قربانی کرو۔",
  },
  {
    surahNumber: 108n,
    surahName: "Al-Kawthar",
    surahNameArabic: "الكوثر",
    ayatNumber: 3n,
    arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    english: "Indeed, your enemy is the one cut off.",
    hindi: "निश्चय ही तुम्हारा शत्रु ही निःसंतान होगा।",
    urdu: "بے شک تمہارا دشمن ہی بے نسل ہے۔",
  },
  // Al-Qari'ah
  {
    surahNumber: 101n,
    surahName: "Al-Qari'ah",
    surahNameArabic: "القارعة",
    ayatNumber: 1n,
    arabic: "الْقَارِعَةُ",
    english: "The Striking Calamity —",
    hindi: "महाघात (प्रलय)!",
    urdu: "قیامت!",
  },
  {
    surahNumber: 101n,
    surahName: "Al-Qari'ah",
    surahNameArabic: "القارعة",
    ayatNumber: 2n,
    arabic: "مَا الْقَارِعَةُ",
    english: "What is the Striking Calamity?",
    hindi: "महाघात क्या है?",
    urdu: "کیا ہے وہ قیامت؟",
  },
  {
    surahNumber: 101n,
    surahName: "Al-Qari'ah",
    surahNameArabic: "القارعة",
    ayatNumber: 3n,
    arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
    english: "And what can make you know what is the Striking Calamity?",
    hindi: "और तुम्हें क्या पता, महाघात क्या है?",
    urdu: "اور آپ کو کیا معلوم کہ وہ قیامت کیا ہے؟",
  },
];

export const LOCAL_TOTAL = LOCAL_AYAT.length;

export function getLocalAyatByIndex(index: bigint): LocalAyat {
  const i = Number(index) % LOCAL_AYAT.length;
  return LOCAL_AYAT[i];
}
