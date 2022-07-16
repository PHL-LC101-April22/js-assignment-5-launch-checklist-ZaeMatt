// Write your helper functions here!
require = ('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.

    // let main = document.getElementById('missionTarget');
    // const url = "https://handlers.education.launchcode.org/static/planets.json";
    
           
    // fetch(url).then(function (response) {
    //     response.json().then(function (json) {
    //     let index = Math.floor(Math.random() * (json.length));
    //     let planet = json[index];
    
   let main = document.getElementById('missionTarget');
   main.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">`
    
}
 
// document.getElementById(addDestinationInfo).innerHTML
// document.getElementbyId(MissionDestination);
// document.getElementById(name).innerHTML;
// document.getElementById(diameter).innerHTML;
// document.getElementById(star).innerHTML;
// document.getElementById(distance).innerHTML;
// document.getElementById(moons).innerHTML;
// document.getElementById(image).innerHTML;




function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if(!isNaN(testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
  
}
   



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("Please enter the required data below.");
        list.style.visibility = 'hidden';
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter a valid name for the Pilot and/or Co-Pilot.");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter a valid numerical value for the fuel level and/or cargo mass.");
    
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel} L is not enough fuel for the journey.`
        document.getElementById('cargoStatus').innerHTML = `${cargoLevel} kg is too much mass for the shuttle to take off.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';
    
    } else if (fuelLevel < 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel} L is not enough fuel for the journey.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    } else if (cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('cargoStatus').innerHTML = `${cargoLevel} kg is too much mass for the shuttle to take off.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    } else {
        launchInfo.innerHTML = "Shuttle is ready for launch";
        launchInfo.style.color = 'green';
    }

    return formSubmission(visible); 

}


  async function myFetch() {
       let planetsReturned;

     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     
     if (!response) {
         throw new Error('Error: Bad Request. Try Again.')
     } else {
    
      return response.json()
    
  }
});

return planetsReturned;

}

  

function pickPlanet(planets) { 
    
    let index = Math.floor(Math.random()* planets.length);
    return planets[index];

}
    


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
