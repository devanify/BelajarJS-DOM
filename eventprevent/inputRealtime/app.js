const form = document.querySelector('#form')
const input = document.querySelector('input')
const list = document.querySelector('#notes')

//Evnent CHANGE
// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah')
// })

//event input
input.addEventListener('input', (e) => {
    document.querySelector('h1').innerText =  input.value
    console.log('Nilai Berubah')
})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const noteValue = input.value
    // console.log(noteValue)
    const newList = document.createElement('li')
    newList.innerText = noteValue
    // console.log(newList)
    list.append(newList)
    input.value = ''
})