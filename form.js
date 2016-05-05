function selectionDisplay() {
	var i = $("#mySelect").val();
	$(".rateSite").hide();
	$(".submitPassage").hide();
	
	if(i === "feedback") {
		$(".rateSite").show();
	} else if(i === "submission") {
		$(".submitPassage").show();
	} else {
		$(".rateSite").show();
		$(".submitPassage").show();
	};
};

