// Infos cartes 

const carte_etudiante = document.querySelector("#card1");
const carte_clasique = document.querySelector("#card2");
const carte_vip = document.querySelector("#card_vip #card3");
const carte_etudiante_verso = document.querySelector("#card_etudiante #card1_verso");
const carte_clasique_verso = document.querySelector("#card_clasique #card2_verso");
const carte_vip_verso = document.querySelector("#card_vip #card3_verso");

carte_etudiante.addEventListener("mouseover",()=>{
  carte_etudiante.style.display = "none" ;
  carte_etudiante_verso.style.display = "flex";
});
carte_etudiante_verso.addEventListener("mouseout",()=>{
    carte_etudiante.style.display = "flex" ;
    carte_etudiante_verso.style.display = "none";
  });

  carte_clasique.addEventListener("mouseover",()=>{
    carte_clasique.style.display = "none" ;
    carte_clasique_verso.style.display = "flex";
  });
  carte_clasique_verso.addEventListener("mouseout",()=>{
      carte_clasique.style.display = "flex" ;
      carte_clasique_verso.style.display = "none";
    });

    carte_vip.addEventListener("mouseover",()=>{
      carte_vip.style.display = "none" ;
      carte_vip_verso.style.display = "flex";
    });
    carte_vip_verso.addEventListener("mouseout",()=>{
        carte_vip.style.display = "flex" ;
        carte_vip_verso.style.display = "none";
      });
    
