const form = document.querySelector('#form')
const input = document.querySelector('input')
const list = document.querySelector('#notes')

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