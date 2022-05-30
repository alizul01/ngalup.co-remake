const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    navmenu.classList.toggle('hamburger_active');
    navmenu.classList.toggle('hidden');
})