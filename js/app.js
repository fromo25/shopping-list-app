$(document).ready(function() {
	$('.my-form').on('submit',function(e) {
    e.preventDefault();
    var userData = $('.user-data').val();
  
  	$('ul').append('<li class="current-item"><input type=checkbox class="check-box">' + ' ' + userData + '<img class="x-mark" src="images/back-x.svg"></li>');
});

$('ul').on('click', '.x-mark', function(event){
		$(this).closest('li').remove();
	});

});