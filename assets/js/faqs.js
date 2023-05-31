const duvidasright = document.querySelectorAll('.duvidasright')

duvidasright.forEach((duvidasright) => {
    duvidasright.addEventListener("click", () =>{
        duvidasright.classList.toggle("active");
    })
});
