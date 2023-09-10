// Function to generate a random hexadecimal color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change both background color and text color
function changeColors() {
    const body = document.body;
    const h1 = document.querySelector('h1');
    
    const newBackgroundColor = getRandomColor();
    const newTextColor = getRandomColor();
    
    body.style.backgroundColor = newBackgroundColor;
    h1.style.color = newTextColor;
}

// Add a click event listener to the button
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeColors);
