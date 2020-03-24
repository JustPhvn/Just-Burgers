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
    const newBurger = {
      burgerName: $("#newBurger")
        .val()
        .trim()
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created new burger");
      location.reload();
    });
  });
  $(".eaten").on("click", function(event) {
    event.preventDefault();
  });
});
