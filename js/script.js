// 展示交互逻辑

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.createElement("div");
  popup.id = "reference-popup";
  Object.assign(popup.style, {
  position: "absolute",
  display: "none",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "6px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  zIndex: 1000,
  maxWidth: "300px",     // 最大宽度
  minWidth: "160px",     // 最小宽度
  wordWrap: "break-word",// 允许长单词换行
  overflowWrap: "break-word",
  fontSize: "14px",
  lineHeight: "1.4",
  backgroundClip: "padding-box",
});

  document.body.appendChild(popup);

  window.showReference = function (event, text) {
    popup.innerText = text;
    popup.style.left = event.pageX + 10 + "px";
    popup.style.top = event.pageY + 10 + "px";
    popup.style.display = "block";
  };

  document.addEventListener("click", function (e) {
    // 如果点击的是弹窗内部或触发图片，就不隐藏
    if (!popup.contains(e.target) && e.target.tagName !== "IMG") {
      popup.style.display = "none";
    }
  });
});
