dataSetVersion = "2026-07-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by title",
    key: "games",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [
      { name: "Toriko no Chigiri", key: "chigiri" },
      { name: "Toriko no Shirabe", key: "shirabe" },
      { name: "Toriko no Kusari", key: "kusari" },
      { name: "Toriko no Yugami", key: "yugami" },
      { name: "Toriko no Shizuku", key: "shizuku" },
      { name: "Toriko no Shirabe -Refrain-", key: "refrain" },
      { name: "Toriko no Kizuna", key: "kizuna" },      
      { name: "Toriko no Shimai", key: "shimai" },
      { name: "Toriko no Tsubasa", key: "tsubasa" },
      { name: "Toriko no Chikai", key: "chikai" },
	  { name: "Toriko no Urara", key: "urara" },
	  { name: "Toriko no Homura", key: "homura" },
	  { name: "Toriko no Sakura", key: "sakura" },
	  { name: "Nyotai de Motenasu Settai Ryokan", key: "ryokan" },
	  { name: "Nyotai o Musaboru Settai Ryokan", key: "ryokan2" },
	  { name: "Natsuyo ni Modaeru Nananin no Sasoime", key: "Sasoime" },
	  { name: "Tsukiakari ni Modaeru Harame", key: "harame4" },
	  { name: "Ore no Ue de Agaku Rokunin no Togime", key: "togime" },  
      { name: "Nightmare×Sisters", key: "omega" },
      { name: "Nightmare×Maverick", key: "maverick" },
	  { name: "Toriko Hime", key: "toriko" },
	  { name: "Houkago ni Midareru Ane Kyoushi to Tonari no Heya de Aegu Imouto", key: "imouto" },	  
      { name: "Otome Juurin Yuugi", key: "otome" },
      { name: "Otome Chibaku Yuugi", key: "otome2" },
	  { name: "Yobai Suru Nananin no Harame", key: "harame" },
      { name: "Yobai Suru Nananin no Harame 2", key: "harame2" },
      { name: "Harame ~Seishi o Hoshigaru Midara na Oshiego~", key: "harame5" },	  
      { name: "Wana ~Hakudaku Mamire no Houkago~", key: "wana" },
      { name: "Wana II", key: "wana2" },
      { name: "Wanna. ~SpartanSex Spermax!!!~", key: "spartansex" },	  
      { name: "Helter Skelter", key: "helter" },
      { name: "Tanetsuke Mura", key: "tanetsuke" },
      { name: "Last Waltz", key: "waltz" },
      { name: "RinxSen", key: "rinsen" },
      { name: "Ran→Sem", key: "ransem" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  
  {
    name: "Tsubasa Yagami",
    img: "Tsubasa.png",
    opts: {
      games: ["urara"],
    }
  },
  {
    name: "Sei Mizumori",
    img: "Sei.png",
    opts: {
      games: ["urara"],
    }
  },
  {
    name: "Kanna Urabe",
    img: "Kanna.png",
    opts: {
      games: ["urara"],
    }
  },
  {
    name: "Sawa Yagami",
    img: "Sawa.png",
    opts: {
      games: ["urara"],
    }
  },
  {
    name: "Noeka Yui",
    img: "Noeka.png",
    opts: {
      games: ["urara"],
    }
  },
  
  {
    name: "Suzune Ayashiro",
    img: "Suzune.png",
    opts: {
      games: ["Homura"],
    }
  },
  {
    name: "Ran Himoto",
    img: "Ran.png",
    opts: {
      games: ["Homura"],
    }
  },
  {
    name: "Miori Ooura",
    img: "Miori.png",
    opts: {
      games: ["Homura"],
    }
  },
  {
    name: "Miyuri Ooura",
    img: "Miyuri.png",
    opts: {
      games: ["Homura"],
    }
  },
  {
    name: "Akina Shitou",
    img: "Akina.png",
    opts: {
      games: ["Homura"],
    }
  },
  
  {
    name: "Yukina Kose",
    img: "Yukina.png",
    opts: {
      games: ["Sakura"],
    }
  },
  {
    name: "Akari Haruhana",
    img: "Akari.png",
    opts: {
      games: ["Sakura"],
    }
  },
  {
    name: "Otoha Himi",
    img: "Otoha.png",
    opts: {
      games: ["Sakura"],
    }
  },
  {
    name: "Ryoko Misumi",
    img: "Ryoko.png",
    opts: {
      games: ["Sakura"],
    }
  },
  {
    name: "Hiro Yuma",
    img: "Hiro.png",
    opts: {
      games: ["Sakura"],
    }
  },
  
  
  
  
  {
    name: "Asuka Kuga",
    img: "asuka.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Yoshino Miyakura",
    img: "Yoshino.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Maki Momose",
    img: "Makiharame.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Rin Nanaura",
    img: "Rin.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Honoka Onda",
    img: "Honoka.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Yumi Shiina",
    img: "Yumi.png",
    opts: {
      games: ["harame"],
    }
  },
  {
    name: "Tomoe Yakou",
    img: "tomoe.png",
    opts: {
      games: ["harame"],
    }
  },
  
  
  {
    name: "Tomoko Amaya",
    img: "tomoko.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Nana Kaji",
    img: "Nana.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Satsuki Orikura",
    img: "Satsuki.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Ruka",
    img: "Ruka.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Risa Suou",
    img: "Risa.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Yuri Tsukino",
    img: "yuri.png",
    opts: {
      games: ["togime"],
    }
  },
  {
    name: "Shizuka Otobe",
    img: "shizuka.png",
    opts: {
      games: ["chikai"],
    }
  },
 {
    name: "Kino Kannagi",
    img: "kino.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Touko Natatsuka",
    img: "touko.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Honami Takanezawa",
    img: "honami.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Rio Yakumo",
    img: "rioOlder.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Ikumi Neya",
    img: "ikumi.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Kasumi Mukai",
    img: "kasumi.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Miki Hatsuse",
    img: "miki.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Ririsa Shiraishi",
    img: "ririsa.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Yuno Tougasaki",
    img: "yuno.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Futaba Uryuu",
    img: "futaba.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Kazuho Uryuu",
    img: "kazuho.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Hyouka Kijima",
    img: "hyouka.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Misaki Touya",
    img: "misaki.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Yuna Yurimoto",
    img: "yuna.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Aimi Tsukimori",
    img: "aimi.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Chieri Yusa",
    img: "chieri.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Saki Niina",
    img: "sakiharame.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Yumeno Tsukimori",
    img: "yumeno.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Juri Tamaki",
    img: "juri.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Maika Sakurakouji",
    img: "maika.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Rie Nikaidou",
    img: "rie.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Sara Iori",
    img: "sara.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Yoko Yomogi",
    img: "youko.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Kotori Shiina",
    img: "kotori.png",
    opts: {
      games: ["ryokan"],
    }
  },
  {
    name: "Himari Shiina",
    img: "himari.png",
    opts: {
      games: ["ryokan"],
    }
  },
  {
    name: "Mari Fujimoto",
    img: "mari.png",
    opts: {
      games: ["ryokan2"],
    }
  },
  {
    name: "Ayaka Hiiragi",
    img: "ayaka.png",
    opts: {
      games: ["ryokan2"],
    }
  },
  {
    name: "Yuuna Hiiragi",
    img: "Yuuna.png",
    opts: {
      games: ["ryokan2"],
    }
  },
  {
    name: "Haruna Kasuga",
    img: "Haruna.png",
    opts: {
      games: ["ryokan2"],
    }
  },
  {
    name: "Yotsuba Kimino",
    img: "Yotsuba.png",
    opts: {
      games: ["ryokan2"],
    }
  },
  {
    name: "Aina Leminen",
    img: "aina.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Nanami Minamoto",
    img: "nanami.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Mimako Kouno",
    img: "mimako.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Nao Saionji (Refrain)",
    img: "naoOlder.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Kanon Yuusaki",
    img: "kanon.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Kyouko Nakanomori",
    img: "kyoukoyugami.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Nami Minato",
    img: "nami.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Rina Uzuki",
    img: "rina.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Shion Yuusaki",
    img: "shion.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Jun Moribe",
    img: "jun.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Miho Fujigasaki",
    img: "miho.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Nadia Mizunashi",
    img: "nadia.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Nonoka Kurusu",
    img: "nonoka.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Saki Otowa",
    img: "saki.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  
  
  {
    name: "Ayana Sakurakawa",
    img: "ayana.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Shizuku Hazuki",
    img: "shizuku.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Tomomi Sakurakawa",
    img: "tomomi.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Chisa Kamikura",
    img: "chisa.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Maki Shirasawa",
    img: "maki.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Reika Fukami",
    img: "reika.png",
    opts: {
      games: ["harame4"],
    }
  }, 
  {
    name: "Kanade Hori",
    img: "kanade.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Mika Ichinomiya",
    img: "mika.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Ena Kujou",
    img: "ena.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Sakura Miyama",
    img: "sakura.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Shouko Okuse",
    img: "shouko.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Azusa Tamai",
    img: "azusa.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Mizuho Ubukata",
    img: "Mizuho.png",
    opts: {
      games: ["sasoime"],
    }
  },
  {
    name: "Akari Usami",
    img: "akariimouto.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Haruka Aizawa",
    img: "haruka.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Yuuka Aikawa",
    img: "yuuka.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Konomi Asahina",
    img: "konomi.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Mio Yunoki",
    img: "mio.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Rinka Ayukawa",
    img: "rinka.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Shiori Toya",
    img: "shiori.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Yui Ikoma",
    img: "yui.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Ayami Senoo",
    img: "ayami.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Chizuru Narukami",
    img: "chizuru.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Mai Saionji",
    img: "mai.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Nao Saionji (Shirabe)",
    img: "nao.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Riria Shirogane",
    img: "riria.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Tsubaki Amakusa",
    img: "tsubaki.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Ayane Sagara",
    img: "ayaneharame.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Kaho Ichinose",
    img: "kaho.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Mihoshi Kotorii",
    img: "mihoshi.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Noi Tsubaki",
    img: "noi.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Risa Hayama",
    img: "risaharame.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Tsukumi Kotorii",
    img: "tsukumi.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Yuki Nanawa",
    img: "yuki.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Yuu Nanawa",
    img: "yuu.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Aki Hiiragi",
    img: "aki.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Shiori Hiura",
    img: "shioriwanna.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Nagisa Kiryuu",
    img: "nagisa.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Miyu Yakumo",
    img: "miyu.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Rio Yakumo",
    img: "rio.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Kyouko Omigawa",
    img: "kyouko.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Maya Igari",
    img: "mayatane.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Misato Igari",
    img: "misato.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Nanako Orihara",
    img: "nanako.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Otsuge-sama",
    img: "otsuge.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Rika Komori",
    img: "rika.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Cynthia Sagrit",
    img: "cynthia.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Hinako Hino",
    img: "hinako.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Maya Kenjou",
    img: "maya.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Miyako Karasuma",
    img: "miyako.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Yuuki Mochizuki",
    img: "yuuki.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Kanade Hasumi",
    img: "kanadewana.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Ruri Moriya",
    img: "ruri.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Madoka Shirayuki",
    img: "madoka.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Sayaka Usami",
    img: "sayaka.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Shigure Nakajou",
    img: "shigure.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Jun Higuchi",
    img: "junotome.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Misao Kiryuu",
    img: "misao.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Mayu Minakami",
    img: "mayu.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Mitsuki Shirakawa",
    img: "mitsuki.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Nanao Mimasaka",
    img: "nanao.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Fubuki Kagami",
    img: "fubuki.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Haruka Kagami",
    img: "harukahelter.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Miu Kagami",
    img: "miu.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Sayoko Kagami",
    img: "sayoko.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Akira Miyauchi",
    img: "akira.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Ibuki Kurata",
    img: "ibuki.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Karen Yakushima",
    img: "karenotome.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Ayane Inui",
    img: "ayane.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Rena",
    img: "rena.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Himeno Hourai",
    img: "himeno.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Sakura Saotome",
    img: "sakurahime.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Shizuru Minase",
    img: "shizuru.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Haruna Amagiri",
    img: "harunawana.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Maiko Mamiya",
    img: "maiko.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Raika Misaki",
    img: "raika.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Sakuya Amagiri",
    img: "sakuya.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Eimi Saiki",
    img: "eimi.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Kuon Katsuragi",
    img: "kuon.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Rei Kizuki",
    img: "rei.png",
    opts: {
      games: ["omega"],
    }
  },
    {
    name: "Rinne Natsume",
    img: "rinne.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Setsuna Shindou",
    img: "setsuna.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Chisei Shimotsuki",
    img: "chisei.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Yuka Shindou",
    img: "yuka.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Hibiki Amou",
    img: "hibiki.png",
    opts: {
      games: ["maverick"],
    }
  },
  {
    name: "Karen Kuga",
    img: "karen.png",
    opts: {
      games: ["maverick"],
    }
  },
  {
    name: "Megu Mikazuki",
    img: "megu.png",
    opts: {
      games: ["maverick"],
    }
  },
  {
    name: "Anna Ichinose",
    img: "anna.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Sakaki Kaori",
    img: "sakaki.png",
    opts: {
      games: ["ransem"],
    }
  },
    {
    name: "Naomi Katsuragi",
    img: "naomi.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Riko Ichinose",
    img: "riko.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Asuka Okita",
    img: "asukaran.png",
    opts: {
      games: ["rinsen"],
    }
  },
  {
    name: "Kaho Mizushima",
    img: "kahoran.png",
    opts: {
      games: ["rinsen"],
    }
  },
  {
    name: "Urara Ebihara",
    img: "urara.png",
    opts: {
      games: ["rinsen"],
    }
  },
];
