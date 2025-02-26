document.addEventListener("DOMContentLoaded", () => 
("Erreur lors de la récupération des horaires :", error);
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



// Mettre à jour l'heure, la date civile et la date hébraïque toutes les secondes
setInterval(() => {
  updateTime();
  updateCivilDate();
  updateHebrewDate();
}, 1000);



