// school.js

// 1. 建立學校資料庫 (共 103 筆資料，包含 region 與 city)
const schoolsData = [
    // --- 來自第一頁的資料 ---
    { name: "樹人醫護管理專校", region: "南區", city: "高雄市", dept: "資訊管理系", director: "楊媚靜", phone: "(07)6979392", website: "https://www.szmc.edu.tw/" },
    { name: "康寧大學(健康數位科技學系)", region: "北區", city: "台北市", dept: "資訊管理系", director: "嚴竹華", phone: "(02)26321181轉280", website: "https://im.ukn.edu.tw/p/404-1028-8392.php?Lang=zh-tw" },
    { name: "環球科技大學(資訊與電子商務管理系)", region: "中區", city: "雲林縣", dept: "資訊管理系", director: "盧盈光", phone: "(05)5370988#4351", website: "" },
    { name: "樹德科技大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "蕭銘雄", phone: "(07)6158000#3002", website: "http://www.mis.stu.edu.tw/" },
    { name: "中信科技大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "黃仲麒", phone: "(06)5979566#5244", website: "https://www.ctbctech.edu.tw" },
    { name: "輔英科技大學", region: "南區", city: "高雄市", dept: "資訊科技與管理學系", director: "葉富豪", phone: "(07)7811151#6480", website: "https://eitm.fy.edu.tw/?Lang=zh-tw" },
    { name: "嘉南藥理科技大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "陳瑞甫", phone: "(06)2664911#5301", website: "https://mis.cnu.edu.tw/" },
    { name: "崑山科技大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "曾生元", phone: "(06)2050166", website: "https://web.ksu.edu.tw/" },
    { name: "台鋼科技大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "龔榮源", phone: "(07)607-7022(2102)", website: "https://www.tsust.edu.tw/" },
    { name: "美和科技大學", region: "南區", city: "屏東縣", dept: "資訊管理系", director: "方光明", phone: "(08)7799821#8330", website: "https://www.meiho.edu.tw/" },
    { name: "南台科技大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "王鼎超", phone: "(06)253-3131#8482/4300", website: "https://mis.stust.edu.tw/" },
    { name: "國立澎湖科技大學", region: "東部及離島", city: "澎湖縣", dept: "資訊管理系", director: "呂峻益 (代理)", phone: "06-926-4115轉5622", website: "https://www.npu.edu.tw/" },
    { name: "國立高雄科技大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "李慶章", phone: "07 6011000 #34117", website: "https://mis.nkust.edu.tw/app/index.php" },
    { name: "國立屏東大學", region: "南區", city: "屏東縣", dept: "資訊管理系", director: "張文智", phone: "(08)7663800 #34005", website: "https://www.nptu.edu.tw/" },
    { name: "國立虎尾科技大學", region: "中區", city: "雲林縣", dept: "資訊管理系", director: "藍友烽", phone: "05-6315745", website: "https://nfuim.nfu.edu.tw/zh/" },
    { name: "國立雲林科技大學", region: "中區", city: "雲林縣", dept: "資訊管理系", director: "蕭鉢", phone: "05-5342601#5329", website: "https://www.mis.yuntech.edu.tw/" },
    { name: "嶺東科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "陳建興", phone: "04-2389-2088#3731、3732", website: "https://im.ltu.edu.tw/" },
    { name: "僑光科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "劉柏伸", phone: "04-27016855 ext 2251", website: "https://imtech.ocu.edu.tw/" },
    { name: "朝陽科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "戴紹國", phone: "(04)23323000#7124", website: "https://webim.cyut.edu.tw/" },
    { name: "修平科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "王仁澤", phone: "(04)23692135", website: "https://im.hust.edu.tw/" },
    
    // --- 來自 PDF 2 的資料 ---
    { name: "建國科技大學", region: "中區", city: "彰化縣", dept: "資訊管理系", director: "蘇志青", phone: "(04)7111111#3600", website: "" },
    { name: "南開科技大學", region: "中區", city: "南投縣", dept: "資訊管理系", director: "李孟度", phone: "(049)2563489#2862", website: "https://www.nkut.edu.tw/" },
    { name: "龍華科技大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "何怡偉", phone: "02-82093211#6318", website: "https://im.lhu.edu.tw/" },
    { name: "德明財經科技大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "林建福", phone: "(02)26585801#2761", website: "https://misweb.takming.edu.tw/" },
    { name: "萬能科技大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "施伯勳", phone: "(03)4515811#66002", website: "http://www.im.vnu.edu.tw/" },
    { name: "聖約翰科技大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "朴翰祥", phone: "(02)28013131#6751", website: "https://sites.google.com/mail.sju.edu.tw/mis" },
    { name: "景文科技大學(行動商務與多媒體應用系)", region: "北區", city: "新北市", dept: "資訊管理系", director: "方鎮良", phone: "(02)82122000#6953", website: "http://mm.just.edu.tw/" },
    { name: "健行科技大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "林孟文", phone: "(03)4581196#7308", website: "http://www.im.uch.edu.tw/" },
    { name: "明新科技大學", region: "北區", city: "新竹縣", dept: "資訊管理系", director: "葉慈章", phone: "(03)5593142#3430/3447", website: "https://acade.must.edu.tw/index.aspx?UnitID=47" },
    { name: "國立台灣科技大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "朱宇倩", phone: "(02)2737-6772", website: "https://www.cs.ntust.edu.tw/" },
    { name: "和春技術學院", region: "南區", city: "高雄市", dept: "資訊管理系", director: "", phone: "(07)2621941", website: "" },
    { name: "國立勤益科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "張裕幸", phone: "(04)23924505#7936", website: "https://mis.ncut.edu.tw/" },
    { name: "蘭陽技術學院", region: "東部及離島", city: "宜蘭縣", dept: "資訊管理系", director: "黃素珍", phone: "(03)9771997", website: "" },
    { name: "醒吾科技大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "陳慶忠", phone: "(02)26015310#2460~2463", website: "https://mis.hwu.edu.tw/" },
    { name: "黎明技術學院", region: "北區", city: "新北市", dept: "資訊管理系", director: "陳林宏", phone: "(02)29097811#2101", website: "" },
    { name: "華夏科技大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "張錫正", phone: "(02)89415100#4120", website: "http://www.mis.hwh.edu.tw/" },
    { name: "致理科技大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "黃信博", phone: "(02)22576167#1313", website: "https://im100.chihlee.edu.tw/" },
    { name: "南亞技術學院", region: "北區", city: "桃園市", dept: "資訊管理系", director: "藍中賢", phone: "(03)4361070#1531", website: "https://web.nanya.edu.tw/csie/index3.htm" },
    { name: "亞東科技大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "陳鵬文", phone: "(02)77388000#5317", website: "https://im.aeust.edu.tw/" },
    { name: "國立台中科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "姜琇森", phone: "(04)22196882", website: "https://im.nutc.edu.tw/" },

    // --- 來自 PDF 3 的資料 ---
    { name: "義守大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "吳有龍", phone: "(07)6577711#6563", website: "https://mis.isu.edu.tw/" },
    { name: "南華大學", region: "南區", city: "嘉義縣", dept: "資訊管理系", director: "張仲瑋", phone: "(05)2721001#2611", website: "http://im3.nhu.edu.tw/" },
    { name: "長榮大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "林穎宏", phone: "(06)2785123#6100、6106", website: "http://dweb.cjcu.edu.tw/im" },
    { name: "國立臺南大學", region: "南區", city: "台南市", dept: "數位學習科技學系", director: "蘇俊銘", phone: "(06)2133111#775", website: "https://ilt.nutn.edu.tw/" },
    { name: "國立嘉義大學", region: "南區", city: "嘉義市", dept: "資訊管理系", director: "李彥賢", phone: "(05)2732894", website: "https://www.ncyu.edu.tw/mis/" },
    { name: "國立高雄大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "林杏子", phone: "07-591-9511", website: "https://im.nuk.edu.tw/" },
    { name: "中華民國海軍軍官學校", region: "南區", city: "高雄市", dept: "資訊管理系", director: "黃釗輝", phone: "07-5834700#1809", website: "" },
    { name: "國立成功大學(工業與資訊管理學系)", region: "南區", city: "台南市", dept: "資訊管理系", director: "王逸琳", phone: "(06)2757575#53123", website: "https://iim.ncku.edu.tw/" },
    { name: "國立台東大學", region: "東部及離島", city: "台東縣", dept: "資訊管理系", director: "黃協弘", phone: "(089) 318855#6319", website: "https://isms.nttu.edu.tw/" },
    { name: "國立中正大學", region: "南區", city: "嘉義縣", dept: "資訊管理系", director: "吳帆", phone: "(05)2720411#34618", website: "https://mis.ccu.edu.tw/" },
    { name: "國立中山大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "徐士傑", phone: "(07)5252000#4732/4700", website: "https://web.mis.nsysu.edu.tw/" },
    { name: "靜宜大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "張怡君", phone: "(04)26328001#18127", website: "https://csim.pu.edu.tw/" },
    { name: "明道大學(資訊傳播學系)", region: "中區", city: "彰化縣", dept: "資訊管理系", director: "張冀青", phone: "(04)8876660#8111", website: "" },
    { name: "亞洲大學(行動商務與多媒體應用學系)", region: "中區", city: "台中市", dept: "資訊多媒體應用學系", director: "劉國成", phone: "(04)23323456#6122", website: "https://ai.asia.edu.tw/" },
    { name: "國立聯合大學", region: "中區", city: "苗栗縣", dept: "資訊管理系", director: "鄭光廷", phone: "037-381512", website: "https://impost.nuu.edu.tw/" },
    { name: "國立暨南國際大學", region: "中區", city: "南投縣", dept: "資訊管理系", director: "姜美玲", phone: "(049)2910960#4638", website: "https://www.im.ncnu.edu.tw/" },
    { name: "國立彰化師範大學", region: "中區", city: "彰化縣", dept: "資訊管理系", director: "王怡舜", phone: "(04)7232105#7331", website: "https://imweb.ncue.edu.tw/" },
    { name: "國立中興大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "蔡孟勳", phone: "(04)22840864#666", website: "https://mis.nchu.edu.tw/" },
    { name: "銘傳大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "林至中", phone: "(03)3507001#3420", website: "https://im.wp.mcu.edu.tw/" },
    { name: "輔仁大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "董惟鳳", phone: "(02)2905-2717", website: "https://www.im.fju.edu.tw/" },

    // --- 來自 PDF 4 的資料 ---
    { name: "實踐大學", region: "北區", city: "台北市", dept: "資訊科技與管理學系", director: "李建國", phone: "(02)25381111#8810/8974", website: "https://itm.usc.edu.tw/" },
    { name: "開南大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "劉鎮豪", phone: "(03)3412500#3501、7955", website: "https://im.knu.edu.tw/" },
    { name: "華梵大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "林智玲", phone: "(02)2663-2102#4002", website: "https://cole.hfu.edu.tw/main.php" },
    { name: "淡江大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "施盛寶", phone: "(02)26215656#2114", website: "https://www.im.tku.edu.tw/" },
    { name: "真理大學", region: "北區", city: "新北市", dept: "資訊管理系", director: "葉錫圻", phone: "(02)26212121#4172", website: "https://mis.au.edu.tw/" },
    { name: "長庚大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "廖耕億", phone: "(03)2118800#5852", website: "https://www.cgu.edu.tw/im/" },
    { name: "東吳大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "黃心怡", phone: "(02)23111531#3814", website: "http://www.csim.scu.edu.tw/" },
    { name: "國立臺北護理健康大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "陳彥宏", phone: "(02)28227101#1235、1220", website: "https://im.ntunhs.edu.tw/" },
    { name: "國立國防大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "蘇品長", phone: "(03)380-1126#604252", website: "https://www.ndu.edu.tw/" },
    { name: "國立政治大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "張欣綠", phone: "(02)29393091#81214", website: "https://mis2.nccu.edu.tw/" },
    { name: "國立空中大學(管理與資訊學系)", region: "北區", city: "新北市", dept: "資訊管理系", director: "顏春煌", phone: "(02)2282-9355#7616,7651", website: "https://www2.nou.edu.tw/mi/index.aspx" },
    { name: "國立東華大學", region: "東部及離島", city: "花蓮縣", dept: "資訊管理系", director: "劉英和", phone: "03-890-3116", website: "https://im.ndhu.edu.tw/" },
    { name: "國立陽明交通大學資訊管理與財務金融學系", region: "北區", city: "新竹市", dept: "資訊與財金管理學系", director: "林智勇", phone: "03-5712121#57093", website: "https://imf.nycu.edu.tw/" },
    { name: "國立交通大學", region: "北區", city: "新竹市", dept: "資訊管理所", director: "蔡銘箴", phone: "(03)5712121#57401", website: "https://iim.nycu.edu.tw/" },
    { name: "國立台灣大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "盧信銘", phone: "(02)33663366", website: "https://management.ntu.edu.tw/IM" },
    { name: "國立台北大學", region: "北區", city: "新北市", dept: "資訊管理所", director: "戴敏育", phone: "(02)86741111#66873", website: "http://www.mis.ntpu.edu.tw/#/" },
    { name: "國立中央警察大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "林曾祥", phone: "03-3282321#4295", website: "https://im.cpu.edu.tw/" },
    { name: "東海大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "張伊婷", phone: "(04)23590121#35908", website: "http://im.thu.edu.tw/" },
    { name: "國立中央大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "陳以錚", phone: "(03)4227151#66552", website: "https://im.mgt.ncu.edu.tw/" },
    { name: "育達科技大學", region: "中區", city: "苗栗縣", dept: "資訊管理系", director: "張毓騰", phone: "(037)651188#5520", website: "https://www.ydu.edu.tw/" },

    // --- 來自 PDF 5 的資料 ---
    { name: "玄奘大學", region: "北區", city: "新竹市", dept: "資訊管理系", director: "蔡耀弘", phone: "(03)5302255#1264", website: "http://www.hcu.edu.tw/itd/" },
    { name: "正修科技大學", region: "南區", city: "高雄市", dept: "資訊管理系", director: "夏自立", phone: "(07)7358800#5324", website: "https://mis.csu.edu.tw/" },
    { name: "弘光科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "黃建基", phone: "(04)26318652#5401~5403", website: "https://www.hk.edu.tw/" },
    { name: "台灣首府大學(資訊與多媒體設計學系)", region: "南區", city: "台南市", dept: "資訊多媒體應用學系", director: "楊振銘", phone: "(06)5718888#861、862", website: "" },
    { name: "台南應用科技大學", region: "南區", city: "台南市", dept: "資訊管理系", director: "戴文禮", phone: "(06)2532106#333", website: "https://mis.tut.edu.tw/" },
    { name: "國立臺北科技大學", region: "北區", city: "台北市", dept: "資訊與財金管理學系", director: "王貞淑", phone: "(02)27712171#2355/1168", website: "https://ifm.ntut.edu.tw/" },
    { name: "臺北城市科技大學(資訊工程系)", region: "北區", city: "台北市", dept: "資訊管理系", director: "陳俊成", phone: "(02)28927154#8030", website: "https://www.tpcu.edu.tw/" },
    { name: "世新大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "劉育津", phone: "(02)22368225#63341", website: "http://im.wp.shu.edu.tw/" },
    { name: "文藻外語大學(數位內容應用與管理系)", region: "南區", city: "高雄市", dept: "數位內容設計系", director: "陳泰良", phone: "(07)3426031#6301/6329", website: "https://c028.wzu.edu.tw/" },
    { name: "元智大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "林志麟", phone: "(03)463-8800#2611", website: "https://www.mis.yzu.edu.tw/" },
    { name: "元培醫事科技大學", region: "北區", city: "新竹市", dept: "資訊管理系", director: "王德順", phone: "(03)6102361#2345", website: "https://im.ypu.edu.tw/" },
    { name: "中臺科技大學", region: "中區", city: "台中市", dept: "資訊管理系", director: "王國安", phone: "(04)22391647#7700", website: "https://mgis2.ctust.edu.tw/" },
    { name: "中華醫事科技大學(數位設計與資訊管理系)", region: "南區", city: "台南市", dept: "資訊管理系", director: "曾雅芬", phone: "(06)2674567#550", website: "" },
    { name: "中華科技大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "徐慧霞", phone: "(02)26546420#243#10", website: "https://ccm.cust.edu.tw/" },
    { name: "中華大學", region: "北區", city: "新竹市", dept: "資訊管理系", director: "賴以軒", phone: "03-5186572", website: "http://mis.chu.edu.tw/" },
    { name: "中國科技大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "林華乙", phone: "02-29313416 #2351", website: "https://sites.google.com/view/cutedmis" },
    { name: "中國文化大學", region: "北區", city: "台北市", dept: "資訊管理系", director: "王福星", phone: "(02)28610511、28611801#35901", website: "https://mis.pccu.edu.tw/" },
    { name: "中原大學", region: "北區", city: "桃園市", dept: "資訊管理系", director: "廖秀莉", phone: "(03)2655401#5400", website: "https://im.cycu.edu.tw/" },
    { name: "中州技術學院", region: "中區", city: "彰化縣", dept: "資訊管理系", director: "廖基堯", phone: "(04)8359000#3201", website: "" },
    { name: "中山醫學大學(醫療產業科技管理學系)", region: "中區", city: "台中市", dept: "醫療資訊管理學系", director: "蔡雅芳", phone: "(04)24730022#12127", website: "https://health.csmu.edu.tw/" },

    // --- 來自 PDF 6 的資料 ---
    { name: "大葉大學", region: "中區", city: "彰化縣", dept: "資訊管理系", director: "陳才", phone: "(04)8511888#3000", website: "https://im.dyu.edu.tw/" },
    { name: "敏實科技大學", region: "北區", city: "新竹縣", dept: "資訊管理系", director: "李培育", phone: "(03)5927700#2751", website: "https://www.mitust.edu.tw/" },
    { name: "大同大學", region: "北區", city: "台北市", dept: "資訊經營系", director: "高有成", phone: "(02) 77364779", website: "https://mis.ttu.edu.tw/" }
];

// 預留變數以進行篩選與分頁
let currentDisplayData = schoolsData; 
const itemsPerPage = 20; 
let currentPage = 1;     

// 目前選擇的篩選條件
let currentRegion = '全部地區';
let searchText = '';

// DOM 元素
const container = document.getElementById('schoolContainer');
const paginationContainer = document.getElementById('paginationContainer');
const searchInput = document.getElementById('searchInput');
const pillButtons = document.querySelectorAll('.pill-btn');

// ==========================================
// 🌟 負責過濾資料的核心函數
// ==========================================
function filterData() {
    currentDisplayData = schoolsData.filter(school => {
        // 1. 地區篩選 (以 schoolsData 設定的 region 屬性為基準)
        const matchesRegion = (currentRegion === '全部地區') || (school.region === currentRegion);
        
        // 2. 關鍵字篩選 (名稱、縣市、主任、系所、地區)
        const matchesSearch = school.name.toLowerCase().includes(searchText) || 
                              school.region.toLowerCase().includes(searchText) ||
                              school.city.toLowerCase().includes(searchText) ||
                              school.director.toLowerCase().includes(searchText) ||
                              school.dept.toLowerCase().includes(searchText);
                              
        return matchesRegion && matchesSearch;
    });

    currentPage = 1; // 篩選後切回第一頁
    renderSchools(currentPage);
}

// ==========================================
// 🌟 負責「印出卡片」的函數
// ==========================================
function renderSchools(page) {
    if (!container) return;
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = currentDisplayData.slice(startIndex, endIndex);

    let htmlContent = '';
    
    if (pageData.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#6b7280; padding:40px;">找不到符合的學校，請換個關鍵字或地區試試看！</p>';
        paginationContainer.innerHTML = '';
        return;
    }

    pageData.forEach(school => {
        htmlContent += `
            <div class="school-card">
                <div class="card-header">
                    <div class="card-title">
                        <h3>${school.name}</h3>
                        <span>${school.city}</span>
                    </div>
                </div>
                <div class="card-info">
                    <div class="info-row">
                        <ion-icon name="school-outline"></ion-icon>
                        <div>
                            <p class="dept">${school.dept}</p>
                            <p class="director">系主任：${school.director || '未提供'}</p>
                        </div>
                    </div>
                    <div class="info-row">
                        <ion-icon name="call-outline"></ion-icon>
                        <a href="tel:${school.phone.replace(/[^0-9-]/g, '')}">${school.phone}</a>
                    </div>
                </div>
                <div class="card-actions">
                    ${school.website ? `<a href="${school.website}" target="_blank" class="btn-primary">前往網站</a>` : `<span class="btn-secondary" style="cursor: not-allowed; opacity: 0.5;">暫無網站</span>`}
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
    renderPagination();
}

// ==========================================
// 🌟 負責「印出分頁按鈕」的函數
// ==========================================
function renderPagination() {
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(currentDisplayData.length / itemsPerPage);
    let paginationHTML = '';

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    const prevDisabled = currentPage === 1 ? 'pointer-events:none; opacity:0.5;' : '';
    paginationHTML += `<a href="#" class="page-item" style="${prevDisabled}" onclick="changePage(${currentPage - 1}, event)"><ion-icon name="chevron-back-outline" style="vertical-align: middle;"></ion-icon></a>`;

    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        paginationHTML += `<a href="#" class="page-item ${activeClass}" onclick="changePage(${i}, event)">${i}</a>`;
    }

    const nextDisabled = currentPage === totalPages ? 'pointer-events:none; opacity:0.5;' : '';
    paginationHTML += `<a href="#" class="page-item" style="${nextDisabled}" onclick="changePage(${currentPage + 1}, event)"><ion-icon name="chevron-forward-outline" style="vertical-align: middle;"></ion-icon></a>`;

    paginationContainer.innerHTML = paginationHTML;
}

// ==========================================
// 🌟 點擊按鈕時「切換頁面」的函數
// ==========================================
window.changePage = function(newPage, event) {
    if (event) event.preventDefault(); 
    currentPage = newPage;  
    renderSchools(currentPage); 
    
    // 平滑滾動到搜尋與篩選列上方
    const filterSection = document.querySelector('.filter-section');
    if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ==========================================
// 🌟 綁定事件監聽器
// ==========================================

// 監聽搜尋輸入
if (searchInput) {
    searchInput.addEventListener('input', function() {
        searchText = this.value.toLowerCase().trim();
        filterData();
    });
}

// 監聽地區按鈕點擊
if (pillButtons) {
    pillButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            pillButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentRegion = this.textContent.trim();
            filterData();
        });
    });
}

// 網頁初始化
renderSchools(currentPage);