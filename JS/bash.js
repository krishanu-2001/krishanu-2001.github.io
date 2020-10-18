//blog js file
var counter = 0
var MAX = 3-1
/*
  Fill array using some automation and update MAX as len(Array)
*/
/* use \n here */
var items = ["\necho hello\n ",
"\nmkdir orange\n ",
"\ncd orange\n ",
]

/* use <br /> here */
var explain = ["prints hello in command line",
"makes <b>/orange directory</b> in current directory",
"change directory to <b>/orange</b>"
]

$(Document).ready(function(){
	  counter = 0
	  //var slides = document.getElementsByClassName("image-menu");
	  //slides.addEventListener("click", show_menu);
	  $('#goleft').click(goleft);
	  $('#goright').click(goright);
});

function goleft(){
	var element = document.querySelectorAll(".menud");
    if(counter == 0){
    	alert("can't go back");
    } else {
    	counter-=1;
    	refreshpage(counter);
    }
}

function goright(){
	var element = document.querySelectorAll(".menud");
    if(counter == MAX){
    	alert("can't go ahead");
    } else {
    	counter+=1;
    	refreshpage(counter);
    }
}

function refreshpage(counter){
	/*var element = document.querySelectorAll("#codehere");
	for(let i=0;i<element.length;i++){
		element[e].innerHTML(items[counter])
	}*/
	document.getElementById("codehere").innerHTML = items[counter];
	document.getElementById("explainhere").innerHTML = explain[counter];

}