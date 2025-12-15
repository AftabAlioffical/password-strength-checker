const password = document.getElementById("password");
const bar = document.getElementById("bar");
const result = document.getElementById("result");

const tips = {
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  number: document.getElementById("number"),
  special: document.getElementById("special")
};

password.addEventListener("input", () => {
  const value = password.value;
  let strength = 0;

  // Reset tips
  for (let key in tips) tips[key].style.color = "white";

  if (value.length >= 8) { strength++; tips.length.style.color = "lightgreen"; }
  if (/[A-Z]/.test(value)) { strength++; tips.uppercase.style.color = "lightgreen"; }
  if (/[0-9]/.test(value)) { strength++; tips.number.style.color = "lightgreen"; }
  if (/[^A-Za-z0-9]/.test(value)) { strength++; tips.special.style.color = "lightgreen"; }

  // Update bar
  bar.style.width = (strength * 25) + "%";
  if (strength <= 1) bar.style.background = "red";
  else if (strength <= 3) bar.style.background = "orange";
  else bar.style.background = "lightgreen";

  // Update text
  if (strength <= 1) result.textContent = "Weak Password";
  else if (strength <= 3) result.textContent = "Medium Password";
  else result.textContent = "Strong Password";
});
