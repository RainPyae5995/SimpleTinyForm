let firstName = document.getElementById("firstname");
let secondName = document.getElementById("secname");
let mail = document.getElementById("email");
let phNumber = document.getElementById("telno");
let cities = document.getElementById("city");
let states = document.getElementById("state");
let postal = document.getElementById("zipcode");
let text = document.getElementById("text");
let text1 = document.getElementById("text2");
let text2 = document.getElementById("text3");
let text3 = document.getElementById("text4");
let text4 = document.getElementById("text5");
let text5 = document.getElementById("text6");
let text6 = document.getElementById("text7");
let payimg = document.getElementById("kpayy");
let payimg2 = document.getElementById("wavepayy");
let payimg3 = document.getElementById("cbpayy");
let payimg4 = document.getElementById("okpayy");
let kPay = document.getElementById("pmethod");
let wavePay = document.getElementById("pmethod2");
let cbPay = document.getElementById("pmethod3");
let okPay = document.getElementById("pmethod4");
let btn = document.getElementById("submit");
let btn2 = document.getElementById("submit2");

let fun1 = () => {
  text.innerText = firstName.value;
  firstName.value = "";
};

let fun2 = () => {
  text1.innerText = secondName.value;
  secondName.value = "";
};

let fun3 = () => {
  text2.innerText = mail.value;
  mail.value = "";
};

let fun4 = () => {
  text3.innerText = phNumber.value;
  phNumber.value = "";
};

let fun5 = () => {
  text4.innerText = cities.value;
  cities.value = "";
};

let fun6 = () => {
  text5.innerText = states.value;
  states.value = "";
};

let fun7 = () => {
  text6.innerText = postal.value;
  postal.value = "";
};

let fun8 = () => {
  if (kPay.checked) {
    payimg.style.display = "block";
  }
};

let fun9 = () => {
  if (wavePay.checked) {
    payimg2.style.display = "block";
  }
};

let fun10 = () => {
  if (cbPay.checked) {
    payimg3.style.display = "block";
  }
};

let fun11 = () => {
  if (okPay.checked) {
    payimg4.style.display = "block";
  }
};

let fun12 = () => {
  text.innerText = " ";
};

let fun13 = () => {
  text1.innerText = " ";
};

let fun14 = () => {
  text2.innerText = " ";
};

let fun15 = () => {
  text3.innerText = " ";
};

let fun16 = () => {
  text4.innerText = " ";
};

let fun17 = () => {
  text5.innerText = " ";
};

let fun18 = () => {
  text6.innerText = " ";
};

let fun19 = () => {
  if (kPay.checked) {
    payimg.style.display = "none";
  }
};

let fun20 = () => {
  if (wavePay.checked) {
    payimg2.style.display = "none";
  }
};

let fun21 = () => {
  if (cbPay.checked) {
    payimg3.style.display = "none";
  }
};

let fun22 = () => {
  if (okPay.checked) {
    payimg4.style.display = "none";
  }
};

// let blockdiv = () => {
//   document.getElementById("box").style.display = "block";
//   document.getElementById("box1").style.display = "none";
// };

// let hideDiv = () => {
//   document.getElementById("box1").style.display = "block";
//   document.getElementById("box").style.display = "none";
// };

let myNames = [`MPPN`, `Nadia`];
console.log(myNames);

btn.addEventListener("click", fun1);
btn.addEventListener("click", fun2);
btn.addEventListener("click", fun3);
btn.addEventListener("click", fun4);
btn.addEventListener("click", fun5);
btn.addEventListener("click", fun6);
btn.addEventListener("click", fun7);
btn.addEventListener("click", fun8);
btn.addEventListener("click", fun9);
btn.addEventListener("click", fun10);
btn.addEventListener("click", fun11);
btn2.addEventListener("click", fun12);
btn2.addEventListener("click", fun13);
btn2.addEventListener("click", fun14);
btn2.addEventListener("click", fun15);
btn2.addEventListener("click", fun16);
btn2.addEventListener("click", fun17);
btn2.addEventListener("click", fun18);
btn2.addEventListener("click", fun19);
btn2.addEventListener("click", fun20);
btn2.addEventListener("click", fun21);
btn2.addEventListener("click", fun22);
