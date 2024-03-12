const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#4f9a65 ",
    "#5a9f6d",
    "#63a276",
    "#6ca77e",
    "#75ac87",
    "#7eaf8f",
    "#87b498",
    "#90b7a0",
    "#99bca9",
    "#a2c1b1",
    "#abb6ba",
    "#b4bac2",
    "#b4bac2",
    "#bdbfcb",
    "#c6c4d4",
    "#cfcae0",
    "#d8d0e7",
    "#e1d7ef",
    "#eaeff7",
    "#eaeff7",
    "#f3f5fe",
    "#fcfcff"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;

        circle.style.left = x - circleWidth / 2 + "px";
        circle.style.top = y - circleHeight / 2 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

