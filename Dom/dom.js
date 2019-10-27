// Pour sélectionner un élément
document.documentElement // HTML
document.body // Récupère l'élément body
document.getElementById('demo') // Sélectionne l'élément avec l'id demo
document.querySelector('.demo') // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
document.getElementsByClassName('demo') // Sélectionne les éléments avec la class démo
document.getElementsByTagName('p') // Sélectionne les éléments <p>
var elements = document.querySelectorAll('.demo') // Sélectionne les éléments correspondant au sélecteur CSS
// Ces méthodes renvoient un objet NodeList enumerable
// On peut parcourir cette liste d'éléments comme un tableau
for (var i = 0; i < elements.length; ++i) {
    var element = elements[i] // objet de type Element
}


element.getAttribute('attribut') // Permet de récupérer la valeur d'un attribut
element.style // Permet de récupérer les styles associés à l'élément
element.classList // Permet de récupérer la liste des classes associées à un élément
element.offsetHeight // Donne la hauteur réel de l'élément


element.setAttribute('href', 'http://grafikart.fr')
element.style.fontSize = '24px'
element.classList.add('red') // Ajoute une class à l'élément

//Traverser DOM
element.childNodes // Renvoie tous les noeuds enfant (même les noeuds textes)
element.children // Renvoie tous les noeuds éléments
element.firstChild // Récupère le premier enfant
element.firstElementChild // Récupère le premier enfant de type element
element.previousElementSibling
element.nextElementSibling
element.parentNode
element.parentElement //like parentNode but it can be null

//Modifier un element
element.appendChild(enfant) // ajoute un élément à un autre
element.removeChild(enfant) // supprime un enfant
element.textContent = 'Salut' // Change la valeur du noeud texte
element.innerHTML // Renvoie le contenu HTML de l'élément
parentElement.insertBefore(nouvelElement, refElement)