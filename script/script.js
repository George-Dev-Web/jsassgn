const maleNames = [
  "kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const output = document.getElementById("output");

    if (!birthdate || !gender) {
      output.textContent = "Please fill out all fields.";
      output.style.color = "red";
      return;
    }

    const [year, month, day] = birthdate.split("-").map(Number);

    if (!year || !month || !day) {
      output.textContent = "Invalid date. Please enter a valid birthdate.";
      output.style.color = "red";
      return;
    }

    let adjustedMonth = month;
    let adjustedYear = year;
    if (month === 1 || month === 2) {
      adjustedMonth += 12;
      adjustedYear -= 1;
    }

    const CC = Math.floor(adjustedYear / 100);
    const YY = adjustedYear % 100;

    const dayOfWeek = Math.floor(
      (CC / 4 -
        2 * CC -
        1 +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (adjustedMonth + 1)) / 10) +
        day) %
        7
    );

    const correctedDayOfWeek = (dayOfWeek + 7) % 7;

    let akanName;
    if (gender === "male") {
      akanName = maleNames[correctedDayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[correctedDayOfWeek];
    } else {
      output.textContent = "Invalid gender selected.";
      output.style.color = "red";
      return;
    }

    output.textContent = `Your Akan name is ${akanName}!`;
    output.style.color = "green";
  });
