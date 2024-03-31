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
    // console.log('Nilai Berubah')
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

//const lists = document.querySelectorAll('li')
// for(let list of lists){
//     list.addEventListener('click', function (){
//         list.remove()
//         //ini hanya bekerja jika listnya sudah ada pada html
//         // tidak berlaku untuk list yang ditambah dengan funtion js 
//         //untuk mengatasinya kita bisa menggunakan parentnya
//     })
// }

list.addEventListener('click', (e) => {
    // console.log(e) //objectnya sesuai targetnya yaitu : li 
    // e.target.remove()
    //jika seperti ini akan menghapus semua baik itu elemnt li atau a karena yang dibaca adalah parentnya, untuk mengatasinya kita dapat membuat pengkondisiian === dengan nodenamenya
    console.dir(e.target) // dapat dilihat pada nodeNamenya apa misalnya unutk list 1 nodenamenya LI
    e.target.nodeName === 'LI' && e.target.remove() //disini element a tidak akan terhapus karena hanya nodename LI yang akan terhapus dari parent
    e.preventDefault() // agar saat saya klik a yang tidak langsung menuju google.com 
})