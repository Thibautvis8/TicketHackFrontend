fetch("http://localhost:3000/trips").then(response => response.json()).then(allTrips => {
    console.log(allTrips);
    
});