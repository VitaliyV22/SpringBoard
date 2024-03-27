$(window).on("load", console.log("Let’s get ready to party with jQuery!"));

$("img").addClass("image-center")

$("article p:last-child").remove();

$("#title").css("font-size","20px")

$("ol").append("<li>Hello</li>")


$("ol").children().remove()
$("ol").append("<p>Sorry for the lists existance<p>")

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$("img").on("click", function() {
    $(this).remove();
})
