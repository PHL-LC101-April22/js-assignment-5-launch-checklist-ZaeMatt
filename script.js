// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        event.stopPropagation()

        let pilotValue = document.querySelector("input[name=pilotName]").value;
        let coPilotValue = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassValue = document.querySelector("input[name=cargoWeight]").value;
        

        console.log(cargoMassValue);
        console.log(fuelLevel);
        console.log(coPilotValue);
        console.log(missionTarget);
        formSubmission(pilotValue)
    })
    
        
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

      


    
   let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        console.log(myFetch);
    }).then(function () {
        pickPlanet();
        addDestinationInfo()}
        formSubmission())
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
    }}

