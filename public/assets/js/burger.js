$(".uneaten").on("submit", function(event) {
  event.preventDefault();
  console.log(name + " clicked");
  const name = $(this).data("name");

  $.ajax("/api/burgers/" + name, {
    type: "PUT"
  }).then(function() {
    console.log("Ate" + name);
    location.reload();
  });
});
