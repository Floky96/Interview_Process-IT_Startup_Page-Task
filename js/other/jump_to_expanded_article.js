'use strict'

export const setArticleAnchors = () => {
    document.getElementById("article-1").addEventListener("click", function () {
        window.location.href = "./news.html#article-1";
    });
    document.getElementById("article-2").addEventListener("click", function () {
        window.location.href = "./news.html#article-2";
    });
    document.getElementById("article-3").addEventListener("click", function () {
        window.location.href = "./news.html#article-3";
    });
    document.getElementById("article-4").addEventListener("click", function () {
        window.location.href = "./news.html#article-4";
    });
}