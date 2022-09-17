const burg = document.querySelector("#burger");
const ul = document.querySelector("nav ul")
const nav = document.querySelector("nav")
const navLink = document.querySelectorAll(".nav-li");


burg.addEventListener("click", () => {
    ul.classList.toggle("show");
})

navLink.forEach((link) => link.addEventListener("click", () =>{
    ul.classList.remove("show");
}))