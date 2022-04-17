// Pour faire fonctionner le jeu il faut ajouter un écouteur d'événement
// Tout le code va s'y trouver
document.addEventListener('DOMContentLoaded', () => {
    // ici on récupère les éléments du fichier HTML par nom de class
    // pour cela on utilise des sélectuers de requête de document
    // Ce qu'il y a à faire est de sélectionner toutes les divs dans la div dont le nom est 'grid' est nommé les carrés
    const squares = document.querySelectorAll('.grid div')
    // Il faut également sélectionner l'élément span
    const scoreDisplay = document.querySelector('span')
    // Et afficher le score
    const startBtn = document.querySelector('.start')

    

})