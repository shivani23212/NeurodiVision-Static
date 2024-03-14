var icons = document.getElementsByClassName('fa-solid');
var lenses_btn = document.getElementById('lenses');
var lens_options = document.getElementById('lens-picker');
var questions_btn = document.getElementById('questions');
var overlay = document.getElementById('overlay');
var overlay_btn = document.getElementById('overlay-btn');
var main_container = document.getElementsByClassName('main-container')[0];
var info_container = document.getElementsByClassName('info-container')[0];
var body = document.body;
var lenses = document.getElementById('lenses');
var homepage = document.getElementsByClassName('homepage')[0];
var glasses_images = document.getElementsByClassName('glasses-img');
var main_container = document.getElementsByClassName('main-container')[0];

for (i = 0, len = glasses_images.length; i < glasses_images.length; i++){
  glasses_images[i].onclick = reopenWindow;
}

function popUp (url, windowName) {
    var popUpXLocation = (window.screen.width / 2) - (500 / 2);
    var popUpYLocation = (window.screen.height / 2) - (500 / 2);
    newWindow=window.open(url,windowName,`height=500,width=500,left=${popUpXLocation},top=${popUpYLocation}`);
    if (window.focus) {newWindow.focus()}
    return false;
}

questions_btn.onclick = function() {
    popUp('../modal.html', 'popup');
}

overlay_btn.onclick = function() {
    overlay.style.display = 'none';
}

// open up slider of lenses when button clicked
lenses_btn.onclick = function() {
  if (lens_options.style.left !== '0px') {
    lens_options.style.left = '0';
  }
}

var lens_container = document.getElementById('glasses-image-container');
// close slider of lenses when user moves mouse off of slider
lenses_btn.addEventListener("mouseleave", function( event ) {   
  lens_options.addEventListener("mouseleave", function( event ) {
    lens_options.style.left = '-1200px';
  }, false);

  if (main_container.parentNode.matches(":hover") && !lens_options.parentNode.matches(":hover")) {
    lens_options.style.left = '-1200px';
    console.log('mouse is outside');
} else {
  console.log('mouse is inside');
}

}, false);

  function reopenWindow() {
    main_container.classList.add('animate_content');
    jQuery(info_container).fadeOut(100).delay(1800).fadeIn();
  
    setTimeout(function() {
      main_container.classList.remove('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      main_container.classList.remove('fadeIn');
    }, 1500);

    lens_options.style.left = '-1200px';
  }