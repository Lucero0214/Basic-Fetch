
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.
// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
  document.addEventListener('DOMContentLoaded', init);
  
    function init() {
      let dropdown = document.getElementById('house');
     
    houses.forEach(house => {
      let myoption = document.createElement('OPTION');
      myoption.value = house.code;
      let name = house.name;
      myoption.innerHTML = name;
      
     dropdown.append(myoption);
    });
      
      dropdown.addEventListener('change', (e) => {
            const code = e.target.value;
            const members = getCharacters(code);
            let container = document.getElementById('characters');

            members.forEach(person => {
              let item = document.createElement('LI');
              item.innerText = person;
              container.append(item);
            })
      });
  }; 
fetch("houses.json")
    .then((response) => response.json())
    .then((data) => { 
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = document.getElementById(container);

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = `<p class="house">${house.name}</p>
        <p class="folks">${family}</p>`;
            html += objInfo;
        });
        document.getElementById("container").innerHTML = Object.values(houses);
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html; 
    
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process
