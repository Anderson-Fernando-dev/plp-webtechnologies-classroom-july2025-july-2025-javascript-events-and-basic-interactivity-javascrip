// ================================
// Form Validation
// ================================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio automático

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Regras de validação personalizadas
  if (username.length < 3) {
    formMessage.textContent = "❌ Username must be at least 3 characters.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "❌ Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // Se todas regras passarem
  formMessage.textContent = "✅ Registration successful!";
  formMessage.style.color = "green";
});

// ================================
// Interactive Counter
// ================================
let counter = 0;
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ================================
// Theme Switcher
// ================================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Switch to Light Mode";
  } else {
    themeBtn.textContent = "Switch to Dark Mode";
  }
});
