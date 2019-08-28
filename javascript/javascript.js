//Testing 
console.log("I work")

//Variables

let nextButton = document.querySelector(".next")
let pokeImg = document.querySelector(".pokemon")
const pokeName = document.querySelector(".pName")
var clicks = 0
const check = document.querySelector(".submit")
const response = document.querySelector(".answer")
let counter = 0
const scoreCount = document.querySelector("h3")
const startOver = document.querySelector(".reset")
let i=0

//Startup Fuction
function starting(){
let random = Math.ceil(Math.random() * 10)
i = random
pokeImg.src=allPokemon[i].img
pokeName.innerText=allPokemon[i].name
}
window.onload= starting;

// Event Listeners

check.addEventListener("click", function(evt)
{
    evt.preventDefault();
    console.log("button works")
    if(response.value.toLowerCase()===pokeName.innerText.toLowerCase())
    {
        counter += 1
        scoreCount.innerText= ("Score: " + counter) 

    } else {
        pokeName.innerText="Sorry, that's not correct."

    }
    pokeImg.src=allPokemon[i].imgfull
    pokeName.style.display="block"
    response.value=""
    setTimeout(function(){ nextButton.click(); }, 3000);



})

nextButton.addEventListener("click", function(evt){
    evt.preventDefault();
     function click(){
        response.value=""
    }
    click();
    let random = Math.ceil(Math.random() * 10)
    i = random
     pokeImg.src=allPokemon[i].img
     pokeName.innerText= allPokemon[i].name
     pokeName.style.display="none"
     })

startOver.addEventListener("click", function(evt){
    evt.preventDefault();
    let random = Math.ceil(Math.random() * 10)
    i = random
    pokeImg.src=allPokemon[i].img
    pokeName.innerText= allPokemon[i].name
    scoreCount.innerText="Score: 0"
    response.value=""


})


// Class (pokemon) creation

class Pokemon {
    constructor(name,img,imgfull){
        this.name=name
        this.img=img
        this.imgfull=imgfull
    }
}

// New pokemon

const charmander = new Pokemon('Charmander', './images/silhouette_charmander.jpg', './images/charmander.png')

const squirtle = new Pokemon('Squirtle', './images/silhouette_squirtle.jpg', './images/squirtle.png')

const dratini = new Pokemon('Dratini', './images/silhouette_dratini.png', './images/dratini.png')

const venasaur = new Pokemon('Venasaur', './images/silhouette_venasaur.jpg', './images/venasaur.png')

const ninetales = new Pokemon('Ninetales', './images/silhouette_ninetales.png', './images/ninetales.png')

const venonat = new Pokemon('Venonat', './images/silhouette_venonat.jpg', './images/venonat.png')

const alakazam = new Pokemon('Alakazam', './images/silhouette_alakazam.png', './images/alakazam.png')

const pikachu = new Pokemon('Pikachu', './images/silhouette_pikachu2.jpg', './images/pikachu.png')

const magneton = new Pokemon('Magneton', './images/silhouette_magneton.png', './images/magneton.png')

const mewtwo = new Pokemon('Mewtwo', './images/silhouette_mewtwo.jpg', './images/mewtwo.png')

const sandslash = new Pokemon('Sandslash', './images/silhouette_sandslash.png', './images/sandslash.png')
//Pokemon Array

const allPokemon=[charmander,squirtle,dratini,venasaur,ninetales,venonat,alakazam,pikachu,magneton,mewtwo,sandslash]
