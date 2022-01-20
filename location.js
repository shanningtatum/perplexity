//Get the button:
const info = document.querySelector('.info');

console.log("Hello");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("scrollBtn");
  
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function renderRoom(){
  roomInfo.forEach((rooms) => {
    info.innerHTML += `<i class="fas fa-users fa-2x" id="icons"></i>
    <div class="players">${players}</div>
    <i class="fas fa-hourglass-half fa-2x" id="icons"></i>
    <div class="time">${time} minutes</div>
    <i class="fas fa-unlock fa-2x" id="icons"></i>
    <div class="pass">${passrate}% pass rate</div>
    <i class="fas fa-dollar-sign fa-2x" id="icons"></i>
    <div class="rate">${rate} per player</div>`
  })
}