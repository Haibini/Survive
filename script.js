$(".weapons").hide();
$(".btn01").hide();
$(".btn02").hide();
$(".btn03").hide();
$(".run").hide();
$(".end").hide();
$(".aquote").hide();


$("#open").click(function() {
    $(".weapons").fadeToggle();
    $(".btn01").fadeOut();
    $(".btn02").fadeOut();
    $(".btn03").fadeOut();
    $(".img1").css("animation-iteration-count", "0");
});

$(".wp1").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("That's too weak");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
});

$(".wp2").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("That's all you have? Hahaha");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
});

$(".wp3").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("Stop playing around!");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
});

$(".wp4").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("Nope");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
});

$(".wp5").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("That's refreshing!");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
});

$(".riv").click(function() {
    $(".weapons").toggle();
    $(".mquote").text("That toy is not gonna work against me");
    $(".mquote").css("color", "white");
    $(".mquote").css("background", "black");
    $(".btn01").fadeIn();
    $(".aquote").fadeIn();
});

$(".btn01").dblclick(function() {
    $(".btn01").fadeOut();
    $(".btn02").fadeIn();
    $(".img1").css("animation", "shake 0.5s");
    $(".mquote").text("Ouch");
});

$(".btn02").dblclick(function() {
    $(".btn02").fadeOut();
    $(".btn03").fadeIn();
    $(".img1").css("animation", "shake2 0.5s");
    $(".mquote").text("Stop it");
});

$(".btn03").dblclick(function() {
    $(".img1").css("animation", "shake3 0.5s");
    $(".btn03").fadeOut();
    $(".img1").css("animation-iteration-count", "infinite");
    $(".img1").fadeOut();
    $(".container2").fadeOut();
    $(".container").fadeOut();
    $(".run").fadeIn();
});

$(".run").click(function() {
    $(".end").fadeIn();
    $(".run").hide();
});