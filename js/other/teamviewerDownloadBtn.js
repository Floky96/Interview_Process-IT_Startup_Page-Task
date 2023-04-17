'use strict'

export const downloadTeamViewer = () => {
    document.getElementById("download-button").addEventListener("click", function () {
        window.location.href = "https://www.teamviewer.com/en/download/windows/";
    });
}