// Write your JavaScript code here!

const { formSubmission, validateInput, pickPlanet} = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        event.stopPropagation()

        let pilotValue = document.querySelector("input[name=pilotName]").value;
        let coPilotValue = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassValue = document.querySelector("input[name=cargoWeight]").value;
        

        
        (formSubmission(pilotValue, coPilotValue, fuelLevel, cargoMassValue));
     } )})
    
        
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
    
    // Fetching a json 
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
        response.json().then(function(json){ 
           const missionTarget = document.getElementById('missionTarget'); 
           const index = Math.floor(Math.random() * json.length - 1); 
           missionTarget.innerHTML = ` 
           <ol> 
           <li>Name: ${json[index].name}</li> 
           <li>Diameter: ${json[index].diameter}</li> 
           <li>Star: ${json[index].star}</li> 
           <li>Distance from Earth: ${json[index].distance}</li> 
           <li>Number of Moons: ${json[index].moons}</li> 
           </ol> 
           <img src="${json[index].image}"> 
           `; 
        }); 
    }); 

    preventDefault(fetch); 

  

    
   let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = myFetch(result);
        console.log(listedPlanets);
        console.log(myFetch);
     }).then(function () {
        console.log(listedPlanets);
        pickPlanet(index);
        addDestinationInfo(pickPlanet, formSubmission, validateInput, myFetch);
   
     })
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
