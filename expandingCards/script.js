const panels = document.querySelectorAll('.panel');
const toggle = document.querySelector('.slider')

document.querySelector('.slider').mode = '#455'

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeAllActives();
        panel.classList.add('active');
    })
})

function removeAllActives(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

let i = 0;
panels.forEach(panel => {
    panel.style.backgroundImage = `url('src/img${i}.jpg')`;
    i++;
})

let darkMode = false;
toggle.addEventListener('click', ()=>{
    if (!darkMode) {
        document.querySelector('.body').style.backgroundColor = '#000';
        document.querySelector('.signature').style.color = '#fff';
        document.querySelector('.slider').classList.add('darkSlider');
        darkMode = true;
    } else {
        document.querySelector('.body').style.backgroundColor = '#fff';
        document.querySelector('.signature').style.color = '#000';
        document.querySelector('.slider').classList.remove('darkSlider');
        darkMode = false;
    }
})


