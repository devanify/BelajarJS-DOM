const button = document.querySelector('#clickMe') 

button.onclick = function (){ // dibuat dalam bentuk function agar tidak langsung tereksekusi
	console.log("Anda telah mengkkliknya")
}

//atau bisa membuat functionnya terlebih dahulu
const scream = () => {
	console.log("Anda menyentuh buttonya")
}
button.onmouseover = scream

