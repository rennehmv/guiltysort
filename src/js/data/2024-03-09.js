dataSetVersion = "2024-03-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Nightmare×Sisters Ω", key: "omega" },
      { name: "Nightmare×Maverick", key: "maverick" },
      { name: "Toriko Hime", key: "toriko" },
      { name: "Houkago ni Midareru Ane Kyoushi to Tonari no Heya de Aegu Imouto", key: "imouto" },
      { name: "Nyotai de Motenasu Settai Ryokan", key: "ryokan" },
      { name: "Kichiku Nakadashi Suieibu", key: "mirei" },
      { name: "Otome Juurin Yuugi", key: "otome" },
      { name: "Otome Chibaku Yuugi", key: "otome2" },
      { name: "Yobai Suru Nananin no Harame 2", key: "harame2" },
      { name: "Tsukiakari ni Modaeru Harame", key: "harame4" },
      { name: "Harame ~Seishi o Hoshigaru Midara na Oshiego~", key: "harame5" },
      { name: "Wana ~Hakudaku Mamire no Houkago~", key: "wana" },
      { name: "Wana II", key: "wana2" },
      { name: "Wanna. ~SpartanSex Spermax!!!~", key: "spartansex" },
      { name: "Helter Skelter", key: "helter" },
      { name: "Tanetsuke Mura", key: "tanetsuke" },
      { name: "Last Waltz", key: "waltz" },
      { name: "Chikan Circle", key: "circle" },
      { name: "RinxSen", key: "rinsen" },
      { name: "Ran→Sem", key: "ransem" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Shizuka Otobe",
    img: "957fn9w.png",
    opts: {
      games: ["chikai"],
    }
  },
 {
    name: "Kino Kannagi",
    img: "Wg2JMlJ.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Touko Natatsuka",
    img: "FIXmolB.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Honami Takanezawa",
    img: "7kGmjbr.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Rio Yakumo",
    img: "4vIogkD.png",
    opts: {
      games: ["chikai"],
    }
  },
  {
    name: "Ikumi Neya",
    img: "BSivLbp.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Kasumi Mukai",
    img: "WfdtAbQ.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Miki Hatsuse",
    img: "EGdj9px.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Ririsa Shiraishi",
    img: "eFfdHR4.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Yuno Tougasaki",
    img: "zB2AKbt.png",
    opts: {
      games: ["tsubasa"],
    }
  },
  {
    name: "Futaba Uryuu",
    img: "qMvBpls.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Kazuho Uryuu",
    img: "Tp16KML.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Hyouka Kijima",
    img: "RvggKaD.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Misaki Touya",
    img: "oSSJ0Va.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Yuna Yurimoto",
    img: "WiJdcJu.png",
    opts: {
      games: ["shimai"],
    }
  },
  {
    name: "Aimi Tsukimori",
    img: "Xad6AVk.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Chieri Yusa",
    img: "vRWPIf2.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Saki Niina",
    img: "iNrtLyL.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Yumeno Tsukimori",
    img: "N7vcSRn.png",
    opts: {
      games: ["harame5"],
    }
  },
  {
    name: "Juri Tamaki",
    img: "j48xPIA.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Maika Sakurakouji",
    img: "6TyPrRh.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Rie Nikaidou",
    img: "sbFgNY9.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Sara Iori",
    img: "0GzstcM.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Yoko Yomogi",
    img: "X3CDOUg.png",
    opts: {
      games: ["kizuna"],
    }
  },
  {
    name: "Kotori Shiina",
    img: "XuV6Qyx.png",
    opts: {
      games: ["ryokan"],
    }
  },
  {
    name: "Himari Shiina",
    img: "gGGQfhO.png",
    opts: {
      games: ["ryokan"],
    }
  },
  {
    name: "Aina Leminen",
    img: "0tv7iVJ.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Nanami Minamoto",
    img: "lZ1W3id.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Mimako Kouno",
    img: "tZPFx9z.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Nao Saionji (Refrain)",
    img: "ZUJwUxm.png",
    opts: {
      games: ["refrain"],
    }
  },
  {
    name: "Kanon Yuusaki",
    img: "zVnkW0e.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Kyouko Nakanomori",
    img: "bte8gls.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Nami Minato",
    img: "1HSVNOr.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Rina Uzuki",
    img: "qih319v.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Shion Yuusaki",
    img: "jVsjvK0.png",
    opts: {
      games: ["Yugami"],
    }
  },
  {
    name: "Jun Moribe",
    img: "q0RrvOs.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Miho Fujigasaki",
    img: "qT2ydk1.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Nadia Mizunashi",
    img: "yNAwYFk.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Nonoka Kurusu",
    img: "ahswIx1.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Saki Otowa",
    img: "atHHIZP.png",
    opts: {
      games: ["Shizuku"],
    }
  },
  {
    name: "Ayana Sakurakawa",
    img: "Oro7att.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Shizuku Hazuki",
    img: "quvYbFz.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Tomomi Sakurakawa",
    img: "sptncbg.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Chisa Kamikura",
    img: "MMSsbHU.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Maki Shirasawa",
    img: "eTWOPpo.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Reika Fukami",
    img: "5VfuGJL.png",
    opts: {
      games: ["harame4"],
    }
  },
  {
    name: "Akari Usami",
    img: "R8BI9oZ.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Haruka Aizawa",
    img: "5amruio.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Yuuka Aikawa",
    img: "Gwp4b8I.png",
    opts: {
      games: ["imouto"],
    }
  },
  {
    name: "Konomi Asahina",
    img: "rqo2q3x.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Mio Yunoki",
    img: "JAm8kdH.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Rinka Ayukawa",
    img: "ysuMXle.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Shiori Toya",
    img: "7NAXBJQ.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Yui Ikoma",
    img: "ipJkbIQ.png",
    opts: {
      games: ["kusari"],
    }
  },
  {
    name: "Ayami Senoo",
    img: "K4FiLhn.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Chizuru Narukami",
    img: "oW7tI7T.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Mai Saionji",
    img: "6DJwyXs.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Nao Saionji (Shirabe)",
    img: "SUyXJQs.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Riria Shirogane",
    img: "FyWPvMw.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Tsubaki Amakusa",
    img: "hOUiSzz.png",
    opts: {
      games: ["shirabe"],
    }
  },
  {
    name: "Ayane Sagara",
    img: "c81ZSPt.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Kaho Ichinose",
    img: "MZlXgx2.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Mihoshi Kotorii",
    img: "1NT4Xqi.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Noi Tsubaki",
    img: "Cr0hP7k.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Risa Hayama",
    img: "aZ01A4O.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Tsukumi Kotorii",
    img: "VHt0s6w.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Yuki Nanawa",
    img: "fFrLifp.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Yuu Nanawa",
    img: "QbTZFSj.png",
    opts: {
      games: ["harame2"],
    }
  },
  {
    name: "Aki Hiiragi",
    img: "9lGfGKZ.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Shiori Hiura",
    img: "eWiKc7E.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Nagisa Kiryuu",
    img: "tRfji3c.png",
    opts: {
      games: ["spartansex"],
    }
  },
  {
    name: "Miyu Yakumo",
    img: "nFi9H6x.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Rio Yakumo",
    img: "52BZoFI.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Kyouko Omigawa",
    img: "wgWMbWi.png",
    opts: {
      games: ["chigiri"],
    }
  },
  {
    name: "Maya Igari",
    img: "CUtCxwe.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Misato Igari",
    img: "8ZGPMA0.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Nanako Orihara",
    img: "BsVROJS.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Otsuge-sama",
    img: "01HeVFd.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Rika Komori",
    img: "wPfwGko.png",
    opts: {
      games: ["tanetsuke"],
    }
  },
  {
    name: "Cynthia Sagrit",
    img: "wSD2jWZ.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Hinako Hino",
    img: "l8OSmjc.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Maya Kenjou",
    img: "xcLJAPi.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Miyako Karasuma",
    img: "hO06Q51.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Yuuki Mochizuki",
    img: "1Tt7Rdh.png",
    opts: {
      games: ["waltz"],
    }
  },
  {
    name: "Kanade Hasumi",
    img: "sDSkc2l.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Ruri Moriya",
    img: "kcE01S2.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Madoka Shirayuki",
    img: "zoFgbha.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Sayaka Usami",
    img: "ilkprGZ.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Shigure Nakajou",
    img: "0MemlPc.png",
    opts: {
      games: ["wana2"],
    }
  },
  {
    name: "Jun Higuchi",
    img: "8CDKm5m.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Misao Kiryuu",
    img: "io7PlJq.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Mayu Minakami",
    img: "BFlKmT7.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Mitsuki Shirakawa",
    img: "CJDQBgm.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Nanao Mimasaka",
    img: "8CYItwj.png",
    opts: {
      games: ["otome2"],
    }
  },
  {
    name: "Fubuki Kagami",
    img: "bO2dJt5.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Haruka Kagami",
    img: "cyAUf9T.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Miu Kagami",
    img: "M6aTltn.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Sayoko Kagami",
    img: "pCqWDG9.png",
    opts: {
      games: ["helter"],
    }
  },
  {
    name: "Akira Miyauchi",
    img: "DWCuzId.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Ibuki Kurata",
    img: "oOGlwAc.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Karen Yakushima",
    img: "WZDYP7j.png",
    opts: {
      games: ["otome"],
    }
  },
  {
    name: "Ayane Inui",
    img: "26aIc58.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Rena",
    img: "nva6vgh.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Himeno Hourai",
    img: "YRp8AwX.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Sakura Saotome",
    img: "3D30rc8.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Shizuru Minase",
    img: "pBdDUcP.png",
    opts: {
      games: ["toriko"],
    }
  },
  {
    name: "Haruna Amagiri",
    img: "nUNHzNv.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Maiko Mamiya",
    img: "sViM89M.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Raika Misaki",
    img: "WZS2pJI.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Sakuya Amagiri",
    img: "RsXnTSS.png",
    opts: {
      games: ["wana"],
    }
  },
  {
    name: "Eimi Saiki",
    img: "9nysUkX.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Kuon Katsuragi",
    img: "l48apXN.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Rei Kizuki",
    img: "16uSbXe.png",
    opts: {
      games: ["omega"],
    }
  },
    {
    name: "Rinne Natsume",
    img: "b3YkyHP.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Setsuna Shindou",
    img: "RqjKJid.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Yuka Shindou",
    img: "s5CEpoT.png",
    opts: {
      games: ["omega"],
    }
  },
  {
    name: "Hibiki Amou",
    img: "EmcfsCS.png",
    opts: {
      games: ["maverick"],
    }
  },
  {
    name: "Karen Kuga",
    img: "pI8hrEN.png",
    opts: {
      games: ["maverick"],
    }
  },
  {
    name: "Ayaka Tsubouchi",
    img: "ATGhvmF.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Ayumi Shikishima",
    img: "pnzJXZv.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Hazuki Yashima",
    img: "cPxerXj.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Miho Asakura",
    img: "wTciHXu.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Yui Kanou",
    img: "MkbEGDZ.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Risa Kizuki",
    img: "JocqZvh.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Ai",
    img: "BoxgN9v.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Mizuka Tsubouchi",
    img: "cLgVb2R.png",
    opts: {
      games: ["circle"],
    }
  },
  {
    name: "Anna Ichinose",
    img: "BnQs8Ak.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Sakaki Kaori",
    img: "tYbsZer.png",
    opts: {
      games: ["ransem"],
    }
  },
    {
    name: "Naomi Katsuragi",
    img: "rAP446H.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Riko Ichinose",
    img: "TPR50wz.png",
    opts: {
      games: ["ransem"],
    }
  },
  {
    name: "Asuka Okita",
    img: "6gXUGHI.png",
    opts: {
      games: ["rinsen"],
    }
  },
  {
    name: "Kaho Mizushima",
    img: "TGrFZW2.png",
    opts: {
      games: ["rinsen"],
    }
  },
  {
    name: "Urara Ebihara",
    img: "14fCVKA.png",
    opts: {
      games: ["rinsen"],
    }
  },
  {
    name: "Kurumi Morino",
    img: "9fjSGvH.png",
    opts: {
      games: ["mirei"],
    }
  },
  {
    name: "Mirei Hikawa",
    img: "4xD1CYE.png",
    opts: {
      games: ["mirei"],
    }
  }
];
