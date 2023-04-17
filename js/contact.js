'use strict'


//__NAV & SCROLL UP BTN FOR MAIN & ALL SUB SITES

import { animate_nav } from "./animations/nav.js"
import { scrollToTop } from "./animations/scrollToTop-btn.js"

animate_nav()
scrollToTop()

window.addEventListener("resize", animate_nav)



//SEND EMAIL

import { sendEmail } from "./other/send_email.js"

sendEmail()



//__SET EVENTLISTENER FOR CALL BUTTON
import { makeCall } from "./other/call_number.js"

makeCall()



//__DOWNLOAD TEAMVIEWER BNT
import { downloadTeamViewer } from "./other/teamviewerDownloadBtn.js"

downloadTeamViewer()

