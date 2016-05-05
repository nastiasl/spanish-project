jQuery(function(){
	$("article").hide();
	$("#launchButton, #navButton").click(function(){	

    	function getRandomNum(x,y) {                             
      		return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  		};
		
		var display = getRandomNum(0,3);
		display = "#" + display
		$("article").hide();
		$(display).show();
		$("#home").hide();
		$("#launchButton").hide();

	});

});

//   Here's what this javascript does: when the page loads, all the passages are hidden. 
//   When the visitor clicks the Start Reading button a random passage appears, the homepage text disappears, the Start Reading button disappears
//   To generate a new passage, the visitor clicks the New Passage button.
//   Refreshing the page resets everything.