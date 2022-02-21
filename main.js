/*creating elements - */
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "rgb(80 77 76)"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const subHeader = document.createElement("h3")
subHeader.innerHTML = "made by: Moriya"
subHeader.setAttribute("class", "sub-Header")
subHeader.style.color = "rgb(40 49 115)"
subHeader.style.fontFamily = "cursive"
document.body.appendChild(subHeader)


/*catching div's */
let ball = document.getElementById("block")
let field = document.getElementById("playing-field")
let arrows = document.getElementById("arrows")
let up = document.getElementById("up")
let left = document.getElementById("left")
let right = document.getElementById("right")
let down = document.getElementById("down")

/*functions */
//parseInt() פונקציית תזוזה עם 
//להשאיר את הכדור בשטח המגרש. חישוב השטח - למעלה-למטה: שטח מגרש, שטח כדור, שטח חצים
//חישוב השטח - ימינה-שמאלה: שטח מגרש, שטח כדור
right.onclick = function() {
    right = parseInt(ball.style.left) || 0
    right += 15
    if (right <= (field.offsetWidth - ball.offsetWidth - 10)) {
        ball.style.left = right + "px"
    }
    ball.style.right = ball.style.left
}

left.onclick = function() {
    left = parseInt(ball.style.right) || 0
    left -= 15
    if (left >= 0) {
        ball.style.right = left + "px"
    }
    ball.style.left = ball.style.right
}

up.onclick = function() {
    up = parseInt(ball.style.bottom) || 0
    up -= 15
    if (up >= 0) {
        ball.style.bottom = up + "px"
    }
    ball.style.top = ball.style.bottom
}

down.onclick = function() {
    down = parseInt(ball.style.top) || 0
    down += 15
    if (down <= field.offsetHeight - ball.offsetHeight - arrows.offsetHeight) {
        ball.style.top = down + "px"
    }
    ball.style.bottom = ball.style.top
}