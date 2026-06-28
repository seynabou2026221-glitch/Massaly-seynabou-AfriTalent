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
document.addEventListener('DOMContentLoaded', function() {

    const filterBtns = document.querySelectorAll('.filter-btn');
    const freelanceCards = document.querySelectorAll('[data-category]');

    console.log('Boutons trouvés:', filterBtns.length);
    console.log('Cards trouvées:', freelanceCards.length);

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {

            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            console.log('Filtre cliqué:', filter);

            freelanceCards.forEach(function(card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".freelance-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Gérer la classe active sur les boutons
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 2. Récupérer la catégorie du bouton cliqué
            const filterValue = button.getAttribute("data-filter");

            // 3. Filtrer les cartes avec animation
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    // On affiche la carte
                    card.style.display = "block";
                    // Petit timeout pour laisser le temps au display de s'appliquer avant l'animation
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 10);
                } else {
                    // On cache la carte avec effet de disparition
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.8)";
                    
                    // On attend la fin de la transition CSS (0.3s) pour mettre le display: none
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); 
                }
            });
        });
    });
});