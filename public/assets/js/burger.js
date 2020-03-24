$(function() {
  $(".uneaten").on("click", function(event) {
    event.preventDefault();
    const name = $(this).data("name");
    console.log(name + " clicked");

    $.ajax("/api/burgers/" + name, {
      type: "PUT"
    }).then(function() {
      console.log("Ate" + name);
      location.reload();
    });
  });
  $(".addBurger").on("click", function(event) {
    event.preventDefault();
    // console.log($("#newBurger").val());
    const newBurger = {
      burgername: $("#newBurger")
        .val()
        .trim()
    };
    // console.log(newBurger);
    // console.log("Created new burger " + newBurger);

    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
  $(".eaten").on("click", function(event) {
    event.preventDefault();
    const name = $(this).data("name");
    console.log(name + " clicked");
    $.ajax("/api/burgers/" + name, {
      type: "DELETE"
    }).then(function() {
      location.reload();
    });
  });
});
