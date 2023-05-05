
fetch("houses.json")
  .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = document.getElementById("container");

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");
            console.log(family)
            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo = `<p class="house">${house.name}</p>
        <p class="folks">${family}</p>`;
            html += objInfo;
        })

        document.getElementById("container").innerHTML = Object.values(houses);
        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;  
      })
      .catch((data) => console.log("data"))
  {
    console.log("error")
  };