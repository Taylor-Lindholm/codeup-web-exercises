var number = 2;

while( number <= 65536){
    console.log(number);
    number = number * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " to sell.");

do {

    var reqCones = Math.floor(Math.random() * 5) + 1;
    if (allCones >= reqCones) {
        allCones = allCones - reqCones;
        console.log(" You sold " + reqCones + ", and have " + allCones + " left.");
    }else{
       console.log("Sorry we don't have " + reqCones + " we only have " + allCones + " left.");
    }
} while (allCones > 0)
console.log("We sold all our cones today!");