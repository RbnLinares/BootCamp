// Definir el sol y los planetas con sus lunas
const solarSystem = [
    { name: 'Sol', color: '#FFFF00', moons: []},
    { name: "Mercurio", color: "#999999", moons: [] },
    { name: "Venus", color: "#FF0000", moons: [] },
    { name: "Tierra", color: "#0000FF", moons: [{ name: "Luna", color: "#FFFFFF" }] },
    { name: "Marte", color: "#FF6600", moons: [{ name: "Fobos", color: "#CCCCCC" }, { name: "Deimos", color: "#DDDDDD" }] },
    { name: "Júpiter", color: "#FFCC00", moons: [{ name: "Europa", color: "#EEEEEE" }, { name: "Ganimedes", color: "#FFFFFF" }, { name: "Io", color: "#DDDDDD" }, { name: "Calisto", color: "#CCCCCC" }] },
    { name: "Saturno", color: "#FFCC00", moons: [{ name: "Titán", color: "#BBBBBB" }, { name: "Encélado", color: "#AAAAAA" }, { name: "Rea", color: "#999999" }, { name: "Mimas", color: "#888888" }] },
    { name: "Urano", color: "#00FFFF", moons: [{ name: "Miranda", color: "#777777" }, { name: "Titania", color: "#666666" }, { name: "Ariel", color: "#555555" }, { name: "Umbriel", color: "#444444" }] },
    { name: "Neptuno", color: "#0000FF", moons: [{ name: "Tritón", color: "#333333" }, { name: "Nereida", color: "#222222" }] },
    { name: "Plutón", color: "#CCCCCC", moons: [{ name: "Carón", color: "#111111" }] }
   ];
   
function createPlanetDiv(planet) {
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    return planetDiv;
   }
   
function createMoonDiv(moon, index, totalMoons) {
    const moonDiv = document.createElement('div');
    moonDiv.className = 'moon';
    moonDiv.style.backgroundColor = '#FFFFFF'; // Color blanco para las lunas
   
    const angle = (360 / totalMoons) * index; // Calcula el ángulo basado en el número de lunas
    const radius = 50; // Radio de la órbita alrededor del planeta
    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);
    moonDiv.style.transform = `translate(${x}px, ${y}px)`;
   
    return moonDiv;
   }
   
   const section = document.querySelector('.listPlanets');
   solarSystem.forEach(planet => {
    const planetDiv = createPlanetDiv(planet);
    planet.moons.forEach((moon, index) => {
       const moonDiv = createMoonDiv(moon, index, planet.moons.length);
       planetDiv.appendChild(moonDiv);
    });
    section.appendChild(planetDiv);
   });
   