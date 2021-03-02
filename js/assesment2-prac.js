//Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.
function calculateTax(totalPaid, taxPercentage){
    if(typeof totalPaid || taxPercentage === "object" || "boolean") {
        return false;
    } else if(typeof totalPaid && typeof taxPercentage === "number"){
        return ((taxPercentage / 100) * totalPaid) + totalPaid;
    }
}




console.log(calculateTax(25, 8)); // "$27.00"
console.log(calculateTax(10, 12))             // "$11.20"
console.log(calculateTax(120, 15.5)) // "$138.60"
console.log(calculateTax(10, true))           // false
console.log(calculateTax([1, 2, 3], 10))      // false
console.log(calculateTax("Codeup", 100))      // false
//console.log(calculateTax()                   // false

//basic operators
//var a = 1;
//var b = a++;
//var c = ++a;
// what is the value of a, b, and c? a = 1, b = 2, c = 3. b in incrememnted post and c pre

//var d = "hello";
//var e = false;

//d++; NaN
//e++; e=1, post

//var perplexed; // perplexed is undefined (no value is assigned)
//perplexed + 2; undefined

//var price = 2.7;
//price.toFixed(2); 2.7

//var price = "2.7";
//price.toFixed(2);v2.7

//isNaN(0) undefined

//isNaN(1) false

//isNaN("") true

//isNaN("string") true

//isNaN("0") true

//isNaN("1")

//isNaN("3.145")

//isNaN(Number.MAX_VALUE) true

//isNaN(Infinity) false

//isNaN("true") true

//isNaN(true) true

//isNaN("false") true

//isNaN(false) false

// to illustrate why the isNaN() function is needed:
//NaN == NaN

//!true not true

//!false not false

//!!true not not true

//!!false not not false

//!!0 not not 0/false

//!!-0 not not false??

//!!1 not not true/1

//!!-1 not not -1/true

//!!0.1 not not true/0.1

//!!"hello" not not true/hello

//!!"" not not true/empty string

//!!'' ^^

//!!"false" not not true

//!!"0" not not true