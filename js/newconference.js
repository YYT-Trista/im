document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("targetPaperTable");
  if (!table) return;

  // 各種功能的函式
  const editTitle = document.getElementById("edit-title");
  const editAuthor = document.getElementById("edit-field-author-value");
  const editAp = document.getElementById("edit-field-ap-field-tid");
  const editKw = document.getElementById("edit-field-keyword-tid");
  const editConf = document.getElementById("edit-field-ref-conf-nid");
  const paperForm = document.getElementById(
    "views-exposed-form-paper-collection-page",
  );
  const resetBtn = document.getElementById("edit-reset");
  const quickLinks = document.querySelectorAll(".conf-quick-link");
  const rows = document.querySelectorAll("#targetPaperTable tbody tr");

  // 把寫死的連結刪掉
  table
    .querySelectorAll("td:not(.views-field-field-file-paper) a")
    .forEach((link) => {
      link.removeAttribute("onclick");
    });

  // 監聽表格內的點擊動作 才能顯示適合的彈出視窗
  table.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    const td = link ? link.closest("td") : null;
    if (!td || td.classList.contains("views-field-field-file-paper")) return;

    e.preventDefault();
    e.stopPropagation();

    if (typeof PAPERS_DATA === "undefined") return;

    const text = link.textContent.trim();
    if (td.classList.contains("views-field-title")) {
      const paper = PAPERS_DATA.find((p) => p.title === text);
      if (paper) displayPapersInModal([paper]);
    } else if (td.classList.contains("views-field-field-ap-field")) {
      const papers = PAPERS_DATA.filter((p) => p.ap_field === text);
      if (papers.length) displayPapersInModal(papers, `應用領域 - ${text}`);
    } else if (td.classList.contains("views-field-field-keyword")) {
      const papers = PAPERS_DATA.filter(
        (p) => p.keywords && p.keywords.includes(text),
      );
      if (papers.length) displayPapersInModal(papers, `關鍵字 - ${text}`);
    }
  });

  // 搜尋論文時的過濾功能
  if (paperForm) {
    paperForm.addEventListener("submit", (e) => {
      e.preventDefault();
      executeLocalFilter();
    });

    if (editTitle) editTitle.addEventListener("input", executeLocalFilter);
    if (editAuthor) editAuthor.addEventListener("input", executeLocalFilter);
    if (editAp) editAp.addEventListener("change", executeLocalFilter);
    if (editKw) editKw.addEventListener("change", executeLocalFilter);
    if (editConf) editConf.addEventListener("change", executeLocalFilter);
  }

  // 重設按鈕
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (editTitle) editTitle.value = "";
      if (editAuthor) editAuthor.value = "";
      if (editAp) editAp.value = "All";
      if (editKw) editKw.value = "All";
      if (editConf) editConf.value = "All";
      executeLocalFilter();
    });
  }

  // 點擊研討會的論文集時也能篩選下方的論文內容
  quickLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (editConf) {
        editConf.value = this.getAttribute("data-target-nid");
        executeLocalFilter();
        if (paperForm) paperForm.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 篩選彈出視窗的內容
  function executeLocalFilter() {
    const searchTitle = editTitle ? editTitle.value.toLowerCase().trim() : "";
    const searchAuthor = editAuthor
      ? editAuthor.value.toLowerCase().trim()
      : "";
    const searchApField =
      !editAp || editAp.value === "All"
        ? ""
        : editAp.options[editAp.selectedIndex].text.trim();
    const searchKeyword =
      !editKw || editKw.value === "All"
        ? ""
        : editKw.options[editKw.selectedIndex].text.trim();
    const searchConfNid = editConf ? editConf.value : "All";

    rows.forEach((row) => {
      const matchTitle =
        !searchTitle ||
        row.cells[0].textContent.toLowerCase().includes(searchTitle);
      const matchApField =
        !searchApField ||
        row.cells[1].textContent.trim().includes(searchApField);
      const matchKeyword =
        !searchKeyword ||
        row.cells[2].textContent.toLowerCase().includes(searchKeyword);
      const matchAuthor =
        !searchAuthor ||
        row.cells[3].textContent.toLowerCase().includes(searchAuthor);
      const matchConf =
        searchConfNid === "All" ||
        row.getAttribute("data-conf-nid") === searchConfNid;

      row.style.display =
        matchTitle && matchAuthor && matchApField && matchKeyword && matchConf
          ? ""
          : "none";
    });
  }

  // 動態渲染彈出視窗的內容
  function displayPapersInModal(papers, filterLabel = "") {
    const modal = document.getElementById("paperModal");
    const modalContent = modal ? modal.querySelector(".modal-content") : null;
    if (!modalContent) return;

    let contentHtml = `<button class="close-btn" onclick="closeModal()">&times;</button>`;
    if (filterLabel) {
      contentHtml += `<h3 style="color: #2563eb; font-size: 15px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">${filterLabel}</h3>`;
    }

    contentHtml += `<div style="max-height: 70vh; overflow-y: auto; padding-right: 8px; text-align: left;">`;

    papers.forEach((paper, index) => {
      if (index > 0) {
        contentHtml += `<hr style="border: 0; border-top: 1px dashed #cbd5e1; margin: 24px 0;" />`;
      }

      const keywordTagsHtml = (paper.keywords || [])
        .map(
          (kw) =>
            `<span class="tag keyword-tag" style="margin-right: 4px; margin-bottom: 4px; display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; background-color: #f8fafc; color: #64748b; border: 1px solid #cbd5e1;">${kw}</span>`,
        )
        .join("");

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
    modal.classList.add("active");
  }
});

// 點擊空白部分可以取消彈出視窗
window.closeModal = () => {
  const modal = document.getElementById("paperModal");
  if (modal) modal.classList.remove("active");
};
