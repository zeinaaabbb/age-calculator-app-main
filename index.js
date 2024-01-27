// console.log("hello");

const input = document.querySelectorAll("input");
const addInput = document.querySelectorAll("span");
const errorMessage = document.querySelectorAll(".error");
const redErrorTextAbove = document.querySelectorAll(".red");
const btn = document.querySelector("button");


input.forEach((i) => {
  // console.log(i)
  btn.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event);
  })
}
);
