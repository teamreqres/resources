/*
 * reqRes
 * Survey Builder
 * 
 * QuestionChoices.js
 * - Handles display and manipulation of question choices
 */

 function QuestionChoices() {

	this.returnHTML = function(id, value) {
		var html = '<div class="input-group mb-2" id="questionChoice' + id + '">';
				html += '<div class="input-group-prepend">';
				html += '	<span class="input-group-text">Drag</span>';
				html += '</div>';
				html += '<input type="text" name="questionChoices[]" class="form-control" value="' + value + '">';
				html += '<div class="input-group-append">';
				html += '	<button class="btn btn-danger" type="button" data-delete="' + id + '">Delete</button>';
				html += '</div>';
				html += '</div>';
		
		return html;
	}

 }