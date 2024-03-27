const button = $("<button>").text("Delete");
const button2 = $("<button>").text("Delete");
const movieList = [];
const ratingList = [];

$("#form").on("submit", function (event) {
  const movieValue = $("#Title").val();
  const ratingValue = $("#Rating").val();
  movieList.push(movieValue);
  ratingList.push(ratingValue);
  const lastMovie = movieList[movieList.length - 1];
  const lastRating = ratingList[ratingList.length - 1];

  $("#listTitle").append("<li>" + lastMovie + "</li>");

  $("#listRating").append("<li>" + lastRating + "</li>");

  console.log(movieList, ratingList);

  $("#listTitle").append(button);
  $("#listRating").append(button2);

  event.preventDefault();
  $("#form").trigger("reset");
});

$(button).on("click", function () {
  $("#listTitle li:last").remove();

  movieList.pop();
});

$(button2).on("click", function () {
  $("#listRating li:last").remove();

  ratingList.pop();
});
