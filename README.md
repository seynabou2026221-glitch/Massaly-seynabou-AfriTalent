# AfriTalent
Projet fil rouge — Plateforme de mise en relation entre freelances africains et
clients.
Auteur : Seynabou MASSALY
Promotion : L1 Web — ISI

INDEX.HTML
Ton code représente la page d’accueil du site AfriTalent, une plateforme qui permet de connecter des entreprises avec des freelances. Il est composé de quatre technologies principales : HTML pour la structure, CSS pour le design, Bootstrap pour faciliter la mise en page, et JavaScript pour les interactions.

La première partie du fichier commence par <!DOCTYPE html> qui indique au navigateur qu’il s’agit d’une page HTML5. La balise <html lang="fr"> précise que la langue utilisée est le français. Dans la partie <head>, on trouve les informations générales de la page : l’encodage UTF-8 pour afficher correctement les caractères spéciaux, la balise viewport qui permet au site de s’adapter aux téléphones, le titre “AfriTalent” qui apparaît dans l’onglet du navigateur, ainsi que les liens vers les fichiers externes.

Le fichier CSS est appelé avec <link rel="stylesheet" href="css/style.css">. Il permet de modifier l’apparence du site comme les couleurs, les tailles, les espacements et les animations. Ensuite, Bootstrap est importé afin d’utiliser des composants déjà prêts comme les boutons, les cartes, les grilles et la barre de navigation. Bootstrap Icons permet d’ajouter des icônes comme le code, les utilisateurs, le cloud ou le bouclier. Google Fonts ajoute la police Poppins pour donner un aspect plus moderne au site.

La barre de navigation (navbar) située en haut de la page contient le logo AfriTalent, le nom de la plateforme et les différents liens : Accueil, Freelances, Tarifs, À propos et Contact. Elle utilise Bootstrap pour être responsive, c’est-à-dire qu’elle s’adapte aux ordinateurs et aux téléphones. Le bouton avec l’icône 🌙 sert à activer le mode sombre grâce au fichier JavaScript main.js.

La grande section d’accueil appelée Hero Section présente le message principal du site : “Trouvez le freelance idéal”. Elle explique qu’AfriTalent aide les entreprises à trouver des freelances qualifiés. Elle contient deux boutons d’action : “Je suis freelance” pour les personnes qui souhaitent proposer leurs services et “Je cherche un freelance” pour les entreprises qui veulent recruter. Cette partie affiche aussi des statistiques avec le nombre de freelances, d’entreprises et de missions disponibles.

La section Comment ça marche explique le fonctionnement de la plateforme en quatre étapes. La première étape “Publiez votre projet” permet au client de déposer son besoin. La deuxième “Recevez des candidatures” permet aux freelances de proposer leurs services. La troisième “Collaborez facilement” représente le travail entre le client et le freelance. La quatrième “Finalisez en sécurité” concerne la validation et la fin de la mission. Chaque étape est présentée sous forme de carte avec une icône Bootstrap.

La partie Catégories de Services présente les différents domaines disponibles sur la plateforme : Développement Web, Design UI/UX, Marketing Digital, Data & IA, Rédaction Tech et DevOps & Cloud. Chaque catégorie possède une carte avec une icône, un titre et le nombre de freelances disponibles dans ce domaine.

La section Témoignages utilise un carousel Bootstrap qui permet de faire défiler plusieurs avis de clients. Chaque témoignage contient une photo, un nom, un commentaire et une note sous forme d’étoiles. Cette partie sert à montrer la satisfaction des utilisateurs d’AfriTalent.

La section CTA (Call To Action) encourage les visiteurs à rejoindre la plateforme avec un message invitant à s’inscrire. Elle contient un bouton “S’inscrire maintenant” qui redirige vers la page de contact.

Le footer correspond au bas de la page. Il contient le logo AfriTalent, une description de la plateforme, les réseaux sociaux, les liens importants, les ressources disponibles et les informations de contact comme l’adresse mail, le téléphone et la localisation.

Enfin, les balises <script> permettent de charger les fichiers JavaScript. Le fichier main.js ajoute les fonctionnalités dynamiques comme le mode sombre, les animations et les interactions avec les boutons.

Cependant, ton code contient quelques erreurs de structure : tu as plusieurs balises <html>, <body> et <footer> répétées, et tu fermes la page avant la fin du contenu. Une page HTML correcte doit avoir une seule structure avec un seul <html>, un seul <head>, un seul <body> et un seul footer.

En résumé, ce projet est une landing page professionnelle AfriTalent : HTML construit les différentes parties du site, Bootstrap facilite le design, CSS personnalise l’apparence et JavaScript ajoute les fonctionnalités interactives comme le dark mode et les animations.


FREELANCE.HTML
Pour comprendre votre site de A à Z, nous allons analyser la structure complète de votre code, balise par balise, en suivant l'ordre exact de lecture du navigateur.
------------------------------
## Part 1 : L'en-tête invisible (<head>)
Cette zone contient les informations techniques, les liaisons vers les fichiers de style et les polices de caractères. Rien ne s'affiche directement à l'écran ici.

* <!DOCTYPE html> : Indique au navigateur que ce document est un fichier HTML moderne (HTML5). [1, 2] 
* <html lang="fr"> : Ouvre le document et définit la langue principale en français pour les moteurs de recherche.
* <meta charset="UTF-8" /> : Permet d'afficher correctement tous les caractères spéciaux et les accents (é, è, à, etc.). [3] 
* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> : Crucial pour le mobile. Adapte automatiquement la taille du site à l'écran d'un smartphone ou d'une tablette.
* <title>AfriTalent</title> : Définit le texte qui s'affiche dans l'onglet de votre navigateur.
* <link rel="stylesheet" href="..." /> : Ces lignes importent des outils externes :
* style.css : Votre fichier de personnalisation personnel.
   * bootstrap.min.css : La bibliothèque de design globale (grille, boutons, espaces).
   * bootstrap-icons.min.css : Le catalogue d'icônes vectorielles (pour les étoiles et les réseaux sociaux).
* <style> : Contient le code CSS personnalisé directement intégré pour gérer les animations de filtrage et les couleurs du mode sombre (dark-mode).

------------------------------
## Part 2 : Le contenu visible (<body>)
C'est ici que se trouve tout ce que l'utilisateur voit et avec lequel il interagit.
## A. La barre de navigation (<nav>)

* navbar-expand-lg : Signifie que la barre s'affiche en entier sur grand écran, mais se transforme en menu "hamburger" (les 3 lignes) sur les écrans de téléphones.
* fixed-top shadow-sm : Bloque la barre en haut de l'écran lors du défilement et ajoute une légère ombre en dessous pour un effet de relief.
* navbar-toggler : C'est le bouton invisible sur ordinateur qui apparaît sur mobile pour ouvrir le menu déroulant.
* navbar-nav mx-auto : Regroupe vos liens de navigation (Accueil, Tarifs, À propos, etc.) et les centre horizontalement dans la barre.
* id="theme-toggle" : Le bouton interrupteur représentant la lune 🌙 pour changer de thème.

## B. La section des filtres et les Cartes

* <div class="container py-5 text-center"> : Crée un bloc centré avec des marges internes en haut et en bas (py-5) pour le titre principal et le sous-titre.
* <div class="filter-container"> : Regroupe vos boutons de tri. Chaque bouton possède un attribut data-filter="..." (ex: data-filter="dev"). Cet attribut sert de repère "invisible" pour le JavaScript.
* <div class="row hero"> : C'est la structure en grille de Bootstrap. row crée une ligne qui va contenir vos cartes.
* <div class="col-md-4 freelance-card" data-category="dev"> :
* col-md-4 : Divise l'écran. Sur un ordinateur, une ligne fait 12 unités. 4 signifie que chaque carte prend 1/3 de la largeur (donc 3 cartes par ligne). Sur mobile, elle prend automatiquement toute la largeur.
   * data-category="dev" : C'est l'étiquette de la carte. Elle indique au JavaScript à quel métier appartient ce freelance.

## C. L'intérieur d'une carte Freelance

* <div class="card p-3 text-center"> : Crée une boîte blanche avec des coins arrondis, une ombre et un espacement interne (p-3).
* <img class="card-img-top"> : Affiche la photo de profil du freelance en l'adaptant à la largeur de la boîte.
* <div class="text-warning"> : Utilise la couleur orange/jaune de Bootstrap pour colorer les icônes d'étoiles <i class="bi bi-star-fill"></i> placées à l'intérieur.

## D. Le Pied de page (<footer>)

* bg-dark text-white : Donne un fond noir et un texte blanc au bloc final.
* col-lg-4, col-lg-2, etc. : Divisent le footer en 4 colonnes distinctes sur grand écran (Présentation, Liens, Ressources, Contacts).
* <div class="socials"> : Regroupe les icônes Bootstrap de vos réseaux sociaux (Facebook, [LinkedIn](https://fr.linkedin.com/)...).

------------------------------
## Part 3 : Le moteur dynamique (Le JavaScript)
Placé tout en bas, il s'exécute en dernier pour animer les éléments HTML décrits ci-dessus.

   1. L'écoute globale : Le script attend que le HTML soit totalement lu par le navigateur.
   2. La capture : Il mémorise tous les boutons de filtres et toutes les cartes de freelances présents dans la page.
   3. L'action du clic : Dès que vous cliquez sur un bouton :
   * Il enlève la couleur bleue du bouton précédent et l'applique sur le bouton cliqué (active).
      * Il lit l'étiquette (data-filter) du bouton cliqué.
   4. Le tri visuel : Le script passe en revue chaque carte de freelance :
   * Si le bouton cliqué est "Tous" (all) ou si l'étiquette de la carte (data-category) est identique au bouton cliqué, le script applique display: block pour rendre la carte visible, puis change l'opacité à 1 pour créer un effet de fondu progressif.
      * Sinon, il bascule l'opacité à 0 (la carte devient invisible), attend la fin de l'animation, puis applique display: none pour retirer la carte de l'écran afin que les autres se resserrent proprement.
   5. Le changement de thème : Lors du clic sur la lune, le script ajoute la classe dark-mode sur la balise <body>. Le CSS s'active alors pour forcer le fond du site à devenir noir et les écritures blanches, tout en remplaçant la lune 🌙 par un soleil ☀️.

Souhaitez-vous que nous passions à l'étape suivante en ajoutant une barre de recherche textuelle pour filtrer aussi les freelances par leur prénom/nom directement ?

[1] [https://fr.khanacademy.org](https://fr.khanacademy.org/computing/computer-programming/html-css/intro-to-html/pt/html-basics)
[2] [https://jenseign.com](https://jenseign.com/apprendre-html-css/documentation-theorie/les-bases/)
[3] [https://facemweb.com](https://facemweb.com/blog/creation-site/meta-charset-utf-8/)

TARIFS.HTML
Ton code correspond à la page Tarifs du site AfriTalent. Cette page est construite en HTML avec l’aide de Bootstrap, CSS et JavaScript. Elle commence par la structure de base HTML5 avec <!DOCTYPE html> qui indique le type de document, puis la balise <head> qui contient les informations de la page comme l’encodage UTF-8, l’adaptation aux écrans mobiles grâce à viewport, le titre AfriTalent et les liens vers les fichiers externes. Le fichier CSS style.css permet de personnaliser l’apparence de la page (couleurs, tailles, espacements, effets), Bootstrap permet d’utiliser des composants déjà créés comme les boutons, cartes et grilles, Bootstrap Icons ajoute les icônes utilisées dans les offres, et Google Fonts ajoute la police Poppins pour un rendu plus professionnel.

La première grande partie visible est la barre de navigation (Navbar). Elle contient le logo AfriTalent, le nom du site et les différents liens : Accueil, Freelances, Tarifs, À propos et Contact. Cette barre utilise Bootstrap pour être responsive, c’est-à-dire qu’elle s’adapte aux ordinateurs et aux téléphones. Le bouton avec l’emoji 🌙 sert à activer le mode sombre grâce au fichier JavaScript main.js, tandis que le bouton “Rejoindre AfriTalent” permet d’attirer l’utilisateur vers l’inscription.

Ensuite vient la partie principale de la page avec le titre “Nos Tarifs” qui présente les différentes offres disponibles sur la plateforme. Les offres sont affichées sous forme de cartes grâce au composant Bootstrap card et sont organisées en trois colonnes avec col-md-4. La première carte correspond à l’offre Gratuit à 0 FCFA par mois. Elle donne accès aux fonctionnalités de base comme l’accès simple et les projets, mais certaines options comme le support prioritaire ou les rapports avancés ne sont pas disponibles. La deuxième carte correspond à l’offre Pro à 10 000 FCFA par mois. Elle est mise en avant avec un badge “Populaire” et propose plus de fonctionnalités comme l’accès complet, plusieurs projets, le support prioritaire et les rapports avancés. La troisième carte correspond à l’offre Entreprise à 50 000 FCFA par mois. Elle cible les grandes entreprises avec des fonctionnalités complètes comme les projets illimités, le support 24/7, les rapports avancés et les utilisateurs illimités. Chaque offre possède un bouton “Choisir ce plan” permettant à l’utilisateur de sélectionner son abonnement.

Après la présentation des tarifs, la page contient une section FAQ (Questions fréquentes) réalisée avec l’accordéon Bootstrap. Cette partie permet aux utilisateurs de cliquer sur une question pour afficher sa réponse sans changer de page. Les questions concernent le changement de formule, l’engagement, les moyens de paiement, l’annulation de l’abonnement et l’essai gratuit. Le système d’ouverture et de fermeture des réponses fonctionne grâce au JavaScript fourni par Bootstrap.

Enfin, la page se termine par le Footer, qui représente le pied de page du site. Il contient le logo AfriTalent, une description de la plateforme, les icônes des réseaux sociaux, les différents liens du site, les ressources disponibles et les informations de contact comme l’adresse mail, le numéro de téléphone et la localisation. La mention © 2026 AfriTalent indique les droits réservés du site.

Les scripts placés à la fin du fichier chargent Bootstrap JavaScript et ton fichier personnel main.js. Bootstrap JavaScript permet le fonctionnement du menu mobile et de l’accordéon FAQ, tandis que main.js permet d’ajouter tes propres fonctionnalités comme le mode sombre et les animations.

En résumé, cette page est une page de tarification professionnelle pour AfriTalent : la Navbar présente la navigation, la partie Tarifs affiche les abonnements, la FAQ répond aux questions des utilisateurs et le Footer donne les informations générales du site. HTML organise le contenu, Bootstrap facilite la création de l’interface, CSS améliore le design et JavaScript ajoute les fonctionnalités interactives.

ABOUT.HTML
Ton code représente la page “À propos” du site AfriTalent. Cette page a pour objectif de présenter l’identité de la plateforme, son histoire, son équipe, ses valeurs et ses performances. Elle est développée avec HTML pour la structure, CSS pour la personnalisation du design, Bootstrap pour faciliter la mise en page et la responsivité, et JavaScript pour ajouter des fonctionnalités interactives.

Le fichier commence par <!DOCTYPE html> qui indique l’utilisation de HTML5, puis la balise <html lang="fr"> précise que la page est en français. Dans la partie <head>, on retrouve les informations générales du site comme l’encodage UTF-8, la compatibilité avec les appareils mobiles grâce à viewport, le titre “AfriTalent” et les différents liens vers les ressources externes. Le fichier CSS style.css permet de gérer les couleurs, les tailles, les espacements et les effets visuels. Bootstrap est importé pour utiliser des composants déjà prêts comme les boutons, les cartes et les grilles. Bootstrap Icons ajoute les icônes utilisées dans les réseaux sociaux et Google Fonts ajoute la police Poppins pour donner un style moderne et professionnel.

La première partie visible est la barre de navigation (Navbar). Elle contient le logo AfriTalent, le nom du site et les liens vers les différentes pages : Accueil, Freelances, Tarifs, À propos et Contact. Grâce aux classes Bootstrap, cette barre de navigation est responsive, ce qui signifie qu’elle s’adapte automatiquement aux ordinateurs, tablettes et téléphones. Elle contient également un bouton de mode sombre représenté par l’icône 🌙, qui fonctionne avec le fichier JavaScript main.js, ainsi qu’un bouton “Rejoindre AfriTalent” pour inciter les visiteurs à utiliser la plateforme.

La section Notre Histoire présente l’origine d’AfriTalent. Elle explique comment la plateforme a été créée à partir d’une idée basée sur la technologie et l’innovation afin de permettre aux jeunes talents de sortir de l’ombre. Cette partie est organisée avec Bootstrap en deux colonnes : une partie réservée au texte de présentation et une autre contenant une image. Les classes comme row, col-lg-6 et img-fluid permettent d’obtenir une mise en page équilibrée et adaptable.

La section Notre Équipe présente les différents membres de l’équipe sous forme de cartes. Chaque carte contient une image, un nom, une fonction, une description et des icônes de réseaux sociaux. L’utilisation des classes Bootstrap comme col-md-4 et col-lg-3 permet d’afficher plusieurs membres côte à côte sur ordinateur tout en gardant une bonne disposition sur mobile.

La partie Nos Valeurs met en avant les principes fondamentaux d’AfriTalent. Elle présente quatre valeurs principales : l’Innovation qui représente la recherche de nouvelles solutions technologiques, l’Accessibilité qui consiste à proposer des solutions simples et accessibles, la Communauté qui encourage la collaboration entre les utilisateurs et l’Excellence qui représente la qualité du travail fourni. Chaque valeur est présentée dans une boîte avec un effet d’ombre grâce à Bootstrap.

La section Chiffres clés permet d’afficher les statistiques importantes de la plateforme. Elle présente le nombre de projets réalisés, de clients satisfaits, de lignes de code et d’années d’expérience. Les classes counter et data-target indiquent que ces chiffres peuvent être animés avec JavaScript afin de créer un effet de compteur dynamique.

Enfin, le Footer termine la page. Il contient le logo AfriTalent, une description de la plateforme, les réseaux sociaux, les liens utiles, les ressources et les informations de contact comme l’adresse mail, le téléphone et la localisation. La mention © 2026 AfriTalent indique les droits réservés du site.

Les scripts placés à la fin du document permettent d’ajouter les fonctionnalités nécessaires. Bootstrap JavaScript assure le fonctionnement des composants interactifs, tandis que main.js gère les fonctionnalités personnalisées comme le mode sombre, les animations et les compteurs.

En résumé, cette page À propos sert à présenter AfriTalent aux visiteurs en montrant son histoire, son équipe, ses valeurs et ses résultats. Le HTML construit les différentes sections, Bootstrap organise la structure et la responsivité, le CSS améliore l’apparence et JavaScript ajoute les interactions pour rendre le site plus dynamique.

CONTACT.HTML
Ton code correspond à la page Contact du site AfriTalent. Cette page permet aux utilisateurs de communiquer avec la plateforme, de retrouver ses coordonnées et de visualiser sa localisation. Elle est développée avec HTML pour créer la structure, CSS pour personnaliser l’apparence, Bootstrap pour faciliter la mise en page et rendre le site responsive, et JavaScript pour ajouter des fonctionnalités interactives.

Le document commence par <!DOCTYPE html> qui indique l’utilisation du langage HTML5, puis la balise <html lang="fr"> précise que la page est en français. Dans la partie <head>, on trouve les informations générales du site comme l’encodage UTF-8 pour afficher correctement les caractères spéciaux, la balise viewport qui permet l’adaptation aux écrans mobiles, le titre “AfriTalent” affiché dans l’onglet du navigateur et les différents liens vers les ressources externes. Le fichier style.css permet de gérer le design de la page, Bootstrap fournit des composants déjà prêts comme les boutons, les formulaires et les grilles, Bootstrap Icons ajoute les icônes utilisées dans le footer et Google Fonts ajoute la police Poppins pour donner un aspect professionnel.

La première partie visible est la barre de navigation (Navbar). Elle contient le logo AfriTalent, le nom de la plateforme et les liens vers les pages principales : Accueil, Freelances, Tarifs, À propos et Contact. Grâce aux classes Bootstrap, la navbar est responsive et s’adapte aux différents appareils. Le bouton avec l’emoji 🌙 est utilisé pour activer le mode sombre avec l’aide du fichier JavaScript main.js, tandis que le bouton “Rejoindre AfriTalent” sert à diriger les utilisateurs vers l’inscription ou l’utilisation de la plateforme.

La partie principale de la page est la section Contactez-nous. Elle utilise une grille Bootstrap avec deux colonnes. La première colonne contient un formulaire permettant aux visiteurs d’envoyer un message. Le formulaire comprend des champs pour saisir le nom, le prénom, l’adresse email et un message. Les classes Bootstrap comme form-control permettent de donner un style propre aux champs et de faciliter leur adaptation sur les différents écrans. Le bouton “Envoyer” utilise la classe btn btn-primary pour obtenir un bouton bleu correspondant au thème du site.

La deuxième colonne présente une carte contenant les coordonnées d’AfriTalent. Elle affiche l’adresse email, le numéro de téléphone et l’adresse de l’entreprise à Dakar, Sénégal. Cette partie utilise le composant Bootstrap card avec une ombre pour avoir un rendu plus moderne. Elle contient également une carte Google Maps intégrée avec une balise <iframe> afin de permettre aux visiteurs de voir directement l’emplacement de l’entreprise.

La dernière partie de la page est le Footer. Il contient le logo AfriTalent, une description de la plateforme, les icônes des réseaux sociaux, les liens importants du site, les ressources disponibles et les informations de contact. Cette partie permet aux visiteurs de retrouver facilement les informations essentielles après avoir parcouru la page. La mention :

© 2026 AfriTalent. Tous droits réservés.

indique les droits d’auteur du site.

Enfin, les scripts JavaScript sont chargés à la fin du document. Le script Bootstrap permet le fonctionnement des éléments dynamiques comme le menu mobile, tandis que le fichier main.js ajoute les fonctionnalités spécifiques du projet comme le mode sombre, les animations ou les interactions avec les boutons.

En résumé, cette page Contact AfriTalent sert à faciliter la communication entre les utilisateurs et la plateforme. Elle regroupe une barre de navigation, un formulaire de contact, les coordonnées de l’entreprise, une carte de localisation et un footer complet. HTML organise les différentes sections, Bootstrap améliore la structure et la responsivité, CSS personnalise le design et JavaScript rend la page interactive.

CSS/STYLE.CSS
Ton code correspond au fichier CSS complet du site AfriTalent. Il sert à donner le style, les couleurs, les animations et l’adaptation aux différents écrans de toutes les pages du projet (Accueil, Freelances, Tarifs, À propos et Contact). Il travaille avec les fichiers HTML et JavaScript pour rendre le site plus professionnel et interactif.

Au début du fichier, la partie navigation (Navbar) définit l’apparence des liens du menu. La classe .nav-link règle l’espacement, la couleur, la taille et l’effet de transition des liens. Au survol (hover), la couleur change en bleu pour donner un effet interactif. La classe .btn-primary personnalise les boutons principaux avec des coins arrondis et un meilleur espacement.

La partie Hero Section correspond à la grande section d’accueil du site. La classe .hero-section crée une zone qui prend toute la hauteur de l’écran avec une image d’arrière-plan, un dégradé de couleur et un centrage du contenu. Elle contient le grand titre, le sous-titre, la description et les boutons d’action. Les classes .subtitle, .description et .cta-buttons permettent de gérer la taille du texte, les espacements et l’organisation des boutons. Les boutons principaux et secondaires possèdent des effets au survol pour améliorer l’expérience utilisateur.

La partie Statistiques permet de styliser les chiffres affichés sur la page d’accueil. La classe .stats-container organise les statistiques horizontalement et permet leur adaptation grâce au responsive design. Les classes liées aux compteurs comme .counter permettent de mettre en valeur les nombres importants de la plateforme.

Ensuite, le fichier contient la partie Mode sombre (Dark Mode). Les variables CSS définies dans :root permettent de gérer les couleurs principales du site comme l’arrière-plan, le texte, la navigation et les couleurs d’accent. Lorsque la classe body.dark ou body.dark-mode est ajoutée par JavaScript, les couleurs changent automatiquement pour appliquer un thème sombre. Cette partie permet au bouton 🌙 de fonctionner et améliore l’accessibilité du site.

La section Navbar dynamique au scroll permet de modifier l’apparence de la barre de navigation lorsque l’utilisateur descend dans la page. Grâce aux transitions et aux effets comme backdrop-filter, la navbar devient plus moderne avec un effet de transparence et d’ombre.

La partie Responsive Design permet au site de s’adapter aux différentes tailles d’écran. Les règles @media définissent les changements pour les tablettes et les téléphones. Elles permettent notamment de :

* réduire la taille des titres ;
* empiler les éléments horizontalement ;
* éviter les débordements sur mobile ;
* adapter automatiquement les images ;
* rendre les cartes et sections compatibles avec les petits écrans.

La section Comment ça marche concerne la présentation des étapes de fonctionnement d’AfriTalent. Les classes .how-it-work, .bento-grid et .card créent une présentation sous forme de cartes avec un effet d’élévation au survol. Les cartes changent légèrement de position avec transform: translateY() pour donner un effet dynamique.

La partie Catégories de services gère les cartes présentant les domaines d’expertise comme le développement web, le design ou le marketing. La classe .category-card ajoute un fond blanc, une bordure, une ombre et une animation au survol. La classe .icon-box personnalise les icônes avec une forme arrondie et un changement de couleur lorsqu’on passe dessus.

La partie Témoignages permet de personnaliser les avis clients. La classe .testimonial-img transforme les images en cercles grâce à border-radius: 50%, ajoute une bordure et une ombre. La classe .testimonial-card organise le contenu des témoignages au centre.

La section CTA (Call To Action) correspond au bloc d’appel à l’action avant le footer. Elle ajoute une image de fond, un filtre sombre, un texte centré et un bouton encourageant les visiteurs à s’inscrire. Les animations au survol rendent le bouton plus attractif.

La partie Footer personnalise le pied de page du site. Elle règle la couleur des liens, les effets au survol, les icônes sociales et l’organisation des différentes colonnes. La classe .footer-container permet d’aligner correctement les différentes parties du footer tout en gardant une bonne adaptation sur mobile.

La section Contact ajoute le style du formulaire de contact. Elle personnalise les champs (input, textarea, select), ajoute des bordures arrondies, des effets lorsqu’un champ est sélectionné et un bouton avec un dégradé. La partie contenant les informations de contact et la carte Google Maps est également stylisée avec des couleurs et des arrondis.

La partie Freelances concerne les cartes des profils freelances. La classe .freelance-card contrôle l’affichage des cartes et .card-img-top ajuste les images pour qu’elles aient toutes la même taille avec object-fit: cover.

La partie À propos contient les styles liés aux cartes de l’équipe, aux sections d’histoire et aux valeurs de l’entreprise. Elle règle la taille des images, les espacements, les couleurs et l’organisation des blocs.

La partie Tarifs personnalise les cartes d’abonnement. La classe .price-card permet d’avoir des cartes de même hauteur et place les boutons toujours en bas. Les icônes de validation et de refus sont espacées pour améliorer la lecture. La FAQ utilise également Bootstrap avec une personnalisation des boutons d’accordéon.

Enfin, les dernières parties ajoutent des animations et fonctionnalités avancées :

* .fade-in-section permet aux sections d’apparaître progressivement lorsqu’elles deviennent visibles grâce au JavaScript ;
* .filter-btn et les règles associées permettent de filtrer les profils freelances par catégorie ;
* les transitions rendent les cartes plus fluides ;
* les animations améliorent l’expérience utilisateur.

En résumé, ce fichier CSS est le moteur visuel complet d’AfriTalent. Il contrôle l’apparence de toutes les pages, les couleurs, les boutons, les cartes, le responsive design, le mode sombre, les animations, les filtres freelances et les effets interactifs. HTML construit le contenu, CSS donne le style et JavaScript ajoute le comportement dynamique.

JS/MAIN.JS
Le projet AfriTalent est un site web vitrine développé avec HTML, CSS, Bootstrap et JavaScript. Il a pour objectif de connecter les entreprises et les freelances à travers une plateforme moderne, professionnelle et responsive.

La structure HTML organise le site en plusieurs grandes parties : une navbar avec le logo et les différents liens de navigation, une section accueil (Hero) présentant la plateforme, une partie freelances permettant de rechercher des profils par catégories, une section tarifs, une page à propos qui présente l’histoire, l’équipe et les valeurs d’AfriTalent, une page contact avec formulaire et coordonnées, ainsi qu’un footer contenant les informations principales du site.

Le fichier CSS permet de personnaliser entièrement l’apparence du site. Il gère les couleurs, les tailles, les espacements, les boutons, les cartes, les images, les animations et l’adaptation sur tous les écrans grâce au responsive design. La navbar possède des effets au survol, les boutons ont des formes arrondies et les cartes bénéficient d’ombres et d’animations pour améliorer l’expérience utilisateur.

La section Hero utilise une image de fond avec un dégradé afin de mettre en valeur le texte principal et les boutons d’action. Les différentes sections utilisent une mise en page avec Bootstrap Grid pour organiser correctement les éléments sur ordinateur, tablette et mobile.

Le système de mode sombre (Dark Mode) permet à l’utilisateur de changer l’apparence du site grâce à un bouton lune. Le JavaScript ajoute ou retire une classe sur le body et utilise le LocalStorage pour mémoriser le choix de l’utilisateur même après avoir quitté le site.

Les animations du site sont réalisées avec JavaScript grâce à l’Intersection Observer. Elles permettent aux sections d’apparaître progressivement pendant le défilement et rendent la navigation plus dynamique. Les chiffres clés du site utilisent également une animation de compteur qui augmente progressivement lorsque la section devient visible.

La partie freelances possède un système de filtrage dynamique. Chaque profil possède une catégorie grâce à l’attribut data-category. Lorsque l’utilisateur clique sur une catégorie, JavaScript récupère le filtre sélectionné et affiche uniquement les freelances correspondants tout en masquant les autres. Une animation est ajoutée lors de l’apparition et de la disparition des cartes.

La page contact contient un formulaire permettant aux visiteurs d’envoyer leurs informations, ainsi qu’un bloc avec les coordonnées de l’entreprise et une carte Google Maps intégrée. Le CSS améliore cette partie avec des champs personnalisés, des effets au focus et une présentation claire.

Le footer termine le site avec le logo AfriTalent, les liens utiles, les ressources, les réseaux sociaux et les informations de contact. Il est également responsive afin de rester adapté aux petits écrans.

En résumé, AfriTalent est un site complet qui possède :

* Une interface moderne et responsive
* Une navigation professionnelle
* Un mode sombre sauvegardé
* Des animations au défilement
* Des compteurs dynamiques
* Un filtrage des freelances par catégorie
* Une page contact fonctionnelle
* Une présentation claire des services et de l’entreprise

L’utilisation combinée du HTML, CSS, Bootstrap et JavaScript permet d’obtenir une plateforme freelance interactive, esthétique et adaptée aux utilisateurs.