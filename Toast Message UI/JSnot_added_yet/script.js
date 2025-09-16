// Lấy phần tử container

function toast({
  type = "success",
  tittle = " ",
  message = " ",
  duration = 1000,
}) {
  const main = document.querySelector(".container");
  if (main) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `sildeInLeft ease 1s, fadeOut linear 1s ${delay}s forwards`;
    const icons = {
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-circle-exclamation",
      success: "fa-solid fa-circle-check",
      error: "fa-solid fa-circle-xmark",
    };
    const icon = icons[type];
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>        
        </div>
        <div class="toast__body">
          <h3 class="toast__tittle">${tittle}</h3>
          <p class="toast__message">${message}</p>
        </div>
        <div class="toast__close">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
    `;
    main.appendChild(toast);

    const idRemove = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    document.addEventListener("click", (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(idRemove);
      }
    });
  }
}

const btn_success = document.querySelector(".btn--success");
btn_success.addEventListener("click", () => {
  toast({
    type: "success",
    tittle: "Congratulations!",
    message: "Your payment has done successfully.",
    duration: 3000,
  });
});

const btn_info = document.querySelector(".btn--info");
btn_info.addEventListener("click", () => {
  toast({
    type: "info",
    tittle: "Did you know?",
    message: "You can scan any QR with Google Pay!",
    duration: 3000,
  });
});

const btn_warning = document.querySelector(".btn--warning");
btn_warning.addEventListener("click", () => {
  toast({
    type: "warning",
    tittle: "Warning",
    message: "Your payment PIN is weak.",
    duration: 3000,
  });
});

const btn_error = document.querySelector(".btn--error ");
btn_error.addEventListener("click", () => {
  toast({
    type: "error",
    tittle: "Something went wrong!",
    message: "Your payment access has revoked.",
    duration: 3000,
  });
});
