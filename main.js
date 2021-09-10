canvas = document.getElementById("circle_canvas");

ctx = canvas.getContext("2d");
color = blue;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(50, 240, 30, 0, 2*Math.Pi);
ctx.stroke();
canvas.addEventListener("mouseDown",emouseDown);

function emouseDown(e) {
    color = document.getElementById("color_input").value;
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop
    console.log(canvas.offsetLeft);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = 3;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2*Math.Pi);
    ctx.stroke();   
}
function clear_board() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}