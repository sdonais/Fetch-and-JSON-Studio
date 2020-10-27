window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
        const container = document.querySelector('#container');             
            for (let i = 0; i < json.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
                <div clas="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                          <li>Hours in space: ${json[i].hoursInSpace}</li>
                          <li>Active: ${json[i].active}</li>
                          <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `; //it's cool that this updates the html page 
            }; //end for loop 
        });
});
});