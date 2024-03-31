const form = document.querySelector('#newsletter')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // (baca ke 2) dengan adanya preventdefault dia tidak akan menuju halaman atau destinasi sleanjutnya
    console.log('submited form') // ( baca ke 1)ini (kebiasana )akan menuju destinasi jika tidak ada preevent
})

//CONTOH LAIN KITA AKAN MENCEGAH BEHAVIOR DARI link

const link = document.querySelector('a')

link.addEventListener('click', (e) =>{
    e.preventDefault() //maka jiak di klik linknya yang seharusnya memiliki behavior menuju google.com tidak akan menuju kehalaman tersebut
    console.log('harusnya ke google.com')
    //esensinya nanti adalah tetap berada di halaman yang sama namun berhasil melakukan suatu proses
})