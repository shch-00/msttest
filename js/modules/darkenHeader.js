export default function darkenHeader() {
    window.addEventListener('scroll', function (e) {
        const headerEl = document.querySelector('.header')
        if (this.window.scrollY > 0) {
            headerEl.style.backgroundColor = '#1c1c1c';
        } else {
            headerEl.style.backgroundColor = 'transparent';
        }
    });
}