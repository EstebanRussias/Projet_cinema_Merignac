const bouton_g_carousel = document.querySelector("#carousel_fleche_g");
const bouton_d_carousel = document.querySelector("#carousel_fleche_d");
let titre_carousel = document.querySelector("#titre_carousel");
let texte_carousel = document.querySelector("#texte_carousel");
let img = document.querySelector("#img_carousel");
let car_op = document
  .querySelector("#img_carousel")
  .addEventListener("mouseover", stopCarouselAuto);
let car_c = document
  .querySelector("#img_carousel")
  .addEventListener("mouseout", startCarouselAuto);

let btn_droit_op = document
  .querySelector("#carousel_fleche_d")
  .addEventListener("mouseover", stopCarouselAuto);
let btn_droit_c = document
  .querySelector("#carousel_fleche_d")
  .addEventListener("mouseout", startCarouselAuto);

let btn_gauche_op = document
  .querySelector("#carousel_fleche_g")
  .addEventListener("mouseover", stopCarouselAuto);
let btn_gauche_c = document
  .querySelector("#carousel_fleche_g")
  .addEventListener("mouseout", startCarouselAuto);

let id_img = 0;
let intervalId;

let liste_carousel = [
  [
    `Concert de noel White Christmas`,
    "André Rieu vous compte l'épopée du père noel en musique",
    "img/5b41db7075c278dc3c60fb0a443a189b.jpg",
  ],
  [
    `Avant première du Film Wonka`,
    "Vous l'avez adoré dans Charlie et la chocolaterie, Willy Wonka reviens pour un deuxième film",
    "img/01daeb80bd68e20d5120352dfca5c56f.jpg",
  ],
  [
    `Les Inséparables`,
    "Un film d'animation pour petits et grands",
    "img/0362763.jpg-r_2000_x-f_jpg-q_x-xxyxx.jpg",
  ],
  [
    `Avant première du Film Les III Mousquetaires Milady`,
    "Après avoir déjoué le complot visant à assassiner le roi, Dartagan va devoir affronter un nouvel ennemi",
    "img/84f8e5f0221d31247cf541751b4005fa.jpg",
  ],
];

let type_films = document.querySelectorAll("type");

type_films.forEach((type_film) => {
  type_film.textContent = "test";
});

function Carousel(id) {
  titre_carousel.textContent = liste_carousel[id][0];
  texte_carousel.textContent = liste_carousel[id][1];
  img.src = liste_carousel[id][2];
}

function startCarouselAuto() {
  intervalId = setInterval(() => {
    id_img += 1;
    if (id_img === liste_carousel.length) {
      id_img = 0;
    }
    Carousel(id_img);
  }, 5000);
}

function stopCarouselAuto() {
  clearInterval(intervalId);
}

bouton_g_carousel.addEventListener("click", (event) => {
  stopCarouselAuto();
  id_img = id_img - 1;
  if (id_img === -1) {
    id_img = liste_carousel.length - 1;
  }
  Carousel(id_img);
  console.log(id_img);
});

bouton_d_carousel.addEventListener("click", (event) => {
  stopCarouselAuto();
  id_img = id_img + 1;
  if (id_img === liste_carousel.length) {
    id_img = 0;
  }
  Carousel(id_img);
  console.log(id_img);
});

function redo_anim(nb) {
  console.log(nb);
  let anim_films = document.querySelectorAll(".taille_sortie_semaine_film");

  anim_films.forEach((anim_film) => {
    anim_film.classList.remove("fade-down");
  });

  if (nb >= 0 && nb < 240) {
    anim_films.forEach((anim_film) => {
      anim_film.classList.remove("fade-down");
      anim_film.style.display = "none";
    });
  } else
    anim_films.forEach((anim_film) => {
      anim_film.classList.add("fade-down");
      anim_film.style.display = "flex";
    });
}

window.addEventListener("scroll", function () {
  scroll_nb = window.scrollY;
  redo_anim(scroll_nb);
});



//   création de la page de présentation pour chaque film
let liste_film = [
  [
    "Wonka",
    "https://fr.web.img2.acsta.net/c_310_420/pictures/23/12/05/14/56/1249162.jpg",
    "famille",
  ],
  [
    "les inséparables",
    "https://fr.web.img5.acsta.net/c_310_420/pictures/23/11/24/13/31/4507914.jpg",
    "animation",
  ],
  [
    "Follow Dead",
    "https://fr.web.img5.acsta.net/c_310_420/pictures/23/11/03/16/35/3850040.jpg",
    "thriller",
  ],
  [
    "A jamais les premiers",
    "https://fr.web.img4.acsta.net/c_310_420/pictures/23/11/21/15/14/0724655.jpg",
    "sport",
  ],
  [
    "shttl",
    "https://fr.web.img3.acsta.net/c_310_420/pictures/23/11/23/15/12/1656943.jpg",
    "action",
  ],
  [
    "Le balais libéré",
    "https://fr.web.img6.acsta.net/c_310_420/pictures/23/11/27/09/11/1460572.jpg",
    "comédie",
  ],
  [
    "Fight Club",
    "https://fr.web.img4.acsta.net/c_310_420/pictures/23/12/07/09/17/5988972.jpg",
    "action",
  ],
];


Carousel(id_img);
startCarouselAuto();
