//設定時間
const currentTime = document.querySelector(".currentTime");
let showTime = () => {
  let Today = new Date();
  currentTime.innerHTML = `<li>${Today.getFullYear()} 年 ${Today.getMonth() + 1}
  月 ${Today.getDate()} 日 ${Today.getHours()}:${Today.getMinutes()
    .toString()
    .padStart(2, 0)}</li>`;
};
setInterval(showTime, 1000);

const tables = document.querySelector(".tables");
const dataOrder = document.querySelectorAll("[data-order]");
console.log(dataOrder);
dataOrder.forEach((item) => {
  item.addEventListener("click", (e) => {
    let id = e.target.id; //新增這串
    entry(id); // 然後帶值
  });
});

function entry(table) {
  window.location.href = `order.html?desk=${table}`; //網址導向的時候，帶入desk
}
