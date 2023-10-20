const formInputs = document.querySelectorAll(".input-div input");
const sybmitB = document.querySelector('.sybmit-b')
const errorImage = document.querySelectorAll('.error-image');
const errorMessage = document.querySelectorAll('.error-message')
const eRegex = /\w+@\w+/

for(let i = 0; i < formInputs.length; i++) {
  sybmitB.addEventListener('click', () => {
    let trimmed = formInputs[i].value.trim()
    if(trimmed === "" && formInputs[i] !== formInputs[2]) {
      formInputs[i].style.border = "2px solid var(--red)"
      formInputs[i].parentElement.style.marginBottom = "35px"
      formInputs[i].setAttribute("placeholder", "")
      errorImage[i].style.visibility = "visible"
      errorMessage[i].style.visibility = "visible"
      } else if(formInputs[i] === formInputs[2] && eRegex.test(formInputs[i].value) === false) {
        formInputs[i].setAttribute("placeholder", "email@example/com")
        formInputs[i].classList.add('red')
        formInputs[i].style.border = "2px solid var(--red)"
        formInputs[i].parentElement.style.marginBottom = "35px"
        errorImage[i].style.visibility = "visible"
        errorMessage[i].style.visibility = "visible"
    } else {
      formInputs[i].style.border = "1px solid rgba(128, 128, 128, 0.325)";
      formInputs[i].parentElement.style.marginBottom = "20px"
      errorImage[i].style.visibility = "hidden"
      errorMessage[i].style.visibility = "hidden"
    }
  })
}

