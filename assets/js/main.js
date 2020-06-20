
/*
console.log("hello World");

const cityData = [
  {
    name: "Dublin",
    country: "Ireland",
    attractions: ["Trinity College", "Guiness Storehouse"],
    Population: 1.4,
    photo: "https://images.unsplash.com/photo-1584796353969-30d8473ce76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "London",
    country: "United Kingdon",
    attractions: ["Big Ben", "Tower of London"],
    Population: 8.4,
    photo: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Berlin",
    country: "Germany",
    favFoods: ["tuna", "catnip", "celery"],
    Population: 3.74,
    photo: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
];


function attractions(attractions) {
  return `
<h4>Attractions</h4>
<ul class="attractions">
${attractions.map(attractions => `<li>${attractions}</li>`).join("")}
</ul>
`;
}

function cityTemplate(city) {
  return `
    <div class="cityTemplate">
    <img class="city-photo" src="${city.photo}">
    <h2 class="city-name">${city.name} <span class="country">(${city.country})</span></h2>
    <p><strong>Population:</strong> ${age(city.population)}</p>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">City (${cityData.length} results)</h1>
  ${cityData.map(cityTemplate).join("")}
  <p class="footer">These ${cityData.length} citys were added recently. Check back soon for updates.</p>
`;
*/
