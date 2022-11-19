let dataRice = [
  {
    name: "招牌滷肉飯(大)",
    imgUrl: "pictures/滷肉飯-01.jpg",
    price: 50,
  },
  {
    name: "招牌滷肉飯(小)",
    imgUrl: "pictures/滷肉飯-01.jpg",
    price: 30,
  },
  {
    name: "招牌雞絲飯",
    imgUrl: "pictures/雞絲飯_工作區域 1.jpg",
    price: 50,
  },
  {
    name: "白飯",
    imgUrl: "pictures/mgg-vitchakorn-zXNC_lBBVGE-unsplash-01.jpg",
    price: 20,
  },
];
let dataSideDish = [
  {
    name: "酥炸小魚乾",
    imgUrl: "pictures/酥炸小魚乾_工作區域 1.jpg",
    price: 30,
  },
  {
    name: "涼拌海帶",
    imgUrl: "pictures/涼拌海帶_工作區域 1.jpg",
    price: 30,
  },
  {
    name: "滷蛋",
    imgUrl: "pictures/egg_工作區域 1.jpg",
    price: 10,
  },
];
let dataSoup = [
  {
    name: "剝皮辣椒雞湯",
    imgUrl: "pictures/soup_工作區域 1.jpg",
    price: 70,
  },
  {
    name: "香菇雞湯",
    imgUrl: "pictures/soup_工作區域 1.jpg",
    price: 50,
  },
  {
    name: "蒜頭雞湯",
    imgUrl: "pictures/soup_工作區域 1.jpg",
    price: 50,
  },
];
let dataDrink = [
  {
    name: "決明子紅茶",
    imgUrl: "pictures/麥茶_工作區域 1.jpg",
    price: 30,
  },
  {
    name: "決明子麥茶",
    imgUrl: "pictures/麥茶_工作區域 1.jpg",
    price: 30,
  },
  {
    name: "可口可樂",
    imgUrl: "pictures/cola_工作區域 1.jpg",
    price: 30,
  },
];
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

const dishMenuCard = document.querySelector(".dishMenuCard");

//菜單tab
const menu1 = document.querySelector(".menu1");
const menu2 = document.querySelector(".menu2");
const menu3 = document.querySelector(".menu3");
const menu4 = document.querySelector(".menu4");
menu1.addEventListener("click", function (e) {
  let strRice = "";
  dataRice.forEach((item, index) => {
    strRice += `<li type="botton" class="cardRice shadow-sm m-2 rounded" id="${index}">
        <img
          class="rounded img-fluid"
          src="${item.imgUrl}"
          alt="rice"
          width="120px"
          height="120px"
        />
        <p>${item.name}<br> $ ${item.price}</p>
        </li>`;
  });
  dishMenuCard.innerHTML = strRice;
  const cardRice = document.querySelectorAll(".cardRice");
  cardRice.forEach((id, index) => {
    id.addEventListener("click", function (e) {
      sortList(dataRice[index]);
    });
  });
});
menu2.addEventListener("click", function (e) {
  let strSideDish = "";
  dataSideDish.forEach((item, index) => {
    strSideDish += `<li type="botton" class="cardSideDish shadow-sm m-2 rounded" id="${index}">
    <img
      class="rounded img-fluid"
      src="${item.imgUrl}"
      alt="rice"
      width="120px"
      height="120px"
    />
    <p>${item.name}<br> $ ${item.price}</p>
    </li>`;
  });
  dishMenuCard.innerHTML = strSideDish;
  const cardSideDish = document.querySelectorAll(".cardSideDish");
  cardSideDish.forEach((id, index) => {
    id.addEventListener("click", function (e) {
      sortList(dataSideDish[index]);
    });
  });
});
menu3.addEventListener("click", function (e) {
  let strSoup = "";
  dataSoup.forEach((item, index) => {
    strSoup += `<li type="botton" class="cardSoup shadow-sm m-2 rounded" id="${index}">
    <img
      class="rounded img-fluid"
      src="${item.imgUrl}"
      alt="rice"
      width="120px"
      height="120px"
    />
    <p>${item.name}<br> $ ${item.price}</p>
    </li>`;
  });
  dishMenuCard.innerHTML = strSoup;
  const cardSoup = document.querySelectorAll(".cardSoup");
  cardSoup.forEach((id, index) => {
    id.addEventListener("click", function (e) {
      sortList(dataSoup[index]);
    });
  });
});
menu4.addEventListener("click", function (e) {
  let strDrink = "";
  dataDrink.forEach((item, index) => {
    strDrink += `<li type="botton" class="cardDrink shadow-sm m-2 rounded" id="${index}">
    <img
      class="rounded img-fluid"
      src="${item.imgUrl}"
      alt="rice"
      width="120px"
      height="120px"
    />
    <p>${item.name}<br> $ ${item.price}</p>
    </li>`;
  });
  dishMenuCard.innerHTML = strDrink;
  const cardDrink = document.querySelectorAll(".cardDrink");
  cardDrink.forEach((id, index) => {
    id.addEventListener("click", function (e) {
      sortList(dataDrink[index]);
    });
  });
});
//已點餐點
const list = document.querySelector(".right .list");
const btnSecondaryReduce = document.querySelector(".btnSecondaryReduce");
const btnSecondaryNum = document.querySelector(".btnSecondaryNum");
const btnSecondaryPlus = document.querySelector(".btnSecondaryPlus");
const totalNum = document.querySelector(".totalNum");
const sendBtn = document.querySelector(".sendBtn");

let arrToRecord = [];
function sortList(data) {
  if (arrToRecord.length === 0) {
    let obj = {};
    obj.name = data.name;
    obj.num = 1;
    obj.price = data.price;
    arrToRecord.push(obj);
  } else {
    let obj2 = {};
    let product = arrToRecord.find((item) => item.name === data.name);
    console.log(product);
    if (!product) {
      obj2.name = data.name;
      obj2.num = 1;
      obj2.price = data.price;
    } else {
      product.num += 1;
      product.price = data.price * product.num;
    }
    if (Object.keys(obj2).length > 0) arrToRecord.push(obj2);
  }
  renderOrder(arrToRecord);
}

function renderOrder(arrToRecord) {
  let str = "";
  arrToRecord.forEach((obj, index) => {
    str += `<li><label class="orderDish" id="${index}">${obj.name}</label>
<div  class="btn-group">

        <button type="button" class="numCount btnNum">${obj.num}</button>

        <p class="countOfPrice">$${obj.price}</p>
      </div> 
      <button type="button" class="deleteBtn">X</button></li>`;
  });
  list.innerHTML = str;
  totalRender(arrToRecord);
  //delete按鈕
  const deleteBtn = document.querySelectorAll(".deleteBtn");
  console.log(deleteBtn);
  deleteBtn.forEach((e, index) => {
    e.addEventListener("click", function (e) {
      arrToRecord.splice(index, 1);
      renderOrder(arrToRecord);
    });
  });
}
function totalRender(arrToRecord) {
  let total = 0;
  arrToRecord.forEach((obj) => {
    total += obj.price;
  });
  totalNum.innerHTML = `<p class="total">品項: ${arrToRecord.length} 項 總金額:${total}</p>`;
}

sendBtn.addEventListener("click", function (e) {
  entry();
});
function entry() {
  window.location.href = "table.html";
}
