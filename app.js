// Pour faire fonctionner le jeu il faut ajouter un écouteur d'événement
// Tout le code va s'y trouver
document.addEventListener('DOMContentLoaded', () => {
    // ici on récupère les éléments du fichier HTML par nom de class
    // pour cela on utilise des sélectuers de requête de document
    // Ce qu'il y a à faire est de sélectionner toutes les divs dans la div dont le nom est 'grid' est nommé les carrés
    const squares = document.querySelectorAll('.grid div')
    // Il faut également sélectionner l'élément span et afficher le score
    const scoreDisplay = document.querySelector('span')
    // Pour le bouton de démarrage 
    const startBtn = document.querySelector('.start')

    // On va définir la largeur de nos éléments
    const width = 10
    // première div dans la grid
    let currentIndex = 0 //Nous mettons l'élément premier à 0 car en programmation on commence à compter à 0 
    // première div dans la grid
    let appleIndex = 0 // L'index de l'apple est à 0
    let currentSnake = [2,1,0] // Ici le serpent 2 étant la tête et 0 la queue, 1 étant le corps il grandit de 1 à chaque apple mangé
    let direction = 1 // Avance de 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
    
    // Assigner les touches du clavier pour le dépacement à travers la grille/tableau
    // création d'une function e pour faire monter dessendre le serpent, aller à gauche ou droite en fonction de la touche sur laquelle on appuis
    function control(e){
        squares [currentIndex].classList.remove('snake') // supprime la class de snake
        // instruction if indiquant que si nous appuyons sur le bouton flèche droite du clavier le serpent ira à droite
        if(e.keyCode === 39) {
            direction = 1
        } else if (e.keyCode === 38) {
            direction = -width // 
        }
    }

})