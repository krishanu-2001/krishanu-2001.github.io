function myFunction() {
   var element = document.querySelectorAll(".abcd");
   for(let i=0;i<element.length;i++)
      element[i].classList.toggle("body_class");
   var element = document.querySelectorAll(".abc");
   for(let i=0;i<element.length;i++)
   	element[i].classList.toggle("text_class");

}
window.addEventListener('load', function () {
	alert("hello");
	$("#checkbox1").click(myFunction);
	var slideIndex = 0;
	showSlides();

	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}
	function showSlides() {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1}
	  slides[slideIndex-1].style.display = "block";
	  setTimeout(showSlides, 3000); // Change image every 2 seconds
	}

}, false);