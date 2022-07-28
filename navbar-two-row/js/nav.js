const menu = document.querySelector(".menu");
const pizza = document.querySelector(".pizza_list");
const login = document.querySelector(".login");

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn_menu")) {
        menu.classList.toggle("menu--show");
        pizza.classList.remove("pizza_list--show");
        login.classList.remove("login--show");
    }
    if (e.target.matches(".btn_pizza")) {
        pizza.classList.toggle("pizza_list--show");
        menu.classList.remove("menu--show");
        login.classList.remove("login--show");
    }

    if (e.target.matches(".btn_login")) {
        login.classList.toggle("login--show");
        pizza.classList.remove("pizza_list--show");
        menu.classList.remove("menu--show");
    }
});