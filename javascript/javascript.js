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
let pokePhoto = document.querySelector(".image")
let theHint = document.querySelector(".hintText")
let i = 0

//Startup Fuction
function starting() {
  let random = Math.ceil(Math.random() * 21)
  i = random
  pokeImg.src = allPokemon[i].img
  pokeName.innerText = allPokemon[i].name
}
window.onload = starting;

// Event Listeners

check.addEventListener("click", function (evt) {
  evt.preventDefault();
  const wrapperElement = document.querySelector("section.wrapper")

  if (wrapperElement.classList.contains("pointer-events-none")) {
    return
  }

//This one checks the answer

  if (response.value.toLowerCase() === pokeName.innerText.toLowerCase()) {
    counter += 1
    scoreCount.innerText = ("Score: " + counter)
  } else if (counter > 0) {
    counter -= 1
    scoreCount.innerText = ("Score: " + counter)
  }
  pokePhoto.classList.add("imageFade")
  pokeImg.src = allPokemon[i].imgfull
  pokeName.style.display = "block"
  response.value = ""

  wrapperElement.classList.toggle("pointer-events-none")
  setTimeout(function () {
    nextButton.click();
    wrapperElement.classList.toggle("pointer-events-none")
  }, 3000);



})
//This one skips current pokemon

nextButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  function click() {
    response.value = ""
    pokePhoto.classList.remove("imageFade")

  }
  click();
  let random = Math.ceil(Math.random() * 21)
  i = random
  pokeImg.src = allPokemon[i].img
  pokeName.innerText = allPokemon[i].name
  pokeName.style.display = "none"
})

// This one resets score to 0 and starts game over
startOver.addEventListener("click", function (evt) {
  evt.preventDefault();
  let random = Math.ceil(Math.random() * 21)
  i = random
  pokeImg.src = allPokemon[i].img
  pokeName.innerText = allPokemon[i].name
  scoreCount.innerText = "Score: 0"
  response.value = ""


})


// Class (pokemon) creation

class Pokemon {
  constructor(name, img, imgfull, hint) {
    this.name = name
    this.img = img
    this.imgfull = imgfull
    this.hint = hint
  }
}

// New pokemon

const charmander = new Pokemon('Charmander', './images/silhouette_charmander.jpg', './images/charmander.png', 'The name of this Fire type Pokemon begins with a C')

const squirtle = new Pokemon('Squirtle', './images/silhouette_squirtle.jpg', './images/squirtle.png', 'The name of this Water type Pokemon begins with an S')

const dratini = new Pokemon('Dratini', './images/silhouette_dratini.png', './images/dratini.png', 'The name of this Dragon type Pokemon begins with a D')

const venasaur = new Pokemon('Venasaur', './images/silhouette_venasaur.jpg', './images/venasaur.png', 'The name of this Grass type Pokemon begins with a V')

const ninetales = new Pokemon('Ninetales', './images/silhouette_ninetales.png', './images/ninetales.png', 'The name of this Fire type pokemon begins with an N')

const venonat = new Pokemon('Venonat', './images/silhouette_venonat.jpg', './images/venonat.png', 'The name of this Bug type Pokemn begins with a V')

const alakazam = new Pokemon('Alakazam', './images/silhouette_alakazam.png', './images/alakazam.png', 'The name of this Psychic type Pokemon begins with an A')

const pikachu = new Pokemon('Pikachu', './images/silhouette_pikachu2.jpg', './images/pikachu.png', 'The name of this Electric type Pokemon begins with a P')

const magneton = new Pokemon('Magneton', './images/silhouette_magneton.png', './images/magneton.png', 'The name of this Electric type Pokemon begins with an M')

const mewtwo = new Pokemon('Mewtwo', './images/silhouette_mewtwo.jpg', './images/mewtwo.png', 'The name of this Psychic type Pokemon begins with an M')

const sandslash = new Pokemon('Sandslash', './images/silhouette_sandslash.png', './images/sandslash.png', 'The name of this Ground type Pokemon begins with an S')

const onix = new Pokemon('Onix', './images/silhouette_onix.jpeg', './images/onix.png', 'The name of this Rock type Pokemon begins with an O')

const rattata = new Pokemon('Rattata', './images/silhouette_rattata.png', './images/ratata.png', 'The name of this Normal type Pokemon begins with an R')

const diglett = new Pokemon('Diglett', './images/silhouette_diglett.png', './images/diglett.png', 'The name of this Ground type Pokemon begins with a D')

const eevee = new Pokemon('Eevee', './images/silhouette_eevee.jpg', './images/eevee.png', 'The name of this Normal type Pokemon begins with an E')

const zapdos = new Pokemon('Zapdos', './images/silhouette_zapdos3.jpg', './images/zapdos.png', 'The name of this Electric type Pokemon begins with a Z')

const mew = new Pokemon('Mew', './images/silhouette_mew.jpeg', './images/meww.png', 'The name of this Psychic type Pokemon begins with an M')

const pidgey = new Pokemon('Pidgey', './images/silhouette_pidgey.jpg', './images/pidgey.png', 'The name of this Flying type Pokemon begins with a P')

const marowak = new Pokemon('Marowak', './images/silhouette_marowak.jpg', './images/marowak.png', 'The name of this Ground type Pokemon begins with an M')

const machop = new Pokemon('Machop', './images/silhouette_machop.jpg', './images/machop.png', 'The name of this Fighting type Pokemon begins with an M')

const electabuzz = new Pokemon('Electabuzz', './images/silhouette_electabuzz.png', './images/electabuzz.jpg', 'The name of this Electric type Pokemon begins with an E')

const arcanine = new Pokemon('Arcanine', './images/silhouette_arcanine.png', './images/arcanine.png', 'Thename of this Fire type Pokemon begins with an A')
//Pokemon Array
const allPokemon = [charmander, squirtle, dratini, venasaur, ninetales, venonat, alakazam, pikachu, magneton, mewtwo, sandslash, onix, rattata, diglett, eevee, zapdos, mew, pidgey, marowak, machop, electabuzz, arcanine]

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  theHint.innerText = allPokemon[i].hint
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}