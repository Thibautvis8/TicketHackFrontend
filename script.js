// **********Bouton departure**********
const localUrl = "http://localhost:3000";

const searchBtn = document.querySelector("#Search");
// On ne met l'écouteur QUE s'il existe sur la page actuelle
if (searchBtn) {
  document.querySelector("#Search").addEventListener("click", () => {
    const departure = document.querySelector("#departureName").value;
    const arrival = document.querySelector("#arrivalName").value;
    const date = document.querySelector("#date").value;
    document.querySelector(".rightPart").innerHTML = "";

    fetch(`${localUrl}/trips`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: departure,
        arrival: arrival,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.allTrips.length === 0) {
          document.querySelector(".rightPart").innerHTML +=
            `<img id="train" alt="notFound" src="./images/notfound.png">
          <h4>No trip found.</h4>`;
        }
        for (let i = 0; i < 5; i++) {
          const date = new Date(data.allTrips[i].date);
          const heures = date.getHours();
          const minutes = date.getMinutes();

          document.querySelector(".rightPart").innerHTML += `
    <ul>
                    <li id="trajet">${data.allTrips[i].departure} > ${data.allTrips[i].arrival}</li>
                    <li id="horaire">${heures}h${minutes}</li>
                    <li id="prixTrajet">${data.allTrips[i].price}€</li>
                    <li id="reservation"><button id="book" onclick="window.location.href='cart.html';">book</button>
                    </li>
                </ul>
    `;
        }
        document.querySelector("#book").addEventListener("click", () => {
          fetch(`${localUrl}/carts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              departure: departure,
              arrival: arrival,
              date: date,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.succes) {
                console.log(true);
                window.location.href = "cart.html";
              }
            });
        });
      });
  });
}
