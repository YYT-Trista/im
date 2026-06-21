/* === newconference.js === */
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("targetPaperTable");
  if (!table) return;

  // 1. 自動拔除寫死的 onclick，避免跳轉到原網站
  const allLinks = table.querySelectorAll("a");
  allLinks.forEach((link) => {
    const td = link.closest("td");
    // 只要不是 PDF 下載欄位，就把 HTML 裡面的 onclick 強制刪除
    if (td && !td.classList.contains("views-field-field-file-paper")) {
      link.removeAttribute("onclick");
    }
  });

  // 2. 監聽整個表格內的點擊動作 (彈窗顯示)
  table.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const td = link.closest("td");
    if (!td) return;

    // 如果是 PDF 下載欄位，保留原始行為 (另開分頁下載 PDF)
    if (td.classList.contains("views-field-field-file-paper")) {
      return;
    }

    // 攔截網頁跳轉行為，留在原地觸發彈窗
    e.preventDefault();
    e.stopPropagation();

    if (typeof PAPERS_DATA === "undefined") {
      console.error(
        "找不到 PAPERS_DATA 資料來源！請確認 newconference_data.js 有成功載入。",
      );
      return;
    }

    // 點擊論文名稱欄位
    if (td.classList.contains("views-field-title")) {
      const titleText = link.textContent.trim();
      const paper = PAPERS_DATA.find((p) => p.title === titleText);
      if (paper) {
        displayPapersInModal([paper]);
      }
    }
    // 點擊應用領域欄位
    else if (td.classList.contains("views-field-field-ap-field")) {
      const domainText = link.textContent.trim();
      const matchingPapers = PAPERS_DATA.filter(
        (p) => p.ap_field === domainText,
      );
      if (matchingPapers.length > 0) {
        displayPapersInModal(matchingPapers, `應用領域 - ${domainText}`);
      }
    }
    // 點擊獨立關鍵字欄位
    else if (td.classList.contains("views-field-field-keyword")) {
      const keywordText = link.textContent.trim();
      const matchingPapers = PAPERS_DATA.filter(
        (p) => p.keywords && p.keywords.includes(keywordText),
      );
      if (matchingPapers.length > 0) {
        displayPapersInModal(matchingPapers, `關鍵字 - ${keywordText}`);
      }
    }
  });

  // 3. 搜尋過濾功能
  const paperForm = document.getElementById(
    "views-exposed-form-paper-collection-page",
  );
  if (paperForm) {
    // 攔截表單預設的任何提交動作
    paperForm.addEventListener("submit", function (e) {
      e.preventDefault();
      executeLocalFilter();
    });

    // 監聽各欄位的即時變更
    const inputTitle = document.getElementById("edit-title");
    if (inputTitle) inputTitle.addEventListener("input", executeLocalFilter);

    const inputAuthor = document.getElementById("edit-field-author-value");
    if (inputAuthor) inputAuthor.addEventListener("input", executeLocalFilter);

    const selectAp = document.getElementById("edit-field-ap-field-tid");
    if (selectAp) selectAp.addEventListener("change", executeLocalFilter);

    const selectKw = document.getElementById("edit-field-keyword-tid");
    if (selectKw) selectKw.addEventListener("change", executeLocalFilter);

    const selectConf = document.getElementById("edit-field-ref-conf-nid");
    if (selectConf) selectConf.addEventListener("change", executeLocalFilter);
  }

  // 4. 重設按鈕功能
  const resetBtn = document.getElementById("edit-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      const inputTitle = document.getElementById("edit-title");
      if (inputTitle) inputTitle.value = "";

      const inputAuthor = document.getElementById("edit-field-author-value");
      if (inputAuthor) inputAuthor.value = "";

      const selectAp = document.getElementById("edit-field-ap-field-tid");
      if (selectAp) selectAp.value = "All";

      const selectKw = document.getElementById("edit-field-keyword-tid");
      if (selectKw) selectKw.value = "All";

      const selectConf = document.getElementById("edit-field-ref-conf-nid");
      if (selectConf) selectConf.value = "All";

      executeLocalFilter();
    });
  }

  // 5. 點擊上方研討會列表的「檢視」按鈕連動
  const quickLinks = document.querySelectorAll(".conf-quick-link");
  quickLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetNid = this.getAttribute("data-target-nid");
      const selectConfEl = document.getElementById("edit-field-ref-conf-nid");
      if (selectConfEl) {
        selectConfEl.value = targetNid;
        executeLocalFilter();
        // 滾動頁面至搜尋表單區域
        const exposedForm = document.getElementById(
          "views-exposed-form-paper-collection-page",
        );
        if (exposedForm) {
          exposedForm.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 6. 本地篩選核心邏輯
  function executeLocalFilter() {
    const searchTitleEl = document.getElementById("edit-title");
    const searchTitle = searchTitleEl
      ? searchTitleEl.value.toLowerCase().trim()
      : "";

    const searchAuthorEl = document.getElementById("edit-field-author-value");
    const searchAuthor = searchAuthorEl
      ? searchAuthorEl.value.toLowerCase().trim()
      : "";

    const selectApEl = document.getElementById("edit-field-ap-field-tid");
    const searchApField =
      !selectApEl || selectApEl.value === "All"
        ? ""
        : selectApEl.options[selectApEl.selectedIndex].text.trim();

    const selectKwEl = document.getElementById("edit-field-keyword-tid");
    const searchKeyword =
      !selectKwEl || selectKwEl.value === "All"
        ? ""
        : selectKwEl.options[selectKwEl.selectedIndex].text.trim();

    const selectConfEl = document.getElementById("edit-field-ref-conf-nid");
    const searchConfNid = selectConfEl ? selectConfEl.value : "All";

    const rows = document.querySelectorAll("#targetPaperTable tbody tr");

    rows.forEach((row) => {
      const txtTitle = row.cells[0].textContent.toLowerCase();
      const txtApField = row.cells[1].textContent.trim();
      const txtKeyword = row.cells[2].textContent.toLowerCase();
      const txtAuthor = row.cells[3].textContent.toLowerCase();
      const rowConfNid = row.getAttribute("data-conf-nid");

      const matchTitle = searchTitle === "" || txtTitle.includes(searchTitle);
      const matchAuthor =
        searchAuthor === "" || txtAuthor.includes(searchAuthor);
      const matchApField =
        searchApField === "" || txtApField.includes(searchApField);
      const matchKeyword =
        searchKeyword === "" || txtKeyword.includes(searchKeyword);
      const matchConf = searchConfNid === "All" || rowConfNid === searchConfNid;

      if (
        matchTitle &&
        matchAuthor &&
        matchApField &&
        matchKeyword &&
        matchConf
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  // 7. 動態渲染彈窗內容
  function displayPapersInModal(papers, filterLabel = "") {
    const modal = document.getElementById("paperModal");
    if (!modal) return;

    const modalContent = modal.querySelector(".modal-content");
    if (!modalContent) return;

    // 初始化內容與關閉按鈕
    let contentHtml = `<button class="close-btn" onclick="closeModal()">&times;</button>`;

    // 如果是點擊領域或關鍵字，顯示分類標題
    if (filterLabel) {
      contentHtml += `<h3 style="color: #2563eb; font-size: 15px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">篩選條件：${filterLabel}</h3>`;
    }

    // 建立可滾動的內容區塊
    contentHtml += `<div style="max-height: 70vh; overflow-y: auto; padding-right: 8px; text-align: left;">`;

    // 將找到的論文(一篇或多篇)依序塞入畫面
    papers.forEach((paper, index) => {
      // 若有多篇論文，中間用虛線隔開
      if (index > 0) {
        contentHtml += `<hr style="border: 0; border-top: 1px dashed #cbd5e1; margin: 24px 0;" />`;
      }

      // 組合關鍵字標籤
      let keywordTagsHtml = "";
      if (paper.keywords && paper.keywords.length > 0) {
        paper.keywords.forEach((kw) => {
          keywordTagsHtml += `<span class="tag keyword-tag" style="margin-right: 4px; margin-bottom: 4px; display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; background-color: #f8fafc; color: #64748b; border: 1px solid #cbd5e1;">${kw}</span>`;
        });
      }

      // 組合這篇論文的所有資訊
      contentHtml += `
        <div class="modal-paper-item">
          <h2 style="color: #0066cc; font-size: 20px; margin-top: 0; margin-bottom: 12px; font-weight: 700; line-height: 1.4;">${paper.title || "無標題"}</h2>
          <div class="modal-tags" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
            <span class="tag domain-tag" style="display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; background-color: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe;">${paper.ap_field || "無應用領域"}</span>
            ${keywordTagsHtml}
          </div>
          <p class="modal-author" style="font-size: 13.5px; font-weight: 500; color: #475569; margin-bottom: 16px; margin-top: 0;">作者：${paper.author || "無作者資料"}</p>
          <div class="modal-abstract" style="background-color: #f8fafc; border-radius: 8px; padding: 16px; border-left: 4px solid #3b82f6;">
            <h4 style="font-size: 13.5px; font-weight: 700; color: #1e293b; margin-top: 0; margin-bottom: 6px;">摘要</h4>
            <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0; text-align: justify;">${paper.abstract || "無摘要內容"}</p>
          </div>
        </div>
      `;
    });

    contentHtml += `</div>`;
    modalContent.innerHTML = contentHtml;

    // 顯示彈窗
    modal.classList.add("active");
  }
});

// 全域關閉彈窗功能
window.closeModal = function () {
  const modal = document.getElementById("paperModal");
  if (modal) {
    modal.classList.remove("active");
  }
};
