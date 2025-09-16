function toast({
  tittle = " ",
  message = " ",
  type = "info ",
  duration = 3000,
}) {
  // Lấy thẻ cha gốc ban đầu
  const main = document.querySelector("#container");
  if (main) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);
    const icons = {
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-triangle-exclamation",
      success: "fa-solid fa-circle-check",
      error: "fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `InLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

    // Bỏ nội dung con vào
    toast.innerHTML = `
        <div class="toast__icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__tittle">${tittle}</h3>
          <p class="toast__desc">${message}</p>
        </div>
        <div class="toast__close">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
    `;
    main.appendChild(toast);

    // Auto Remove
    const removeID = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(removeID);
      }
    };
  }
}

const btn_success = document.querySelector(".btn-success");
btn_success.addEventListener("click", () => {
  toast({
    tittle: "Success",
    message: "Kết nối thành công tới máy chủ",
    type: "success",
    duration: 4000,
  });
});

const btn_warning = document.querySelector(".btn-warning");
btn_warning.addEventListener("click", () => {
  toast({
    tittle: "Warning",
    message: "Kết nối không an toàn tới máy chủ",
    type: "warning",
    duration: 4000,
  });
});
