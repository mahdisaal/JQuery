$(document).ready(function( ) {
    //a
        $("h1").text("Lab08");
    //b
        $("#header").html("<h3>Working with jQuery</h3>");
    //c
        $(":button").each(function(){
            $(this).addClass("btn-background");
        });
    //d
        $("#buttons").addClass("red-border");
    //e
        $("p").each(function(){
            $(this).addClass("blue");
        });
    //f
        $("#first").on("click", function(){
            $("p:first").addClass("green-border");
        });
    //g
        $("#last").on("click", function(){
            $("p:last").addClass("orange-border");
        });
    //h
        $("#prev").on("click", function(){
            $("p").prev("#para3").addClass("purple-border");
        });
    //i
        $("#next").on("click", function(){
            $("p").next("#para2").addClass("yellow-border");
        });
    //j
        $("#remove").on("click", function(){
            $("#footer").remove();
        });
    });