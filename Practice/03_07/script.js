/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car={
    name: "Tarzan",
    noOfWheels: 4,
    type: "sports",
    headlight: false,
    color: "blue",
    fuleType: "Diesel",

    carInterior: {
        audioSystem: true,
        isLeather: false,
        seats: 2,
    },

    modify: function(color){
        this.color=color;
    }
};

console.log("The car object:", car);
console.log("The fuel type of Tarzann is: ", car.fuleType);

var col="green";
console.log("color is:", car.modify(col));