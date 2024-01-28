
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
const dayField = document.querySelector(".error-1");
const monthField = document.querySelector(".error-2");
const yearField = document.querySelector(".error-3");

//Error red above text
const redErrorDay = document.querySelector(".red-d");
const redErrorMonth = document.querySelector(".red-m");
const redErrorYear = document.querySelector(".red-y");

//label
const labelDay = document.getElementById("label-d");
const labelMonth = document.getElementById("label-m");
const labelYear = document.getElementById("label-y");

let day, month, year;

    function IsEmpty() {
      const formData = new FormData(document.form);
      const day = formData.get("day");
      const month = formData.get("month");
      const year = formData.get("year");

      if (!day || !month || !year) {
        dayField.classList.remove("error-1")
        monthField.classList.remove("error-2")
        yearField.classList.remove("error-3")

        labelDay.style.display = "none"
        labelMonth.style.display = "none"
        labelYear.style.display = "none"

        // redErrorDay.classList.remove("red-d");
        // redErrorMonth.classList.remove("red-m");
        // redErrorYear.classList.remove("red-y");

        return true;
      }
  return false;
}


//Getting current date
function calculateAge(day , month , year) {
  const formData = new FormData(document.form);
  const birthDate = new Date(day, month -1, year);
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  // const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const year = currentYear - birthData.getFullYear();
  console.log(year);
  const month = currentMonth - birthDate.getMonth();
  console.log(month);
  const dayOfMonth = currentDayOfMonth - birthDate.getDate();
  console.log(dayOfMonth);
}

    form.addEventListener("submit" , (event) => {
      event.preventDefault()
      if (!IsEmpty()) {
        const formData = new FormData(event.target);
        const day = Object.fromEntries(formData).day;
        const month = Object.fromEntries(formData).month;
        const year = Object.fromEntries(formData).year;
      }
      calculateAge(day , month , year);
});
