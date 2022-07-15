// Write your helper functions here!
require = ('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.

    let main = document.getElementById('missionTarget');
    const url = "https://handlers.education.launchcode.org/static/planets.json";
    
           
    fetch(url).then(function (response) {
        response.json().then(function (json) {
        let index = Math.floor(Math.random() * (json.length));
        let planet = json[index];
    })
    
   main.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${planet.name} </li>
                     <li>Diameter: ${planet.diameter}</li>
                     <li>Star: ${planet.star}</li>
                     <li>Distance from Earth: ${planet.distance} </li>
                     <li>Number of Moons: ${planet.moons}</li>
                 </ol>
                 <img src="${planet.image}">`
    });
 
document.getElementById(addDestinationInfo).innerHTML
document.getElementbyId(MissionDestination);
document.getElementById(name).innerHTML;
document.getElementById(diameter).innerHTML;
document.getElementById(star).innerHTML;
document.getElementById(distance).innerHTML;
document.getElementById(moons).innerHTML;
document.getElementById(image).innerHTML;
}



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
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //let list = ["Tatooine", "Pern", "Saturn/Titan", "Mars", "K2-18b", "Jupiter/Europa"]
    let array = [pilot, copilot, fuelLevel, cargoLevel]
    let launchInfo = document.getElementById('launchStatus');
    if (array.includes('')) {
        alert("All fields required!")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel} L is not enough fuel for the journey.`
        document.getElementById('cargoStatus').innerHTML = `${cargoLevel} kg is too much mass for the shuttle to take off.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    }else if (fuelLevel < 10000) {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`;
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready.`;
        document.getElementById('faultyItems').style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = `${fuelLevel} L is not enough fuel for the journey.`
        launchInfo.innerHTML = "Shuttle is not ready for launch";
        launchInfo.style.color = 'red';

    }else if (cargoLevel > 10000) {
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


//  async function myFetch() {
//       let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    
//     console.log(json);
//     console.log(planetsReturned);
//      return response.json();
    
//   }

 async function myFetch() {
     
      const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
      const json = await response.json()
      console.log(json)
      console.log(myFetch)
      return response.json()
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
