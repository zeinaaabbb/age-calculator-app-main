
const form = document.querySelector("form");
const input = document.querySelectorAll("input");

const inputField = document.querySelector(".input-field");

const addInput = document.querySelectorAll("span");
const errorMessage = document.querySelectorAll(".error");
const redErrorTextAbove = document.querySelectorAll(".red");
const btn = document.querySelector("button");

const day = document.getElementById("input-1");
const month = document.getElementById("input-2");
const year = document.getElementById("input-3");

const dayEmpty = document.getElementById("hidden-1");
const monthEmpty = document.getElementById("hidden-2");
const yearEmpty = document.getElementById("hidden-3");

const error = document.getElementsByTagName("p");


// function empty(day, month, year) {
//   if ((day.value || month.value || year.value) = "") {
//     error.classList.remove("error");
//   }
//   end
// };

function correctDay (day) {
  const lowerDay  = 1 ;
  const upperDay = 31 ;

  if (day > 1 && day <31) {
    console.log("in range");
    return day
  } else {
    console.log("out of range");
  }
};


form.addEventListener("submit" , (event) => {
  event.preventDefault()
  // console.log(day.value);
  // console.log(month.value);
  // console.log(year.value);
  if (correctDay) {
    dayEmpty.innerText = day.value ;
  }
});
