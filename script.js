const button = document.querySelector("button")
const colorInput = document.querySelector("input")
const bodyColor = document.querySelector("body")


const generateHexColor = () =>{
  //gerar um numero hex aleatorio
  const hexNumber = Math.floor(Math.random()*16777215).toString(16)
  const color = "#" + hexNumber
  return color
}

const changeBackgroundColor = () => {
  // pegar o numero hex aleatorio e aplicar no background (nao faço ideia de como fazer isso mas blz)
  const randomColor = generateHexColor()
  colorInput.value = bodyColor.style.backgroundColor = randomColor
}

button.onclick = () => changeBackgroundColor()
colorInput.onmouseout = () => {
  bodyColor.style.backgroundColor = colorInput.value
}