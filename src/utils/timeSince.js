const timeSince = (date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const seconds = Math.floor((now - commentDate) / 1000);

    // Si es menos de un minuto
    if (seconds < 60) {
        return "Ahora";
    }

    // Minutos
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return "Hace " + minutes + " minuto" + (minutes > 1 ? "s" : "");
    }

    // Horas
    const hours = Math.floor(seconds / 3600);
    if (hours < 24) {
        return "Hace " + hours + " hora" + (hours > 1 ? "s" : "");
    }

    // Días
    const days = Math.floor(seconds / 86400);
    if (days < 30) {
        return "Hace " + days + " día" + (days > 1 ? "s" : "");
    }

    // Meses
    const months = Math.floor(seconds / 2592000); // 30 días por mes
    if (months < 12) {
        return "Hace " + months + " mes" + (months > 1 ? "es" : "");
    }

    // Años
    const years = Math.floor(seconds / 31536000); // 365 días por año
    return "Hace " + years + " año" + (years > 1 ? "s" : "");
};

module.exports = timeSince;