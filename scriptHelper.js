// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
 let missionDestination = document.getElementbyId("MissionDestination");
 let diameter = document.getElementById("diameter");
 let star = document.getElementById("star");
 let distance = document.getElementById("distance");
 let moons = getElementById("moons");
 let imageUrl = getElementById("imageUrl");
console.log(missionDestination);
console.log(name);
console.log(diameter);
console.log(star);
console.log(distance);
console.log(moons);
console.log(imageUrl);

// <h2> Mission Destination </h2>
//<ol>
 // <li> Name: </li>
 // <li> Diameter: </li>
 // <li>Star: ${star} </li>
 // <li>Distance from Earth </li>
// <li>Number of Moons: </li>
// </ol>
// <img src = "">
// </img * /

    document.getElementById(addDestinationInfo).innerHTML
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";

    } else return "Is a Number";

}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty') alert("All fields are required");
    if (validateInput(copilot) === 'Empty') alert("All fields are required");
    if (validateInput(fuelLevel) === 'Not a Number') alert("This field is required to be a Number");
    if (validateInput(cargoLevel) === 'Not a Number') alert("This field is required to be a Number");
    if (fuelLevel ==> 10000) {
        return visible;
    }
    console.log(pilot);
    console.log(copilot);
    console.log(fuelLevel);
    console.log(cargoLevel);


}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch(file:///Users/zaematthews/Git-Exercises/js-assignment-5-launch-checklist-ZaeMatt/index.html).then(function (response.json) {
    );

    return Response.json;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random([0, 1]))

    console.log(listedPlantes[planetIndex]);

    return planets
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
