var inputNum = prompt("Please enter an odd number between 1 and 50.");

function isNumberbetween(num){
    return num >= 1 && num <=50;
}

function isNumeven(num){
    return num % 2 === 0;
}

while (true) {
    if (!isNumeven(inputNum) && isNumberbetween(inputNum)){
        break;
    }
    inputNum = prompt("Please enter an odd number between 1 and 50.");

}
console.log("Number to skip is " + inputNum);

for(var i = 1; i<= 49; i += 2) {
    if (i === inputNum) {
        console.log("Yikes! Skipping " + inputNum);
        continue
    }
    console.log("Here is an odd number: " + i);
}
