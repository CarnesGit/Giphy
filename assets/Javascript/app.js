$(document).ready(function() {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
    var subjects = []
    var gifImage
    var search = "lord of the rings"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log("response", response);
        console.log(response.data[0].images.original_still.url)
        for (i = 0; i < response.data; i++) {
            response.data[i]
            var responseStill = response.data[i].images.original_still.url;
            console.log(responseStill);
        }
        $('#gif1').attr("src", response.data[0].images.original_still.url);

    });

});