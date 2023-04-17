'use strict'


//__NAV & SCROLL UP BTN FOR MAIN & ALL SUB SITES


import { animate_nav } from "./animations/nav.js"
import { scrollToTop } from "./animations/scrollToTop-btn.js"

animate_nav()
scrollToTop()

window.addEventListener("resize", animate_nav)


