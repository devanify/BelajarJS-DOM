const container = document.querySelector('#container')
const baseImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 100; i++){
    const pokeball = document.createElement('div') //membuat element div
    pokeball.classList.add('pokemon') //memberikan class 'pokemon' pada element div yang dibuat

    const imgPokemon = document.createElement('img') //membuat element img
    imgPokemon.src = `${baseImgUrl}${i}.png` // menambahkan url
    // console.log(imgPokemon)

    const label = document.createElement('span') //membuat element span
    label.innerText = `${i}` //memberikan nilai pada span


    pokeball.appendChild(imgPokemon) //menambahkan element imgPokemen ke pokeball
    pokeball.appendChild(label) //menambahkan element label ke pokeball
    container.appendChild(pokeball) //menambahkan element pokeball ke element container
}