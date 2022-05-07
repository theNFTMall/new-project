// loader start

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("cont").style.display = "block";
}
// loader end
// fade in effect


// fix this
var intervalID;
var opacity;
const fadeIn = () => {
  intervalID = setTimeout(show,10000)
}
const show = () => {
  var fadein = document.getElementById("fadeIn");
  opacity = Number(window.getComputedStyle(fadein).getPropertyValue("opacity"));

  if(opacity < 1){
    opacity += 0.1;
    fadein.style.opacity = opacity;

  } else {
    clearInterval(intervalID);
  }
}
