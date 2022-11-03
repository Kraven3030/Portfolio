// Funtion to make celtic spiral spin 
document.querySelector(".image").style.transform = "rotate(90deg)";
let rotation = 0
const angle = 90;

function spin() {
    rotation = (rotation + angle) % 360;
    image.style.transform = rotation
}

return spin()