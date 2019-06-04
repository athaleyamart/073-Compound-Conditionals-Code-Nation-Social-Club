
var correctUsername = "martinez";
var correctPassword = "ashy";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
if(correctUsername===username && password===correctPassword) {
$(".message").text("Correct!");
    
}else {
$(".message").text("Wrong!");
}


});