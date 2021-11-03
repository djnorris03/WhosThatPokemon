//Variables
//Stuff
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
  let random = Math.ceil(Math.random() * 10)
  i = random
  pokeName.innerText = allPokemon[i].name
  pokeImg.src = allPokemon[i].img
  
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
  let random = Math.ceil(Math.random() * 10)
  i = random
  pokeImg.src = allPokemon[i].img
  pokeName.innerText = allPokemon[i].name
  pokeName.style.display = "none"
})

// This one resets score to 0 and starts game over
startOver.addEventListener("click", function (evt) {
  evt.preventDefault();
  let random = Math.ceil(Math.random() * 10)
  i = random
  pokeImg.src = allPokemon[i].img
  pokeName.innerText = allPokemon[i].name
  scoreCount.innerText = "Score: 0"
  response.value = ""
  counter=0
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

const Abby = new Pokemon('Abby Hartwig', './images/Abby Hartwig_s.jpg', './images/Abby Hartwig.jpg', 'Girl Sophmore')

const Allison = new Pokemon('Allison Kock', './images/Allison_s.jpg', './images/Allison.jpg', 'Girl Senior')

const Ava = new Pokemon('Ava Munsen', './images/Ava Munsen_s.jpg', './images/Ava Munsen.jpg', 'Girl Sophmore')

const David = new Pokemon('David Santleman', './images/David Santleman_s.jpg', './images/David Santleman.jpg', 'Guy Senior')

const Emma = new Pokemon('Emma Rodewald', './images/Emma Rodewald_s.jpg', './images/Emma Rodewald.jpg', 'Girl Senior')

const Ingrid = new Pokemon('Ingrid Bloedel', './images/Ingrid Bloedel_s.jpg', './images/Ingrid Bloedel.jpg', 'Girl Senior')

const Jacob = new Pokemon('Jacob Gunther', './images/Jacob Gunther__s.jpg', './images/Jacob Gunther_.jpg', 'Guy Sophmore')

const Kerrigan = new Pokemon('Kerrigan Brau', './images/Kerrigan Brau_s.jpg', './images/Kerrigan Brau.jpg', 'Girl Sophmore')

const Mckenize = new Pokemon('Mckenize Christensen', './images/Mckenzie Christensen_s2.jpg', './images/Mckenize Christensen', 'Girl Sophmore')

const Mitch = new Pokemon('Mitch Nerland', './images/Mitch Nerland_s.jpg', './images/Mitch Nerland.jpg', 'Guy Senior')


//Pokemon Array
const allPokemon = [Abby, Allison, Ava, David, Emma, Ingrid, Jacob, Kerrigan, Mckenize, Mitch]

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
