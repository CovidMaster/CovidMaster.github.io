function getRandomContent() {
	return content[Math.floor(Math.random() * content.length)];
}

function setContent() {
	let newContent = getRandomContent();
	$("#question").html(newContent.question);
	$("#questionLink").addClass("d-none");
	if(newContent.link) {
		$("#questionLink").attr("href", newContent.link);
		$("#questionLink").removeClass("d-none");
	}
	
	//ToDo: convert the following code into a for loop
	$("#answer1").html(newContent.answers[0].answer);
	$("#answer1Link").addClass("d-none");
	if(newContent.answers[0].link) {
		$("#answer1Link").removeClass("d-none");
		$("#answer1Link").attr("href", newContent.answers[0].link);
	}
	$("#answer2").html(newContent.answers[1].answer);
	$("#answer2Link").addClass("d-none");
	if(newContent.answers[1].link) {
		$("#answer2Link").removeClass("d-none");
		$("#answer2Link").attr("href", newContent.answers[1].link);
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayAnswers() {
	await sleep(1000);
	setContent();
	$("#panel").css("display", "block");
}

function init() {
	setContent();
	$(".answerParent").click(function() {
		//console.log($( this ).html());
		$("#panel").css("display", "none");
		displayAnswers();
	})
}

$(function() {
	init();
});
