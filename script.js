function moveRandomly(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

const moveRandom = document.querySelector("#move-around");


moveRandom.addEventListener("click", function(e) {
    moveRandomly(e.target);
})

const yesButton = document.querySelector('.btn .yes');

yesButton.addEventListener('click', () => {
  confetti({
    particleCount: 200,
    spread: 70,
    startVelocity: 40,
    shapes: ['circle', 'triangle', 'square'],
    colors: ['#ff0000', '#00ff00', '#0000ff'],
  });
});