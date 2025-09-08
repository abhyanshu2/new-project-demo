// Navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form validation + popup
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});

// Diet plan read more toggle
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.parentElement;
    const more = card.querySelector(".more");
    if (more.style.display === "block") {
      more.style.display = "none";
      this.textContent = "Read More";
    } else {
      more.style.display = "block";
      this.textContent = "Read Less";
    }
  });
});

// BMI Calculator
document.getElementById("calc-bmi").addEventListener("click", () => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;  
  const bmi = (weight / (height * height)).toFixed(2);

  let result = "";
  if (bmi < 18.5) result = "Underweight";
  else if (bmi >= 18.5 && bmi < 24.9) result = "Normal";
  else if (bmi >= 25 && bmi < 29.9) result = "Overweight";
  else result = "Obese";

  document.getElementById("bmi-result").innerText = `Your BMI: ${bmi} (${result})`;
});


document.getElementById("download-pdf").addEventListener("click", () => {
  const workoutPlan = `
  Workout Schedule
  -----------------------
  Monday: Chest & Triceps
  Tuesday: Back & Biceps
  Wednesday: Legs & Cardio
  Thursday: Shoulders & Abs
  Friday: Core & Mobility
  Saturday: Full Body & HIIT
  Sunday: Rest / Stretching
  `;
  const blob = new Blob([workoutPlan], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "workout-plan.txt";
  link.click();
});
