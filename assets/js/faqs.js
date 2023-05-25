const duvidasright = document.querySelectorAll('.duvidasright')

duvidasright.forEach((duvidasrightt) => {
    duvidasrightt.addEventListener("click", () =>{
        duvidasrightt.classList.toggle("active");
    })
});