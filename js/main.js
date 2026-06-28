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
document.addEventListener("DOMContentLoaded"), () => {
}

document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. ANIMATION FADE-IN DES SECTIONS
  // ==========================================
  const sections = document.querySelectorAll('.fade-in-section');

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Arrête d'observer une fois visible
      }
    });
  }, {
    threshold: 0.1 // Déclenche quand 10% de la section est visible
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // ==========================================
  // 2. ANIMATION DES COMPTEURS DE STATISTIQUES
  // ==========================================
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = 100; // Plus le chiffre est grand, plus l'animation est lente
    const increment = target / speed;

    const updateCount = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Anime une seule fois
      }
    });
  }, {
    threshold: 0.5 // Déclenche quand le compteur est bien visible
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});
/* 1. Compteurs animés */
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText;
          const increment = target / 100;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  });
  counters.forEach(counter => observer.observe(counter));
}
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMATION DES COMPTEURS NUMÉRIQUES ---
    const animateCounters = (counterElement) => {
        const target = +counterElement.getAttribute('data-target'); // Récupère la valeur cible
        const duration = 2000; // Durée totale de l'animation en millisecondes (2 secondes)
        const speed = target / (duration / 16); // Incrément par frame (~16ms par frame pour 60fps)

        let currentCount = 0;

        const updateCount = () => {
            currentCount += speed;
            if (currentCount < target) {
                counterElement.innerText = Math.ceil(currentCount);
                requestAnimationFrame(updateCount);
            } else {
                counterElement.innerText = target; // S'assure d'afficher exactement la valeur finale
            }
        };

        updateCount();
    };

    // --- 2. INTERSECTION OBSERVER POUR LES ELEMENTS AU SCROLL ---
    const observerOptions = {
        root: null, // utilise le viewport du navigateur
        threshold: 0.15 // Déclenche dès que 15% de l'élément est visible
    };

    const pageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // A. Si c'est une section, on lui ajoute la classe fade-in
                if (entry.target.classList.contains('fade-in-section')) {
                    entry.target.classList.add('is-visible');
                }

                // B. Si la section contient des compteurs, on lance l'animation de ces compteurs
                const countersInSection = entry.target.querySelectorAll('.counter');
                countersInSection.forEach(counter => {
                    // On vérifie si l'animation n'a pas déjà été jouée
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounters(counter);
                    }
                });

                // Optionnel : On peut arrêter d'observer la section une fois animée
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On applique l'observateur sur toutes les sections à animer
    const sectionsToObserve = document.querySelectorAll('.fade-in-section');
    sectionsToObserve.forEach(section => {
        pageObserver.observe(section);
    });
});
// ================================
// FILTRAGE DYNAMIQUE DES FREELANCES
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const boutons = document.querySelectorAll(".filter-btn");
    const cartes = document.querySelectorAll(".freelance-card");


    boutons.forEach(bouton => {

        bouton.addEventListener("click", function () {


            // changement de bouton actif
            boutons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");


            let categorie = this.dataset.filter;


            cartes.forEach(carte => {

                let categorieCarte = carte.dataset.category;


                if(categorie === "all" || categorieCarte === categorie){

                    carte.style.display = "block";

                    setTimeout(()=>{
                        carte.style.opacity = "1";
                    },50);

                }else{

                    carte.style.opacity = "0";

                    setTimeout(()=>{
                        carte.style.display = "none";
                    },300);

                }

            });

        });

    });

});




// ================================
// VALIDATION FORMULAIRE CONTACT
// ================================


const formulaire = document.querySelector("#contactForm");


if(formulaire){


formulaire.addEventListener("submit", function(e){


    e.preventDefault();


    let nom = document.querySelector("#nom");
    let email = document.querySelector("#email");
    let sujet = document.querySelector("#sujet");
    let message = document.querySelector("#message");


    let valide = true;



    // récupération des erreurs

    let erreurNom = document.querySelector("#nomError");
    let erreurEmail = document.querySelector("#emailError");
    let erreurSujet = document.querySelector("#sujetError");
    let erreurMessage = document.querySelector("#messageError");



    // vider les erreurs

    erreurNom.textContent="";
    erreurEmail.textContent="";
    erreurSujet.textContent="";
    erreurMessage.textContent="";



    // Nom

    if(nom.value.trim()===""){

        erreurNom.textContent="Le nom est obligatoire";
        valide=false;

    }



    // Email

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(email.value.trim()===""){

        erreurEmail.textContent="L'email est obligatoire";
        valide=false;

    }

    else if(!regexEmail.test(email.value)){

        erreurEmail.textContent="Format email invalide";
        valide=false;

    }



    // Sujet

    if(sujet.value.trim()===""){

        erreurSujet.textContent="Le sujet est obligatoire";
        valide=false;

    }



    // Message

    if(message.value.trim()===""){

        erreurMessage.textContent="Le message est obligatoire";
        valide=false;

    }

    else if(message.value.length < 20){

        erreurMessage.textContent=
        "Le message doit contenir au minimum 20 caractères";

        valide=false;

    }




    // succès

    if(valide){


        let succes = document.querySelector("#successMessage");


        succes.textContent =
        "Votre message a été envoyé avec succès !";


        succes.style.display="block";


        formulaire.reset();


        setTimeout(()=>{

            succes.style.display="none";

        },4000);


    }



});


}
document.addEventListener("DOMContentLoaded", () => {
    // Sélection de tous les boutons radio de filtrage
    const filtres = document.querySelectorAll('input[name="filtre"]');
    // Sélection de toutes les cartes de freelances
    const cartes = document.querySelectorAll('.freelance-card');

    filtres.forEach(filtre => {
        filtre.addEventListener('change', () => {
            const categorieSelectionnee = filtre.id;

            cartes.forEach(carte => {
                // Récupération de la catégorie de la carte actuelle
                const categorieCarte = carte.getAttribute('data-category');

                // Si "Tous" est coché ou si la catégorie de la carte correspond au filtre
                if (categorieSelectionnee === 'all' || categorieCarte === categorieSelectionnee) {
                    carte.style.display = 'block'; // Affiche la carte
                } else {
                    carte.style.display = 'none';  // Masque la carte
                }
            });
        });
    });
});
