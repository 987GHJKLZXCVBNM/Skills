const dragon = document.getElementById("dragon");
const rafik = document.getElementById("rafik");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dragon.classList != "jump") {
        dragon.classList.add("jump")
    }
    setTimeout( function() {
        dragon.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval  ( function() {
    let dragonTop = parseInt(window.getComputedStyle(dinodragon).getPropertyValue("top"))
    let rafikLeft = parseInt(window.getComputedStyle(rafik).getPropertyValue("left"));

    if  (rafikLeft < 50 && rafikLeft > 0 && dragonTop >= 140) {
         alert("GAME OVER!!")
    }
}, 10)