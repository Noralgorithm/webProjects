const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.querySelector('.progress');
const n = circles.length-1;
let current = 0;

prev.addEventListener('click', ()=>{
    circles[current].classList.remove('active');
    current--;
    checkPosition();
})

next.addEventListener('click', ()=>{
    current++;
    circles[current].classList.add('active');
    checkPosition();
})

function checkPosition() {
    if (current == 0) prev.setAttribute('disabled','');
    else prev.removeAttribute('disabled');
    if (current == n) next.setAttribute('disabled','');
    else next.removeAttribute('disabled');

    progress.style.width = (current) / (n) * 100 + '%'
}
