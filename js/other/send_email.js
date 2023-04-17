'use strict'

export const sendEmail = () => {
    document.getElementById("email-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        window.location.href = "mailto:johannes.ernhart@casablanca.at" + "?subject=" + subject + "&body=" + message;
    });
}
