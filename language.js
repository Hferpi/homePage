// El objeto de traducciones
const translations = {
    es: {
        welcome: "¡Encantado de que estés en esta página!",
        description: "Ya sea por curiosidad o por intriga, me alegra que estés aquí. <br> Soy un estudiante de desarrollo web y quiero dedicarme a ello. Programación, inteligencia artificial y ciberseguridad son mundos que me fascinan. <br> Actualmente trabajo en el sector de la madera. <br> Tengo muchos hobbies, pero no dudes en preguntarme por la <b>montaña</b>, ¡es mi favorito! <br> Todo el sistema que estás viendo ha sido creado por mí con cariño. <br> Normalmente resido en esta casa, pero en épocas concretas la pongo en alquiler. <br> ¡Gracias por elegir mi piso! Espero que tengas una estancia maravillosa. <br>",
    },
    en: {
        welcome: "Delighted to have you on this page!",
        description: "Whether out of curiosity or intrigue, I'm glad you're here. <br> I am a web development student, and I want to pursue this field. Programming, artificial intelligence, and cybersecurity are areas that fascinate me. <br> Currently, I work in the wood industry. <br> I have many hobbies, but don't hesitate to ask me about the <b>mountain</b>, it's my favorite! <br> The entire system you're seeing has been created by me with care. <br> I usually reside in this house, but during specific times, I rent it out. <br> Thank you for choosing my apartment! I hope you have a wonderful stay. <br>",
    },
    fr: {
        welcome: "Ravi que vous soyez sur cette page !",
        description: "Que ce soit par curiosité ou par intrigue, je suis content que vous soyez ici. <br> Je suis étudiant en développement web et je souhaite me consacrer à ce domaine. La programmation, l'intelligence artificielle et la cybersécurité sont des domaines qui me fascinent. <br> Actuellement, je travaille dans le secteur du bois. <br> J'ai beaucoup de loisirs, mais n'hésitez pas à me parler de la <b>montagne</b>, c'est mon favori ! <br> Tout le système que vous voyez a été créé par moi avec soin. <br> Je réside habituellement dans cette maison, mais pendant certaines périodes, je la mets en location. <br> Merci d'avoir choisi mon appartement ! J'espère que vous passerez un séjour merveilleux. <br>",
    },
};

// Función para actualizar el contenido de la página según el idioma seleccionado
function showTranslation(language) {
    const translation = translations[language];

    // Actualizar el contenido del texto en el contenedor
    document.getElementById("welcome-text").innerHTML = translation.welcome;
    document.getElementById("description").innerHTML = translation.description;

    // Actualizar el valor del selector para mantener la selección del idioma
    document.getElementById("language-select").value = language;
}

// Detectar el cambio de idioma en el selector
document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    showTranslation(selectedLanguage);

    // Guardar el idioma seleccionado en localStorage para mantenerlo entre recargas
    localStorage.setItem('language', selectedLanguage);
});

// Al cargar la página, verificar si hay un idioma guardado y cargarlo
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es'; // Si no hay idioma guardado, usar 'es' como predeterminado
    showTranslation(savedLanguage);
});
