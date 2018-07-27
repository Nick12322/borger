$("#burger-create").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#name").val().trim(),
    };

    console.log(newBurger)
    $.post("/api/new", newBurger)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#name").val("")
});

$(document).ready(function () {
    $.get("/api/all", function (data) {
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
                var div = $("#burgers-here")

                div.append("<h1>" + data[i].burger_name + "<h1>")
                div.append("<button class='delete' id=" + data[i].id + ">Devour</button>")
            }
        }
    })
})


$(document).on("click", ".delete",  function (event) {
    console.log("hello")
    event.preventDefault();
    $.ajax({
        method: "PUT",
        url: "/api/posts/" + this.id
    }).then(function () {
        location.reload();
    })
})




