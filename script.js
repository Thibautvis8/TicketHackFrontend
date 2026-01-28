fetch("http://localhost:3000/trips").then(response => response.json()).then(allTrips => {
    console.log(allTrips);
    
});

fetch("http://localhost:3000/trips", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ departure: "Paris", arrival: "Lyon", date: "2026-01-27", price: 50 })
});

document.querySelector('#departureName').innerHTML += ``



document.querySelector('#Search').addEventListener ('click', function() {

})