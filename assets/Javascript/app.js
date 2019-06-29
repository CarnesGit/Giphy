$(document).ready(function() {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
    var subjects = []
    var gifImage
    var search
    var currentResponse

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        currentResponse = response
        console.log("Current Response", currentResponse)
        console.log("response", response);
        console.log(response.data[0].images.original_still.url);
        $('#gif1').attr("src", currentResponse.data[0].images.original_still.url);
        $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
        $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
        $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
        $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
        $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
        $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
        $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
        $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
        $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);


        $('#scienceFiction').click(function() {
            $(currentResponse).val('');
            search = "science" + "fiction";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                currentReponse = response;
                $('#gif1').attr("src", currentResponsee.data[0].images.original_still.url);
                $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
                $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
                $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
                $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
                $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
                $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
                $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
                $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
                $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);
            });
        });

        $('#fantasy').click(function() {
            $(currentResponse).val('');
            search = "fantasy";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                currentResponse = response;
                $('#gif1').attr("src", currentResponse.data[0].images.original_still.url);
                $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
                $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
                $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
                $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
                $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
                $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
                $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
                $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
                $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);
            });
        });

        $('#beer').click(function() {
            $(currentResponse).val('');
            search = "beer";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                currentResponse = response
                $('#gif1').attr("src", currentResponse.data[0].images.original_still.url);
                $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
                $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
                $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
                $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
                $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
                $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
                $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
                $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
                $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);
            });
        });

        $('#coding').click(function() {
            $(currentResponse).val('');
            search = "coding";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                currentResponse = response
                $('#gif1').attr("src", currentResponse.data[0].images.original_still.url);
                $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
                $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
                $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
                $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
                $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
                $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
                $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
                $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
                $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);
            });
        });

        $('#searchBtn').click(function() {
            $(currentResponse).val('');
            search = $('#searchText').val().trim();
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                currentResponse = response
                $('#gif1').attr("src", currentResponse.data[0].images.original_still.url);
                $('#gif2').attr("src", currentResponse.data[1].images.original_still.url);
                $('#gif3').attr("src", currentResponse.data[2].images.original_still.url);
                $('#gif4').attr("src", currentResponse.data[3].images.original_still.url);
                $('#gif5').attr("src", currentResponse.data[4].images.original_still.url);
                $('#gif6').attr("src", currentResponse.data[5].images.original_still.url);
                $('#gif7').attr("src", currentResponse.data[6].images.original_still.url);
                $('#gif8').attr("src", currentResponse.data[7].images.original_still.url);
                $('#gif9').attr("src", currentResponse.data[8].images.original_still.url);
                $('#gif10').attr("src", currentResponse.data[9].images.original_still.url);
            });
        });

    });



});