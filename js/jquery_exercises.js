
window.onload = function () {
    console.log(' Five thousand years later, the page has loaded.');
}

// jquery selectors exercise
// $('*').css('background-color', '#ff0')
//
// $('h3, p').css('font-size', '5em');
//
// var contents = $('h4').html();
// alert(contents);

//jquery mouse events exercise

$('h1').click(function (){
    $(this).css('background-color','#46ff00');
});

$('p').dblclick(function(){
    $(this).css('font-size', 18);
})

$('li').hover(
    function (){
        $(this).css('font-color', '#ac005e');
    }, function (){
        $(this).css('font-color', '#000');
})