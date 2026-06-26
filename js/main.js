document.addEventListener('DOMContentLoaded', () => {

    // ---- A. GESTION DU DARK MODE + LOCALSTORAGE ----
    const toggleThemeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // On vérifie si l'utilisateur avait déjà choisi le mode sombre
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Clic sur le bouton de changement de thème
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Sauvegarde du choix dans le navigateur
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ---- B. NAVBAR DYNAMIQUE & BOUTON RETOUR EN HAUT ----
    const navbar = document.querySelector('.navbar'); 
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Déclenchement de l'effet navbar après 50px de scroll
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('navbar-scrolled');
        } else {
            if (navbar) navbar.classList.remove('navbar-scrolled');
        }

        // Apparition du bouton retour en haut après 300px de scroll
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });

    // Clic pour remonter en haut de page en douceur
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});