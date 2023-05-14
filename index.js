import dogsData from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", (e) => {
    const id = e.target.id;
    if ((id === "nope-btn" && !disabled) || (id === "like-btn" && !disabled)) {
        match.updateHasBeenAttr(id);
        render();
        disabled = true;
        if (dogNum.length >= 1) {
            setTimeout(() => {
                setNewDog();
                render();
                disabled = false;
            }, 2000);
        }
    }
});

function setNewDog() {
    window.match = new Dog(dogsData[dogNum.shift()]);
}

function render() {
    document.getElementById("profile-cont").innerHTML = match.getProfileHtml();
}

let disabled = false;
const dogNum = new Array(dogsData.length).fill(0).map((_, x) => x);

setNewDog();
render();
