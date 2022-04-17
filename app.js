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
    let currentUndix = 0 //Nous mettons l'élément premier à 0 car en programmation on commence à compter à 0 
    // première div dans la grid
    let appleIndex = 0 // L'index de l'apple est à 0
    let currentSnake = [2,1,0] // Ici le serpent 2 étant la tête et 0 la queue, 1 étant le corps
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
    
    // Assigner les touches

})