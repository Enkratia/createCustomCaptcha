const captcha = document.querySelector(".captcha"),
  reloadnBtn = document.querySelector(".reload-btn"),
  inputField = document.querySelector("input"),
  checkBtn = document.querySelector(".check-btn"),
  statusText = document.querySelector(".status-text");

let allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomChar}`;
  }
}

getCaptcha();

reloadnBtn.addEventListener("click", () => {
  captcha.innerText = "";
  getCaptcha();
});

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusText.style.display = "block";

  let inputVal = inputField.value.split("").join(" ");

  if (inputVal === captcha.innerText) {
    statusText.style.color = "#4db2ec";
    statusText.innerText = "Nice! You don`t apper to be a robot.";

    setTimeout(() => {
      statusText.style.display = "none";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  } else {
    statusText.style.color = "#ff0000";
    statusText.innerText = "Captcha not matched. Please try again!";
  }
});
