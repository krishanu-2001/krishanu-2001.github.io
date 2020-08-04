//blog js file
$(Document).ready(function(){
	  //var slides = document.getElementsByClassName("image-menu");
	  //slides.addEventListener("click", show_menu);
	  $('#image-menu').click(show_menu);
});

function show_menu(){
	var element = document.querySelectorAll(".menud");
   	for(let i=0;i<element.length;i++)
      	element[i].classList.toggle("menud2");
}