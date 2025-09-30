const checkButton = document.getElementById("check-btn");
const textInputElement = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

function strCheck(str) {
  const regex = str.replace(/[^a-z0-9]/gi, "");
  const lower = regex.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

console.log(strCheck("epe"));

function buttonCheck() {
  const inputValue = textInputElement.value;
  if (strCheck(inputValue)) {
    resultDiv.textContent = inputValue + " is a palindrome.";
  } else {
    resultDiv.textContent = inputValue + " is not a palindrome.";
  }
}

checkButton.addEventListener("click", () => {
  if (textInputElement.value === "") {
    window.alert("Please input a value");
  } else {
    buttonCheck();
  }
});
