// Your code goes here:

let button = document.querySelector("#race")
let pikachu = document.querySelector("#pikachu")
let sonic = document.querySelector("#sonic")

button.onclick = function(event) {
    event.preventDefault()

    let pRandNum = Math.floor(Math.random() * (5 - 1+1)+1)
    let sRandNum = Math.floor(Math.random() * (5 - 1+1)+1)

    pikachu.style.animation = "racerSpeed " + pRandNum.toString() + "s linear"
    sonic.style.animation = "racerSpeed " + sRandNum.toString() + "s linear"
}