$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(350, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    var new1 = $(this).val();
    $(this).val("");
    if (new1 !== "") {
      $("ul").append(
        "<li><span><i class='fa fa-trash'></i> </span>" + new1 + "</li>"
      );
    }
  }
});

$(".fa-plus").click(function () {
  $("input").fadeToggle(400);
});
