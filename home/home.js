    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const content = document.querySelector(".content")
    const body = document.body;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        mode.classList.toggle("dark");
        content.classList.toggle("active");
        
    })

    function mode(){
        body.classList.toggle("dark")
    }