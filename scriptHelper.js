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
  let pilotValue = document.querySelector("input[name-pilotName]").value;
  let coPilotValue = document.querySelector("input[name-copilotName]").value;
  let fuelLevel = document.querySelector("input[name-fuelLevel]").value;
  let cargoMassValue = document.querySelector("input[name-cargoMassValue]").value;

  if(pilotValue === "" && copilotValue === "")
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
        if ( isNaN(testInput) ) {
            return "Not a Number";

        } else return "Is a Number";
    }
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
