const body = document.querySelector("body")
const img = document.createElement("img")

const url = "https://pokeapi.co/api/v2/pokemon/"
let countPokemon = 0

const getApi = async function(pokemon){
    const response = await fetch(url + pokemon)
    const data = response.json()

    //console.log(data)

    return data
}

const userApi = async function(pokemon){
    const dataApi = await getApi(pokemon)

    img.src = dataApi["sprites"]["other"]["dream_world"]["front_default"]
    //console.log(dataApi)
}
setInterval(() => {

    countPokemon += 1
    userApi(countPokemon)

}, 1000);


const btn = document.querySelector("button")
const numberCount = document.querySelector("span")

let count = 0
btn.onclick = setCount;

function setCount(){
    count += 1
    
    numberCount.innerHTML = count

}

const timeSecont = document.createElement("p")

body.appendChild(timeSecont)
timeSecont.innerHTML = "Time Second: "

body.appendChild(img)

function startTime(number){

    setInterval(() => {

        number += 1 
        timeSecont.innerHTML = `Time Second: ${number}`

    }, 1000);

}
startTime(count)

console.log("Hello develop, welcome to website!")