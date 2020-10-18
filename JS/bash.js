//blog js file
var counter = 0
var MAX = 3
/*
  Fill array using some automation and update MAX as len(Array)
*/
/* use \n here */
var items = ["\necho hello\n ",
"\nmkdir orange\n ",
"\ncd orange\n ",
`
@ECHO OFF
ECHO Congratulations! Your batch file executed successfully.
IF EXIST "%~dp0\\venv\\Scripts\\python.exe" (
echo OK
"%~dp0\\venv\\Scripts\\python.exe" "app.py" 
) ELSE (
 ECHO installing pip requirements in venv: python -m venv venv!
 python -m venv venv
 "%~dp0\\venv\\Scripts\\pip" install -r requirements.txt
 "%~dp0\\venv\\Scripts\\python.exe" "app.py" 
)
PAUSE

`,
]

/* use <br /> here */
var explain = ["prints hello in command line",
"makes <b>/orange directory</b> in current directory",
"change directory to <b>/orange</b>",
`
Script to start python server
<br />
<br />
<br /> checks if already venv created
<br />
<br /> and simply starts the <b>app.py</b> server
<br />
<br /> otherwise install python virtual environment 
<br /> as <b>venv</b> where we will install requirements.txt 
<br />
<br /> and now start the app.py server
`
]























$(Document).ready(function(){
	  counter = 0
	  //var slides = document.getElementsByClassName("image-menu");
	  //slides.addEventListener("click", show_menu);
	  $('#goleft').click(goleft);
	  $('#goright').click(goright);


	  /* manualwork */
	  $('#itemlist_1').click(setcounter_3);
});


/* please change manual linking */
function setcounter_3(){
	counter = 3
	refreshpage(counter)
}

function goleft(){
    if(counter == 0){
    	alert("can't go back");
    } else {
    	counter-=1;
    	refreshpage(counter);
    }
}

function goright(){
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