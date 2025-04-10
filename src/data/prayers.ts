
export type PrayerTranslation = {
  text: string;
  pronunciation: string;
};

export type Prayer = {
  id: string;
  title: string;
  english: string[];
  latin: PrayerTranslation[];
  tagalog: PrayerTranslation[];
};

export const prayers: Prayer[] = [
  {
    id: "sign-of-the-cross",
    title: "Sign of the Cross",
    english: [
      "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
    ],
    latin: [
      {
        text: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen.",
        pronunciation: "In NO-mee-neh PAH-tris, et FEE-lee-ee, et SPEE-ree-toos SANK-tee. AH-men."
      }
    ],
    tagalog: [
      {
        text: "Sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo. Amen.",
        pronunciation: "Sah nga-LAN ng A-ma, at ng A-nak, at ng Es-pi-RI-tu SAN-to. A-men."
      }
    ]
  },
  {
    id: "our-father",
    title: "Our Father",
    english: [
      "Our Father, who art in heaven,",
      "hallowed be thy name;",
      "thy kingdom come,",
      "thy will be done",
      "on earth as it is in heaven.",
      "Give us this day our daily bread,",
      "and forgive us our trespasses,",
      "as we forgive those who trespass against us;",
      "and lead us not into temptation,",
      "but deliver us from evil.",
      "Amen."
    ],
    latin: [
      {
        text: "Pater noster, qui es in caelis,",
        pronunciation: "PAH-tehr NOS-tehr, kwee ehs in CHAY-lees,"
      },
      {
        text: "sanctificetur nomen tuum.",
        pronunciation: "sank-tee-fee-CHEH-toor NOH-mehn TOO-oom."
      },
      {
        text: "Adveniat regnum tuum.",
        pronunciation: "ahd-VEH-nee-aht REHG-noom TOO-oom."
      },
      {
        text: "Fiat voluntas tua,",
        pronunciation: "FEE-aht voh-LOON-tahs TOO-ah,"
      },
      {
        text: "sicut in caelo et in terra.",
        pronunciation: "SEE-koot in CHAY-loh eht in TEHR-rah."
      },
      {
        text: "Panem nostrum quotidianum da nobis hodie,",
        pronunciation: "PAH-nehm NOS-troom kwoh-tee-dee-AH-noom dah NOH-bees HOH-dee-eh,"
      },
      {
        text: "et dimitte nobis debita nostra,",
        pronunciation: "eht dee-MEET-teh NOH-bees DEH-bee-tah NOS-trah,"
      },
      {
        text: "sicut et nos dimittimus debitoribus nostris.",
        pronunciation: "SEE-koot eht nohs dee-MEET-tee-moos deh-bee-TOH-ree-boos NOS-trees."
      },
      {
        text: "Et ne nos inducas in tentationem,",
        pronunciation: "eht neh nohs in-DOO-kahs in tehn-tah-tee-OH-nehm,"
      },
      {
        text: "sed libera nos a malo.",
        pronunciation: "sehd LEE-beh-rah nohs ah MAH-loh."
      },
      {
        text: "Amen.",
        pronunciation: "AH-mehn."
      }
    ],
    tagalog: [
      {
        text: "Ama namin, sumasalangit Ka,",
        pronunciation: "A-ma NA-min, su-ma-sa-LA-ngit Ka,"
      },
      {
        text: "Sambahin ang ngalan Mo.",
        pronunciation: "Sam-BA-hin ang NGA-lan Mo."
      },
      {
        text: "Mapasaamin ang kaharian Mo.",
        pronunciation: "Ma-pa-SA-a-min ang ka-ha-RI-an Mo."
      },
      {
        text: "Sundin ang loob Mo,",
        pronunciation: "SUN-din ang lo-ob Mo,"
      },
      {
        text: "Dito sa lupa, para nang sa langit.",
        pronunciation: "DI-to sa LU-pa, PA-ra nang sa LA-ngit."
      },
      {
        text: "Bigyan Mo kami ngayon ng aming kakanin sa araw-araw,",
        pronunciation: "Big-YAN Mo KA-mi NGA-yon ng A-ming ka-KA-nin sa A-raw A-raw,"
      },
      {
        text: "At patawarin Mo kami sa aming mga sala,",
        pronunciation: "At pa-ta-WA-rin Mo KA-mi sa A-ming mga SA-la,"
      },
      {
        text: "Para nang pagpapatawad namin sa mga nagkakasala sa amin.",
        pronunciation: "PA-ra nang pag-pa-pa-TA-wad NA-min sa mga nag-ka-ka-SA-la sa A-min."
      },
      {
        text: "At huwag Mo kaming ipahintulot sa tukso,",
        pronunciation: "At HU-wag Mo KA-ming i-pa-hin-TU-lot sa TUK-so,"
      },
      {
        text: "At iadya Mo kami sa lahat ng masama.",
        pronunciation: "At i-AD-ya Mo KA-mi sa LA-hat ng ma-SA-ma."
      },
      {
        text: "Amen.",
        pronunciation: "A-men."
      }
    ]
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    english: [
      "Hail Mary, full of grace, the Lord is with thee.",
      "Blessed art thou among women,",
      "and blessed is the fruit of thy womb, Jesus.",
      "Holy Mary, Mother of God,",
      "pray for us sinners,",
      "now and at the hour of our death.",
      "Amen."
    ],
    latin: [
      {
        text: "Ave Maria, gratia plena, Dominus tecum.",
        pronunciation: "AH-veh Mah-REE-ah, GRAHT-see-ah PLEH-nah, DOH-mee-noos TEH-koom."
      },
      {
        text: "Benedicta tu in mulieribus,",
        pronunciation: "beh-neh-DEEK-tah too in moo-lee-EH-ree-boos,"
      },
      {
        text: "et benedictus fructus ventris tui, Iesus.",
        pronunciation: "eht beh-neh-DEEK-toos FROOK-toos VEHN-trees TOO-ee, YEH-soos."
      },
      {
        text: "Sancta Maria, Mater Dei,",
        pronunciation: "SAHNK-tah Mah-REE-ah, MAH-tehr DEH-ee,"
      },
      {
        text: "ora pro nobis peccatoribus,",
        pronunciation: "OH-rah proh NOH-bees pehk-kah-TOH-ree-boos,"
      },
      {
        text: "nunc et in hora mortis nostrae.",
        pronunciation: "noonk eht in HOH-rah MOHR-tees NOS-tray."
      },
      {
        text: "Amen.",
        pronunciation: "AH-mehn."
      }
    ],
    tagalog: [
      {
        text: "Aba Ginoong Maria, napupuno ka ng grasya,",
        pronunciation: "A-ba Gi-NO-ong Ma-RI-ya, na-pu-PU-no ka ng GRAS-ya,"
      },
      {
        text: "Ang Panginoon ay sumasaiyo.",
        pronunciation: "Ang Pa-NGI-no-on ay su-ma-sa-I-yo."
      },
      {
        text: "Bukod kang pinagpala sa babaeng lahat",
        pronunciation: "Bu-KOD kang pi-nag-PA-la sa ba-BA-eng LA-hat"
      },
      {
        text: "at pinagpala naman ang bunga ng iyong sinapupunan, si Hesus.",
        pronunciation: "at pi-nag-PA-la na-MAN ang BU-nga ng i-YONG si-na-pu-PU-nan, si HE-sus."
      },
      {
        text: "Santa Maria, Ina ng Diyos,",
        pronunciation: "SAN-ta Ma-RI-ya, I-na ng DI-yos,"
      },
      {
        text: "ipanalangin mo kaming makasalanan,",
        pronunciation: "i-pa-na-LA-ngin mo KA-ming ma-ka-sa-LA-nan,"
      },
      {
        text: "ngayon at kung kami'y mamamatay.",
        pronunciation: "NGA-yon at kung KA-mi'y ma-ma-ma-TAY."
      },
      {
        text: "Amen.",
        pronunciation: "A-men."
      }
    ]
  },
  {
    id: "glory-be",
    title: "Glory Be",
    english: [
      "Glory be to the Father, and to the Son, and to the Holy Spirit,",
      "as it was in the beginning, is now, and ever shall be,",
      "world without end.",
      "Amen."
    ],
    latin: [
      {
        text: "Gloria Patri, et Filio, et Spiritui Sancto,",
        pronunciation: "GLOH-ree-ah PAH-tree, eht FEE-lee-oh, eht SPEE-ree-too-ee SAHNK-toh,"
      },
      {
        text: "sicut erat in principio, et nunc, et semper,",
        pronunciation: "SEE-koot EH-raht in preen-CHEE-pee-oh, eht noonk, eht SEHM-pehr,"
      },
      {
        text: "et in saecula saeculorum.",
        pronunciation: "eht in SAY-koo-lah say-koo-LOH-room."
      },
      {
        text: "Amen.",
        pronunciation: "AH-mehn."
      }
    ],
    tagalog: [
      {
        text: "Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo,",
        pronunciation: "Lu-WAL-ha-ti sa A-ma, at sa A-nak, at sa Es-pi-RI-tu SAN-to,"
      },
      {
        text: "Kapara noong una, ngayon at magpakailanman,",
        pronunciation: "Ka-PA-ra NO-ong U-na, NGA-yon at mag-pa-ka-i-LAN-man,"
      },
      {
        text: "magpasawalang hanggan.",
        pronunciation: "mag-pa-sa-wa-LANG hang-GAN."
      },
      {
        text: "Amen.",
        pronunciation: "A-men."
      }
    ]
  },
  {
    id: "fatima-prayer",
    title: "Fatima Prayer",
    english: [
      "O my Jesus, forgive us our sins,",
      "save us from the fires of hell,",
      "lead all souls to Heaven,",
      "especially those who have most need of your mercy."
    ],
    latin: [
      {
        text: "O mi Jesu, dimitte nobis debita nostra,",
        pronunciation: "Oh mee YEH-soo, dee-MEET-teh NOH-bees DEH-bee-tah NOS-trah,"
      },
      {
        text: "libera nos ab igne inferni,",
        pronunciation: "LEE-beh-rah nohs ahb EEG-neh een-FEHR-nee,"
      },
      {
        text: "conduc in caelum omnes animas,",
        pronunciation: "KOHN-dook in CHE-loom OHM-nehs AH-nee-mahs,"
      },
      {
        text: "praesertim illas quae maxime indigent misericordia tua.",
        pronunciation: "pry-SEHR-teem EEL-lahs kwah MAHK-see-meh een-DEE-gehnt mee-zeh-ree-KOHR-dee-ah TOO-ah."
      }
    ],
    tagalog: [
      {
        text: "O Hesus ko, patawarin Mo ang aming mga kasalanan,",
        pronunciation: "O He-SUS ko, pa-ta-WA-rin Mo ang A-ming mga ka-sa-LA-nan,"
      },
      {
        text: "iligtas Mo kami sa apoy ng impiyerno,",
        pronunciation: "i-LIG-tas Mo KA-mi sa A-poy ng im-pi-YER-no,"
      },
      {
        text: "dalhin Mo sa langit ang lahat ng mga kaluluwa,",
        pronunciation: "DAL-hin Mo sa LA-ngit ang LA-hat ng mga ka-lu-LU-wa,"
      },
      {
        text: "lalo na ang mga nangangailangan ng Iyong awa.",
        pronunciation: "LA-lo na ang mga na-nga-nga-i-LA-ngan ng I-yong A-wa."
      }
    ]
  },
  {
    id: "hail-holy-queen",
    title: "Hail Holy Queen",
    english: [
      "Hail, Holy Queen, Mother of Mercy,",
      "our life, our sweetness and our hope.",
      "To you do we cry, poor banished children of Eve.",
      "To you do we send up our sighs,",
      "mourning and weeping in this valley of tears.",
      "Turn then, most gracious advocate,",
      "your eyes of mercy toward us,",
      "and after this exile",
      "show unto us the blessed fruit of your womb, Jesus.",
      "O clement, O loving, O sweet Virgin Mary."
    ],
    latin: [
      {
        text: "Salve, Regina, Mater misericordiæ,",
        pronunciation: "SAHL-veh, reh-JEE-nah, MAH-tehr mee-zeh-ree-KOHR-dee-eye,"
      },
      {
        text: "vita, dulcedo, et spes nostra, salve.",
        pronunciation: "VEE-tah, dool-CHEH-doh, eht spehs NOS-trah, SAHL-veh."
      },
      {
        text: "Ad te clamamus exsules filii Hevæ,",
        pronunciation: "ahd teh klah-MAH-moos ehk-SOO-lehs FEE-lee-ee EH-veh,"
      },
      {
        text: "Ad te suspiramus, gementes et flentes",
        pronunciation: "ahd teh soo-spee-RAH-moos, jeh-MEHN-tehs eht FLEHN-tehs"
      },
      {
        text: "in hac lacrimarum valle.",
        pronunciation: "een hahk lah-kree-MAH-room VAHL-leh."
      },
      {
        text: "Eia, ergo, advocata nostra,",
        pronunciation: "EH-yah, EHR-goh, ahd-voh-KAH-tah NOS-trah,"
      },
      {
        text: "illos tuos misericordes oculos ad nos converte;",
        pronunciation: "EEL-lohs TOO-ohs mee-zeh-ree-KOHR-dehs OH-koo-lohs ahd nohs kohn-VEHR-teh;"
      },
      {
        text: "Et Jesum, benedictum fructum ventris tui,",
        pronunciation: "eht YEH-soom, beh-neh-DEEK-toom FROOK-toom VEHN-trees TOO-ee,"
      },
      {
        text: "nobis post hoc exsilium ostende.",
        pronunciation: "NOH-bees pohst hohk ehk-SEE-lee-oom oh-STEHN-deh."
      },
      {
        text: "O clemens, O pia, O dulcis Virgo Maria.",
        pronunciation: "oh KLEH-mehns, oh PEE-ah, oh DOOL-chees VEER-goh mah-REE-ah."
      }
    ],
    tagalog: [
      {
        text: "Aba, Reyna, Ina ng Awa,",
        pronunciation: "A-ba, RE-na, I-na ng A-wa,"
      },
      {
        text: "Ikaw ang aming buhay, ang aliw, at pag-asa.",
        pronunciation: "I-KAW ang A-ming BU-hay, ang A-liw, at pag-A-sa."
      },
      {
        text: "Ikaw ang tinatawagan namin, kaming mga ipinatapon, mga anak ni Eva.",
        pronunciation: "I-KAW ang ti-na-ta-WA-gan NA-min, KA-ming mga i-pi-na-TA-pon, mga A-nak ni E-VA."
      },
      {
        text: "Sa iyo kami napabubuntong hininga, naglulumbay at tumatangis",
        pronunciation: "Sa I-yo KA-mi na-pa-bu-BUN-tong hi-NI-nga, nag-lu-LUM-bay at tu-ma-TA-ngis"
      },
      {
        text: "sa luhaang libis na ito.",
        pronunciation: "sa lu-HA-ang LI-bis na I-to."
      },
      {
        text: "Kaya nga, ikaw na aming tagapamagitan,",
        pronunciation: "KA-ya nga, I-kaw na A-ming ta-ga-pa-ma-GI-tan,"
      },
      {
        text: "ibaling mo sa amin ang iyong mga mata ng pag-ibig at awa.",
        pronunciation: "i-BA-ling mo sa A-min ang I-yong mga MA-ta ng pag-I-big at A-wa."
      },
      {
        text: "At pagkatapos ng pagkakatapon sa amin dito,",
        pronunciation: "At pag-ka-TA-pos ng pag-ka-ka-TA-pon sa A-min DI-to,"
      },
      {
        text: "ipakita mo sa amin ang bunga ng iyong sinapupunan, si Hesus.",
        pronunciation: "i-pa-KI-ta mo sa A-min ang BU-nga ng I-yong si-na-pu-PU-nan, si HE-sus."
      },
      {
        text: "O mahabagin, O mapagmahal, O matamis na Birheng Maria.",
        pronunciation: "O ma-ha-BA-gin, O ma-pag-ma-HAL, O ma-TA-mis na BIR-heng Ma-RI-ya."
      }
    ]
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
    english: [
      "I believe in God, the Father almighty, Creator of heaven and earth,",
      "and in Jesus Christ, his only Son, our Lord,",
      "who was conceived by the Holy Spirit, born of the Virgin Mary,",
      "suffered under Pontius Pilate, was crucified, died and was buried;",
      "he descended into hell; on the third day he rose again from the dead;",
      "he ascended into heaven, and is seated at the right hand of God the Father almighty;",
      "from there he will come to judge the living and the dead.",
      "I believe in the Holy Spirit, the holy catholic Church,",
      "the communion of saints, the forgiveness of sins,",
      "the resurrection of the body, and life everlasting.",
      "Amen."
    ],
    latin: [
      {
        text: "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae,",
        pronunciation: "KREH-doh in DEH-oom PAH-trem om-nee-poh-TEHN-tem, kreh-ah-TOH-rem CHEH-lee eht TEHR-reh,"
      },
      {
        text: "et in Iesum Christum, Filium eius unicum, Dominum nostrum,",
        pronunciation: "eht in YEH-soom KREE-stoom, FEE-lee-oom EH-yoos OO-nee-koom, DOH-mee-noom NOS-troom,"
      },
      {
        text: "qui conceptus est de Spiritu Sancto, natus ex Maria Virgine,",
        pronunciation: "kwee kon-CHEHP-toos ehst deh SPEE-ree-too SAHNK-toh, NAH-toos ehx mah-REE-ah VEER-jee-neh,"
      },
      {
        text: "passus sub Pontio Pilato, crucifixus, mortuus, et sepultus,",
        pronunciation: "PAHS-soos soob POHN-tee-oh pee-LAH-toh, kroo-chee-FEEK-soos, MOHR-too-oos, eht seh-POOL-toos,"
      },
      {
        text: "descendit ad inferos, tertia die resurrexit a mortuis,",
        pronunciation: "deh-SHEHN-deet ahd EEN-feh-rohs, TEHR-tee-ah DEE-eh reh-soor-REHK-seet ah MOHR-too-ees,"
      },
      {
        text: "ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis,",
        pronunciation: "ah-SHEHN-deet ahd CHEH-lohs, SEH-deht ahd DEHK-steh-rahm DEH-ee PAH-trees om-nee-poh-TEHN-tees,"
      },
      {
        text: "inde venturus est iudicare vivos et mortuos.",
        pronunciation: "EEN-deh vehn-TOO-roos ehst yoo-dee-KAH-reh VEE-vohs eht MOHR-too-ohs."
      },
      {
        text: "Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam,",
        pronunciation: "KREH-doh in SPEE-ree-toom SAHNK-toom, SAHNK-tahm ehk-KLEH-zee-ahm kah-THOH-lee-kahm,"
      },
      {
        text: "sanctorum communionem, remissionem peccatorum,",
        pronunciation: "sahnk-TOH-room koh-moo-nee-OH-nehm, reh-mees-see-OH-nehm pehk-kah-TOH-room,"
      },
      {
        text: "carnis resurrectionem, vitam aeternam.",
        pronunciation: "KAHR-nees reh-soor-rehk-tee-OH-nehm, VEE-tahm eh-TEHR-nahm."
      },
      {
        text: "Amen.",
        pronunciation: "AH-mehn."
      }
    ],
    tagalog: [
      {
        text: "Sumasampalataya ako sa Diyos Amang makapangyarihan sa lahat, na may gawa ng langit at lupa,",
        pronunciation: "Su-ma-sam-pa-la-TA-ya A-ko sa Di-YOS A-mang ma-ka-pang-ya-RI-han sa LA-hat, na may GA-wa ng LA-ngit at LU-pa,"
      },
      {
        text: "at kay Hesukristo, iisang Anak Niya, ating Panginoon,",
        pronunciation: "at kay He-su-KRIS-to, i-I-sang A-nak NI-ya, A-ting Pa-NGI-no-on,"
      },
      {
        text: "na ipinaglihi sa kapangyarihan ng Espiritu Santo, ipinanganak ni Santa Mariang Birhen,",
        pronunciation: "na i-pi-nag-LI-hi sa ka-pang-ya-RI-han ng Es-pi-RI-tu SAN-to, i-pi-nga-NA-nak ni SAN-ta Ma-RI-yang BIR-hen,"
      },
      {
        text: "pinagpakasakitan sa kapangyarihan ni Poncio Pilato, ipinako sa krus, namatay at inilibing,",
        pronunciation: "pi-nag-pa-ka-sa-KI-tan sa ka-pang-ya-RI-han ni PON-cio Pi-LA-to, i-pi-NA-ko sa krus, na-MA-tay at i-ni-LI-bing,"
      },
      {
        text: "bumaba sa kinaroroonan ng mga namatay, nang may ikatlong araw nabuhay na mag-uli,",
        pronunciation: "bu-MA-ba sa ki-na-ro-RO-onan ng mga na-MA-tay, nang may i-KAT-long A-raw na-BU-hay na mag-U-li,"
      },
      {
        text: "umakyat sa langit, naluluklok sa kanan ng Diyos Amang makapangyarihan sa lahat,",
        pronunciation: "u-MAK-yat sa LA-ngit, na-lu-LUK-lok sa KA-nan ng Di-YOS A-mang ma-ka-pang-ya-RI-han sa LA-hat,"
      },
      {
        text: "doon magbubuhat at paririto upang hukuman ang mga buhay at mga patay.",
        pronunciation: "do-on mag-bu-BU-hat at pa-ri-RI-to u-pang hu-KU-man ang mga BU-hay at mga PA-tay."
      },
      {
        text: "Sumasampalataya ako sa Espiritu Santo, sa banal na Simbahang Katolika,",
        pronunciation: "Su-ma-sam-pa-la-TA-ya A-ko sa Es-pi-RI-tu SAN-to, sa BA-nal na Sim-BA-hang Ka-TO-li-ka,"
      },
      {
        text: "sa kasamahan ng mga banal, sa kapatawaran ng mga kasalanan,",
        pronunciation: "sa ka-sa-MA-han ng mga BA-nal, sa ka-pa-ta-WA-ran ng mga ka-sa-LA-nan,"
      },
      {
        text: "sa pagkabuhay na muli ng mga namatay, at sa buhay na walang hanggan.",
        pronunciation: "sa pag-ka-BU-hay na MU-li ng mga na-MA-tay, at sa BU-hay na wa-LANG hang-GAN."
      },
      {
        text: "Amen.",
        pronunciation: "A-men."
      }
    ]
  },
  {
    "id": "guardian-angel-prayer",
    "title": "Guardian Angel Prayer",
    "english": [
      "Angel of God, my guardian dear,",
      "to whom God's love commits me here,",
      "ever this day be at my side,",
      "to light and guard, to rule and guide. Amen."
    ],
    "latin": [
      {
        "text": "Ángele Dei, qui custos es mei,",
        "pronunciation": "AHN-geh-leh DEH-ee, kwee KOOS-tos es MAY-ee,"
      },
      {
        "text": "me tibi commissum pietáte supérna,",
        "pronunciation": "meh TEE-bee kom-MEE-soom pee-eh-TAH-teh soo-PEHR-nah,"
      },
      {
        "text": "hodie illumina, custódi, rege et gubérna.",
        "pronunciation": "HOH-dee-eh ee-LOO-mee-nah, koos-TOH-dee, REH-geh et goo-BEHR-nah."
      },
      {
        "text": "Amen.",
        "pronunciation": "AH-men."
      }
    ],
    "tagalog": [
      {
        "text": "Anghel ng Diyos, aking tagapagbantay,",
        "pronunciation": "ANG-hel nang DYOS, A-king ta-ga-pag-ban-TAY,"
      },
      {
        "text": "sa pag-ibig ng Diyos ay itinalaga ako sa iyo,",
        "pronunciation": "sah pag-EE-big nang DYOS ay i-ti-na-LA-ga a-KO sa i-YO,"
      },
      {
        "text": "sa buong araw na ito ay iyong samahan, liwanagan, bantayan, pamunuan, at patnubayan.",
        "pronunciation": "sah bu-ONG A-raw na i-TO ay i-YONG sa-MA-han, li-wa-NA-gan, ban-ta-YAN, pa-mu-NU-an, at pat-nu-BA-yan."
      },
      {
        "text": "Amen.",
        "pronunciation": "A-men."
      }
    ]
  },
      {
        "id": "grace-before-meals",
        "title": "Grace Before Meals",
        "english": [
          "Bless us, O Lord,",
          "and these thy gifts,",
          "which we are about to receive,",
          "from thy bounty,",
          "through Christ our Lord. Amen."
        ],
        "latin": [
          {
            "text": "Bénedic, Dómine, nos",
            "pronunciation": "BEH-neh-deek DOH-mee-neh, nos"
          },
          {
            "text": "et haec tua dona,",
            "pronunciation": "et HEK TOO-ah DOH-nah,"
          },
          {
            "text": "quae de tua largitáte sumus sumpturi,",
            "pronunciation": "kweh de TOO-ah lar-jee-TAH-teh SOO-moos soom-TOO-ree,"
          },
          {
            "text": "per Christum Dóminum nostrum.",
            "pronunciation": "per KRIS-toom DOH-mee-noom NOS-troom."
          },
          {
            "text": "Amen.",
            "pronunciation": "AH-men."
          }
        ],
        "tagalog": [
          {
            "text": "Pagpalain mo kami, O Panginoon,",
            "pronunciation": "Pag-pa-LA-in mo ka-MI, O Pa-ngi-no-ON,"
          },
          {
            "text": "at ang mga kaloob mong ito",
            "pronunciation": "at ang ma-NGANG ka-lo-OB mong i-TO"
          },
          {
            "text": "na aming tatanggapin mula sa iyong kagandahang-loob,",
            "pronunciation": "na A-ming ta-tang-ga-PIN mu-LA sa i-YONG ka-gan-da-HANG lo-OB,"
          },
          {
            "text": "sa pamamagitan ni Kristo na aming Panginoon.",
            "pronunciation": "sa pa-ma-ma-gi-TAN ni KRIS-to na A-ming Pa-ngi-no-ON."
          },
          {
            "text": "Amen.",
            "pronunciation": "A-men."
          }
        ]
      },
      {
        "id": "grace-after-meals",
        "title": "Grace After Meals",
        "english": [
          "We give thee thanks for all thy benefits,",
          "O Almighty God, who lives and reigns, world without end. Amen.",
          "May the souls of the faithful departed,",
          "through the mercy of God, rest in peace. Amen."
        ],
        "latin": [
          {
            "text": "Agimus tibi grátias, pro univérsis beneficiis tuis,",
            "pronunciation": "AH-jee-moos TEE-bee GRAH-tee-ahs, pro oo-nee-VER-sees beh-neh-FEE-chees TOO-ees,"
          },
          {
            "text": "omnípotens Deus, qui vivis et regnas in sæcula sæculórum. Amen.",
            "pronunciation": "om-NEE-po-tens DEH-oos, kwee VEE-vees et REH-nyas in SEH-coo-la SEH-coo-LAW-room. AH-men."
          },
          {
            "text": "Fidélium ánimæ,",
            "pronunciation": "Fee-DEH-lee-oom AH-nee-meh,"
          },
          {
            "text": "per misericórdiam Dei, requiéscant in pace. Amen.",
            "pronunciation": "per mee-seh-ree-KOR-dee-am DEH-ee, reh-kwee-ES-kant in PAH-cheh. AH-men."
          }
        ],
        "tagalog": [
          {
            "text": "Kami ay nagpapasalamat sa iyo,",
            "pronunciation": "Ka-MI ay nag-pa-pa-sa-LA-mat sa i-YO,"
          },
          {
            "text": "Makapangyarihang Diyos, para sa lahat ng biyayang aming tinanggap.",
            "pronunciation": "Ma-ka-pang-ya-RI-hang DYOS, PA-ra sa LA-hat nang bi-YA-yang A-ming ti-nang-GAP."
          },
          {
            "text": "Ikaw na nabubuhay at naghahari magpasawalang hanggan. Amen.",
            "pronunciation": "I-KAW na na-bu-BU-hay at nag-ha-HA-ri mag-pa-sa-wa-LANG hang-GAN. A-men."
          },
          {
            "text": "Nawa’y ang mga kaluluwa ng mga yumao sa pananampalataya,",
            "pronunciation": "Na-WA'y ang ma-NGANG ka-lu-LU-wa nang ma-NGANG yu-MA-o sa pa-na-nam-pa-la-TA-ya,"
          },
          {
            "text": "sa pamamagitan ng awa ng Diyos, ay mapanatag sa kapayapaan. Amen.",
            "pronunciation": "sa pa-ma-ma-gi-TAN nang A-wa nang DYOS, ay ma-pa-NA-tag sa ka-pa-ya-PA-an. A-men."
          }
        ]
      }  
      // Add more prayers as needed  
    ];

export const getPrayerById = (id: string): Prayer | undefined => {
  return prayers.find(prayer => prayer.id === id);
};
