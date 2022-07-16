// Write your JavaScript code here!

//const { formSubmission, pickPlanet} = require("./scriptHelper");

window.addEventListener("load", function() {
    
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
        let cargoLevel = document.querySelector("input[name=cargoLevel]");
        let cargoLevelValue = cargoLevel;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);
    });
        
});
     
        
   