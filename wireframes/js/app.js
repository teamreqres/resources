/*
 * reqRes
 * Survey Builder
 * 
 * app.js
 * - Handles interactive elements of front-end
 */

var questionChoicesElement = "#questionChoices";
var questionChoices = [];

var lastChoiceId = 0;

function initQuestionChoices(target) {

	var questionChoicesObj = new QuestionChoices();

	// Empty question choices
	$("#questionChoicesContainer").empty();

	// Get existing question choices from target attribute
	var existing = JSON.parse( $(target).attr('data-choices') );
	questionChoices = existing;

	// Render question choices
	for (var i = 0; i < questionChoices.length; i++) {
		lastChoiceId = i;

		$("#questionChoicesContainer").append(questionChoicesObj.returnHTML(i, questionChoices[i]));
	}

	// Add Delete Button Event Handler
	$(target).find('button[data-delete]').each( function() {
		$(this).click( function() {
			$('#questionChoice' + $(this).attr('data-delete')).remove();
		});
	});

	// Add Delete Event Handler
	$(target).find('button[data-create]').click( function() {
		lastChoiceId++;
		var id = lastChoiceId;

		$("#questionChoicesContainer").append(questionChoicesObj.returnHTML(id, ''));

		$(target).find('button[data-delete=' + id + ']').click( function() {
			$('#questionChoice' + id).remove();
		});
	});
	
	// Initialise sortable effect
	$( "#questionChoicesContainer" ).sortable({
		change: function(e, ui) {
			console.log(ui.item);
		}
	});

	// Slide down question choices
	$(target).slideDown( "slow" )
}

$(document).ready( function() {

	// Hide question choices
	$(questionChoicesElement).hide();

	// When question type option changes
	$('#questionType').change( function() {

		// Get selected option
		var option = this.options[this.selectedIndex];

		if (option.getAttribute('data-has-choices')) {
			// Init question choices
			initQuestionChoices(questionChoicesElement);
		} else {
			$(questionChoicesElement).slideUp( "slow" );
		}

	});

});


