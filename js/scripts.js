$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#mycarousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});