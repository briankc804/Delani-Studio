$(".col").click(function(){
    $(this).children(".hide").slideToggle()

});
  
$(".work").mousemove(function(){
    var hover=$(this).attr("hover")
    $(this).css("border","3px solid red")
    $("#overlay").text(hover).show().offset($(this).offset());

}).mouseout (function(){
    $(this).css("border","none")
})