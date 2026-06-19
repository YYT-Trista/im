// components.js

// 準備 Header 的內容 (只留下 class)
const headerHTML = `
    <header class="site-header">
        <div class="brand-container">
            <img src="CSIM.png" alt="CSIM" class="brand-logo">
            <h1 class="brand-name">中華民國資訊管理學會</h1>
        </div>

        <nav class="nav-menu">
            <a href="about.html" class="nav-item ">首頁</a>
            <div class="nav-dropdown">
                <a href="about.html" class="nav-item">
                    關於學會 <i class="fa-solid fa-angle-down dropdown-icon"></i>
                </a>
    
                <div class="dropdown-menu">
                    <a href="#">學會簡介</a>
                    <a href="#">組織章程</a>
                    <a href="#">學會組織</a>
                    <a href="#">理監事</a>
                    <a href="#">申請入會</a>
                    <a href="#">會議記錄</a>
                </div>
            </div>
        
            <a href="school.html" class="nav-item ">各校資管系所</a>
            <a href="research.html" class="nav-item ">研討會與論文</a>
        </nav>

        <!-- 右側：功能按鈕區塊 -->
        <div class="nav-actions signin">
            <a href="signin.html" class="action-register">會員登入</a>
        </div>
    </header>
`;

// 準備 Footer 的內容 (只留下 class)
// 準備 Footer 的內容 (進階質感版)
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

// 把內容塞進網頁對應的 ID 盒子裡
document.getElementById('header-container').innerHTML = headerHTML;
document.getElementById('footer-container').innerHTML = footerHTML;