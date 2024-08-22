// Getting the grid container
const animatedGrid = document.querySelector('.animated-grid');

// Setting up the box count
const boxNumber = 479;
// Instead of CPU-heavy DOM manipulation every time we add a box, I compiled the boxes HTML into one string variable, this way we only manipulate the DOM once
let boxesHTML;
for (let i = 0; i < boxNumber; i++) {
    boxesHTML += '<div class="box"></div>';
}
animatedGrid.innerHTML += boxesHTML;

// Animating the box grid
const minDelay = 0;
const maxDelay = 5000;
const animatedGridBoxes = document.querySelectorAll('.animated-grid .box');
animatedGridBoxes.forEach(box => {
    box.classList.toggle('glow');
    const classAssignmentDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    box.style.animationDelay = `${classAssignmentDelay}ms`;
    const selectedColor = Math.floor(Math.random() * 16) + 1;
    setTimeout(() => {
        if(selectedColor === 1 || selectedColor === 2) {
            box.classList.add('glow-blue');
        }
        else if(selectedColor === 3 || selectedColor === 4) {
            box.classList.add('glow-green');
        }
        else if(selectedColor === 5 || selectedColor === 6) {
            box.classList.add('glow-orange');
        }
        else if(selectedColor === 7) {
            box.classList.add('glow-red');
        }
    }, classAssignmentDelay);
});