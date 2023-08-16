const button = document.querySelector("button")
const colorInput = document.querySelector("input")
const bodyColor = document.querySelector("body")
const colorText = document.querySelector(".colorText")

const generateHexColor = () =>{
  const hexNumber = Math.floor(Math.random()*16777215).toString(16)
  const color = "#" + hexNumber
  return color
}

const changeBackgroundColor = () => {
  const randomColor = generateHexColor()
  colorInput.value = bodyColor.style.backgroundColor = randomColor
  colorText.textContent = randomColor.toUpperCase()
}

const changeBackgroundColor2 = () => {
  bodyColor.style.backgroundColor = colorInput.value
  colorText.textContent = colorInput.value.toUpperCase() 
}

button.onclick = () => changeBackgroundColor()
colorInput.onmouseout = () => changeBackgroundColor2()