
const form = document.querySelector("form");
const btn = document.querySelector("button");
const inputField = document.querySelector(".input-field");

//Input elements
const dayI = document.getElementById("input-1");
const monthI = document.getElementById("input-2");
const yearI = document.getElementById("input-3");

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

    function IsEmpty() {
      const formData = new FormData(document.form);
      if (document.form.question.value == "") {
        alert("empty");
      }
      return;
    }

    form.addEventListener("submit" , (event) => {
      event.preventDefault()
      if (!IsEmpty()) {
        const formData = new FormData(event.target);
        const day = Object.fromEntries(formData).day;
        const month = Object.fromEntries(formData).month;
        const year = Object.fromEntries(formData).year;
      }


});

//Getting current date

const currentDate = new Date();
console.log(currentDate);

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
