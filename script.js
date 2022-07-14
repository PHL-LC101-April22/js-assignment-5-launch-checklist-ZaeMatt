// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilotValue = document.querySelector("input[name=pilotName]").value;
        let coPilotValue = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassValue = document.querySelector("input[name=cargoWeight]").value;
        let ready = true

        let faultyItems = document.getElementbyId("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");
        let missionTarget = document.getElementById("missionTarget");
        let list =[]
        console.log(faultyItems);
        console.log(pilotStatus);
        console.log(missionTarget);
    
        
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

        if (fuelLevel < 10000) {
            ready = false;
            fuelStatus.innerHTML = 'Not enough fuel for launch';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }
        if (cargoMass > 10000) {
            ready = false;
            cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
        } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }

        if (ready) {
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            retrieveData();
        } else {
            items.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
        }

    }

});
});


function retrieveData() {

    };
    
    
   // let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       console.log(formSubmission());
       console.log(pickPlanet());
       console.log(addDestinationInfo());
    })

