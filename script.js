/*
Step 1: Name your pet. Astro
Step 2: feed pet, or walk? pet, feed, walk, walk, feed, pet


*/

var petName = prompt ("Name your pet.");

let happiness = 0;
let energy = 0;

for (let i = 0; i < 6; i++) {
    var action = prompt ("feed, pet, or walk?");
    if (action === "feed") {
        energy += 2;
    }
    if (action === "pet") {
        happiness += 1;
    }
    if (action === "walk") {
        if (energy <= 0) {
            alert ("Not Enough Energy to enjoy a walk!");
        }
        else {
            happiness += 2;
            energy -= 1; 
        }
    }
}
console.log (petName +" has " +happiness +" happiness and " +energy +" energy. ");