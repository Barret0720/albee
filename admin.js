//設定時間
const currentTime = document.querySelector(".currentTime");
let Today = new Date();
let showTime = () => {
  let yy = Today.getFullYear();
  let mm = Today.getMonth() + 1;
  let dd = Today.getDate();
  let hours = Today.getHours();
  let minutes = Today.getMinutes();
  currentTime.innerHTML = `<li>${yy} 年 ${mm}
  月 ${dd} 日 ${hours}:${minutes.toString().padStart(2, 0)}</li>`;
};
setInterval(showTime, 1000);

const tabGroup = document.querySelectorAll(".tabGroup .backpagebtn");
const contents = document.querySelectorAll(".content");
//使用querySelectorAll 要先用forEach去找要的資料，再綁監聽看點到哪裡
tabGroup.forEach((backpagebtn, index) => {
  backpagebtn.addEventListener("click", function (e) {
    //先把全部的 active 拿掉，再把 active 加進點到的tab裡面
    tabGroup.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    //content 內容切換
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});

//contant data
const tab1 = document.querySelector("#tab1");
tab1.textContent = `${Today.getMonth() + 1}
月 ${Today.getDate()} 日 銷售紀錄`;
