const content = document.querySelector("div"); 
let fontSize = 16; 

const increaseButton = document.querySelector("button:nth-of-type(1)"); 
const decreaseButton = document.querySelector("button:nth-of-type(2)"); 

increaseButton.addEventListener("click", () => {
    fontSize += 2;
    content.style.fontSize = fontSize + "px";
});

decreaseButton.addEventListener("click", () => {
    if (fontSize > 2) { 
        fontSize -= 2;
        content.style.fontSize = fontSize + "px";
    }
});
