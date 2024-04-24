let menuToggle = document.querySelector('.menuToggle')
let list = document.querySelectorAll('.nav li')
let header = document.querySelector('header')

// Funcão que faz o modo máquina de escrever no h2 no início
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    })
}
const titulo = document.querySelector('h2')
typeWriter(titulo)

// Função que faz a animação dos botões
document.addEventListener('DOMContentLoaded', function () {
    let btns = document.querySelectorAll('.btn')

    btns.forEach(btn => {
        btn.addEventListener('mousemove', function (e) {
            let x = e.clientX - btn.getBoundingClientRect().left
            let y = e.clientY - btn.getBoundingClientRect().top

            btn.style.setProperty('--x', x + 'px')
            btn.style.setProperty('--y', y + 'px')
        })
    })
})

function active() {
    list.forEach((item) =>
        item.classList.remove('active'))
    this.classList.add('active')
     // Fechar menuToggle no clique em dispositivos móveis
     if (window.innerWidth <= 768) { 
        header.classList.remove('active');
    }
}
list.forEach((item) => item.addEventListener('click', active))

menuToggle.onclick = function () {
    header.classList.toggle('active')
}
// Remover classe 'active' ao clicar no header em dispositivos móveis
menuToggle.addEventListener('click', function () {
    if (window.innerWidth <= 768) { 
        menuToggle.classList.remove('active')
    }
})


document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        const popupImage = document.querySelector('.popup-image')
        const popupImg = document.querySelector('.popup-image img')
        
        popupImage.style.display = 'block'
        popupImg.src = image.getAttribute('src')
        
        // Adicionando evento de clique na imagem popup para fechar
        popupImage.onclick = () => {
            popupImage.style.display = 'none'
        }
    }
})
