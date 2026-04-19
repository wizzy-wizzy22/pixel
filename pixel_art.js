let field = document.querySelector('.field')

for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    field.appendChild(cell)
}

var CURRENT_COLOR = "rgb(62, 62, 62)";
var DEFAULT_COLOR = "rgb(255, 255, 255) ";

var COLOR_MAP = {
    "black": "rgb(0, 0, 0)",
    "red": "rgb(255, 102, 46)",
    "green": "rgb(26, 218, 84)",
    "blue": "rgb(19, 15, 255)",
    "yellow": "rgb(255, 236, 26)",
    "skyblue": "rgb(142,229,255)",
};



let color_cells = document.querySelectorAll('.color-cell')
for (let i = 0; i < color_cells.length; i++) {
    let color_cell = color_cells[i];
    color_cell.addEventListener('click', function () {
        let colorClass = "";
        if (color_cell.classList.contains("black")) colorClass = "black;"
        else if (color_cell.classList.contains("red")) colorClass = "red";
        else if (color_cell.classList.contains("green")) colorClass = "green";
        else if (color_cell.classList.contains("blue")) colorClass = "blue";
        else if (color_cell.classList.contains("yellow")) colorClass = "yellow";
        else if (color_cell.classList.contains("skyblue")) colorClass = "skyblue";

        CURRENT_COLOR = COLOR_MAP[colorClass];

        document.querySelector('.selected').classList.remove('selected')
        color_cell.classList.add('selected')
    })
}
var IS_CLICKED = false;

document.addEventListener('mousedown', function () {
    IS_CLICKED = true;
});

document.addEventListener('mouseup', function () {
    IS_CLICKED = false;
});


let cells = document.querySelectorAll('.cell')
for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    cell.addEventListener('click', function () {
        cell.style.backgroundColor = CURRENT_COLOR;
    })

    cell.addEventListener('mouseover', function () {
        if (IS_CLICKED) {
            cell.style.backgroundColor = CURRENT_COLOR;
        }
    })

    cell.addEventListener('mousedown', function () {
        cell.style.backgroundColor = CURRENT_COLOR;
    })
}


document.querySelector('.eraser').addEventListener('click', function () {
    CURRENT_COLOR = DEFAULT_COLOR;

    document.querySelector('.selected').classList.remove('.selected')

    this.classList.add('selected')
})

var FILL_MODE = false;

document.querySelector('.fill-tool').addEventListener('click', function () {
    FILL_MODE = true;

    document.querySelector('.selected').classList.remove('selected')
    this.classList.add('selected')
})
FILL_MODE = false;

cell.addEventListener('mousedown', function () {
    if (FILL_MODE) {
        for (let j = 0; j < cells.length; j++) {
            cells [j].style.backgroundColor = CURRENT_COLOR;
        }
} else {
    cell.style.backgroundColor = CURRENT_COLOR;
}
})

var COLORS = {
    "black": "rgb(0, 0, 0)",
    "red": "rgb(255, 102, 46)",
    "green": "rgb(26, 218, 84)",
    "blue": "rgb(19, 15, 255)",
    "yellow": "rgb(255, 236, 26)",
    "skyblue": "rgb(142,229,255)",
};

setInterval(function () {
    let result = '';
    let temp_cells = document.querySelectorAll('.cell');

    for (let i = 0; i < temp_cells.length; i += 1) {
        let cell = temp_cells[i];
        let color = cell.style.backgroundColor;

        let colorIndex = "0";
        for (let j = 0; j < COLORS.length; i++) {
            if (color === COLORS[j]) {
                colorIndex = j.toString();
                break;
            }
        }

        result += colorIndex;
    }
    document.cookie = 'pixel-result=${result};max-age=100000';
}, 60000);

function get_result_from_cookie() {
    let cookies = document.cookie.split('; ')
    for (let i = 0; i < cookie.length; i += 1) {
        let cookie = cookies[i].split('=')
        console.log(cookie)
        if (cookie[0] == 'pixel-result') {
            return cookie[1]
        }
    }
    return '0' * 450
}

let temp_result = get_result_from_cookie()
if (temp_result != '0') {
    for (let i = 0; i < 450; i += 1) {
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('id', '${i}')
        cell.style.backgroundColor = COLORS[parseInt(temp_result[i])]
        field.appendChild(cell)
    }
}

