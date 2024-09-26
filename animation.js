const circle = document.querySelector('.circle');
const color = document.querySelector('.color');
const bwImage = document.querySelector('.bw');

let isMouseMoved = false;

document.addEventListener('mousemove', (e) => {
    circle.style.left = `${e.clientX - circle.offsetWidth / 2}px`;
    circle.style.top = `${e.clientY - circle.offsetHeight / 2}px`;

    if (!isMouseMoved) {
        color.style.opacity = '1';
        isMouseMoved = true;
    }

    color.style.clipPath = `circle(200px at ${e.clientX}px ${e.clientY}px)`;
});
