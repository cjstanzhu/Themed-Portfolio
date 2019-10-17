$(document).ready(function() {

    // $("#about_scroll").hide();   
    $("#work_scroll").hide();
    $("#contact_scroll").hide();

    // $("#about_scroll").fadeOut();   
    // $("#work_scroll").fadeOut();
    // $("#contact_scroll").fadeOut();

    // $("#about").click(function(){
    //     $("#index").fadeOut();
    //     $("#about_scroll").fadeIn();
    //     $('#about_left').addClass('animated slideInLeft');
    //     $('#about_right').addClass('animated slideInRight');
    // });

    $("#work").on("click", function() {
        $("#index").hide();
        $("#work_scroll").show();
        $("#work_left").addClass("animated slideInLeft");
        $("#work_right").addClass("animated slideInRight");
    });

    $("#contact").on("click", function() {
        $("#index").hide();
        $("#contact_scroll").show();
        $("#contact_left").addClass("animated slideInLeft");
        $("#contact_right").addClass("animated slideInRight");
    });
    
    $(".back").on("click", function() {
        $(".pages").hide();
        $("#index").show();
        $("#index_left").addClass("animated slideInLeft");
        $("#index_right").addClass("animated slideInRight");
    });

});

