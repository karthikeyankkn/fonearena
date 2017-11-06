jQuery(document).ready(function ($) {

// Slider-image-script-code-starts-here
    setInterval(function () {
        moveRight();
    }, 5000);    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    // $('#slider').css({ width: slideWidth, height: slideHeight });
    
    // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    // $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
// Slider-image-script-code-end-here


// Slider-video-script-code-starts-here
    // setInterval(function () {
    //     videomoveRight();
    // }, 1000);    
    var videoslideCount = $('#video-slider ul li').length;
    var videoslideWidth = $('#video-slider ul li').width();
    var videoslideHeight = $('#video-slider ul li').height();
    var videosliderUlWidth = videoslideCount * videoslideWidth;
    
    // $('#slider').css({ width: slideWidth, height: slideHeight });
    
    // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    // $('#slider ul li:last-child').prependTo('#slider ul');

    function videomoveLeft() {
        $('#video-slider ul').animate({
            left: + videoslideWidth
        }, 1000, function () {
            $('#video-slider ul li:last-child').prependTo('#video-slider ul');
            $('#video-slider ul').css('left', '');
        });
    };

    function videomoveRight() {
        $('#video-slider ul').animate({
            left: - videoslideWidth
        }, 1000, function () {
            $('#video-slider ul li:first-child').appendTo('#video-slider ul');
            $('#video-slider ul').css('left', '');
        });
    };

    $('.video-control_prev').click(function () {
        videomoveLeft();
    });

    $('.video-control_next').click(function () {
        videomoveRight();
    });
    

    $("b.v1").click(function(){
        $("li.v1").show();
        $("li.v1").siblings().hide();
    });
    $(".v2").click(function(){
        $("li.v2").show();
        $("li.v2").siblings().hide();
    });
     $(".v3").click(function(){
        $("li.v3").show();
        $("li.v3").siblings().hide();
    });
      $(".v4").click(function(){
        $("li.v4").show();
        $("li.v4").siblings().hide();
    });
// Slider-video-script-code-end-here

    // Hambarger script code starts here
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
     // Hambarger script code end here

     $(".ham-show").click(function(){
        $(".slider-menu-container").slideToggle(500);
     });
});    

