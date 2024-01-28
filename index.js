
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
const dayField = document.querySelector(".hidden-1");
const monthField = document.querySelector(".hidden-2");
const yearField = document.querySelector(".hidden-3");

//Error red above text
const redErrorDay = document.querySelector(".red-d");
const redErrorMonth = document.querySelector(".red-m");
const redErrorYear = document.querySelector(".red-y");

//label
const labelDay = document.getElementById("label-d");
const labelMonth = document.getElementById("label-m");
const labelYear = document.getElementById("label-y");

    // function correctDay(day) {
    //   const lowerDay  = 1 ;
    //   const upperDay = 32 ;

    //   if (day >= lowerDay && day < upperDay) {
    //     console.log(outputDays.innerText);
    //     console.log(day.value);
    //     outputDays.innerText = day.value.toString();
    //   } else {
    //     redErrorDay.classList.remove("red-d");
    //     labelDay.style.display = "none";
    //     return dayField.innerText
    //   }
    // };


    form.addEventListener("submit" , (event) => {
      event.preventDefault()
      const formData = new FormData(event.target);
      const day = Object.fromEntries(formData).day;
      console.log(day);
      const month = Object.fromEntries(formData).month;
      console.log(month);
      const year = Object.fromEntries(formData).year;
      console.log(year);

});
