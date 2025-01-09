import closeBurger from "./modules/closeBurger.js";
import openBurger from "./modules/openBurger.js";
import setBurgerTransition from "./modules/setBurgerTransition.js";

window.addEventListener('DOMContentLoaded', () => {
    setBurgerTransition()
    openBurger();
    closeBurger();
});