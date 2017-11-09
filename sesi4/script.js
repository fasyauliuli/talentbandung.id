var tombolGreet = document.getElementsByClassName("nama");

for (var i=0; i < tombolGreet.length; i++) {
    tombolGreet[i].addEventListener('click', sapa(i))
    }

function sapa(i) {
    return function () {
    console.log("halo, " + tombolGreet[i].textContent);
}}