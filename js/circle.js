(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var area = (Math.pow(this.radius, 2)) * Math.PI;// TODO: return the proper value
            return area;
        },

        logInfo: function (doRounding) {
           var rounded;
            if (doRounding){
                rounded = Math.round(this.getArea());
           } else {
               rounded = this.getArea();
           }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };
console.log(circle.getArea());
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();