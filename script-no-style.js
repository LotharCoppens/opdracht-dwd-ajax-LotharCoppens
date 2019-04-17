$(function () {
    console.log('Script loaded');


    $('#movieinput').on('keyup', function () {
        //Get value of the element that is throwing the event => the inputfield!
        console.log($(this).val());

        var url = 'https://api.themoviedb.org/3/search/tv';

        $.ajax({
            url: url,
            method: 'GET',
            data: {
                api_key: '3fab369827f78498557f8e469f9910fb',
                language: 'en-US',
                page: 1,
                include_adult: false,
                query: $(this).val()
            }
        }).done(function (data) {
            //print the results in console for exercise 1
            //            console.log(data.results);
            //Print the results on the page with jQuery. 
            //To read the code easier, create a seperate function
            printData(data.results);
            console.log(data);
        }).fail(function (err1, err2) {
            //Print the error logs
            console.log('Fail');
            console.log(err1);
            console.log(err2);
        });
    });

    function printData(list) {
        $('#content').empty();
        //Loop over each movie in the list array
        //Every iteration, the variable 'movie' gets filled with the movie object
        for(var movie of list){
            //Create html elements with jQuery
            //Create the main card div - Styling to be applied 
            var div = $('<div>');
            //Card title - Movie title
            var header = $('<h2>').text(movie.name);
            //Card body with all the details needed
            var cardbody = $('<div>');
          
            $('<p>').text(movie.overview).appendTo(cardbody);
            
            //Build the complete card by appending everything in the correct order
            div.append(header).append(cardbody);
            //Add it to the HTML page.
            $('#content').append(div); 
        }

    }
});
