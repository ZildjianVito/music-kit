let angklungButton = document.querySelectorAll(".angklung");

for (let i = 0; i < angklungButton.length; i++) {
    angklungButton[i].addEventListener("click", function () {
        let textButton = this.innerHTML;
        makeSound(textButton);
        buttonAnimation(textButton);
    })
}

function makeSound(buttonClick) {
    switch (buttonClick) {
        case "do":
            let sdo = new Audio("sound/sdo.mp3");
            sdo.play();
            break;
        case "re":
            let sre = new Audio("sound/sre.mp3");
            sre.play();
            break;
        case "mi":
            let smi = new Audio("sound/smi.mp3");
            smi.play();
            break;
        case "fa":
            let sfa = new Audio("sound/sfa.mp3");
            sfa.play();
            break;
        case "sol":
            let ssol = new Audio("sound/ssol.mp3");
            ssol.play();
            break;
        case "la":
            let sla = new Audio("sound/sla.mp3");
            sla.play();
            break;
        case "si":
            let ssi = new Audio("sound/ssi.mp3");
            ssi.play();
            break;
        case "do1":
            let sdo1 = new Audio("sound/sdo1.mp3");
            sdo1.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeAnimation = document.querySelector("." + currentKey);
    activeAnimation.classList.add("pressed");

    setTimeout(function () {
        activeAnimation.classList.remove("pressed")
    }, 180)
}