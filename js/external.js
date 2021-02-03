console.log("hello from external");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


var lm = prompt("How long will you rent little mermaid?");
    var bb = prompt("How Long will you rent Brother?");
    var her = prompt("How long will you rent hercules?");
    var lmn = Number(lm), bbn = Number(bb), hern = Number(her);
    alert("Your total will come to: $" + (lmn + bbn + hern)* 3)


var ggle = prompt('How many hours have you worked for google this week?');
    var amzn = prompt('How many hours have your worked for amazon this week?');
    var fbk = prompt('How many hours have your worked for FaceBook this week?');
    var ggln = parseInt(ggle), amznn = parseInt(amzn), fbkn = parseInt(fbk);
    var ttlpay = (ggln * 400) + (amznn * 380) + (fbkn * 350);
    alert('Your weekly pay will come to: $' + ttlpay);


var fulllClass = confirm('Is the class full?');
var schedCong = confirm('Do you have a schedule conflict?')
alert('You can join the class is a ' +(!fulllClass && schedCong) + ' statement.')



var spcoffer = confirm('Are you buying more then two items?');
    var member = confirm('Are you a premium member?');
    var expOffer = ('Is offer still valid?')
    var offerVal = (spcoffer || member) && expOffer;
    alert('You are elegible for this discount is a ' + offerVal + ' statement.')