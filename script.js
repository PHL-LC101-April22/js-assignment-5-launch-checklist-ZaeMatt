// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilotValue = document.querySelector("input[name=pilotName]").value;
        let coPilotValue = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassValue = document.querySelector("input[name=cargoMass]").value;
        let list =[]
        formSubmission(document, list, pilotValue, coPilotValue, fuelLevel, cargoMassValue);
       // if (pilotValue === "" && coPilotValue === "")
       // alert("All fields are required");
    });
    
    
   // let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //let listedPlanetsResponse;
    //listedPlanetsResponse.then(function (result) {
        //listedPlanets = result;
       // console.log(listedPlanets);
   // }).then(function () {
       // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     //   console.log(forSubmission());
   // })


});