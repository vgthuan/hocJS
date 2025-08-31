//Lấy các phần tử cần thao tác
const progress = document.getElementById("wrapper");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const steps = document.querySelectorAll(".step");

let currentActive = 1; //Khởi tạo giá trị ban đầu của bước đang hoạt động
//1.Lắng nghe sự kiện cho Next và Prev
next.addEventListener("click", () => {
  changeStep(1); //Tăng bước lên 1
});

prev.addEventListener("click", () => {
  if (currentActive >= 0) {
    changeStep(-1); //Giảm bước đi 1
  }
});

function changeStep(step) {
  currentActive += step; //Truyền 1 thì tăng 1, truyền -1 thì giảm 1
  update(); //Cập nhật lại giao diện
}

function update() {
  //Duyệt qua các phần tử step
  steps.forEach((step, index) => {
    //index chạy từ 0, 1, 2, 3 đại diện cho vị trí 4 phần tử
    //Còn số bước từ 1, 2, 3, 4 do đó index nhỏ hơn số bước thì thêm class active vào
    //Bước 2: thì 0 và 1 được thêm, bước 3 thì 2 được thêm
    if (index < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  //Bật và tắt nút prev hoặc next dựa trên currentActive
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;

  //Cập nhật chiều rộng của thanh chương trình
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
