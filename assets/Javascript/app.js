$(document).ready(function() {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
    var subjects = []
    var gifImage
    var search = "cats"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log("response", response);
        console.log(response.data[0].images.original_still.url);
        $('#gif1').attr("src", response.data[0].images.original_still.url);
        $('#gif2').attr("src", response.data[1].images.original_still.url);
        $('#gif3').attr("src", response.data[2].images.original_still.url);
        $('#gif4').attr("src", response.data[3].images.original_still.url);
        $('#gif5').attr("src", response.data[4].images.original_still.url);
        $('#gif6').attr("src", response.data[5].images.original_still.url);
        $('#gif7').attr("src", response.data[6].images.original_still.url);
        $('#gif8').attr("src", response.data[7].images.original_still.url);
        $('#gif9').attr("src", response.data[8].images.original_still.url);
        $('#gif10').attr("src", response.data[9].images.original_still.url);
    });


});