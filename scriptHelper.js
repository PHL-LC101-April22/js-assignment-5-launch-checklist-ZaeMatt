// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

document.getElementById(addDestinationInfo).innerHTML
document.getElementbyId(MissionDestination);
document.getElementById(name).innerHTML;
document.getElementById(diameter).innerHTML;
document.getElementById(star).innerHTML;
document.getElementById(distance).innerHTML;
document.getElementById(moons).innerHTML;
document.getElementById(imageUrl).innerHTML;

console.log(missionDestination);
console.log(name);
console.log(diameter);
console.log(star);
console.log(distance);
console.log(moons);
console.log(imageUrl);
}

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




function validateInput(testInput) {

    document.addEventListener("submit", function (event) {
        event.preventDefault();
  
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";

    } else return "Is a Number";

})



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty') alert("All fields are required");
    if (validateInput(copilot) === 'Empty') alert("All fields are required");
    if (validateInput(fuelLevel) === 'Not a Number') alert("This field is required to be a Number");
    if (validateInput(cargoLevel) === 'Not a Number') alert("This field is required to be a Number");
    
        
    
    console.log(pilot);
    console.log(copilot);
    console.log(fuelLevel);
    console.log(cargoLevel);

return formSubmission(visible); 

    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https: //handlers.education.launchcode.org/static/planets.json');
    
    return response.json();
}

function pickPlanet(planets) {
    let planets = 6 
    let planetIndex = Math.floor(Math.random([0, 1]))
    

    console.log(listedPlanets[planetIndex]);
    addDestinationInfo();
    validateInput();
    return 
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
