$(document).ready(function(){
    $("ul").hide();

    $(".lagoon").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });

    $(".keys").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });

    $(".mamas").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });
});