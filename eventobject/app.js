document.querySelector('button').addEventListener('click',  (e) => {
    console.log(e) //di log objectnya adalah pointer event
})

const input = document.querySelector('input')
//keydown bekerja saat tombol ditekan
input.addEventListener('keydown', (e) => {
    // console.log(e) //di log objeknya akan keyboard event
    // console.log(e.key)
    // console.log(e.code)
    switch (e.code){
        case `ArrowUp`:
            console.log(`Tombol Arah Atas`)
            break;
        case `ArrowDown`:
            console.log(`Tombol Arah Bawah`)
            break;
        case `ArrowRight`:
            console.log(`Tombol Arah Kanan`)
            break;
        case `ArrowLeft`:
            console.log(`Tombol Arah Kiri`)
            break;
        default :
            console.log('Diabaikan')
    }
})

//keyup bekerja saat tombol dilepas atau sleesai ditekan
// input.addEventListener('keyup', () => {
//     console.log('ini keyup')
// })