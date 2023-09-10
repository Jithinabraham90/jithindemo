// Function to generate a random hexadecimal color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    const body = document.body;
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
}

// Add a click event listener to the button
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);
