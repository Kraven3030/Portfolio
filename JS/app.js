// Modal variables

const modal = document.getElementById("theModal");

const modalBtn = document.getElementById("aboutme_button");

const closeBtn = document.getElementsByClassName("close_button")[0]


// Funtion to open modal
function openModal() {
    modal.style.display = "block"
}
// Function to close modal
function closeModal() {
    modal.style.display = "none"
}

// Event listeners to open modal
modalBtn.addEventListener("click", openModal);
// Event listener to close modal
closeBtn.addEventListener("click", closeModal);

//================================================================

// Back button on projects page
const homePage = document.getElementById("go_back")

// Event listener for back button click
go_back.addEventListener("click", previous);

function previous() {
    history.back();
}


//=================================================

//Javascript to control the spin of the logo by clicking it

function freeze() {
    document.getElementById("spiral").style.animationPlayState = "paused"
}












