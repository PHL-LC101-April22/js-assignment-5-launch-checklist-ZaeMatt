// Write your JavaScript code here!

const { formSubmission, validateInput, pickPlanet} = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let document = window.document;
        let pilot = document.querySelector("input[name=pilotName]");
        let pilotValue = pilot.value;
        let copilot = document.querySelector("input[name=copilotName]");
        let copilotValue = copilot.value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuelLevelValue = fuelLevel.value;
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargoMassValue = cargoMass.value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    });
        
});
     
        
    formSubmission(document, list, pilotValue, coPilotValue, fuelLevel, cargoMassValue); 
       // if (pilotValue === "" && coPilotValue === "")
       // alert("All fields are required");

       if (pilotName === "" || copilotName === "" || fuelLevel === '' || isNaN(fuelLevel) || cargoMass === '' || isNaN(cargoMass) ) {

        alert("All fields are required!");
        items.style.visibility = 'hidden';

        launchStatus.style.color = 'black';
        launchStatus.innerHTML = 'Awaiting Information Before Launch';

    } else {

        items.style.visibility = 'visible';

        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' ' }Ready`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' ' }Ready`

    }
    
    
   let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   })
   
     
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
