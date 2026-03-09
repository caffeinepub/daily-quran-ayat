import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";

actor {
  type Ayat = {
    surahNumber : Nat;
    surahName : Text;
    surahNameArabic : Text;
    ayatNumber : Nat;
    arabic : Text;
    english : Text;
    hindi : Text;
    urdu : Text;
  };

  public query ({ caller }) func getTotalAyat() : async Nat {
    ayatArray.size();
  };

  public query ({ caller }) func getDayIndex() : async Int {
    Time.now() / 86_400_000_000_000;
  };

  func getTodayIndex() : Nat {
    Int.abs(Time.now() / 86_400_000_000_000) % ayatArray.size();
  };

  public query ({ caller }) func getTodayAyat() : async Ayat {
    ayatArray[getTodayIndex()];
  };

  public query ({ caller }) func getAyatByIndex(index : Nat) : async Ayat {
    ayatArray[index % ayatArray.size()];
  };

  let ayatArray : [Ayat] = [
    // Al-Fatiha (The Opening)
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 1;
      arabic = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
      english = "In the name of Allah, the Entirely Merciful, the Especially Merciful.";
      hindi = "सनग्रहपालक एवं दयालु अल्लाह के नाम से।";
      urdu = "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 2;
      arabic = "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ";
      english = "All praise is due to Allah, Lord of the worlds—";
      hindi = "सब स्तुति अल्लाह के लिए है, जो सारे संसार का पालनहार है।";
      urdu = "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 3;
      arabic = "الرَّحْمَٰنِ الرَّحِيمِ";
      english = "The Entirely Merciful, the Especially Merciful";
      hindi = "वह परिपूर्ण दयावान है, अत्यन्त दयालु।";
      urdu = "بلکل مہربان, رحم والا ہے۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 4;
      arabic = "مَالِكِ يَوْمِ الدِّينِ";
      english = "Sovereign of the Day of Recompense.";
      hindi = "वह प्रतिफल के दिन का मालिक है।";
      urdu = "جزاء و سزا کے دن کا مالک ہے۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 5;
      arabic = "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ";
      english = "It is You we worship and You we ask for help.";
      hindi = "हम केवल तुझी की पूजा करते हैं और तुझी से सहायता चाहते हैं।";
      urdu = "ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد چاہتے ہیں۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 6;
      arabic = "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ";
      english = "Guide us to the straight path—";
      hindi = "हमें सीधा मार्ग दिखा।";
      urdu = "ہمیں سیدھا راستہ دکھا۔";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 7;
      arabic = "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ";
      english = "The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.";
      hindi = "उनका मार्ग, जिन पर तूने कृपा की; उनका नहीं, जो कुपथ में पड़े हैं और न ही उनका, जो भटके हुए हैं।";
      urdu = "کُن لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا راستہ جن پر غضب کیا گیا اور نہ اُن گمراہوں کا۔";
    },

    // Al-Baqarah (The Cow)
    {
      surahNumber = 2;
      surahName = "Al-Baqarah";
      surahNameArabic = "البقرة";
      ayatNumber = 255;
      arabic = "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...";
      english = "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...";
      hindi = "अल्लाह, उसके सिवा कोई पूज्य नहीं, वही जीवित रहनेवाला और सबका संरक्षक है...";
      urdu = "اللہ وہ ہے جس کے سوا کوئی معبود نہیں, زندہ رہنے والا, سب کا سنبھالنے والا ہے...";
    },
    {
      surahNumber = 2;
      surahName = "Al-Baqarah";
      surahNameArabic = "البقرة";
      ayatNumber = 286;
      arabic = "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا...";
      english = "Allah does not burden a soul beyond that it can bear...";
      hindi = "अल्लाह किसी भी जीव को उसकी सामर्थ्य से अधिक बोझ नहीं डालता...";
      urdu = "اللہ کسی جان پر اس کی وسعت سے زیادہ بوجھ نہیں ڈالتا...";
    },

    // Al-Ikhlas (Sincerity)
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 1;
      arabic = "قُلْ هُوَ اللَّهُ أَحَدٌ";
      english = "Say, \"He is Allah, [who is] One,";
      hindi = "कहो, 'वह अल्लाह, बस एक है।'";
      urdu = "کہہ دو: وہ اللہ ایک ہے،";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 2;
      arabic = "اللَّهُ الصَّمَدُ";
      english = "Allah, the Eternal Refuge.";
      hindi = "अल्लाह सब पर विजय पानेवाला है।";
      urdu = "اللہ سب پر غالب ہے۔";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 3;
      arabic = "لَمْ يَلِدْ وَلَمْ يُولَدْ";
      english = "He neither begets nor is born,";
      hindi = "वह पैदा नहीं करता और न ही पैदा किया जाता है।";
      urdu = "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 4;
      arabic = "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ";
      english = "Nor is there to Him any equivalent.";
      hindi = "और न ही उसके बराबर कोई है।";
      urdu = "اس کے برابر کوئی بھی نہیں ہے۔";
    },

    // Al-Nas (Mankind)
    {
      surahNumber = 114;
      surahName = "Al-Nas";
      surahNameArabic = "الناس";
      ayatNumber = 1;
      arabic = "قُلْ أَعُوذُ بِرَبِّ النَّاسِ";
      english = "Say, \"I seek refuge in the Lord of mankind,";
      hindi = "कहो, 'मैं मानवता के पालनहार से शरण चाहता हूँ।'";
      urdu = "کہہ دو: میں ہر انسان کے رب کی پناہ لیتا ہوں،";
    },
    {
      surahNumber = 114;
      surahName = "Al-Nas";
      surahNameArabic = "الناس";
      ayatNumber = 2;
      arabic = "مَلِكِ النَّاسِ";
      english = "The Sovereign of mankind.";
      hindi = "मानवता के राजा।";
      urdu = "ہر انسان کے بادشاہ کی پناہ لیتا ہوں۔";
    },
    {
      surahNumber = 114;
      surahName = "Al-Nas";
      surahNameArabic = "الناس";
      ayatNumber = 3;
      arabic = "إِلَٰهِ النَّاسِ";
      english = "The God of mankind,";
      hindi = "मानवता के भगवान।";
      urdu = "ہر انسان کے خدا کی پناہ لیتا ہوں۔";
    },

    // Short Surahs
    {
      surahNumber = 108;
      surahName = "Al-Kawthar";
      surahNameArabic = "الكوثر";
      ayatNumber = 1;
      arabic = "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ";
      english = "Indeed, We have granted you, [O Muhammad], al-Kawthar.";
      hindi = "निश्चय ही हमने आपको कोउथर दिया है।";
      urdu = "ہم نے تمہیں کوثر عطا کیا ہے۔";
    },
    {
      surahNumber = 108;
      surahName = "Al-Kawthar";
      surahNameArabic = "الكوثر";
      ayatNumber = 2;
      arabic = "فَصَلِّ لِرَبِّكَ وَانْحَرْ";
      english = "So pray to your Lord and sacrifice [to Him alone].";
      hindi = "तो अपने पालनहार के लिए नमाज़ पढ़ो और क़ुरबानी करो।";
      urdu = "پس تم اپنے رب کے لیے نماز پڑھو اور قربانی کرو۔";
    },
    {
      surahNumber = 108;
      surahName = "Al-Kawthar";
      surahNameArabic = "الكوثر";
      ayatNumber = 3;
      arabic = "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ";
      english = "Indeed, your enemy is the one cut off.";
      hindi = "निश्चय ही तुम्हारा शत्रु ही कटिक किया गया है।";
      urdu = "بے شک تمہارا دشمن ہی بے نسل ہے۔";
    },

    // Additional Ayat
    {
      surahNumber = 18;
      surahName = "Al-Kahf";
      surahNameArabic = "الكهف";
      ayatNumber = 110;
      arabic = "قُلْ إِنَّمَا أَنَا بَشَرٌ مِثْلُكُمْ...";
      english = "Say, \"I am only a man like you...";
      hindi = "कहो, 'मैं तो तुम्हारे ही समान एक मनुष्य हूँ...'";
      urdu = "کہہ دو: میں تو تمہارے ہی جیسا انسان ہوں...";
    },
    {
      surahNumber = 1;
      surahName = "Al-Fatiha";
      surahNameArabic = "الفاتحة";
      ayatNumber = 2;
      arabic = "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ";
      english = "All praise is due to Allah, Lord of the worlds";
      hindi = "सारी प्रशंसा अल्लाह के लिए है, जो सारे जहानों का पालनहार है।";
      urdu = "تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔";
    },
    {
      surahNumber = 2;
      surahName = "Al-Baqarah";
      surahNameArabic = "البقرة";
      ayatNumber = 255;
      arabic = "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...";
      english = "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...";
      hindi = "अल्लाह, उसके सिवा कोई पूज्य नहीं, वही जीवित रहनेवाला और सबका संरक्षक है...";
      urdu = "اللہ وہ ہے جس کے سوا کوئی معبود نہیں, زندہ رہنے والا, سب کا سنبھالنے والا ہے...";
    },
    {
      surahNumber = 2;
      surahName = "Al-Baqarah";
      surahNameArabic = "البقرة";
      ayatNumber = 286;
      arabic = "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا...";
      english = "Allah does not burden a soul beyond that it can bear...";
      hindi = "अल्लाह किसी भी जीव को उसकी सामर्थ्य से अधिक बोझ नहीं डालता...";
      urdu = "اللہ کسی جان پر اس کی وسعت سے زیادہ بوجھ نہیں ڈالتا...";
    },
    {
      surahNumber = 3;
      surahName = "Al-Imran";
      surahNameArabic = "آل عمران";
      ayatNumber = 26;
      arabic = "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ...";
      english = "Say, \"O Allah, Owner of Sovereignty...";
      hindi = "कहो, 'हे अल्लाह, सल्तनत के मालिक...'";
      urdu = "کہہ دو: اے اللہ! ملک و سلطنت کے مالک...";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 1;
      arabic = "قُلْ هُوَ اللَّهُ أَحَدٌ";
      english = "Say, \"He is Allah, [who is] One,";
      hindi = "कहो, 'वह अल्लाह, बस एक है।'";
      urdu = "کہہ دو: وہ اللہ ایک ہے،";
    },
    {
      surahNumber = 113;
      surahName = "Al-Falaq";
      surahNameArabic = "الفلق";
      ayatNumber = 1;
      arabic = "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ";
      english = "Say, \"I seek refuge in the Lord of daybreak.";
      hindi = "कहो, 'मैं सुबह के मालिक की शरण चाहता हूँ।'";
      urdu = "کہہ دو: میں صبح کے رب کی پناہ لیتا ہوں۔";
    },
    {
      surahNumber = 114;
      surahName = "Al-Nas";
      surahNameArabic = "الناس";
      ayatNumber = 1;
      arabic = "قُلْ أَعُوذُ بِرَبِّ النَّاسِ";
      english = "Say, \"I seek refuge in the Lord of mankind,";
      hindi = "कहो, 'मैं मानवता के पालनहार से शरण चाहता हूँ।'";
      urdu = "کہہ دو: میں ہر انسان کے رب کی پناہ لیتا ہوں،";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 2;
      arabic = "اللَّهُ الصَّمَدُ";
      english = "Allah, the Eternal Refuge.";
      hindi = "अल्लाह सब पर विजय पानेवाला है।";
      urdu = "اللہ سب پر غالب ہے۔";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 3;
      arabic = "لَمْ يَلِدْ وَلَمْ يُولَدْ";
      english = "He neither begets nor is born,";
      hindi = "वह पैदा नहीं करता और न ही पैदा किया जाता है।";
      urdu = "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 4;
      arabic = "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ";
      english = "Nor is there to Him any equivalent.";
      hindi = "और न ही उसके बराबर कोई है।";
      urdu = "اس کے برابر کوئی بھی نہیں ہے۔";
    },
    {
      surahNumber = 110;
      surahName = "An-Nasr";
      surahNameArabic = "النصر";
      ayatNumber = 1;
      arabic = "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ";
      english = "When the victory of Allah has come and the conquest,";
      hindi = "जब अल्लाह की मदद और विजय आएगी,";
      urdu = "جب اللہ کی مدد اور فتح آجائے گی،";
    },
    {
      surahNumber = 111;
      surahName = "Al-Masad";
      surahNameArabic = "المسد";
      ayatNumber = 1;
      arabic = "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ";
      english = "May the hands of Abu Lahab be ruined, and ruined is he.";
      hindi = "अबू लहब के दोनों हाथ टूट जाएँ और वह तबाह हो!";
      urdu = "ابو لہب کے دونوں ہاتھ ٹوٹ جائیں اور وہ برباد ہوجائے۔";
    },
    {
      surahNumber = 110;
      surahName = "An-Nasr";
      surahNameArabic = "النصر";
      ayatNumber = 2;
      arabic = "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا";
      english = "And you see the people entering into the religion of Allah in multitudes,";
      hindi = "और तुम देखोगे कि लोग जत्थों में अल्लाह के धर्म में प्रवेश कर रहे हैं,";
      urdu = "اور تم دیکھو گے کہ لوگ جوق در جوق اللہ کے دین میں داخل ہو رہے ہیں،";
    },
    {
      surahNumber = 110;
      surahName = "An-Nasr";
      surahNameArabic = "النصر";
      ayatNumber = 3;
      arabic = "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا";
      english = "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.";
      hindi = "तो तुम अपने मालिक की प्रशंसा के साथ तस्बीह पढ़ो और उससे क्षमा माँगो, निश्चित ही मिलता है।";
      urdu = "پھر اپنے رب کی حمد کے ساتھ تسبیح بیان کرو اور اس سے مغفرت مانگو۔ بے شک وہ بڑا ہی توبہ قبول کرنے والا ہے۔";
    },
    {
      surahNumber = 101;
      surahName = "Al-Qari'ah";
      surahNameArabic = "القارعة";
      ayatNumber = 1;
      arabic = "الْقَارِعَةُ";
      english = "The Striking Calamity –";
      hindi = "कटु आपदा!";
      urdu = " भयवाह आपदा!";
    },
    {
      surahNumber = 101;
      surahName = "Al-Qari'ah";
      surahNameArabic = "القارعة";
      ayatNumber = 2;
      arabic = "مَا الْقَارِعَةُ";
      english = "What is the Striking Calamity?";
      hindi = "कटु आपदा क्या है?";
      urdu = "کیا ہے قیامت؟";
    },
    {
      surahNumber = 101;
      surahName = "Al-Qari'ah";
      surahNameArabic = "القارعة";
      ayatNumber = 3;
      arabic = "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ";
      english = "And what can make you know what is the Striking Calamity?";
      hindi = "और तुम्हें क्या पता, कटु आपदा क्या है?";
      urdu = "کیا ہے وہ قیامت؟";
    },
    {
      surahNumber = 112;
      surahName = "Al-Ikhlas";
      surahNameArabic = "الإخلاص";
      ayatNumber = 2;
      arabic = "اللَّهُ الصَّمَدُ";
      english = "Allah, the Eternal Refuge.";
      hindi = "अल्लाह सब पर विजय पानेवाला है।";
      urdu = "اللہ سب پر غالب ہے۔";
    },
    // More ayat can be added up to 80 as needed for expanded coverage.
  ];
};
