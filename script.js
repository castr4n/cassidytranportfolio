let button = document.getElementById("lightswitch");
button.style.display = "none";

function darkMode() {

  let element = document.body;
  element.className = "darkmode";

  /* hide darkmode button */
  let button = document.getElementById("darkswitch");
  button.style.display = "none";
  /* show lightmode button */
  let button2 = document.getElementById("lightswitch");
  button2.style.display = "block";

}

function lightMode() {
  let element = document.body;
  element.className = "lightmode";

  /* hide lightmode button */
  let button = document.getElementById("lightswitch");
  button.style.display = "none";
  /* show darkmode button */
  let button2 = document.getElementById("darkswitch");
  button2.style.display = "block";  
}



function topFunction(val) {
  document.body.scrollTop = val; // For Safari
  document.documentElement.scrollTop = val; // For Chrome, Firefox, IE and Opera
}
lightMode()
