document.addEventListener("DOMContentLoaded", () => {
    // Exemple de calcul des horaires du jour (vous pouvez les remplacer par des API ou des données précises)
    const today = new Date();
    const leverSoleil = "06:45";
    const finChema = "09:30";
    const coucherSoleil = "17:15";

    document.getElementById("lever").textContent = leverSoleil;
    document.getElementById("chema").textContent = finChema;
    document.getElementById("coucher").textContent = coucherSoleil;
});
