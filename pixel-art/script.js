window.onload = function () {
    colorsHandler();
};

let palette = document.getElementsByClassName("color");

for (let i = 1; i < 4; i += 1) {
    let randomColor = 'rgb(' + Math.floor(Math.random() * 255 + 1) + ', ' + Math.floor(Math.random() * 255 + 1) + ', ' + Math.floor(Math.random() * 255 + 1) + ')';
    palette[i].style.backgroundColor = randomColor;
}

let colors = document.querySelectorAll(".color");

for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', function(e) {
        if (!(e.target.className.includes('selected'))) {
            unSelect();

            e.target.classList.add("selected")
        }

        function unSelect() {
            for(let i = 0; i < colors.length; i += 1) {
                if(colors[i].className.includes("selected")) {
                    colors[i].classList.remove("selected");
                }
            }
        }
    })
}

const boardBtn = document.querySelector("#generate-board");
const input = document.querySelector("#board-size");

boardBtn.addEventListener("click", createBoard)

function createBoard() {
    let n = parseInt(input.value);

    if (n < 5) {
        n = 5;
    } else if (n > 50) {
        n = 50;
    }

    if (document.querySelector(".line") != null) {
        let linesNumber = document.querySelectorAll(".line");
        for (let i = 0; i < linesNumber.length; i += 1) {
            linesNumber[i].remove();
        }
    }

    if (n <= 50 && n > 0) {
        for (let i = 0; i < n; i += 1) {
            let line = document.createElement("div");
            line.className = "line";
            document.querySelector("#pixel-board").appendChild(line);
            
            for (let j = 0; j < n; j += 1) {
                let pixel = document.createElement("div");
                pixel.className = "pixel";
                line.appendChild(pixel);
            }
        }
    } else {
        alert("Board Inválido!")
    }

    colorsHandler();
}

function colorsHandler() {
    let pixels = document.getElementsByClassName("pixel");

    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener("click", function(e) {
            if (document.querySelector(".selected") != null) {
            let selectedElem = document.querySelector(".selected");
            let color = window.getComputedStyle(selectedElem).getPropertyValue("background-color")
            e.target.style.backgroundColor = color;
            }
        })
    }
}

const clearBoardBtn = document.querySelector("#clear-board");

clearBoardBtn.addEventListener("click", function(e) {
    let pixels = document.getElementsByClassName("pixel");

    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = "#ffffff"
    }
});