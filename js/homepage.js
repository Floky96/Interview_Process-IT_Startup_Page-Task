'use strict'


//__NAV & SCROLL UP BTN FOR MAIN & ALL SUB SITES

import { animate_nav } from "./animations/nav.js"
import { scrollToTop } from "./animations/scrollToTop-btn.js"

animate_nav()
scrollToTop()

window.addEventListener("resize", animate_nav)



//__ANIMATE SLIDER

import { animateSlider } from "./animations/homepage_slider.js"

animateSlider()



//__SET ANCHORS ON ARTICLES

import { setArticleAnchors } from "./other/jump_to_expanded_article.js"

setArticleAnchors()
