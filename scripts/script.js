// var nome = prompt("Qual seu nome?");

// alert("Olá, " + nome + "!"); 

// alert('Seja bem vindo ao nosso site!');

// const menuLinks = document.querySelectorAll(".container a[href^='#']");

// function getDistanceFromTheTop(element) {
//   const id = element.getAttribute("href");
//   return document.querySelector(id).offsetTop;
// }

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

// function scrollToSection(event) {
//   event.preventDefault();
//   const distanceFromTheTop = getDistanceFromTheTop(event.target);
//   nativeScroll(distanceFromTheTop);
// } 

// menuLinks.forEach((link) => {
//   link.addEventListener("click", scrollToSection);
// });

let menu = document.querySelector(".container");
let btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
  let visibility = menu.getAttribute("data-visible");

  if (visibility === "false"){
    menu.setAttribute("data-visible", true)
  }else if (visibility === "true"){
    menu.setAttribute("data-visible", false)
  };
  
});