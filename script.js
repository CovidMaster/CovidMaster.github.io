function setContent() {
	let newContent = getRandomContent()
	$("#question").html(newContent.question);
	if("link" in newContent){
		$("#questionLink").removeClass("d-none");
		$("#questionLink").attr("href", newContent.link);
	} else {
		$("#questionLink").addClass("d-none");
	}
	
  //ToDo: convert the following code into a for loop
	$("#answer1").html(newContent.answers[0].answer);
	$("#answer2").html(newContent.answers[1].answer);
	if("link" in newContent.answers[0]){
		$("#answer1Link").removeClass("d-none");
		$("#answer1Link").attr("href", newContent.answers[0].link);
	} else {
		$("#answer1Link").addClass("d-none");
	}
	if("link" in newContent.answers[1]){
		$("#answer2Link").removeClass("d-none");
		$("#answer2Link").attr("href", newContent.answers[1].link);
	} else {
		$("#answer2Link").addClass("d-none");
	}
}

function getRandomContent() {
	return content[Math.floor(Math.random() * content.length)];
}

function eventListenerAnswers() {
	let answers = $(".answerParent");
	for (var i = 0; i < answers.length; i++) {
		answers[i].addEventListener("click", function() {
			$("#panel").css("display", "none");
			displayAnswers();
		});
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
	eventListenerAnswers();
	setContent();
}

init();
