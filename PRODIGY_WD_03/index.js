let win = document.getElementById("win");
let btn = document.getElementById("btn");
let container = document.getElementById("container");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let arr = [["", "", ""], ["", "", ""], ["", "", ""]];
// let box = document.getElementsByClassName("box");
let last_moves = "O";
let moves = 0;

btn.addEventListener("click", () => {
    window.location.reload();
})

function check_win() {
    if (moves <= 9) {
        if ((arr[0][0] === "X" && arr[0][1] === "X" && arr[0][2] === "X") || (arr[1][0] === "X" && arr[1][1] === "X" && arr[1][2] === "X") || (arr[2][0] === "X" && arr[2][1] === "X" && arr[2][2] === "X") || (arr[0][0] === "X" && arr[1][0] === "X" && arr[2][0] === "X") || (arr[0][1] === "X" && arr[1][1] === "X" && arr[2][1] === "X") || (arr[0][2] === "X" && arr[1][2] === "X" && arr[2][2] === "X") || (arr[0][0] === "X" && arr[1][1] === "X" && arr[2][2] === "X") || (arr[0][2] === "X" && arr[1][1] === "X" && arr[2][0] === "X")) {
            win.innerHTML = "<------X Wins the Game-------->";
            btn.style.display = "block";
            container.style.display = "none";
        }
        else if ((arr[0][0] === "O" && arr[0][1] === "O" && arr[0][2] === "O") || (arr[1][0] === "O" && arr[1][1] === "O" && arr[1][2] === "O") || (arr[2][0] === "O" && arr[2][1] === "O" && arr[2][2] === "O") || (arr[0][0] === "O" && arr[1][0] === "O" && arr[2][0] === "O") || (arr[0][1] === "O" && arr[1][1] === "O" && arr[2][1] === "O") || (arr[0][2] === "O" && arr[1][2] === "O" && arr[2][2] === "O") || (arr[0][0] === "O" && arr[1][1] === "O" && arr[2][2] === "O") || (arr[0][2] === "O" && arr[1][1] === "O" && arr[2][0] === "O")) {
            win.innerHTML = "<------O Wins the Game-------->";
            btn.style.display = "block";
            container.style.display = "none";
        }
    }
    else {
        win.innerHTML = "<------Match Tied-------->"
        btn.style.display = "block";
        container.style.display = "none";
    }
}

box1.addEventListener("click", () => {
    if (!box1.innerHTML) {
        if (last_moves === "X") {
            box1.innerHTML = "O";
            last_moves = "O";
            arr[0][0] = "O";
        } else {
            box1.innerHTML = "X";
            last_moves = "X";
            arr[0][0] = "X";
        }
        console.log(arr[0][0]);
        moves++;
    }
    check_win();
})
box2.addEventListener("click", () => {
    if (!box2.innerHTML) {
        if (last_moves === "X") {
            box2.innerHTML = "O";
            last_moves = "O";
            arr[0][1] = "O";
        } else {
            box2.innerHTML = "X";
            last_moves = "X";
            arr[0][1] = "X";
        }
        console.log(arr[0][1]);
        moves++;
    }
    check_win();
})
box3.addEventListener("click", () => {
    if (!box3.innerHTML) {
        if (last_moves === "X") {
            box3.innerHTML = "O";
            last_moves = "O";
            arr[0][2] = "O";
        } else {
            box3.innerHTML = "X";
            last_moves = "X";
            arr[0][2] = "X";
        }
        console.log(arr[0][2]);
        moves++;
    }
    check_win();
})
box4.addEventListener("click", () => {
    if (!box4.innerHTML) {
        if (last_moves === "X") {
            box4.innerHTML = "O";
            last_moves = "O";
            arr[1][0] = "O";
        } else {
            box4.innerHTML = "X";
            last_moves = "X";
            arr[1][0] = "X";
        }
        console.log(arr[1][0]);
        moves++;
    }
    check_win();
})
box5.addEventListener("click", () => {
    if (!box5.innerHTML) {
        if (last_moves === "X") {
            box5.innerHTML = "O";
            last_moves = "O";
            arr[1][1] = "O";
        } else {
            box5.innerHTML = "X";
            last_moves = "X";
            arr[1][1] = "X";
        }
        console.log(arr[1][1]);
        moves++;
    }
    check_win();
})
box6.addEventListener("click", () => {
    if (!box6.innerHTML) {
        if (last_moves === "X") {
            box6.innerHTML = "O";
            last_moves = "O";
            arr[1][2] = "O";
        } else {
            box6.innerHTML = "X";
            last_moves = "X";
            arr[1][2] = "X";
        }
        console.log(arr[1][2]);
        moves++;
    }
    check_win();
})
box7.addEventListener("click", () => {
    if (!box7.innerHTML) {
        if (last_moves === "X") {
            box7.innerHTML = "O";
            last_moves = "O";
            arr[2][0] = "O";
        } else {
            box7.innerHTML = "X";
            last_moves = "X";
            arr[2][0] = "X";
        }
        console.log(arr[2][0]);
        moves++;
    }
    check_win();
})
box8.addEventListener("click", () => {
    if (!box8.innerHTML) {
        if (last_moves === "X") {
            box8.innerHTML = "O";
            last_moves = "O";
            arr[2][1] = "O";
        } else {
            box8.innerHTML = "X";
            last_moves = "X";
            arr[2][1] = "X";
        }
        console.log(arr[2][1]);
        moves++;
    }
    check_win();
})
box9.addEventListener("click", () => {
    if (!box9.innerHTML) {
        if (last_moves === "X") {
            box9.innerHTML = "O";
            last_moves = "O";
            arr[2][2] = "O";
        } else {
            box9.innerHTML = "X";
            last_moves = "X";
            arr[2][2] = "X";
        }
        console.log(arr[2][2]);
        moves++;
    }
    check_win();
})

