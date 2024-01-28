
const form = document.querySelector("form");
const btn = document.querySelector("button");
const inputField = document.querySelector(".input-field");

//Input elements
const day = document.getElementById("input-1");
const month = document.getElementById("input-2");
const year = document.getElementById("input-3");

//Output element
const outputYears = document.getElementById("years");
const outputMonths = document.getElementById("months");
const outputDays = document.getElementById("days");

//Error elements below
const dayEmpty = document.getElementById("hidden-1");
const monthEmpty = document.getElementById("hidden-2");
const yearEmpty = document.getElementById("hidden-3");

//Error red above text
const redErrorDay = document.getElementById("red-d");
const redErrorMonth = document.getElementById("red-m");
const redErrorYear = document.getElementById("red-y");


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
      console.log(day.value);
      console.log(month.value);
      console.log(year.value);
      console.log(dayEmpty.innerText);
      dayEmpty.innerText = day.value;
});

// dayEmpty.innerText = day.value ;
