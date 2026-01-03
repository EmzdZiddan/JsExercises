// PREVENT DEFAULT DAN EVENT BUBBLING 

const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

close.forEach( (e1) => {
    e1.addEventListener("click", (e) => {
        e.target.parentElement.style.display = "none";
        e.preventDefault();
        e.stopPropagation();
    })
})

const cards = document.querySelectorAll(".card");

cards.forEach((as)=>{
    as.addEventListener('click', () => {
        alert('ok');
    })
})


