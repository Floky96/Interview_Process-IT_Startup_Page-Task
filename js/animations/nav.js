'use strict'

let listeners = "unset" 
let mobileListeners = "unset"


export function animate_nav() {


    const logo = document.getElementById('logo')
    const nav = document.getElementById('nav')
    const burgerBars = document.getElementById('burgerBars')
    const closeMobileNav = document.getElementById('closeMobileNav')


    let expanded_nav_width = () => {
        logo.style.border = "3px solid #FFFFFF80"
        nav.style.border = "2px solid #FFFFFF80"
        nav.style.width = "34rem"
    }


    let reset_nav_width = () => {
        nav.style.width = "0rem"
        logo.style.border = "3px solid #FFFFFF14"
        nav.style.border = "2px solid #FFFFFF14"
    }


    let open_close_MobileNav = () => {
        const body = logo.parentElement.parentElement
        mobileListeners = "set"
        nav.parentElement.classList.toggle("show")
        body.classList.toggle("overflow")
    }

    //ADD EVENTLISTENERS & SET NAV FOR PC

    if (window.innerWidth > 900 && listeners == "unset") {

        expanded_nav_width()

        logo.addEventListener('mouseover', expanded_nav_width);
        logo.addEventListener('mouseout', reset_nav_width);
        nav.addEventListener('mouseover', expanded_nav_width);
        nav.addEventListener('mouseout', reset_nav_width);

        listeners = "set"

        setTimeout(() => {
            reset_nav_width()
        }, 5000)

        return listeners

    }

    //REMOVE EVENTLISTENERS & SET NAV FOR TABLET / PHONE

    if (window.innerWidth <= 900 && listeners == "set") {

        logo.removeEventListener('mouseover', expanded_nav_width);
        logo.removeEventListener('mouseout', reset_nav_width);
        nav.removeEventListener('mouseover', expanded_nav_width);
        nav.removeEventListener('mouseout', reset_nav_width);
        listeners = "unset"
        mobileListeners = "unset"
        location.reload()
    }


    if (window.innerWidth <= 450 && mobileListeners == "unset") {

        burgerBars.addEventListener('click', open_close_MobileNav)
        closeMobileNav.addEventListener('click', open_close_MobileNav)
        mobileListeners = "set"
    }
}