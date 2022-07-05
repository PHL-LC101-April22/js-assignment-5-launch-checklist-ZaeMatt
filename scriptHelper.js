// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
   </img> */
  
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";

    } else return "Is a Number";

    if (fuelLevel ==> 10000) {
        return visible
    }
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 if ( validateInput(pilot) === 'Empty')alert("All fields are required"); 
 if ( validateInput(copilot) === 'Empty')alert("All fields are required");
 if ( validateInput(fuelLevel) === 'Not a Number')alert("This field is required to be a Number");
 if ( validateInput(cargoLevel) === 'Not a Number')alert("This field is required to be a Number");
 console.log(pilot);
 console.log(copilot);
 console.log(fuelLevel);
 console.log(cargoLevel);
 


document.getElementbyID("pilotStatus").innerHTML = `pilot is ${pilotStatus} and copilot is ${copilotStatus}`
if (validatInput(fuelLevel) >= 10000 (faultyItems = visible) alert("Not enough fuel for the journey"));
document.getElementbyID(launchStatus).innerHTML ="Shuttle not ready for launch", color: black;
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
