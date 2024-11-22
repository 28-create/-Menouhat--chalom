document.addEventListener("DOMContentLoaded", () => 
async function fetchZmanim() {
    try {
        const response = await fetch("https://www.hebcal.com/zmanim?cfg=json&geonameid=281184");
        const data = await response.json();

        // Extraire les horaires
        const sunrise = new Date(data.times.sunrise).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const sunset = new Date(data.times.sunset).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const chatzot = new Date(data.times.chatzot).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const minchaGedola = new Date(data.times.minchaGedola).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
        const tzeit = new Date(data.times.tzeitHakochavim).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });

        // Afficher les horaires dans le DOM
        document.getElementById("zmanim").innerHTML = `
            <p>נץ החמה: ${sunrise}</p>
            <p>שקיעה: ${sunset}</p>
            <p>חצות היום: ${chatzot}</p>
            <p>מנחה גדולה: ${minchaGedola}</p>
            <p>צאת הכוכבים: ${tzeit}</p>
        `;
    } catch (error) {
        console.error("Erreur lors de la récupération des horaires :", error);
    }
}

fetchZmanim();



