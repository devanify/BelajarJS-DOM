const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

button.addEventListener('click', (e) => {
    container.style.backgroundColor = randomGeneratorColor()
    e.stopPropagation() //mencegah event yang berjalan di parrentnya dalam hal ini (container adlaah parent dari button)
    //dengan begini saat clikc button maka yg berubah hanya fungsi yg dijalankan dan tidak menjadalankan event pada container
})

container.addEventListener('click', () => {
    container.classList.toggle('hide')
})

const randomGeneratorColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}