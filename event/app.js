const button = document.querySelector('#clickMe') 

button.onclick = function (){ // dibuat dalam bentuk function agar tidak langsung tereksekusi
	console.log("Anda telah mengkkliknya")
}

//atau bisa membuat functionnya terlebih dahulu
const scream = () => {
	console.log("Anda menyentuh buttonya")
}
button.onmouseover = scream

const btnEvent = document.querySelector('#eventbtn')

function stepOne(){
	console.log('ini step satu')
}
function stepTwo(){
	console.log('ini step dua')
}
//Jika kita mebuat cara biasa kita tidak bisa menjalankan 2 fungsi karena jika dideklarasikan, deklarasi paling terakhir akan mengganti nilai dari deklarasi diawal. Dengan menggunakan addEventListener kita bisa menjalankan 2 fungsi seperti berikut
btnEvent.addEventListener('click', stepOne)
btnEvent.addEventListener('click', stepTwo)