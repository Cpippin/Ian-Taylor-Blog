var places = [
    (src =
        "https://lh4.googleusercontent.com/-5O83Zd6r8HU/XTCp2sDFQAI/AAAAAAAATaY/5P5uvim27hks16CuXEgylA4f9yiISAWPQCLIBGAYYCw/w245-h238-k-no/"),
    (src =
        "https://lh4.googleusercontent.com/-D0kDx2ziuJw/XTToltQRvdI/AAAAAAAAgdQ/wO6Gl5E2EGoSOCQuYhtQPJRIWziRM3H6wCLIBGAYYCw/w317-h238-k-no/"),
    (src =
        "https://lh5.googleusercontent.com/-mY2T6gipPQA/XQvFklktrQI/AAAAAAABJ9A/5ECbNs9FlWgvKY2Rak_d7IvoISXpuzU5QCLIBGAYYCw/w423-h238-k-no/"),
    (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr987LRB2lTCu45XNhMo2XM1mvvAuhq4nLkQmAxdo44uuSUJUW6A"),
    (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9oECjAL2WWkwLymzGS2tQEWojvRbf1CathpkU9xLYRgtPOC9"),
    (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iL-542fR5tw5BYGJgsFys_uYEWD_VgnAUHcX6YuHHfYwqHwC"),
    (src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2Qwr09nuaoPm2dcwP4SV272BfTV9Zb4JhKqMtMCneD1D4ra9")
];

var namesOfPlaces = ["New York City", "Yosemite", "Cancun", "Alaska", "Italy", "New Zealand", "France"];

var myhtml = "";

function populatePlaces() {
    for (var i = 0; i < places.length; i++) {
        myhtml +=
            '<div class="card" style="width: 18rem;"><img class="card-img-top" src="' +
            places[i] +
            '" alt="Card image cap"><div class="card-body"><p class="card-text">' +
            namesOfPlaces[i] +
            "</p></div></div>";
    }
    $("#output-places").html(myhtml);
    $("#see-places").hide();
}

$("#see-places").click(function () {
    populatePlaces();
});
