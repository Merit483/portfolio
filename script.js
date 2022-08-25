'use strict'
//menu burger
let content = document.querySelector("#burger-container"),
    sideBarBody = document.querySelector("#burger-sidebar-body"),
    btn = document.querySelector("#button-burger"),
    overlay = document.querySelector("#burger-overlay"),
    activatedClass = "burger-activated"

sideBarBody.innerHTML= content.innerHTML

btn.addEventListener("click", function (){
    this.parentNode.classList.add(activatedClass)
})
overlay.addEventListener("click", function (){
    this.parentNode.classList.remove(activatedClass)
})

//

// projet animation

let btns = document.querySelectorAll("[data-target]"),
    closeBtn = document.querySelectorAll(".modal-btn"),
    overlayAnim = document.querySelector("#overlay-anim");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
       document.querySelector(btn.dataset.target).classList.add("active");
       overlayAnim.classList.add('active');
    })
})

closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
       btn.closest('.modal').classList.remove("active");
       overlayAnim.classList.remove('active');
    })
})

window.onclick = (e) => {
    if (e.target == overlayAnim){
        let modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlayAnim.classList.remove('active');
    }
}


