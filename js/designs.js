// Define elements
let colorPicker = document.querySelector("#colorPicker").value;
let pixelTable   = document.getElementById("pixelCanvas"),
    pixels;


// Create dynamic grid based on the inputs
function makeGrid(height, width) {
    for (let row = 0; row < height; row++) {
        let tableRow = document.createElement("tr");

        for (let cell = 0; cell < width; cell++) {
            let tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        pixelTable.appendChild(tableRow);
    }
}

// Add color to the pixels.
function colorPixel(cEvent){
    colorPicker = document.querySelector("#colorPicker").value;
    cEvent.target.style.backgroundColor = colorPicker;
}

var start = document.getElementById('sizePicker');
start.addEventListener('submit', function(cEvent){
    cEvent.preventDefault();
    document.getElementById("pixelCanvas").innerHTML = "";

    // Build grid once the size is submitted
    let gridWidth = document.getElementById("inputWidth").value;
    let gridHeight = document.getElementById("inputHeight").value;
    makeGrid(gridHeight, gridWidth);

    var pixels = document.querySelectorAll('td');

    // Passing in the event to add color to pixels
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPixel, false);
    }

});


// Clear Pixel Art Maker
function reset(){
    location.reload(true);
}

resetCanvas = document.getElementById('reset');
resetCanvas.addEventListener('click', reset);