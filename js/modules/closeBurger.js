export default function closeBurger() {
    document.querySelector('.main-nav__close').addEventListener('click', function (e) {
        document.querySelector('.main-nav').classList.remove('main-nav--active');
    });
}