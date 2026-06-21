// 自動偵測路徑深度
// 因為我的index獨立在資料夾最外層 但我是用js的方式顯示到覽頁 這樣在每個地方點的連結路徑會不一樣 所以要用這個
// 下面的${rootPath} 這種都是為了可以應變路徑
const isInHtmlFolder = window.location.pathname.includes("/html/");
const isIn114Folder = window.location.pathname.includes("/114-2 資管學會/");
const rootPath = isInHtmlFolder || isIn114Folder ? "../" : "";
const htmlPath = isIn114Folder ? "../html/" : isInHtmlFolder ? "" : "html/";
const csim114Path = isIn114Folder
  ? ""
  : isInHtmlFolder
    ? "../114-2 資管學會/"
    : "114-2 資管學會/";

// header
const headerHTML = `
    <header class="site-header">
        <a href="${rootPath}index.html" class="brand-container" style="text-decoration: none; color: inherit;">
            <img src="${rootPath}image/CSIM.png" alt="CSIM" class="brand-logo"> 
            <h1 class="brand-name">中華民國資訊管理學會</h1>
        </a>

        <nav class="nav-menu">
            <a href="${rootPath}index.html" class="nav-item ">首頁</a>
            <div class="nav-dropdown">
                <a href="#" class="nav-item">
                    關於學會 <i class="fa-solid fa-angle-down dropdown-icon"></i>
                </a>
    
                <div class="dropdown-menu">
                    <a href="${htmlPath}csim_intro.html">學會簡介</a>
                    <a href="${htmlPath}csim_article.html">組織章程</a>
                    <a href="${htmlPath}csim_org.html">學會組織</a>
                    <a href="${htmlPath}csim_dir.html">理監事</a>
                    <a href="${htmlPath}csim_apply.html">申請入會</a>
                    <a href="${htmlPath}csim_record.html">會議記錄</a>
                </div>
            </div>
        
            <a href="${htmlPath}school.html" class="nav-item ">各校資管系所</a>
            <a href="${htmlPath}newconference.html" class="nav-item "
              >研討會與論文</a
            >
        </nav>

        <!-- 右側：功能按鈕區塊 -->
        <div class="nav-actions signin">
            <a href="${htmlPath}signin.html" class="action-signin">會員登入</a>
        </div>
    </header>
`;

// footer
const footerHTML = `
    <footer class="custom-footer">
        <div class="footer-container">
            <div class="footer-col brand-col">
                <div class="footer-brand">
                    <h2>中華民國資訊管理學會</h2>
                </div>
                <p class="footer-desc">中華民國資訊管理學會成立於民國 79年，係集合群國大專院校資訊管理學門之學者專家與部分資訊業界之精英組合而成。</p>
            </div>

            

            <div class="footer-col">
                <h3>資源服務</h3>
                <div class="footer-links">
                    <a href="https://icim2026.com/"><i class="fa-solid fa-angle-right"></i> 第37屆國際資訊管理學術研討會</a>
                    <a href="https://innoserve.tca.org.tw/"><i class="fa-solid fa-angle-right"></i> 第31屆大專校院資訊應用服務創新競賽</a>
                    <a href="https://jim-tw.com/"><i class="fa-solid fa-angle-right"></i> 資訊管理學報</a>
                </div>
            </div>

            <div class="footer-col contact-col">
                <h3>聯絡我們</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="https://www.google.com/maps/search/?api=1&query=新北市淡水區英專路151號" target="_blank" rel="noopener noreferrer">
                            251301 新北市淡水區英專路151號 (資管系辦公室) <br>
                            No.151, Yingzhuan Rd., Tamsui Dist., New Taipei City 251301, Taiwan (R.O.C.)
                        </a>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-envelope"></i> 
                        <a href="mailto:csim.service@gmail.com">電子信箱：csim.service@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-envelope"></i> 
                        <a href="mailto:rsshaw@mail.tku.edu.tw">理事長信箱：rsshaw@mail.tku.edu.tw</a>
                    </div>
                    <div class="contact-item">
                        <i class="fa-solid fa-envelope"></i> 
                        <a href="mailto:james@mail.tku.edu.tw">秘書長信箱：james@mail.tku.edu.tw</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p align="center">中華民國資訊管理學會 版權所有@2013 CSIM All Rights Reserved.</p>
        </div>
    </footer>
`;

document.getElementById("header-container").innerHTML = headerHTML;
document.getElementById("footer-container").innerHTML = footerHTML;
