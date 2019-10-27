var p = document.querySelector('p')
p.addEventListener('click', function(e) {
    window.alert('Vous avez cliquer sur le lien')
    console.log(e.target)
})

// Par exemple pour détecter un clic sur un lien
element.addEventListener('click', function (e) {
    e.preventDefault() // Annule l'évènement
    e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    e.target // contient l'élément sur lequel on a cliqué
    e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur
})

//supprimer evenement
var next = function () {
    this.classList.add('red')
    this.removeEventListener('click', next)
}
element.addEventListener('click', next)