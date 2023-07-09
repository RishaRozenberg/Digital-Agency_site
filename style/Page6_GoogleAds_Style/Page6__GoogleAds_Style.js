function readMore() {
    var dots1 = document.getElementById("dots1");
    var more1 = document.getElementById("more1");
    var more2 = document.getElementById("more2");
    var btn1 = document.getElementById("btn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline"
        btn1.innerHTML = "Развернуть"
        more1.style.display = "none";
        more2.style.display = "none";
    } else {
        dots1.style.display = "none"
        btn1.innerHTML = "Свернуть"
        more1.style.display = "inline";
        more2.style.display = "inline";
    }
}

function readMore2() {
    var dots2 = document.getElementById("dots2");
    var more3 = document.getElementById("more3");
    var more4 = document.getElementById("more4");
    var more5 = document.getElementById("more5");
    var btn2 = document.getElementById("btn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline"
        btn2.innerHTML = "Развернуть"
        more3.style.display = "none";
        more4.style.display = "none";
        more5.style.display = "none";
    } else {
        dots2.style.display = "none"
        btn2.innerHTML = "Свернуть"
        more3.style.display = "inline";
        more4.style.display = "inline";
        more5.style.display = "inline";
    }
}

function readMore3() {
    var dots3 = document.getElementById("dots3");
    var more6 = document.getElementById("more6");
    var btn3 = document.getElementById("btn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline"
        btn3.innerHTML = "Развернуть"
        more6.style.display = "none";
    } else {
        dots3.style.display = "none"
        btn3.innerHTML = "Свернуть"
        more6.style.display = "inline";
    }
}
function readMore4() {
    var dots4 = document.getElementById("dots4");
    var more7 = document.getElementById("more7");
    var more8 = document.getElementById("more8");
    var more9 = document.getElementById("more9");
    var btn4 = document.getElementById("btn4");

    if (dots4.style.display === "none") {
        dots4.style.display = "inline"
        btn4.innerHTML = "Развернуть"
        more7.style.display = "none";
        more8.style.display = "none";
        more9.style.display = "none";
    } else {
        dots4.style.display = "none"
        btn4.innerHTML = "Свернуть"
        more7.style.display = "inline";
        more8.style.display = "inline";
        more9.style.display = "inline";
    }
}