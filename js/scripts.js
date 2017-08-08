$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("picture").addClass("erase-pictures");


  });
$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});
$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red-background");
});
});
