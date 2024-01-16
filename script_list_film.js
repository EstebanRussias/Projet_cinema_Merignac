const loupe_active = document.querySelector("#loupe");
const affiche_recherche = document.querySelector("#div_Recherche");
const input_recherche = document.querySelector("#input_recherche");
const resultat_recherche = document.querySelector("#div_Recherche_affiche_films");

let etat_recherche = 0;
let input_etat = 0;


let img_01 = document.querySelector("#img_01_recherche");
let img_02 = document.querySelector("#img_02_recherche");
let img_03 = document.querySelector("#img_03_recherche");

let titre_01 = document.querySelector("#titre_01_recherche");
let titre_02 = document.querySelector("#titre_02_recherche");
let titre_03 = document.querySelector("#titre_03_recherche");


loupe_active.addEventListener("click", () => {
  if (etat_recherche === 1) {
    affiche_recherche.style.display = "none";
    resultat_recherche.style.display = "none";
    etat_recherche = 0;
    loupe_active.src = "img/loupe.png";
    console.log("etat recherche = 0");
  } else {
    affiche_recherche.style.display = "flex";
    etat_recherche = 1;
    console.log("etat recherche = 1");
    loupe_active.src = "img/X_annul.png";
  }
});

input_recherche.addEventListener("input", () => {
    input_etat = 1 
    resultat_recherche.style.display = "flex";
    console.log("input_etat = 1");
  // Récupère la valeur de l'input en temps réel
  let input_recherche_VALEUR = input_recherche.value.toLowerCase();

  // Filtrer les résultats en fonction de la valeur de l'input
  let resultatsFiltres = liste_des_nom_films.filter((film) =>
    film.toLowerCase().includes(input_recherche_VALEUR)
  );

  // Affiche les résultats filtrés
  afficherResultats(resultatsFiltres);
});

function afficherResultats(resultats) {
  // Affiche les résultats dans la console 
  console.log("Résultats de la recherche :", resultats);
  titre_01.innerHTML = resultats[0];
  
  if (resultats[1] != null) {
    titre_02.innerHTML = resultats[1];
    
    
    if (resultats[2] != null) {
        titre_03.innerHTML = resultats[2];
      }
      else{
        titre_03.innerHTML = "";
        img_03.style.display = "none";
      }
      
  }
  else{
    titre_02.innerHTML = "";
    img_02.style.display = "none";
  }
  
}

let liste_des_nom_films = [
  "Wonka",
  "les inseparables",
  "follow dead",
  "a jamais les premier",
  "shttl",
  "le balais libéré",
  "fight club","documentaire", "reportage", "animations", "horreur"
];


let source_image = [
  ""
]
