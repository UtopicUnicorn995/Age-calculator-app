const button = document.querySelector(".divider-icon");
const day_value = document.querySelector(".day");
const month_value = document.querySelector(".month");
const year_value = document.querySelector(".year");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const groups = document.querySelectorAll(".form-group");

button.addEventListener("click", function () {
  checkValidity();
  checkEmpty();
  checkValue(day_value, month_value, year_value);
  calculateBirthDate(day_value.value, month_value.value, year_value.value);
});

function checkEmpty() {
  inputs.forEach((input) => {
    if (input.value.length < 1) {
      input.parentElement.classList.add("empty-error");
    } else {
      input.parentElement.classList.remove("empty-error");
    }
  });
}

function checkValidity() {
  inputs.forEach((input) => {
    if (input.value.length > 0 && !isNaN(input.value)) {
      input.parentElement.classList.remove("validity-error");
    } else {
      input.parentElement.classList.add("validity-error");
    }
  });
}

function checkValue(day, month, year) {
  console.log(day.value, month.value, year.value);
  if (day.value < 32) {
    day.parentElement.classList.remove("validity-error");
  } else {
    day.parentElement.classList.add("validity-error");
    console.log(day.parentElement);
  }

  if (month.value < 13) {
    month.parentElement.classList.remove("validity-error");
  } else {
    month.parentElement.classList.add("validity-error");
  }

  if (year.value < 2024 && year.value.length < 5) {
    year.parentElement.classList.remove("validity-error");
  } else {
    year.parentElement.classList.add("validity-error");
  }
}

function calculateBirthDate(date, month, year) {
  const date_error = document.querySelector(".date-error");
  date_error.style.display = "none";
  let span_year = document.querySelector(".span-year");
  let span_month = document.querySelector(".span-month");
  let span_day = document.querySelector(".span-day");
  currentDate = new Date();
  let year_now = currentDate.getFullYear();
  let month_now = currentDate.getMonth() + 1;
  let date_now = currentDate.getDate();
  // if (date_now > date) {
  //   console.log(date_now - date);
  // } else {
  //   month_now--;
  //   console.log(month_now - month);
  // }
  if (year_now - year > 9) {
    span_year.innerText = year_now - year;
  } else {
    span_year.innerText = "0 " + (year_now - year);
  }

  if (month_now - month > 9) {
    span_month.innerText = month_now - month;
  } else {
    span_month.innerText = "0 " + (month_now - month);
  }

  if (date_now - date > 9) {
    span_day.innerText = date_now - date;
  } else {
    span_day.innerText = "0 " + (date_now - date);
  }

  console.log(date_now - date, month_now - month, year_now - year);
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
