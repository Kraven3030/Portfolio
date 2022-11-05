// Modal variables

const modal = document.getElementById("theModal");

const modalBtn = document.getElementById("aboutme_button");

const closeBtn = document.getElementsByClassName("close_button")[0]

// Event listeners to open modal
modalBtn.addEventListener("click", openModal);
// Event listener to close modal
closeBtn.addEventListener("click", closeModal);

// Funtion to open modal
function openModal() {
    modal.style.display = "block"
}

// Function to close modal
function closeModal() {
    modal.style.display = "none"
}

//================================================================





