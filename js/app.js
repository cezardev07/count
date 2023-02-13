const body = document.querySelector("body")
const btn = document.querySelector("button")
const numberCount = document.querySelector("span")

btn.onclick = setCount;

let count = 0

function setCount(){
    count += 1
    
    numberCount.innerHTML = count

}

const timeSecont = document.createElement("p")

body.appendChild(timeSecont)
timeSecont.innerHTML = "Time Second: "

function startTime(number){

    setInterval(() => {

        number += 1 
        timeSecont.innerHTML = `Time Second: ${number}`

    }, 1000);

}
startTime(count)