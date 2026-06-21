const rawData = [
  {
    title: "【徵聘教師】靜宜大學 資料科學暨大數據系誠徵",
    date: "2026-06-03",
    body: "資科系誠徵教師，專長為人工智慧、資料科學(大數據)相關領域。",
    category: "學校",
    link: "html/8303.html",
  },
  {
    title: "【徵聘院長候選人】國立中央大學公開徵求管理學院院長",
    date: "2026-04-24",
    body: "公開徵求具前瞻理念、領導協調能力及國際視野之管理學院院長人選。",
    category: "學校",
    link: "html/8302.html",
  },
  {
    title: "【徵聘教師】國立臺灣科技大學資訊工程系誠徵",
    date: "2026-04-21",
    body: "職稱：專任助理教授級(含)以上。需求專長：AI 與資料科學等領域。",
    category: "學校",
    link: "html/8301.html",
  },
  {
    title: "【徵聘教師】國立屏東科技大學資訊管理系誠徵",
    date: "2026-03-24",
    body: "徵聘助理教授(含)以上，具教育部認可之相關領域博士學位者。",
    category: "學校",
    link: "html/8300.html",
  },
  {
    title: "[最後延長徵稿]ICIM 2026暨育秀論文獎",
    date: "2026-02-05",
    body: "財團法人育秀教育基金會特設立「育秀 AI 數位科技論文獎」。",
    category: "學會",
    link: "html/8299.html",
  },
  {
    title: "【徵稿公告】2026第六屆數位醫療國際研討會",
    date: "2026-02-04",
    body: "由高雄科技大學、高雄醫學大學及英國雪菲爾大學共同主辦之研討會。",
    category: "學校",
    link: "html/8298.html",
  },
  {
    title: "【徵聘教師】臺科大資工系聘任專任助理教授",
    date: "2026-01-15",
    body: "職稱：專任助理教授級(含)以上。需求專長：AI 與資料科學領域優先。",
    category: "學校",
    link: "html/8297.html",
  },
  {
    title: "【學會成果】啟迪智慧 惠澤學子 _ 育秀",
    date: "2026-01-05",
    body: "IMP 2025國際研討會暨育秀AI數位科技研創論文獎，在長庚大學展開。",
    category: "學會",
    link: "html/8296.html",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十九屆",
    date: "2025-12-23",
    body: "中華民國資訊管理學會第十九屆理事、監事選舉公告。",
    category: "學會",
    link: "html/8295.html",
  },
  {
    title: "【徵聘教師】國立東華大學資訊管理學系徵聘",
    date: "2025-10-27",
    body: "誠徵助理教授(含)以上之專任師資，名額 2 名。",
    category: "學校",
    link: "html/8294.html",
  },

  {
    title: "【論文徵稿】IMP 2025第30屆國際研討會",
    date: "2025-09-26",
    body: "第30屆國際資訊管理暨實務研討會暨育秀AI數位科技研創論文獎。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8291",
  },
  {
    title: "【會員代表當選公告】社團法人中華民國資訊管理學會",
    date: "2025-07-01",
    body: "第十八屆會員代表選舉，會員代表當選名單公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8290",
  },
  {
    title: "【徵聘教師】國立東華大學資訊管理學系徵聘",
    date: "2025-06-10",
    body: "誠徵助理教授(含)以上師資，具資訊管理領域課程全英授課能力。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8289",
  },
  {
    title: "【會員代表選舉公告】南區選票更正說明",
    date: "2025-06-10",
    body: "有關社團法人中華民國資訊管理學會第十八屆會員代表「南區」選票備註標示錯誤之更正。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8288",
  },
  {
    title: "【會員代表選舉公告】中華民國資訊管理學會第十八屆",
    date: "2025-05-13",
    body: "第十八屆會員代表選舉投票公告，北區應選54席，南區46席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8287",
  },
  {
    title: "【徵才】國立東華大學資訊管理學系徵聘專任",
    date: "2025-05-05",
    body: "誠徵助理教授(含)以上師資，具質性或量化研究與管理專長。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8286",
  },
  {
    title: "【徵才】國立陽明交通大學傳播研究所 誠徵",
    date: "2025-04-08",
    body: "公開徵聘專任助理教授（含）以上職級教師，面向傳播學及相關領域。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8285",
  },
  {
    title: "【會員代表選舉公告】 第十八屆會員代表候",
    date: "2025-03-21",
    body: "第十八屆會員代表候選人登記(含聯署)事宜說明。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8282",
  },
  {
    title: "【論文徵稿】第36屆國際資訊管理學術研討會",
    date: "2025-03-11",
    body: "第36屆國際資訊管理學術研討會 (ICIM 2025)，國立臺北大學主辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8281",
  },
  {
    title: "【徵才】中興大學資訊管理學系「誠徵專任或",
    date: "2025-03-10",
    body: "新聘專任或專案「助理教授」至多2名，具資訊相關領域博士學位。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8279",
  },

  {
    title: "【徵才】靜宜大學資料科學系誠徵教師",
    date: "2024-10-30",
    body: "靜宜大學資科系誠徵教師，人工智慧、大數據相關領域。截止日期2024年11月1日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8278",
  },
  {
    title: "【論文徵稿】第29屆資訊管理暨實務研討會",
    date: "2024-10-28",
    body: "IMP 2024第29屆資訊管理暨實務研討會，論文截稿日期2024年11月10日。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8276",
  },
  {
    title: "【徵才】國立中山大學管理學院徵求第15任院長",
    date: "2024-08-19",
    body: "中山大學管理學院公開徵求第15任院長啟事。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8275",
  },
  {
    title: "【徵才】國立成功大學工業與資訊管理學系誠徵",
    date: "2024-08-05",
    body: "誠徵專任助理教授以上教師，民國114年2月1日起聘。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8274",
  },
  {
    title: "【論文徵稿延長】第35屆國際資訊管理學術研討會",
    date: "2024-05-14",
    body: "ICIM 2024 論文徵稿第二次延長公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8273",
  },
  {
    title: "【論文徵稿延長】第35屆國際資訊管理學術研討會",
    date: "2024-04-28",
    body: "ICIM 2024 論文徵稿第一次延長公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8272",
  },
  {
    title: "【競賽】全國資訊服務領域學生專題創新競賽",
    date: "2024-04-14",
    body: "由中華民國資訊管理學會共同主辦之學生專題創新競賽，共計13個組別。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8270",
  },
  {
    title: "【徵才】靜宜大學資料科學系誠徵教師(延長)",
    date: "2024-04-05",
    body: "靜宜大學資科系徵才，延長至2024年4月12日，隨到隨審。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8269",
  },
  {
    title: "【徵才】靜宜大學資料科學系誠徵教師",
    date: "2024-03-24",
    body: "靜宜大學資科系徵才，截止日期2024年4月1日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8268",
  },
  {
    title: "【論文徵稿】第35屆國際資訊管理學術研討會(ICIM2024)",
    date: "2024-03-14",
    body: "ICIM 2024 開始徵稿，相關資訊請參閱研討會網站。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8261",
  },

  {
    title: "2024第一屆傳善論文獎",
    date: "2024-03-07",
    body: "陳永泰公益信託「傳善論文獎」，鼓勵社福、管理、數位資訊等多元領域研究。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8257",
  },
  {
    title: "【徵才】國立臺東大學資訊管理學系徵聘專任教師",
    date: "2024-03-05",
    body: "臺東大學資管系徵聘教師，享有相關住宿福利與教育資源。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8256",
  },
  {
    title: "【徵才】國立成功大學工業與資訊管理學系誠徵",
    date: "2024-02-01",
    body: "徵聘專任助理教授以上教師，民國113年8月1日起聘。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8255",
  },
  {
    title: "【徵聘公告】國立東華大學資訊管理學系徵聘",
    date: "2024-01-03",
    body: "誠徵助理教授(含)以上師資，具全英授課能力及質化/量化研究專長。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8254",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十八屆理監事選舉結果",
    date: "2023-12-09",
    body: "第十八屆理監事選舉作業結果公告，開票作業順利完成。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8253",
  },
  {
    title: "【會員代表大會公告】中華民國資訊管理學會第十八屆第一次",
    date: "2023-11-13",
    body: "第十八屆第一次會員代表大會，於國立臺北商業大學召開。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8252",
  },
  {
    title: "【理監事選舉公告】中華民國資訊管理學會第十八屆候選人",
    date: "2023-11-13",
    body: "第十八屆理監事選舉候選人名單公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8251",
  },
  {
    title: "【徵聘公告】 靜宜大學資料科學系徵聘",
    date: "2023-10-30",
    body: "靜宜大學資科系徵聘專任/專案助理教授(含)以上。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8250",
  },
  {
    title: "【徵聘公告】國立東華大學資訊管理學系徵聘",
    date: "2023-10-30",
    body: "誠徵助理教授(含)以上師資，113年2月1日起聘。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8249",
  },
  {
    title: "國立成功大學工業與資訊管理學系徵求系主任候選人",
    date: "2023-10-11",
    body: "公開徵求工業與資訊管理學系第十九任系主任候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8247",
  },

  {
    title: "【徵聘公告】國立臺灣大學生物產業傳播暨發展學系徵聘教師",
    date: "2023-09-23",
    body: "徵聘農業資料科學專長教師，連結食農數位與社群行銷傳播。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8245",
  },
  {
    title: "【徵聘公告】國立東華大學資訊管理學系徵聘",
    date: "2023-07-02",
    body: "誠徵專任(案)教師一名，具資管領域課程全英授課能力。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8243",
  },
  {
    title: "【徵才訊息】國立嘉義大學行銷與觀光管理學系徵聘",
    date: "2023-06-29",
    body: "誠徵行銷領域專任助理教授(含)以上教師一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8242",
  },
  {
    title: "[選舉公告]中華民國資訊管理學會第十八屆理事、監事選舉",
    date: "2023-06-19",
    body: "第十八屆理監事選舉公告，開始接受候選人推薦登記。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8241",
  },
  {
    title: "【徵聘公告】國立東華大學資訊管理學系徵聘",
    date: "2023-05-23",
    body: "誠徵助理教授(含)以上，專長含人工智慧、電腦圖學、遊戲設計。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8240",
  },
  {
    title: "【徵才訊息】嶺東科技大學資訊管理系徵聘",
    date: "2023-05-12",
    body: "徵聘專任/專案助理教授(含)以上，專長含人工智慧、行動應用開發。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8239",
  },
  {
    title: "【徵才訊息】國立中央大學公開徵求管理學院院長",
    date: "2023-04-27",
    body: "公開徵求具國際視野之管理學院院長人選。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8238",
  },
  {
    title: "【徵才訊息】國立中央大學公開徵求管理學院院長",
    date: "2023-04-13",
    body: "管理學院院長公開徵求，截止日期為112年4月20日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8237",
  },
  {
    title: "【徵才資訊】靜宜大學資料科學暨大數據分析與應用學系誠徵",
    date: "2023-04-05",
    body: "誠徵專任或專案助理教授，領域含AI、大數據、金融科技等。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8236",
  },
  {
    title: "【徵才資訊】國立中央大學公開徵求管理學院院長",
    date: "2023-03-02",
    body: "公開徵求管理學院院長，申請截止日期為112年3月28日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8235",
  },

  {
    title: "第34屆國際資訊管理學術研討會(ICIM 2023)徵稿",
    date: "2023-02-26",
    body: "於中山大學舉辦，主題為「智慧科技浪潮下的企業永續經營」。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8234",
  },
  {
    title: "【徵才資訊】國立高雄科技大學資訊管理系誠徵教師",
    date: "2023-01-12",
    body: "誠徵專任或專案助理教授(含)以上一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8232",
  },
  {
    title: "【徵才公告】國立高雄科技大學智慧商務系徵聘教師",
    date: "2023-01-11",
    body: "誠徵專任(案)助理教授(含)以上二名，專長包含人工智慧商務應用。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8231",
  },
  {
    title: "【徵才公告】國立臺北商業大學資訊管理系徵聘專任教師",
    date: "2022-12-28",
    body: "徵聘專任助理教授(含)以上師資。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8230",
  },
  {
    title: "【徴聘公告】國立東華大學資訊管理學系徴聘專任(案)教師",
    date: "2022-11-16",
    body: "誠徵助理教授(含)以上，具全英授課能力之AI與大數據專長師資。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8229",
  },
  {
    title: "【徵才公告】正修科技大學資訊管理系誠徵專任教師",
    date: "2022-10-04",
    body: "徵聘1-2名教師，起聘時間為112年2月或8月。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8228",
  },
  {
    title: "【徵才公告】國立東華大學資訊管理學系徵聘專任(案)教師",
    date: "2022-09-08",
    body: "誠徵助理教授(含)以上，具AI與大數據分析相關教學能力。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8226",
  },
  {
    title: "【徵才公告】國立高雄大學資訊管理學系誠徵專任教師",
    date: "2022-09-05",
    body: "誠徵專任助理教授(含)以上，具「資料科學」、「人工智慧」專長尤佳。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8225",
  },
  {
    title: "【徵才公告】東吳大學資訊管理學系徵聘專任教師",
    date: "2022-09-01",
    body: "預計徵聘1-2名專任或專案教師，具資管相關領域博士學位。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8224",
  },
  {
    title: "【會員代表當選公告】中華民國資訊管理學會第十七屆",
    date: "2022-08-28",
    body: "第十七屆會員代表當選名單公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8223",
  },

  {
    title: "【徵才公告】輔仁大學資訊管理學系誠徵專任/專案教師",
    date: "2022-08-10",
    body: "誠徵助理教授(含)以上二名，專長包含金融科技、AI、區塊鏈等。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8221",
  },
  {
    title: "【會員代表選舉公告】中華民國資訊管理學會第十七屆",
    date: "2022-08-08",
    body: "第十七屆會員代表選舉投票公告，北區應選54席，南區46席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8220",
  },
  {
    title: "公告第十七屆會員代表候選人名單與簡歷冊",
    date: "2022-08-06",
    body: "公告選舉候選人名單與簡歷冊，供會員查閱。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8219",
  },
  {
    title: "【徵才公告】國立東華大學資訊管理學系徵聘專任(案)教師",
    date: "2022-07-25",
    body: "誠徵助理教授(含)以上一名，111學年度第2學期起聘。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8218",
  },
  {
    title: "【徵才公告】國立臺北商業大學資訊與決策科學研究所徵聘",
    date: "2022-07-22",
    body: "徵聘專任助理教授(含)以上或約聘教學人員共二名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8216",
  },
  {
    title: "【徵才公告】國立嘉義大學徵聘專任教師啟事",
    date: "2022-07-21",
    body: "資訊管理學系誠徵專任助理教授(含)以上教師一名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8215",
  },
  {
    title: "【徵才公告】國立高雄科技大學資訊管理系誠徵教師",
    date: "2022-07-20",
    body: "徵聘專任或專案助理教授(含)以上三名，收件至8月底。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8214",
  },
  {
    title: "【徵才公告】國立臺中科技大學資訊管理系誠徵教學人員",
    date: "2022-07-06",
    body: "誠徵專案副教授或助理教授四名，專長包含AI、多媒體互動。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8213",
  },
  {
    title: "【徵才公告】國立高雄科技大學資訊管理系誠徵教師",
    date: "2022-05-19",
    body: "徵聘專任或專案助理教授(含)以上三名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8212",
  },
  {
    title: "【會員代表選舉延期公告】中華民國資訊管理學會",
    date: "2022-05-04",
    body: "因疫情影響，第十七屆會員代表選舉投票延至8月27日舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8211",
  },

  {
    title: "第33屆國際資訊管理學術研討會(ICIM 2022)",
    date: "2022-04-20",
    body: "主題為「反思後疫情時代之智慧生活科技」，於實踐大學舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8210",
  },
  {
    title: "【會員代表選舉公告】徵求第十七屆會員代表候選人",
    date: "2022-04-14",
    body: "徵求會員代表登記與聯署，預計於5月14日舉行投票。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8209",
  },
  {
    title: "【徵才公告】臺中科技大學資訊管理系誠徵專案教學人員",
    date: "2022-03-22",
    body: "徵聘專案副教授或助理教授4名，專長含AI、行動開發。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8208",
  },
  {
    title: "第33屆國際資訊管理學術研討會(ICIM 2022)徵稿",
    date: "2022-03-05",
    body: "Call for Papers，會議主題反思後疫情時代智慧生活科技。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8205",
  },
  {
    title: "【徵才公告】國立中正大學徵聘資訊管理學系教師",
    date: "2022-03-03",
    body: "誠徵管理組專任或專案助理教授(含)以上一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8204",
  },
  {
    title: "【徵才公告】國立嘉義大學徵聘資訊管理學系教師",
    date: "2022-03-03",
    body: "徵聘資訊管理或電腦科學領域之專任助理教授(含)以上。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8203",
  },
  {
    title: "【徵才公告】國立中正大學徵求資訊管理學系系主任",
    date: "2022-02-14",
    body: "第6次延長公告，公開徵求系主任候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8202",
  },
  {
    title: "【徵才公告】國立聯合大學資訊管理學系誠徵專任助理教授",
    date: "2022-02-09",
    body: "誠徵資訊管理/技術領域專任助理教授一名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8201",
  },
  {
    title: "【徵才公告】國立中山大學行銷傳播管理研究所徵聘教師",
    date: "2022-01-25",
    body: "誠徵大數據行銷、廣告等相關領域專任教師一名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8200",
  },
  {
    title: "【徵才公告】國立中正大學徵求資訊管理學系系主任",
    date: "2022-01-25",
    body: "第5次延長公告，徵求系主任候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8199",
  },

  {
    title: "【徵才公告】國立嘉義大學資訊管理學系誠徵教師",
    date: "2021-12-28",
    body: "誠徵資訊管理或電腦科學領域專任助理教授(含)以上一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8198",
  },
  {
    title: "【徵才公告】國立勤益科技大學資訊管理學系徵才",
    date: "2021-12-28",
    body: "誠徵專案教師三名，專長包含區塊鏈、AI、巨量資料等。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8197",
  },
  {
    title: "【徵才公告】國立臺中科技大學資訊管理系誠徵教學人員",
    date: "2021-12-09",
    body: "誠徵專案助理教授一名，具產業界實務經驗者佳。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8196",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十七屆理監事選舉結果",
    date: "2021-12-09",
    body: "公告第十七屆理監事選舉作業結果。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8195",
  },
  {
    title: "【徵才公告】國立高雄科技大學資訊管理系誠徵教師",
    date: "2021-12-03",
    body: "誠徵專任或專案助理教授(含)以上二名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8194",
  },
  {
    title: "【活動訊息】IMP 2021 第26屆國際資訊管理暨實務研討會",
    date: "2021-12-01",
    body: "主題為「人工智慧商務數位轉型管理」，於雲林科技大學舉行。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8193",
  },
  {
    title: "【會員代表大會公告】中華民國資訊管理學會大會",
    date: "2021-12-01",
    body: "第十六屆第三次會員代表大會會議公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8192",
  },
  {
    title: "【選舉事宜】中華民國資訊管理學會第十七屆理監事選舉",
    date: "2021-12-01",
    body: "第十七屆理監事選舉投票會議時間與地點公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8191",
  },
  {
    title: "【徵才公告】國立聯合大學資訊管理學系誠徵專任助理教授",
    date: "2021-12-01",
    body: "誠徵資訊管理/技術領域專任助理教授一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8190",
  },
  {
    title: "【徵才資訊】輔仁大學資訊管理學系誠徵專任/專案教師",
    date: "2021-12-01",
    body: "誠徵專任/專案助理教授(含)以上二名，收件至110年底。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8189",
  },

  {
    title: "【徵才資訊】國立中正大學管理學院徵求資管系系主任",
    date: "2021-12-01",
    body: "系主任候選人徵求啟事（第3次延長公告）。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8188",
  },
  {
    title: "【徵才資訊】國立中正大學管理學院徵求資管系系主任",
    date: "2021-11-15",
    body: "系主任候選人徵求啟事（延長公告）。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8187",
  },
  {
    title: "【徵才資訊】國立中正大學管理學院徵求資管系系主任",
    date: "2021-11-01",
    body: "系主任候選人徵求啟事（第1次延長公告）。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8186",
  },
  {
    title: "【徵才資訊】國立中正大學管理學院徵求資管系系主任",
    date: "2021-10-01",
    body: "管理學院公開徵求資管系系主任候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8185",
  },
  {
    title: "【徵聘公告】國立東華大學資訊管理學系徵聘教師",
    date: "2021-09-20",
    body: "誠徵專任(案)助理教授(含)以上一名，具AI與大數據專長。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8184",
  },
  {
    title: "【誠徵專案/專任教師】輔仁大學資訊管理學系徵才",
    date: "2021-09-14",
    body: "徵聘專案/專任助理教授(含)以上二名，收件至9月24日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8183",
  },
  {
    title: "【徵才資訊】國立高雄科技大學資訊管理系誠徵教師",
    date: "2021-08-19",
    body: "徵聘專任或專案助理教授(含)以上一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8182",
  },
  {
    title: "【論文徵稿】第十一屆服務科學研究論壇暨研討會",
    date: "2021-08-09",
    body: "會議主題為跨界數位轉型、共創智能服務新世紀。",
    category: "業界",
    link: "https://www.csim.org.tw/news/8181",
  },
  {
    title: "輔仁大學資訊管理學系誠徵專案教師",
    date: "2021-07-07",
    body: "誠徵助理教授(含)以上專案教師一名，收件至8月27日。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8180",
  },
  {
    title: "重要公告！原定 110/05/22 舉辦之活動延期",
    date: "2021-05-14",
    body: "因疫情因素，會員代表大會及理監事選舉延後舉行。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8179",
  },

  {
    title: "【徵才公告】靜宜大學資料科學暨大數據分析與應用學系徵才",
    date: "2021-05-12",
    body: "誠徵專任或專案助理教授(含)以上，專長AI、資料科學。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8178",
  },
  {
    title: "【徵求研討會承辦校系】徵求 2021 年國際研討會承辦",
    date: "2021-04-10",
    body: "學會徵求研討會承辦單位，促進國內外學術與實務交流。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8176",
  },
  {
    title: "【論文徵稿】ICIM2021 第 32 屆國際資訊管理學術研討會",
    date: "2021-02-25",
    body: "攜手產官學研力量，聚焦數位轉型與智慧科技應用。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8175",
  },
  {
    title: "【徵才公告】中國文化大學資訊管理學系徵聘專案教師",
    date: "2021-02-25",
    body: "徵聘助理教授以上專案教師，專長雲端、AI、區塊鏈。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8174",
  },
  {
    title: "【徵才公告】輔仁大學資訊管理學系誠徵專案教學人員",
    date: "2021-01-07",
    body: "徵聘助理教授(含)以上二名，收件至 110 年 2 月底。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8173",
  },
  {
    title: "【徵才公告】國立高雄科技大學資訊管理系誠徵教師",
    date: "2020-12-29",
    body: "徵聘專任或專案助理教授(含)以上二名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8172",
  },
  {
    title: "【徵聘公告】國立臺灣師範大學管理學院資管領域教師",
    date: "2020-09-12",
    body: "徵聘助理教授、副教授等級數名，需具備全英文授課能力。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8170",
  },
  {
    title: "【研討會變動通知】ICIM2020 第 31 屆研討會延期",
    date: "2020-05-02",
    body: "受 COVID-19 疫情影響，會議延後至 2020 年 12 月舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8169",
  },
  {
    title: "【論文徵稿】ICIM2020 第 31 屆國際資訊管理學術研討會",
    date: "2020-02-26",
    body: "主題為開放、串連、智慧與共創浪潮下的數位轉型。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8168",
  },
  {
    title: "【會員代表當選公告】中華民國資訊管理學會第十六屆",
    date: "2019-12-09",
    body: "第十六屆會員代表當選名單公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8167",
  },

  {
    title: "【課程公告】2020.01.15 ERP教學研習會",
    date: "2019-12-04",
    body: "於世新大學舉行，邀請張緯良教授分享ERP教學經驗。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8166",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十六屆會員代表選舉",
    date: "2019-10-22",
    body: "辦理會員代表通訊投票，應選共 100 席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8165",
  },
  {
    title: "【徵才公告】國立臺灣師範大學管理學院資管教師徵聘",
    date: "2019-09-17",
    body: "誠徵資訊管理領域專任教師一名，需具備全英文授課能力。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8164",
  },
  {
    title: "【選舉公告】徵求第十六屆會員代表候選人登記",
    date: "2019-09-11",
    body: "辦理第十六屆會員代表候選人登記與聯署作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8163",
  },
  {
    title: "【論文徵稿】IMP2019 第 25 屆國際資訊管理暨實務研討會",
    date: "2019-09-06",
    body: "會議主題聚焦智慧商務與創新跨域科技管理。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8161",
  },
  {
    title: "【論文徵稿】2019 服務科學研究論壇 (FSSR 2019)",
    date: "2019-06-18",
    body: "會議以「智慧科技時代下的創新服務」為主軸。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8160",
  },
  {
    title: "【研討會公告】第 25 屆海峽兩岸資訊管理發展與策略研討會",
    date: "2019-05-28",
    body: "於哈爾濱工業大學舉行，徵求論文投稿。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8159",
  },
  {
    title: "【徵才公告】衛福部食藥署徵審查員",
    date: "2019-05-23",
    body: "為強化大數據應用，徵求二名資訊數據分析人才。",
    category: "業界",
    link: "https://www.csim.org.tw/news/8158",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十六屆理監事選舉結果",
    date: "2019-05-19",
    body: "公告第十六屆理監事選舉開票作業結果。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8157",
  },
  {
    title: "【選舉事宜】中華民國資訊管理學會第十六屆理監事選舉",
    date: "2019-05-12",
    body: "公告理監事選舉時間、地點與開票程序。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8156",
  },

  {
    title: "【論文徵稿】第 25 屆海峽兩岸資訊管理發展與策略學術研討會",
    date: "2019-04-29",
    body: "於哈爾濱工業大學舉辦，探討資管發展與策略。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8155",
  },
  {
    title: "【選舉公告】第十六屆理事、監事選舉公告",
    date: "2019-03-07",
    body: "辦理第十六屆理事、監事候選人登記。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8153",
  },
  {
    title:
      "【論文徵稿】2019 Taiwan Summer Workshop on Information Management (TSWIM 2019)",
    date: "2019-02-18",
    body: "第七屆 TSWIM 研討會於桃園舉行。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8152",
  },
  {
    title: "【論文徵稿】ICIM 2019 第 30 屆國際資訊管理學術研討會",
    date: "2019-01-11",
    body: "研討會主題為「資訊管理回顧與展望 - ICIM 走過 30 年」，於輔仁大學舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8151",
  },
  {
    title: "【論文徵稿】IMP 2018 第 24 屆國際資訊管理暨實務研討會",
    date: "2018-08-04",
    body: "探討 AI 與物聯網於企業營運的創新與創業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8148",
  },
  {
    title: "【論文徵稿】2018 商業與數位創新國際研討會",
    date: "2018-06-12",
    body: "面對數位創新與區域經濟挑戰，匯聚產學研能量。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8146",
  },
  {
    title: "【論文徵稿】第 24 屆海峽兩岸資訊管理發展與策略學術研討會",
    date: "2018-06-12",
    body: "於香港大學舉行，聚焦資訊管理發展策略。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8145",
  },
  {
    title: "【活動報名】2018 資安風險與金融科技大未來高峰會",
    date: "2018-06-12",
    body: "探討金融科技數位轉型、風險管理與法規遵循。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8143",
  },
  {
    title: "【論文徵稿】iCIMKC 2018 第十四屆創新、管理與知識社群國際研討會",
    date: "2018-04-24",
    body: "探討知識傳承與創新管理。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8141",
  },
  {
    title: "【徵才公告】國立臺中科技大學資訊與流通學院誠徵專案教師",
    date: "2018-03-15",
    body: "誠徵 6 名專案助理教授，具產業實務經驗優先。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8140",
  },

  {
    title: "【論文徵稿】第 29 屆國際資訊管理學術研討會 (ICIM 2018)",
    date: "2018-03-08",
    body: "於東海大學舉辦，主題為人工智慧趨勢下之資訊管理與服務創新。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8139",
  },
  {
    title: "【論文徵稿】2018 第十九屆電子化企業經營管理理論暨實務研討會",
    date: "2018-01-25",
    body: "徵稿主題包含巨量資料、電子商務、知識管理與決策支援系統等。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8135",
  },
  {
    title: "【徵才公告】國立臺中科技大學資訊管理系誠徵專案教師",
    date: "2018-01-17",
    body: "徵聘專案助理教授以上 2 名，專長為多媒體、雲端服務或資訊系統。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8134",
  },
  {
    title: "【徵才公告】國立臺北商業大學資訊管理系徵聘專任教師",
    date: "2017-12-10",
    body: "徵聘專任助理教授以上至多 2 名，需具備業界實務工作經驗。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8133",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十五屆會員代表當選名單",
    date: "2017-12-10",
    body: "公告第十五屆北區與南區會員代表當選名單。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8132",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十五屆會員代表選舉",
    date: "2017-11-29",
    body: "辦理會員代表通訊投票選舉事宜，應選共 100 席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8131",
  },
  {
    title: "【徵才公告】國立高雄第一科技大學資訊管理系誠徵專任教師",
    date: "2017-11-04",
    body: "徵聘專任助理教授以上 1 名，需符合技術及職業教育法規定。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8130",
  },
  {
    title: "【徵才公告】國立臺東大學資訊管理學系誠徵專任教師",
    date: "2017-11-04",
    body: "誠徵資訊領域專任教師，加入綠色與資訊科技學士學位學程。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8129",
  },
  {
    title: "【徵才公告】國立成功大學徵求工業與資訊管理學系系主任",
    date: "2017-11-04",
    body: "公開徵求第十七任系主任暨研究所所長候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8128",
  },
  {
    title: "【選舉公告】徵求第十五屆會員代表候選人登記",
    date: "2017-11-04",
    body: "徵求候選人登記與聯署作業，辦理第十五屆會員代表選舉。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8127",
  },

  {
    title: "【徵才公告】國立成功大學國際經營管理研究所 IIMBA 徵才",
    date: "2017-09-25",
    body: "誠徵專任助理教授以上一名，具英語授課能力。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8125",
  },
  {
    title: "【論文徵稿】2017 服務科學前瞻論壇 (FSSR 2017)",
    date: "2017-08-17",
    body: "增進大專院校及企業對於服務科學之認識及參與。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8124",
  },
  {
    title: "【論文徵稿】第二十三屆資訊管理暨實務研討會 (IMP 2017)",
    date: "2017-07-26",
    body: "於國立聯合大學舉辦，聚焦大數據、物聯網與雲端技術。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8123",
  },
  {
    title: "【論文徵稿】第二十三屆海峽兩岸訊息管理發展與策略學術研討會",
    date: "2017-05-31",
    body: "於西安舉辦，探討互聯網背景下的管理創新與變革。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8122",
  },
  {
    title: "【徵才公告】中國文化大學資訊管理學系徵聘專任教師",
    date: "2017-05-31",
    body: "誠徵助理教授以上專任教師，具資安、雲端運算專長。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8121",
  },
  {
    title: "【徵才公告】國立中央大學管理學院院長候選人徵選",
    date: "2017-05-26",
    body: "公開徵求具前瞻理念與國際視野之院長人選。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8118",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十五屆理監事選舉結果",
    date: "2017-05-15",
    body: "公告理監事選舉開票結果。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8117",
  },
  {
    title: "【論文徵稿】第二十八屆國際資訊管理學術研討會 (ICIM 2017)",
    date: "2017-03-14",
    body: "於政治大學舉辦，主題為 IoT 時代下的資訊管理。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8114",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十五屆理監事選舉",
    date: "2017-03-14",
    body: "公告選舉程序與候選人登記作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8113",
  },
  {
    title: "【徵才公告】國立中央大學管理學院院長公開徵選",
    date: "2017-03-13",
    body: "管理學院徵求新任院長候選人。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8112",
  },

  {
    title: "【徵求研討會承辦】徵求 2016 年國際資訊管理暨實務研討會承辦校系",
    date: "2016-02-22",
    body: "學會徵求年度研討會承辦單位，促進產官學研交流。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8102",
  },
  {
    title: "【論文徵稿】第二十七屆國際資訊管理學術研討會 (2016 ICIM)",
    date: "2016-02-22",
    body: "由靜宜大學資管系承辦，聚焦巨量資料與智慧生活科技。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8101",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆會員代表當選名單",
    date: "2015-12-25",
    body: "公告第十四屆會員代表選舉結果，共計 100 席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8100",
  },
  {
    title: "【徵才公告】成功大學工業與資訊管理學系新聘教師",
    date: "2015-12-23",
    body: "誠徵專任助理教授以上一名，具中英文授課能力。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8099",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆會員代表候選人名單",
    date: "2015-11-16",
    body: "候選人登記作業公告。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8097",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆會員代表通訊投票",
    date: "2015-11-15",
    body: "辦理會員代表通訊選舉作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8096",
  },
  {
    title: "【徵才公告】國立臺北商業大學資訊管理系徵聘專任教師",
    date: "2015-10-13",
    body: "誠徵專任助理教授以上一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8095",
  },
  {
    title: "【徵才公告】國立臺北科技大學資訊與財金管理系徵聘教師",
    date: "2015-10-13",
    body: "誠徵專任助理教授以上二名，兼具資訊與財金專長。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8094",
  },
  {
    title: "【選舉公告】徵求第十四屆會員代表候選人登記",
    date: "2015-10-13",
    body: "辦理會員代表候選人登記與聯署作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8093",
  },
  {
    title: "【論文徵稿】2015 第二十一屆國際資訊管理暨實務研討會 (IMP)",
    date: "2015-07-22",
    body: "由勤益科技大學資管系承辦，徵求相關論文投稿。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8092",
  },

  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆理事長及理監事選舉結果",
    date: "2015-05-31",
    body: "公告第十四屆理事長、常務理事及常務監事當選名單。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8091",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆理監事選舉結果",
    date: "2015-05-24",
    body: "公告第十四屆理監事選舉開票作業結果。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8090",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆理監事選舉候選人名單",
    date: "2015-04-29",
    body: "公告第十四屆理監事候選人名單與選舉作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8089",
  },
  {
    title: "【徵才公告】國立臺北商業大學數位多媒體設計系徵聘教師",
    date: "2015-04-10",
    body: "誠徵專任助理教授以上 3-4 名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8088",
  },
  {
    title: "【徵才公告】國立交通大學資訊管理與財務金融學系徵才",
    date: "2015-04-09",
    body: "誠徵副教授與助理教授數名，具英語授課能力。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8087",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十四屆理監事選舉與候選人登記",
    date: "2015-03-10",
    body: "辦理第十四屆理監事候選人推薦登記作業。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8086",
  },
  {
    title: "【論文徵稿】第 21 屆海峽兩岸資訊管理發展與策略學術研討會",
    date: "2015-02-13",
    body: "於澳門科技大學舉辦，主題為 IT 創新與服務應用。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8085",
  },
  {
    title: "【活動公告】2015 臺大商學研究所博士體驗營",
    date: "2014-12-25",
    body: "提供管理學術研究分享與交流平台。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8084",
  },
  {
    title: "【論文徵稿】2014 企業架構與資訊科技國際研討會",
    date: "2014-09-05",
    body: "聚焦醫療資訊與健康照護的應用契機。",
    category: "學校",
    link: "https://www.csim.org.tw/news/8083",
  },
  {
    title: "【活動公告】第五屆 Drupal Camp Taipei 社群大會",
    date: "2014-08-20",
    body: "分享 Drupal 內容管理平台導入經驗與未來發展。",
    category: "業界",
    link: "https://www.csim.org.tw/news/8082",
  },

  {
    title: "【論文徵稿】第 20 屆資訊管理暨實務研討會 (2014 IMP)",
    date: "2014-07-25",
    body: "於龍華科技大學舉辦，探討資訊服務技術與相關應用。",
    category: "學會",
    link: "https://www.csim.org.tw/news/8080",
  },
  {
    title: "【徵才公告】國立臺北商業技術學院數位多媒體設計系徵才",
    date: "2014-04-09",
    body: "誠徵專任助理教授以上 2 名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/3872",
  },
  {
    title: "【徵才公告】國立成功大學國際經營管理研究所 IIMBA 徵才",
    date: "2014-01-20",
    body: "誠徵專任助理教授以上 2 名，專長涵蓋專案管理、巨量數據分析等。",
    category: "學校",
    link: "https://www.csim.org.tw/news/268",
  },
  {
    title: "【論文徵稿】第 16 屆全國資訊管理博士生學術交流研討會",
    date: "2014-01-14",
    body: "徵求博士生論文與一般研究論文，擇優發表於 TSSCI 期刊。",
    category: "學會",
    link: "https://www.csim.org.tw/news/265",
  },
  {
    title: "【徵才公告】國立聯合大學資訊管理學系誠徵約聘教師",
    date: "2013-12-29",
    body: "誠徵約聘助理教授一名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/264",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十三屆會員代表當選名單",
    date: "2013-12-09",
    body: "公告第十三屆會員代表選舉結果。",
    category: "學會",
    link: "https://www.csim.org.tw/news/263",
  },
  {
    title: "【論文徵稿】第 25 屆國際資訊管理學術研討會 (ICIM 2014)",
    date: "2013-11-29",
    body: "於國立中興大學舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/260",
  },
  {
    title: "【活動公告】2013 年全國資管系所評鑑座談會",
    date: "2013-11-22",
    body: "於臺中科技大學舉辦，分享系所評鑑經驗。",
    category: "學會",
    link: "https://www.csim.org.tw/news/259",
  },
  {
    title: "【活動公告】第二屆資管學報工作坊",
    date: "2013-11-22",
    body: "於第 19 屆 IMP 研討會期間舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/258",
  },
  {
    title: "【選舉公告】第十三屆會員代表候選人名單與簡歷冊公告",
    date: "2013-11-11",
    body: "公告第十三屆會員代表選舉之候選人資訊。",
    category: "學會",
    link: "https://www.csim.org.tw/news/257",
  },

  {
    title: "【選舉公告】出席中華民國資訊管理學會第十三屆會員代表選舉",
    date: "2013-11-11",
    body: "公告會員代表選舉相關事項，應選總席數 100 席。",
    category: "學會",
    link: "https://www.csim.org.tw/news/256",
  },
  {
    title: "【承辦徵詢】徵詢承辦 2015 年全國研討會 (ICIM 2015)",
    date: "2013-11-04",
    body: "學會公開徵詢各校系承辦 2015 年國際資訊管理學術研討會。",
    category: "學會",
    link: "https://www.csim.org.tw/news/255",
  },
  {
    title: "【選舉公告】第十三屆會員代表大會選舉通告",
    date: "2013-10-18",
    body: "公告會員代表選舉相關行政程序。",
    category: "學會",
    link: "https://www.csim.org.tw/news/254",
  },
  {
    title: "【論文徵稿】2013 第 19 屆資訊管理暨實務研討會 (IMP 2013) 延期公告",
    date: "2013-10-06",
    body: "截稿日期延後至 2013 年 10 月 21 日。",
    category: "學會",
    link: "https://www.csim.org.tw/news/251",
  },
  {
    title: "【會議公告】第十三屆第二次理監事聯席會議",
    date: "2013-09-26",
    body: "於台北科技大學召開理監事會議。",
    category: "學會",
    link: "https://www.csim.org.tw/news/248",
  },
  {
    title: "【論文徵稿】NCS 2013 全國計算機會議",
    date: "2013-08-15",
    body: "包含數位鑑識、安全與隱私相關 Workshop。",
    category: "學校",
    link: "https://www.csim.org.tw/news/157",
  },
  {
    title: "【論文徵稿】2013 第 19 屆資訊管理暨實務研討會 (IMP 2013)",
    date: "2013-08-14",
    body: "主題為「雲端服務生活新世代」，由國立臺中科技大學承辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/154",
  },
  {
    title: "【研討會】雲端運算之創新應用與服務發展研討會",
    date: "2013-08-09",
    body: "與金融研訓院合作，探討雲端應用架構與服務平台。",
    category: "學會",
    link: "https://www.csim.org.tw/news/148",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十三屆會員代表選舉公告",
    date: "2013-08-08",
    body: "公告第十三屆會員代表選舉相關規定與候選人聯署方式。",
    category: "學會",
    link: "https://www.csim.org.tw/news/140",
  },
  {
    title: "【競賽活動】2013 第 18 屆全國大專校院資訊應用服務創新競賽",
    date: "2013-08-08",
    body: "全國性資訊應用創新競賽訊息。",
    category: "學會",
    link: "https://www.csim.org.tw/news/134",
  },

  {
    title: "【選舉公告】中華民國資訊管理學會第十三屆理事、監事選舉公告",
    date: "2013-06-11",
    body: "公告第十三屆理監事選舉作業與候選人名單。",
    category: "學會",
    link: "https://www.csim.org.tw/news/133",
  },
  {
    title: "【選舉公告】中華民國資訊管理學會第十三屆理監事選舉結果",
    date: "2013-06-11",
    body: "公告選舉結果，選出理事 21 名、監事 7 名。",
    category: "學會",
    link: "https://www.csim.org.tw/news/132",
  },
  {
    title: "【論文徵稿】第 15 屆全國資訊管理博士生學術交流研討會",
    date: "2013-01-21",
    body: "同步舉辦 2013 國際雲端服務學術研討會，博士生論文可發表於 TSSCI 期刊。",
    category: "學會",
    link: "https://www.csim.org.tw/news/99",
  },
  {
    title: "【論文徵稿】第 24 屆國際資訊管理學術研討會 (ICIM 2013)",
    date: "2013-01-21",
    body: "於真理大學淡水校區舉辦。",
    category: "學會",
    link: "https://www.csim.org.tw/news/98",
  },
  {
    title: "【研討會】1st AP-BPM Conference",
    date: "2013-01-21",
    body: "邀請學會會員投稿資訊與投稿轉知。",
    category: "學會",
    link: "https://www.csim.org.tw/news/88",
  },
  {
    title: "【活動公告】102 年度年會與會員代表大會相關作業",
    date: "2012-12-21",
    body: "辦理會員清查，並公告將於 2013 年改選第 13 屆理監事。",
    category: "學會",
    link: "https://www.csim.org.tw/news/31",
  },
  {
    title: "【徵才公告】國立中正大學資訊管理學系誠徵專任教師",
    date: "2012-11-30",
    body: "誠徵專任教師 2 名。",
    category: "學校",
    link: "https://www.csim.org.tw/news/34",
  },
];
const allNews = Array.from(
  { length: 200 },
  (_, i) => rawData[i % rawData.length],
);
let currentCategory = "all";

function filterNews(cat, btn) {
  currentCategory = cat;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  render(1);
}

// ... (rawData 與其他邏輯保持不變)

function render(currentPage = 1) {
  const filteredData =
    currentCategory === "all"
      ? allNews
      : allNews.filter((n) => n.category === currentCategory);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginated = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // 調整：標題取消 <a> 標籤，僅閱讀更多保留連結
  const newsGrid = document.getElementById("news-grid");
  if (newsGrid) {
    newsGrid.innerHTML = paginated
      .map(
        (n) => `
        <div class="news-card">
            <div class="news-main">
                <div class="news-title">${n.title}</div>
                <div class="news-body">${n.body}</div>
            </div>
            <div class="news-side">
                <span class="news-date">${n.date}</span>
                <a href="${n.link}" target="_blank" class="news-btn">閱讀更多</a>
            </div>
        </div>
    `,
      )
      .join("");
  }

  // 分頁邏輯 (維持不變)
  let pagerHtml = `<li><a onclick="render(1)">« 第一頁</a></li><li><a onclick="render(${Math.max(1, currentPage - 1)})">‹ 上一頁</a></li>`;
  let startPage = Math.max(1, currentPage - 4);
  let endPage = Math.min(totalPages, startPage + 8);
  if (startPage > 1) pagerHtml += `<li><a>…</a></li>`;
  for (let i = startPage; i <= endPage; i++)
    pagerHtml += `<li class="${i === currentPage ? "active" : ""}"><a onclick="render(${i})">${i}</a></li>`;
  if (endPage < totalPages) pagerHtml += `<li><a>…</a></li>`;
  pagerHtml += `<li><a onclick="render(${Math.min(totalPages, currentPage + 1)})">下一頁 ›</a></li><li><a onclick="render(${totalPages})">最後一頁 »</a></li>`;
  const pagerEl = document.getElementById("pager");
  if (pagerEl) pagerEl.innerHTML = pagerHtml;
}
render();

const galleryData = [
  {
    title: "第22屆海峽兩岸資訊管理發展與策略學術研討會",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/dscn0006_diao_zheng_da_xiao_.jpg?itok=W7WhOVvP",
    link: "html/8110.html",
    date: "2016/07/29",
  },
  {
    title: "第二十七屆國際資訊管理學術研討會 (ICIM 2016)",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/img_1165.jpg?itok=ptR9bbCh",
    link: "html/8108.html",
    date: "2016/05/21",
  },
  {
    title: "2016資管學會理監事會議及會員代表大會",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/img_1170.jpg?itok=4DE9Zz9L",
    link: "html/8109.html",
    date: "2016/05/21",
  },
  {
    title: "大專院校資訊管理系所主管聯席會議 (北區)",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/20160318_140511.jpg?itok=wlylHu6F",
    link: "html/8106.html",
    date: "2016/04/14",
  },
  {
    title: "第21屆國際資訊管理暨實務研討會 (IMP 2015)",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/2015-11-27_16.29.17.jpg?itok=ARQkKBvv",
    link: "html/152.html",
    date: "2015/11/27",
  },
  {
    title: "金融研訓院雲端研討會",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/cimg2254.jpg?itok=Uty6QHcQ",
    link: "html/101.html",
    date: "2013/01/10",
  },
  {
    title: "2013資管學會理監事會",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/20060613000952-csim2006052101.jpg?itok=JK8RK-YO",
    link: "html/25.html",
    date: "2013/01/07",
  },
  {
    title: "第十一屆全國大專院校資訊管理實務專題競賽",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/20070103125246-a24.jpeg?itok=mcqh_IXE",
    link: "html/13.html",
    date: "2006/12/16",
  },
  {
    title: "第一屆全國大學院校資管博碩士論文競賽",
    img: "https://www.csim.org.tw/sites/default/files/styles/gallery_front/public/changephoto20060613000952-csim2006052107.jpeg?itok=dQXb5zwy",
    link: "html/14.html",
    date: "2006/05/21",
  },
];
const galleryTrack = document.getElementById("gallery-carousel");
if (galleryTrack) {
  galleryData.forEach((item) => {
    galleryTrack.innerHTML += `
            <div class="gallery-item">
                <a href="${item.link}" class="gallery-link">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="gallery-date">${item.date}</div> 
                    <div class="gallery-title">${item.title}</div>
                </a>
            </div>
        `;
  });
}
// 確保 maxIndex 設定為 2 (即 0, 1, 2 三個位置，每個位置顯示 3 張圖)
let currentGroup = 0;
const totalGroups = 3; // 因為共 9 張，每組 3 張，所以有 3 個頁面

function moveGallery(direction) {
  // 切換組別 (0, 1, 2)
  currentGroup = (currentGroup + direction + totalGroups) % totalGroups;

  // 每次移動整整 100% 的容器寬度，剛好跳過三張圖
  galleryTrack.style.transform = `translateX(-${currentGroup * 100}%)`;
}
