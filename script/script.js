const maleNames = [
  "Kwasi",
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

    const date = new Date(birthdate);
    const dayOfWeek = date.getDay();

    if (isNaN(dayOfWeek)) {
      output.textContent = "Invalid date. Please enter a valid birthdate.";
      output.style.color = "red"; 
      return;
    }

    let akanName;
    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
    } else {
      output.textContent = "Invalid gender selected.";
      output.style.color = "red"; 
      return;
    }

    output.textContent = `Your Akan name is ${akanName}!`;
    output.style.color = "green"; 
  });
