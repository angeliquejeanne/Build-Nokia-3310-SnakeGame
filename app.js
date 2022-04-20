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
    let currentIndex = 0 // Nous mettons l'élément premier à 0 car en programmation on commence à compter à 0 
    let appleIndex = 0 // L'index de l'apple est à 0
    let currentSnake = [2,1,0] // Ici le serpent 2 étant la tête et 0 la queue, 1 étant le corps il grandit de 1 à chaque apple mangé
    let direction = 1 // Avance de 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
  
  
    // démarrer et redémarrer le jeux
    function startGame() {
      currentSnake.forEach(index => squares[index].classList.remove('snake'))
      squares[appleIndex].classList.remove('apple')
      clearInterval(interval)
      score = 0
      randomApple()
      direction = 1
      scoreDisplay.innerText = score
      intervalTime = 1000
      currentSnake = [2,1,0]
      currentIndex = 0
      currentSnake.forEach(index => squares[index].classList.add('snake'))
      interval = setInterval(moveOutcomes, intervalTime)
    }
  
  
    // fonction qui traite de tous les résultats possibles du serpent
    function moveOutcomes() {
        // gère le serpent qui rentre dans une bordure ou qui se mort la queue
  
      if (
        (currentSnake[0] + width >= (width * width) && direction === width ) || // si le serpent touche mur le bas
        (currentSnake[0] % width === width -1 && direction === 1) || // si le serpent touche le mur de droite
        (currentSnake[0] % width === 0 && direction === -1) || // si le serpent touche le mur de gauche
        (currentSnake[0] - width < 0 && direction === -width) ||  // si le serpent touche le mur haut
        squares[currentSnake[0] + direction].classList.contains('snake') // si le serpent se touche
      ) {
        return clearInterval(interval) // Efface l'interval si une des situation si dessous se produit
      }
  
      const tail = currentSnake.pop() // retire le dernier emplacement de la queue et donne une direction juste à la tête
      squares[tail].classList.remove('snake')  // enlève la class du serpent de la queue
      currentSnake.unshift(currentSnake[0] + direction) // donne la direction à la tête du serpent
  
      // gère le serpent qui mange une pomme
      if(squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        randomApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(interval)
        intervalTime = intervalTime * speed
        interval = setInterval(moveOutcomes, intervalTime)
      }
      squares[currentSnake[0]].classList.add('snake')
    }
  
  
    //generate new apple once apple is eaten
    function randomApple() {
      do{
        appleIndex = Math.floor(Math.random() * squares.length)
      } while(squares[appleIndex].classList.contains('snake')) //making sure apples dont appear on the snake
      squares[appleIndex].classList.add('apple')
    }
  
  
    // Assigner les touches du clavier pour le dépacement à travers la grille/tableau
      // création d'une function e pour faire monter dessendre le serpent, aller à gauche ou droite en fonction de la touche sur laquelle on appuis
    function control(e) {
      squares[currentIndex].classList.remove('snake') // supprime la class de snake
      // instruction if indiquant que si nous appuyons sur le bouton flèche droite du clavier le serpent ira à droite de 1
  
      if(e.keyCode === 39) {
        direction = 1 // si nous appyons sur la flèche de droite le serpent ira à droite de 1
      } else if (e.keyCode === 38) {
        direction = -width // si nous appuyons sur la flèche du haut le serpent reviendra en arrière de 10 divs et semblera monter
      } else if (e.keyCode === 37) {
        direction = -1 // si nous appuyons sur la gauche le serpent ira dans cette direction d'1 div
      } else if (e.keyCode === 40) {
        direction = +width // si nous appuyons sur le bouton, la tête du serpent apparaîtra instantanément dans la div à 10 divs de l'endroit où on est actuellement
      }
    }
    // ecouteur d'événements pour chaque fois qu'une touche est enfoncée pour exécuter le contrôle de la fonction
    // maintenant que les keycode sont attribuée aux mouvements du serpent
    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
  })
  