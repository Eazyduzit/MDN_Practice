// declaring the variables
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 
document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.Height = document.documentElement.clientHeight;
})

// creating the random number function
function random(number) {
    return Math.floor(Math.random() * number);
}

// creating the function that draws the circles using a loop
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) { // the loop let us repeat the block of code a 100 times
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.arc(random(canvas.width), random(canvas.height), 
        random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

// when you click the button it activates the event listener and runs the function draw.
btn.addEventListener("click", draw);