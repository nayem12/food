let bar = document.querySelector('.uil-bars');
let showMenu = document.querySelector('.nav_menu');

bar.addEventListener('click',()=>{
    bar.classList.toggle('uil-times');
    showMenu.classList.toggle('active');
})