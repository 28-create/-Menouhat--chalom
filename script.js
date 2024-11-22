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
// Fonction pour afficher l'heure
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("heure").textContent = "Heure : " + timeString;
}

// Fonction pour afficher la date civile
function updateCivilDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
  const year = now.getFullYear();

  const civilDateString = `${day}/${month}/${year}`;
  document.getElementById("date-civil").textContent = "Date civile : " + civilDateString;
}

// Fonction pour afficher la date hébraïque
function updateHebrewDate() {
  const now = new Date();
  const hebrewDate = new HebrewDate(now);
  const hebrewDay = hebrewDate.getDate();
  const hebrewMonth = hebrewDate.getMonth();
  const hebrewYear = hebrewDate.getFullYear();

  const hebrewDateString = `${hebrewDay} ${hebrewMonth} ${hebrewYear}`;
  document.getElementById("date-hebraique").textContent = "Date hébraïque : " + hebrewDateString;
}

// Mettre à jour l'heure, la date civile et la date hébraïque toutes les secondes
setInterval(() => {
  updateTime();
  updateCivilDate();
  updateHebrewDate();
}, 1000);

// Initialisation
updateTime();
updateCivilDate();
updateHebrewDate();

fetchZmanim();



