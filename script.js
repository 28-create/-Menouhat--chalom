document.addEventListener("DOMContentLoaded", () => {
    // Exemple de calcul des horaires du jour (vous pouvez les remplacer par des API ou des données précises)
   const API_KEY = "94df5eda1fd569740f89ad8a912a0fa9d79b333ead13b72220f4d8c5ba0f69133f7a40410088cf07";
const JERUSALEM_LAT = 31.7683; // Latitude de Jérusalem
const JERUSALEM_LON = 35.2137; // Longitude de Jérusalem

async function fetchZmanim() {
    try {
        const response = await fetch(
            `https://api.myzmanim.com/v2/times?latitude=${JERUSALEM_LAT}&longitude=${JERUSALEM_LON}&key=${API_KEY}`
        );
        const data = await response.json();

        // Affichage des horaires
        document.getElementById("nets").textContent = `Nets: ${data.times.sunrise}`;
        document.getElementById("shema").textContent = `Fin Chema: ${data.times.shema}`;
        document.getElementById("tefila").textContent = `Fin Tefila: ${data.times.tefillah}`;
        document.getElementById("hatsot").textContent = `Hatsot: ${data.times.midday}`;
        document.getElementById("shkia").textContent = `Shkia: ${data.times.sunset}`;
        document.getElementById("night").textContent = `Nuit: ${data.times.tzais}`;
    } catch (error) {
        console.error("Erreur lors de la récupération des horaires:", error);
    }
}

fetchZmanim();

