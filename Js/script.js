let customLoader;
let intervalID;
let opacity;
let dayNight = document.getElementById("day-night");
let bool = false;
let main = document.getElementById("main");
const navArea = document.getElementById("nav-area");
const headerImgText = document.getElementById('header-img-text')
const goalButton = document.getElementById('goals-button')

function myFunction() {
    customLoader = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("cont").style.display = "block";
}

const fadeIn = () => {
    intervalID = setTimeout(show, 10000);
};
const show = () => {
    const fadein = document.getElementById("fadeIn");
    opacity = Number(
        window.getComputedStyle(fadein).getPropertyValue("opacity")
    );

    if (opacity < 1) {
        opacity += 0.1;
        fadein.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
};

dayNight.addEventListener("click", () => {
    if (!bool) {
        dayNight.innerHTML = '<ion-icon name="moon"></ion-icon>';
        dayNight.style.color = '#fff'
        bool = true;
        document.body.style.backgroundColor = "#000";
        headerImgText.classList.add('night-mode-head')
        goalButton.classList.add('night-mode-button')
    } else {
        dayNight.innerHTML = '<ion-icon name="sunny"></ion-icon>';
        dayNight.style.color = 'yellow'
        bool = false;
        document.body.style.backgroundColor = "#fff";
        headerImgText.classList.remove('night-mode-head')
        goalButton.classList.remove('night-mode-button')
    }
});

window.onscroll = () => {
    if (window.scrollY >= navArea.offsetTop) {
        navArea.classList.add("sticky");
        document.getElementById("body--header").style.marginTop = "13vh";
    } else {
        navArea.classList.remove("sticky");
    }
};
