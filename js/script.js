document.addEventListener("DOMContentLoaded", function () {
    
    //enable mobile menu
    const sitenav = document.querySelector(".site-nav");
    const menubutton = document.querySelector(".menubutton");

    menubutton.onclick = () => {
        // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
        if (sitenav.getAttribute("data-menustate") === "closed" ) {
            sitenav.setAttribute("data-menustate", "open");
        } else {
            sitenav.setAttribute("data-menustate", "closed");
        };
    };

    // Remove the data-attribute on resize to fix drawer nav animation
    window.onresize = () => {
        sitenav.removeAttribute("data-menustate");
    };

});