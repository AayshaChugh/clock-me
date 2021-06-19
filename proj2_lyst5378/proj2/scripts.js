var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");
var center = document.querySelector(".center");
var colour = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};
// console.log(getBGColor(orange));
var magic = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};
magic(red, colour(red));
magic(cyan, colour(cyan));
magic(violet, colour(violet));
magic(orange, colour(orange));
magic(pink, colour(pink));
