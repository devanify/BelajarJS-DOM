const allImages = document.getElementsByTagName("img")

// for (let img of allImages){
//     // console.log(img.src)
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg';
// }

const imageSquare = document.getElementsByClassName('square')

// for (let img of imageSquare){
//     // console.log(img.src)
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg';
// }

//QUERY SELECTOR bisa memanggil berdasarkan id,class,tag hanya dengan query selector || all in function untuk seleksi elemnent
const paragraft = document.querySelector('p')
const imgID = document.querySelector('#banner') //mencari berdasarkan id menggunakan #
const imgClass = document.querySelector('.square') //mencari berdasarkan class menggunakan . || namun hanya menampilkan satu item saja
// untuk menamilkan semua dapat menggunakan querySelectorAll
const imgClassAll = document.querySelectorAll('.square') //menampilkan 3 nodes list img berdasarkan class square
const paragraftAll = document.querySelectorAll('p') //menampilkan 2 nodes list berdasarkan tag



//selain itu dapat juga digunakan untuk mencari berdasarkan tag yang berisi atribut tertentu
const input = document.querySelector('input[type="checkbox"]')
// console.log(input)


//innertext, innerttext dan textcontent

const para = document.querySelector('p')
// console.log(para.innerText)
// console.log(para.textContent)
// console.log(para.innerHTML)


//getAttributes() dan setAttribute ()
const banner = document.querySelector('#banner')
console.log(banner)
banner.alt="gambar kucing"
console.log(banner)
banner.class ='iniclass' //tidak mau update karena harus menggunakan setAtribute
console.log(banner)
banner.setAttribute('class', 'merah,tebal') //akan terupdate atributesnya
console.log(banner)

console.log(banner.src)
console.log(banner.getAttribute('src')) //pemggunaan getattributes
console.log(banner.getAttribute('class')) //pemggunaan getattributes


//STYLING DENGAN JS
const heading = document.querySelector('h1')
// heading.style.color = 'red' 
console.log (heading)

const links = document.querySelectorAll('p a') // mencari link ( tag a) yang berada di tag (p)
for (let link of links){
    link.style.color = 'rgb(0,108,134)',
    link.style.textDecorationColor = 'magenta',
    link.style.textDecorationStyle = 'wavy'
}
console.log(heading.getAttribute('class')) //class masih belum ada pada heading
heading.setAttribute('class','border-danger') //menambahkan kelas 
console.log(heading.getAttribute('class')) //class telah dimasukkan ke heading
heading.setAttribute('class','bg-info') // apa yang terjadi jika kita menambahkan atribe lagi
console.log(heading.getAttribute('class')) //class class sebelumnya akan ditimpa atau hilang

// // untuk mengatasinya dapat menggunakan Classlist
// console.log(heading.classList)
// heading.classList.add('border-danger')
// console.log(heading.classList) 
// //selain itu kita juga dapat me remove class yang sudah ada
// heading.classList.remove('bg-info')
// console.log(heading.classList) 

// Element Parent, Child Dan Sibling

const texBold = document.querySelector('b')
    //melihat parent dari elemnt b
console.log(texBold.parentElement) //ini berarti elemnt bold(b) berada pada  parrent paragaft (p)

const parag = texBold.parentElement //elemnt paragraft
console.log(parag.children) //untuk menapilkan cildern dari p (paragaft)

 //contohnya menggunakan class square
 const squareimage = document.querySelector('.square')
   // ada nextSibling dan nextElementSibling
   console.log(squareimage.nextSibling) //ini akan membaca apa yang ada di kode apakah ada enter tab dll
   console.log(squareimage.nextElementSibling) //ini membaca element apa sleanjutnya
   // ada previousSibling dan previousElementSibling
   console.log(squareimage.previousSibling) //ini akan membaca apa yang ada sebelumnya ,di kode apakah ada enter tab dll (dapat dilihat pada (data : ))
   console.log(squareimage.previousElementSibling) //ini membaca element apa sebelumnya

   