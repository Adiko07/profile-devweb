var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var navSpeed = document.getElementsByClassName("navSpeed");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < navSpeed.length; i++) {
      navSpeed[i].className = navSpeed[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  navSpeed[slideIndex-1].className += " active";
}