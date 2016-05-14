$(document).ready(function() {

    var counter = 2;


    $('.my-form').on('submit', function(e) {
        e.preventDefault();
        var userData = $('.user-data').val();

        if (userData === "") {
            alert('Please enter an item!')
        } else {
        $('ul').append('<li class="current-item"><input type=checkbox class="check-box">' + ' ' + userData + '<img class="x-mark" src="images/back-x.svg"></li>');
        $('.user-data').val('');
        }

        counter++;
        console.log(counter);

        /*	if (counter >= 8) {
            $('ul').css("overflow-y", "scroll");
        }	*/

    });

    $('ul').on('click', '.x-mark', function(e) {
        $(this).closest('li').remove();
        /*add opposite direction here*/
        counter--;
        console.log(counter);
    });

});