let currentContent = content[0];
let rightOrder = true;
let executedEvents = new Array(content.length).fill(0);

function getDate(germanDateFormat) {
	let dateParts = germanDateFormat.split(".");
	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

function requirementFulfilled() {
	if (currentContent.require) {
		if (currentContent.ref === 0 && getDate($(".date").html()) < getDate(currentContent.require)) {
			console.log(currentContent.question);
			return false;
		}
	}
	return true;
}

function getRandomContent() {
	do {
		currentContent = content[Math.floor(Math.random() * content.length)];
	} while ("event" in currentContent || !requirementFulfilled(currentContent));
}

function getValue(num) {
	let value = $("#bar" + num).html();
	return parseInt(value.replace(/\.|€|%/g, ""));
}

function checkIfEvent() {
	for (let i = 0; i < content.length; i++) {
		if ("event" in content[i] && executedEvents[i] === 0) {
			for (let j = 0; j < 3; j++) {
				if (content[i].event === j && (getValue(j + 1) <= content[i].max || getValue(j + 1) >= content[i].min)) {
					currentContent = content[i];
					executedEvents[i] = 1;
					return true;
				}
			}
		}
	}
	return false;
}

function setContent() {
	if (!checkIfEvent()) {
		getRandomContent();
	}
	let newContent = currentContent;

	$("#question").html(newContent.question.replace(/\n/g, "<br>"));
	$("#questionLink").addClass("d-none");
	if (newContent.link) {
		$("#questionLink").attr("href", newContent.link);
		$("#questionLink").removeClass("d-none");
	}

	rightOrder = true;
	let answerOrder = [Math.floor(Math.random() * 2 + 1), 2]
	if (answerOrder[0] === 2) {
		answerOrder[1] = 1;
		rightOrder = false;
	}
	for (let i = 0; i < 2; i++) {
		$("#answer" + answerOrder[i]).html(newContent.answers[i].answer.replace(/\n/g, "<br>"));
		$("#answer" + answerOrder[i] + "Link").addClass("d-none");
		if (newContent.answers[i].link) {
			$("#answer" + answerOrder[i] + "Link").removeClass("d-none");
			$("#answer" + answerOrder[i] + "Link").attr("href", newContent.answers[i].link);
		}
	}
}

function increaseDate() {
	let date = getDate($(".date").html());
	date.setDate(date.getDate() + 1);
	let day = date.getDate();
	let month = date.getMonth() + 1;
	if ((String(day)).length === 1) {
		day = "0" + day;
	}
	if ((String(month)).length === 1) {
		month = "0" + month;
	}
	$(".date").html(day + "." + month + "." + date.getFullYear());
}

function changeScore(clickedAnswer) {
	const baseScore = [10, 1, 1];
	let score = currentContent.answers[0].score;
	if ((!rightOrder && clickedAnswer === "answer1") || (rightOrder && clickedAnswer !== "answer1")) {
		score = currentContent.answers[1].score;
	}

	let value1 = getValue(1) + baseScore[0] + parseInt(score.economy);
	if (value1 > 50000) {
		value1 = 50000;
	} else if (value1 < 0) {
		value1 = 0;
	}
	$("#bar1").html(value1.toFixed(0).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "€");
	width1 = value1 / 50000 * 100 + "%";
	$("#bar1").css('width', width1);

	let value2 = getValue(2) + baseScore[1] + parseInt(score.incidence);
	if (value2 > 500) {
		value2 = 500;
	} else if (value2 < 0) {
		value2 = 0;
	}
	$("#bar2").html(value2);
	width2 = value2 / 500 * 100 + "%";
	$("#bar2").css('width', width2);

	let value3 = getValue(3) + baseScore[2] + parseInt(score.satisfaction);
	if (value3 > 100) {
		value3 = 100;
	} else if (value3 < 0) {
		value3 = 0;
	}
	$("#bar3").html(value3 + "%");
	width3 = value3 + "%";
	$("#bar3").css('width', width3);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function answerImpact(clickedAnswer) {
	let days = content[0].days;
	if (currentContent.days) {
		days = currentContent.days;
	}
	for (let i = 0; i < days; i++) {
		await sleep(30);
		increaseDate();
		changeScore(clickedAnswer);
	}
	setContent();
	$("main").css("display", "block");
}

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("backgroundMusic", {
		events: {
			"onReady": onPlayerReady
		}
	});
}

function onPlayerReady(event) {
	function onPlayerReady(event) {
		event.target.playVideo();
	}
}

function init() {
	setContent();
	$(".answer").click(function () {
		$("main").css("display", "none");
		answerImpact($(this).find("div").attr("id"));
	});
	//player.setVolume(25);
	//player.playVideo();
}

$(function () {
	init();
});