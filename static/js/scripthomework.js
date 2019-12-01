function createColorButtons (count, columns, container) {

    let rowComponent;
    for (let i = 0; i < count; i++) {
// Starting new row
        if ( i % columns == 0 ) {
            rowComponent = document.createElement('div');
            rowComponent.className = 'row';
            container.appendChild(rowComponent);
        }
// Creating button
        const button = document.createElement('button');
        button.className = 'btn';
// adding tooltip
        button.title = 'Click me';
// generating color
        let r = randColor();
        let g = randColor();
        let b = randColor();
// thransforming rgb color to hex string
        let hexColor = fullColorHex(r, g, b);

// Getting the nearest color, that have a readable name
        let n_match  = ntc.name(hexColor);
        const n_rgb        = n_match[0]; // RGB value of closest match
        const n_name       = n_match[1]; // Text string: Color name
// Setting BG color and text to button
        button.style.backgroundColor = n_rgb;
        button.innerText = n_name;
// Getting text color. If BG color is too dark, setting color to white
        const textColor = getTextColor(r, g, b);
// Setting text color
        button.style.color = textColor;
// Adding button to row
        rowComponent.appendChild(button);
// Adding mouseenter event
        button.addEventListener('mouseenter', function() {
// Setting colorField BG color
            colorField.style.backgroundColor = n_rgb;
// Setting colorField text color
            colorField.style.color = textColor;
        })
// Adding mouseleave event
        button.addEventListener('mouseleave', function() {
// Setting colorField BG color to white
            colorField.style.backgroundColor = '#ffffff';
// Setting colorField text to empty string
            colorField.innerText = "";
        })
// Adding click event
        button.addEventListener('click', function() {
// Setting colorField text
            colorField.innerText = n_name;
        })

    }
}

// Calculating text color, based on BG color
function getTextColor(r, g, b) {
    let tempTextColor = '#000000'
    if (r < 128 && g < 128 && b < 128) {
        tempTextColor = '#ffffff'
    }
    return tempTextColor;
}

// Generating color (0-255).
function randColor() {
    let color = Math.random() * 255;
    color = Math.round(color);
    return color;
}

// Transformin RGB to HEX
var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#"+red+green+blue;
};

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
            hex = "0" + hex;
    }
    return hex;
};

// Starting function
createColorButtons(numberOfButtons, buttonsOnRow, btnsContainer);
