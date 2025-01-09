export default function setBurgerTransition() {
    // window.addEventListener('change', function (e) {
    //     if (window.innerWidth <= 1023) {
    //         console.log('success');
    //     }
    // });



    document.querySelector('.main-nav').addEventListener('transitionstart', function (e) {
        const burger = document.querySelector('.burger');

        if (!burger.hasAttribute('data-isclicked')) {
            e.target.style.transition = 'none';
        } 
    });
}