export default function openBurger() {
    document.querySelector('.burger').addEventListener('click', function (e) {
        const mainNavEl = document.querySelector('.main-nav')

        mainNavEl.style.transition = 'opacity ease 0.5s';
        mainNavEl.classList.add('main-nav--active');
        
        e.target.dataset.isclicked = 1;
    });
}