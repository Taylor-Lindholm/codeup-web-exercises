function showMultiplication(num) {
    for(var i = 1; i <= 10; i++){
        console.log(num + " x "+ i + " = " + (num * i))
    }
}


for (var i = 1; i <= 10; i++) {
    var ranNum = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
    if(ranNum % 2 === 0) {
        console.log("Your number "+ ranNum + " is even");
    } else {
        console.log("your number" + ranNum + " is odd.");
    }
}

for (var outerLoop = 1; outerLoop <= 9; outerLoop++){
    var output = "";
    for(var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
        output = output + outerLoop;
    }
    console.log(output);
}

for (var i = 100; i >= 5; i = i - 5){
    console.log(100)
}


