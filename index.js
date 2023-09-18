// Récupere la case "masquer les paroles"
const masquerParole = document.getElementById("masquer-paroles");
const mesParoles = document.getElementById("paroles");
const lyric = masquerParole.nextSibling; // renvoie le noeud suivant
const hr = document.querySelector("hr");

// ajoute une fonction à l'évènement "click" masquerParoles
masquerParole.addEventListener('click', function (event) { 
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  if (event.target.checked) {
    // la case vient d'être cochée
    mesParoles.style.display = 'none'; // masquer les paroles
    lyric.textContent = 'Afficher les paroles';
    hr.style.display = "none"
  } else {
    // la case vient d'être decochée
    mesParoles.style.display = 'block';
    lyric.textContent = 'Masquer les paroles';
    hr.style.display = "block"
  }
});


// 2é Question
const masquerRefrain = document.getElementById('masquer-refrains')
const refrain = document.querySelectorAll('.refrain');
const hidden = document.querySelectorAll('.hidden');
const contenu = document.querySelectorAll('.contenu');
const lyric2 = masquerRefrain.nextSibling;
// Attache une fonction à l'évènement "click" sur checkboxParoles
masquerRefrain.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  for (let i = 1; i < refrain.length; i++) {
  
  if (event.target.checked) {
    // la case vient d'être cochée
    contenu[i].style.display = 'none';
    hidden[i].style.display = 'block';
    lyric2.textContent = 'Afficher les refrains';
   hidden[i].addEventListener("mouseenter", () => {
    contenu[i].style.display = 'block';
   })
   hidden[i].addEventListener("mouseleave", () => {
    contenu[i].style.display = 'none';
   })
  } else {
    // la case vient d'être decochée
    lyric2.textContent = 'Masquer les refrains';
    contenu[i].style.display = 'block';
    hidden[i].style.display = 'none';
  }
}
});

// 4e Question
const paragraph = document.querySelectorAll('p');
paragraph.forEach(element => {
  element.style.margin = "0";
})