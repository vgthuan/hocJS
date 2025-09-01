const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    //Lấy tọa độ của button so với viewport
    const buttonRect = e.target.getBoundingClientRect();

    //Lấy tọa độ click so với viewport
    const x = e.clientX;
    const y = e.clientY;

    //Tính tọa độ chuột click so với button
    const xInside = x - buttonRect.left; //Nó trả về rất nhiều thuộc tính
    const yInside = y - buttonRect.top;

    //Thêm thẻ span và thêm cho biến circle
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle); //this ở đây chính là thẳng button đang có sự kiện xảy ra

    //Xóa hình tròn sau khi animmation
    setTimeout(() => circle.remove(), 500);
  });
});

//
