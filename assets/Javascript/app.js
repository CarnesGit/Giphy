$(document).ready(function() {
    var search = 'science fiction'
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
    var subjects = []
    var gifImage

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log("response", response);
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
    $('#scienceFiction').click(function() {
        search = "science fiction";
        queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
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

    $('#fantasy').click(function() {
        search = "fantasy";
        queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
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

    $('#beer').click(function() {
        search = "beer";
        queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
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

    $('#coding').click(function() {
        search = "coding";
        queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
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

    $('#searchBtn').click(function() {
        search = $('#searchText').val().trim();
        queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=Ox5w0Q1EKUvR47KZoTERm6FMSGB1ysXR&q=' + search + '&limit=10&offset=0&rating=G&lang=en'
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
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

    $('#searchText').keypress(function(e) {
        if (e.which == 13) {
            $('#searchBtn').click();
        }
    });

    $('#gif1').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif1').attr("src", response.data[0].images.original_still.url)) {
                $('#gif1').attr("src", response.data[0].images.original.url);
            } else if ($('#gif1').attr("src", response.data[0].images.original.url)) {
                $('#gif1').attr("src", response.data[0].images.original_still.url);
            }
        });
    });

    $('#gif2').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif2').attr("src", response.data[1].images.original_still.url)) {
                $('#gif2').attr("src", response.data[1].images.original.url);
            } else if ($('#gif2').attr("src", response.data[1].images.original.url)) {
                $('#gif2').attr("src", response.data[1].images.original_still.url);
            }
        });
    });

    $('#gif3').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif3').attr("src", response.data[2].images.original_still.url)) {
                $('#gif3').attr("src", response.data[2].images.original.url);
            } else if ($('#gif3').attr("src", response.data[2].images.original.url)) {
                $('#gif3').attr("src", response.data[2].images.original_still.url);
            }
        });
    });

    $('#gif4').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif4').attr("src", response.data[3].images.original_still.url)) {
                $('#gif4').attr("src", response.data[3].images.original.url);
            } else if ($('#gif4').attr("src", response.data[3].images.original.url)) {
                $('#gif4').attr("src", response.data[3].images.original_still.url);
            }
        });
    });

    $('#gif5').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif5').attr("src", response.data[4].images.original_still.url)) {
                $('#gif5').attr("src", response.data[4].images.original.url);
            } else if ($('#gif5').attr("src", response.data[4].images.original.url)) {
                $('#gif5').attr("src", response.data[4].images.original_still.url);
            }
        });
    });

    $('#gif6').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif6').attr("src", response.data[5].images.original_still.url)) {
                $('#gif6').attr("src", response.data[5].images.original.url);
            } else if ($('#gif6').attr("src", response.data[5].images.original.url)) {
                $('#gif6').attr("src", response.data[5].images.original_still.url);
            }
        });
    });

    $('#gif7').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif7').attr("src", response.data[6].images.original_still.url)) {
                $('#gif7').attr("src", response.data[6].images.original.url);
            } else if ($('#gif7').attr("src", response.data[6].images.original.url)) {
                $('#gif7').attr("src", response.data[6].images.original_still.url);
            }
        });
    });

    $('#gif8').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif8').attr("src", response.data[7].images.original_still.url)) {
                $('#gif8').attr("src", response.data[7].images.original.url);
            } else if ($('#gif8').attr("src", response.data[7].images.original.url)) {
                $('#gif8').attr("src", response.data[7].images.original_still.url);
            }
        });
    });

    $('#gif9').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif9').attr("src", response.data[8].images.original_still.url)) {
                $('#gif9').attr("src", response.data[8].images.original.url);
            } else if ($('#gif9').attr("src", response.data[8].images.original.url)) {
                $('#gif9').attr("src", response.data[8].images.original_still.url);
            }
        });
    });

    $('#gif10').click(function() {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            if ($('#gif10').attr("src", response.data[9].images.original_still.url)) {
                $('#gif10').attr("src", response.data[9].images.original.url);
            } else if ($('#gif10').attr("src", response.data[9].images.original.url)) {
                $('#gif10').attr("src", response.data[9].images.original_still.url);
            }
        });
    });
});