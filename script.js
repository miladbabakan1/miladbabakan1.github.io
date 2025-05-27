// element toggle function

const elemToggleFunc = function(elem){
    elem.classList.toggle("active");
}

// header sticky& go top

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" ,function(){
    if(window.scrollY >= 10){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// navbar toggle

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function(){
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
});


// skills toggle
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

// text automatic scripts
const sports = ["مربی MMA","مربی بوکس","مربی کراسفیت","مربی آمادگی جسمانی"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
  if(count === sports.length){
      count = 0;
    }
    currentText = sports[count];
    letter = currentText.slice(0,++index);
    document.querySelector('.type').textContent = letter;
    if(letter.length === currentText.length){
      count++;
      index = 0;
    }
    setTimeout(type,200);
})()

const champions = ["قهرمان مسابقات بوکس کارگری ایران ","مقام سوم تیمی در مسابقات فیتنس چلنج قهرمانی آسیا – تیم ملی ایران ","نایب‌قهرمان انفرادی فیتنس چلنج تورنمنت بین‌المللی سانتونخا کاپ ترکیه","قهرمان مسابقات جهانی فول کونگ‌فو","مقام دوم دو نفره در مسابقات فیتنس چلنج قهرمانی آسیا – رده نقره‌ای"];
let count2 = 0;
let index2 = 0;
let currentText2 = "";
let letter2 = "";
(function type2(){
  if(count2 === champions.length){
      count2 = 0;
    }
    currentText2 = champions[count2];
    letter2 = currentText2.slice(0,++index2);
    document.querySelector('.type2').textContent = letter2;
    if(letter2.length === currentText2.length){
      count2++;
      index2 = 0;
    }
    setTimeout(type2,100);
})()