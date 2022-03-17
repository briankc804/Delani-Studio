$('#hide').hide();
$('#show,#hide').on('click',function(){
   $('#show,#hide').toggle()
});
$('#after').hide();
$('#initial,#after').on('click',function(){
   $('#initial,#after').toggle()
}); 

$('#roller').hide();
$('#oppo,#roller').on('click',function(){
   $('#oppo,#roller').toggle()
});


$(".work").mousemove(function(){
    var hover=$(this).attr("hover")
    $(this).css("border","30px solid white")
    $("#overlay").text(hover).show().offset($(this).offset());

}).mouseout (function(){
    $(this).css("border","none")
})


$("#mc-embedded-subscribe").click(function(e) {
   var formName = document.getElementById("mce-FNAME").value;
   alert("HELlo" + formName + "THANK YOU FOR YOUR MESSAGE");
   e.preventDefault();
})