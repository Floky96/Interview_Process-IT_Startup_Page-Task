'use strict'

export function makeCall() {
    document.querySelector('#callBtn').addEventListener('click', function () {
        window.location.href = 'tel:+43 5418 5622';
    });
}
