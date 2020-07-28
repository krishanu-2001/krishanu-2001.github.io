$(Document).ready(function(){
	$("#git_id").click(show_git);
});

function show_git(){
  // -> removing the class
  var element = document.getElementById('fgg');
  element.classList.remove("anim-typewriter");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("anim-typewriter");
}