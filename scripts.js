const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const menu = document.querySelector(".menu-content")


menuBtn.addEventListener("click",()=>{
    menu.style.animation = "moveIn 1s forwards"
})

closeBtn.addEventListener("click",()=>{
    menu.style.animation = "moveOut 1s forwards"
})