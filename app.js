let allScore1 = document.querySelector(".allScore1");
let allScore2 = document.querySelector(".allScore2");
let score1 = document.querySelector(".score1");

let score2 = document.querySelector(".score2");
let curScore1 = document.querySelector(".curScore1");

let curScore2 = document.querySelector(".curScore2");

let btn1 = document.querySelector(".btn1");

let btn2 = document.querySelector(".btn2");
let user1 = document.querySelector(".user1");

let user2 = document.querySelector(".user2");
let scoreAll1 = document.querySelector(".scoreAll1");
let scoreAll2 = document.querySelector(".scoreAll2");

let hold1 = document.querySelector("#hold1");
hold1.style.marginTop = "15px";
hold1.style.width = "100px";
hold1.style.height = "30px";
hold1.style.backgroundColor = "blue";
hold1.style.border = "none";
hold1.style.borderRadius = "20px";
hold1.style.color = "white";
hold1.style.cursor = "pointer";
let hold2 = document.querySelector("#hold2");

hold2.style.marginTop = "15px";

hold2.style.width = "100px";

hold2.style.height = "30px";

hold2.style.backgroundColor = "blue";

hold2.style.border = "none";

hold2.style.borderRadius = "20px";

hold2.style.color = "white";

hold2.style.cursor = "pointer";

user1.classList.add("bg_color");
let res1 = 0;
let res2 = 0;
let count = 0;

btn1.addEventListener("click", () => {
  count++;
  let numberrandom = Math.floor(Math.random() * 10);

  curScore1.innerHTML = numberrandom;

  res1 += numberrandom;
  score1.innerHTML = res1;

  if (numberrandom == 0) {
    res1 = 0;
    score1.innerHTML = 0;
  } else if (res1 >= 100) {
    alert("siz yutdingiz");
    res1 = 0;
    score1.innerHTML = res1;
  }

  hold1.onclick = () => {
    hold1.disabled = true;
    if (hold1.disabled) {
      user1.classList.remove("bg_color");
      user2.classList.add("bg_color");
      scoreAll1.textContent = score1.textContent;

      btn1.disabled = true;

      btn2.disabled = false;
    }

    hold2.disabled = false;
  };
});

btn2.addEventListener("click", () => {
  count++;
  let numberrandom = Math.floor(Math.random() * 10);
  curScore2.innerHTML = numberrandom;
  res2 += numberrandom;
  score2.innerHTML = res2;
  if (numberrandom == 0) {
    res2 = 0;
    score2.innerHTML = 0;
  } else if (res2 >= 100) {
    alert("siz yutdingiz");
    res2 = 0;
    score2.innerHTML = res2;
  }

  hold2.onclick = () => {
    hold2.disabled = true;
    if (hold2.disabled) {
      user2.classList.remove("bg_color");
      user1.classList.add("bg_color");
      scoreAll2.textContent = score2.textContent;

      btn2.disabled = true;
      btn1.disabled = false;
    }

    hold1.disabled = false;
  };
});

//sayhello
