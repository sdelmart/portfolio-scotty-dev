// Calculatrice - JavaScript

// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
  if (listeKeycode.includes(e.keyCode.toString())) {
    calculer(String.fromCharCode(e.keyCode));
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bouton')) {
    calculer(e.target.innerText);
  }
})

const calculer = (valeur) => {
  switch(valeur) {
    case 'C':
      ecran.textContent = '';
      break;
    case '=':
      try {
        // Remplacer les symboles pour que eval() comprenne
        let expression = ecran.textContent
          .replace(/÷/g, '/')
          .replace(/×/g, '*');
        
        // Évaluer l'expression
        const resultat = eval(expression);
        
        // Afficher le résultat
        ecran.textContent = resultat;
      } catch(e) {
        ecran.textContent = 'Erreur';
        setTimeout(() => {
          ecran.textContent = '';
        }, 1500);
      }
      break;
    default:
      ecran.textContent += valeur;
  }
}

// Gestion des erreurs
window.addEventListener('error', (e) => {
  console.log(e);
})

// Empêcher le comportement par défaut sur les touches
document.addEventListener('keydown', (e) => {
  if (['8', '109', '107', '106', '111'].includes(e.keyCode.toString())) {
    e.preventDefault();
  }
});
