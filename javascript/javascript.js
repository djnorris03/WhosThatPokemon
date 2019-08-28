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

// Timer function 



// Event Listeners

check.addEventListener("click", function(evt){
    evt.preventDefault();
    console.log("button works")
    if(response.value.toLowerCase()===pokeName.innerText.toLowerCase()){
        counter += 1
        scoreCount.innerText= ("Score: " + counter) 
    } else {
        pokeName.innerText="Sorry, that's not correct."
        }
    pokeName.style.display="block"
    response.value=""

})

nextButton.addEventListener("click", function(evt){
    evt.preventDefault();
     function click(){
        clicks += 1
        console.log(clicks)
        response.value=""
    }
    click();

    let i=clicks
     pokeImg.src=allPokemon[i].img
     pokeName.innerText= allPokemon[i].name
     pokeName.style.display="none"
     console.log(allPokemon[i],name)
     
})

startOver.addEventListener("click", function(evt){
    evt.preventDefault();
    clicks=0
    pokeImg.src=allPokemon[0].img
    pokeName.innerText= allPokemon[0].name
    scoreCount.innerText="Score: 0"
    response.value=""


})


// Class (pokemon) creation

class Pokemon {
    constructor(name,img){
        this.name=name
        this.img=img
    }
}

// New pokemon

const charmander = new Pokemon('Charmander', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_charmander.jpg')
const squirtle = new Pokemon('Squirtle', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_squirtle.jpg')
const dratini = new Pokemon('Dratini', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_dratini.png')
const venasaur = new Pokemon('Venasaur', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_venasaur.jpg')
const ninetails = new Pokemon('Ninetails', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_ninetales.png')
const venonat = new Pokemon('Venonat', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_venonat.jpg')
const alakazam = new Pokemon('Alakazam', 'file:///Users/carlarojas/Documents/General_Assembly/projects/ProjectOne/images/silhouette_alakazam.png')
//Pokemon Array

const allPokemon=[charmander,squirtle,dratini,venasaur,ninetails,venonat,alakazam]