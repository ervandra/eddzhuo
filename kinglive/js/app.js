$(document).foundation();

$("#filter").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $(".search-table table > tbody > tr").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});