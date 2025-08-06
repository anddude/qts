main();

async function main() {
  const recs = await getData();

  // city-wide rec sections
  const cityEats = document.querySelector("#city-eats");
  const cityDrinks = document.querySelector("#city-drinks");
  const museums = document.querySelector("#museums");
  const cityActiv = document.querySelector("#city-activ");
  const historicSpots = document.querySelector("#historic");

  // neighborhood rec sections
  const neighborCafe = document.querySelector("#neighbor-cafe");
  const neighborEats = document.querySelector("#neighbor-eats");
  const neighborDrinks = document.querySelector("#neighbor-drinks");
  const neighborActiv = document.querySelector("#neighbor-activ");
  const neighborGrocer = document.querySelector("#neighbor-groceries");

  //   This could be simplified with the use of the map method
  for (const rec of recs) {
    if (rec.list === "nyc") {
      if (rec.section === "eats") {
        cityEats.innerHTML += `<li>${rec.name}</li>`;
      } else if (rec.section === "drinks") {
        cityDrinks.innerHTML += `<li>${rec.name}</li>`;
      } else if (rec.section === "museums") {
        museums.innerHTML += `<li>${rec.name}</li>`;
      } else if (rec.section === "activities") {
        cityActiv.innerHTML += `<li>${rec.name}</li>`;
      } else if (rec.section === "historic") {
        historicSpots.innerHTML += `<li>${rec.name}</li>`;
      }

      if (rec.list === "neighbor" || rec.list === "both") {
        if (rec.section === "eats") {
          neighborEats.innerHTML += `<li>${rec.name}</li>`;
        } else if (rec.section === "cafe") {
          neighborCafe.innerHTML += `<li>${rec.name}</li>`;
        } else if (rec.section === "drinks") {
          neighborDrinks.innerHTML += `<li>${rec.name}</li>`;
        } else if (rec.section === "activities") {
          neighborActiv.innerHTML += `<li>${rec.name}</li>`;
        } else if (rec.section === "groceries") {
          neighborGrocer.innerHTML += `<li>${rec.name}</li>`;
        }
      }
    }
  }
}

async function getData() {
  const res = await fetch("/pages/recs.json");
  const data = await res.json();

  return data;
}
