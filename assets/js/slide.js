const carousel = document.querySelector(".carosel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;

let isDragging = false, startX,startScrollLeft;
arrowBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
      carousel.scrollLeft += btn.id === "left"? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
}
const dragging = (e) =>{
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mousedown", dragStart);
