const account = document.querySelector(".account");
const password = document.querySelector(".password");
const login = document.querySelector(".logIn-btn");
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

login.addEventListener("click", function (e) {
  if (account.value == "" || password.value == "") {
    return;
  } else if (account.value == "1001" && password.value == "1001") {
    alert("登入成功");
    entry();
  } else {
    alert("帳號或密碼錯誤");
  }
  account.value = "";
  password.value = "";
});

function entry() {
  location.href = "table.html";
}
