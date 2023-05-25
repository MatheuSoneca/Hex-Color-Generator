const button = document.querySelector("button")
const colorInput = document.querySelector("input")
const bodyColor = document.querySelector("body")


const generateHexColor = () =>{
  const hexNumber = Math.floor(Math.random()*16777215).toString(16)
  const color = "#" + hexNumber
  return color
}

const changeBackgroundColor = () => {
  const randomColor = generateHexColor()
  colorInput.value = button.style.color = bodyColor.style.backgroundColor = randomColor
}

button.onclick = () => changeBackgroundColor()
colorInput.onmouseout = () => {
  bodyColor.style.backgroundColor = button.style.color = colorInput.value
}

/* todo
  Change the font color for one default, and add some shadow. */