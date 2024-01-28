// console.log("hello");
const form = document.querySelector("form");

const inputField = document.querySelector(".input-field");
const input = document.querySelectorAll("input");
// console.log(input);
const addInput = document.querySelectorAll("span");
const errorMessage = document.querySelectorAll(".error");
const redErrorTextAbove = document.querySelectorAll(".red");
const btn = document.querySelector("button");

const day = document.getElementById("input-1");


form.addEventListener("submit" , (event) => {
  event.preventDefault()
  input.forEach((i) => {
    console.log(i.value);
  })
})
