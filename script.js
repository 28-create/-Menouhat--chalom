document.addEventListener("DOMContentLoaded", () => {
   https://www.hebcal.com/zmanim?cfg=json&geonameid=281184
   async function fetchZmanimAndDisplay() {
    try {
        const response = await fetch("https://www.hebcal.com/zmanim?cfg=json&geonameid=281184");
        const data = await response.json();

        // Récupérer les horaires en format ISO
        const sunriseISO = data.times.sunrise;
        const sunsetISO = data.times.sunset;
        const midnightISO = data.times.midnight;

        // Convertir en format lisible
        const sunrise = new Date(sunriseISO).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const sunset = new Date(sunsetISO).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const midnight = new Date(midnightISO).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });

        // Afficher dans le DOM
        document.getElementById("sunrise").textContent = `נץ החמה: ${sunrise}`;
        document.getElementById("sunset").textContent = `שקיעה: ${sunset}`;
        document.getElementById("midnight").textContent = `חצות: ${midnight}`;
    } catch (error) {
        console.error("Erreur lors de la récupération des horaires:", error);
    }
}

fetchZmanimAndDisplay();


