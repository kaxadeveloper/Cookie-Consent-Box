const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
    document.cookie = "CookieBy=kaxadevi; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    } else {
        alert("Cookie can't be set!");
    }
}

let checkCookie = document.cookie.indexOf("CookieBy=kaxadevi");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");