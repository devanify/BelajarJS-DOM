const heading1 = document.querySelector('h1')
const heading2 = document.querySelector('h2')
const button = document.querySelector('button')

const randomGeneratorColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}

button.addEventListener('click', () => {
    const newColor = randomGeneratorColor()
    document.body.style.backgroundColor = newColor
    heading2.innerText = newColor
    heading1.style.color ='white'
    heading2.style.color ='white'
})
