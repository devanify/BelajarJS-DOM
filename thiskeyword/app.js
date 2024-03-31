const randomGeneratorColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}

const buttons = document.querySelectorAll('button')

for(let button of buttons){
    button.addEventListener('click', () => {
        button.style.backgroundColor = randomGeneratorColor()
        button.style.color = 'white'
    })
}

const headings = document.querySelectorAll('h1')
function colorize () {
    //jika ingin menggunakan objek berbeda daripada rrepot seperti diatas lebih baik menggggunakan keyword "this"
    this.style.backgroundColor = randomGeneratorColor()
    this.style.color = randomGeneratorColor()
}

for (let heading of headings){
    heading.addEventListener('mousemove',colorize)
}

