/* Catalogue Timfa online shop — utilisé par le site ET par l'espace de gestion.
   imgs : photos supplémentaires d'un bijou (galerie). */
window.TIMFA_CATALOGUE = [
  // ——— Nouvelle collection ———
  {id:"collier-sirene", cat:"Colliers", isNew:true, name:"Collier Queue de Sirène", desc:"Pierres roses et cristal, chaîne dorée.", price:6000, img:"images/n-collier-sirene.jpg", imgs:["images/n-ens-sirene-coeur.jpg","images/n-ens-sirene-noeud.jpg"]},
  {id:"collier-cygne-rose", cat:"Colliers", isNew:true, name:"Collier Cygne Rose", desc:"Cygne pavé de pierres roses, chaîne dorée.", price:6000, img:"images/n-collier-cygne-rose.jpg", imgs:["images/n-ens-cygne-rose.jpg","images/n-ens-coffret-cygne-rose.jpg"]},
  {id:"collier-cygne-flamboyant", cat:"Colliers", isNew:true, name:"Collier Cygne Flamboyant", desc:"Plumes rouges, roses et cristal.", price:6000, img:"images/n-collier-cygne-flamboyant.jpg", imgs:["images/n-ens-cygne-noeud.jpg","images/n-ens-coffret-cygne.jpg"]},
  {id:"collier-halo-violet", cat:"Colliers", isNew:true, name:"Collier Halo Violet", desc:"Pierre violette entourée de brillants.", price:6000, img:"images/n-collier-halo-violet.jpg", imgs:["images/n-ens-halo-liane.jpg","images/promo-violet-gouttes.jpg"]},
  {id:"collier-etoiles", cat:"Colliers", isNew:true, name:"Collier Pluie d’Étoiles", desc:"Six étoiles pavées en cascade.", price:6000, img:"images/n-collier-etoiles.jpg"},
  {id:"bracelet-noeud", cat:"Bracelets & parures", isNew:true, name:"Bracelet Nœud & Cœurs", desc:"Cœurs roses et nœud pavé.", price:5000, imgs:["images/n-ens-cygne-noeud.jpg","images/n-ens-sirene-noeud.jpg"],
   variants:[
     {name:"Doré", color:"linear-gradient(135deg,#f4dca4,#b8893a)", img:"images/n-bracelet-noeud-dore.jpg"},
     {name:"Argenté", color:"linear-gradient(135deg,#f2f2f2,#9aa0a6)", img:"images/n-bracelet-noeud-argente.jpg"}
   ]},
  {id:"bracelet-liane", cat:"Bracelets & parures", isNew:true, name:"Bracelet Liane", desc:"Feuilles et pierres ovales.", price:5000, imgs:["images/n-ens-cygne-rose.jpg","images/n-ens-halo-liane.jpg"],
   variants:[
     {name:"Rose · doré", color:"linear-gradient(135deg,#f6b5c8 50%,#e9c46a 50%)", img:"images/n-bracelet-liane-rose.jpg"},
     {name:"Violet · doré", color:"linear-gradient(135deg,#9b5fd1 50%,#e9c46a 50%)", img:"images/n-bracelet-liane-violet.jpg"},
     {name:"Multicolore · argenté", color:"linear-gradient(135deg,#c79ae6 50%,#d8d8de 50%)", img:"images/n-bracelet-liane-argente.jpg"}
   ]},
  {id:"bracelet-coeur-rose", cat:"Bracelets & parures", isNew:true, name:"Bracelet Cœur Rose", desc:"Cœur rose entouré de brillants, fleurs roses.", price:5000, img:"images/n-bracelet-coeur.jpg", imgs:["images/n-ens-sirene-coeur.jpg"]},
  {id:"bracelet-papillon", cat:"Bracelets & parures", isNew:true, name:"Bracelet Papillon", desc:"Papillon rose et petites fleurs, doré.", price:5000, img:"images/n-bracelet-papillon.jpg"},
  {id:"bracelet-fleurs-violet", cat:"Bracelets & parures", isNew:true, name:"Bracelet Fleur Violette", desc:"Double rang de pierres violettes et une fleur, doré.", price:5000, img:"images/n-bracelet-fleurs-violet.jpg"},
  {id:"collier-trait", cat:"Colliers", name:"Collier Trait de Lumière", desc:"Fine barre pavée de brillants, chaîne dorée.", price:5000, img:"images/n-collier-trait.jpg"},
  {id:"collier-noeud-rose", cat:"Colliers", name:"Collier Nœud Rose", desc:"Nœud de pierres roses, chaîne argentée.", price:5000, img:"images/n-collier-noeud-rose.jpg"},
  {id:"collier-emeraude", cat:"Colliers", name:"Collier Émeraude", desc:"Pierre verte coussin et goutte claire, chaîne dorée.", price:5000, img:"images/n-collier-emeraude.jpg"},
  {id:"parure-feuilles", cat:"Bracelets & parures", name:"Parure Feuilles Vertes", desc:"Collier et bracelet assortis, feuilles vertes et cristal, dorés.", price:7000, img:"images/n-ensemble-feuilles.jpg"},
  {id:"bracelet-arc-en-ciel", cat:"Bracelets & parures", name:"Bracelet Arc-en-ciel", desc:"Baguettes multicolores et brillants, doré.", price:3500, img:"images/n-bracelet-arc-en-ciel.jpg"},
  {id:"bracelet-or", cat:"Bracelets & parures", name:"Bracelet Éclat Doré", desc:"Pierres claires serties en vagues, doré.", price:3500, img:"images/n-bracelet-or.jpg"},
  // ——— Collection ———
  {id:"toi-moi", cat:"Bagues", sub:"toi-moi", name:"Bague Toi & Moi", desc:"Deux pierres qui se rencontrent. Choisissez votre duo.", matiere:"Acier plaqué or, pierres en zircon.", garantie:"Garantie 1 an et plus.", price:5000, was:7000, sizes:["6","7"],
   variants:[
     {name:"Rose & Bleu ciel · doré", color:"linear-gradient(135deg,#f06aa8 50%,#7cc8ef 50%)", img:"images/tm-rose-ciel.jpg"},
     {name:"Émeraude & Cristal · doré", color:"linear-gradient(135deg,#1f9a5a 50%,#e8ecef 50%)", img:"images/tm-emeraude.jpg"},
     {name:"Cristal & Rose · argenté", color:"linear-gradient(135deg,#e8ecef 50%,#e0457f 50%)", img:"images/tm-cristal-rose.jpg"},
     {name:"Saphir & Topaze · argenté", color:"linear-gradient(135deg,#1c3fb8 50%,#69b8e8 50%)", img:"images/tm-saphir.jpg"}
   ]},
  {id:"collier-coeurs", cat:"Colliers", name:"Collier Cœurs Entrelacés", desc:"Deux cœurs pavés de zircons.", price:4000, was:5000,
   variants:[
     {name:"Doré", color:"linear-gradient(135deg,#f4dca4,#b8893a)", img:"images/porte-coeurs.jpg"},
     {name:"Argenté", color:"linear-gradient(135deg,#f2f2f2,#9aa0a6)", img:"images/collier-coeurs-entrelaces.jpg"}
   ]},
  {id:"collier-arc", cat:"Colliers", name:"Collier Arc-en-ciel", desc:"Baguettes multicolores sur chaîne dorée.", price:4000, was:5000, img:"images/collier-arc-en-ciel.jpg"},
  {id:"collier-rose", cat:"Colliers", name:"Collier Goutte Rose", desc:"Cascade de pierres roses, chaîne dorée.", price:4000, was:5000, img:"images/collier-goutte-rose.jpg"},
  {id:"bracelet-coeurs", cat:"Bracelets & parures", name:"Bracelet Deux Cœurs", desc:"Un cœur cristal, un cœur bleu, chaîne dorée.", price:3000, img:"images/bracelet-coeurs.jpg"},
  {id:"collier-goutte", cat:"Colliers", name:"Collier Goutte de Lumière", desc:"Trois pierres en cascade et une goutte claire.", price:4000, was:5000, img:"images/collier-goutte-lumiere.jpg"},
  {id:"bague-fleurs-duo", cat:"Bagues", sub:"fleurs", name:"Bagues Jardin Arc-en-ciel", desc:"Deux anneaux de fleurs colorées, dorés.", price:5000, sizes:["6","7"], img:"images/bague-fleurs-duo.jpg"},
  {id:"parure-feuillage", cat:"Bracelets & parures", name:"Parure Feuillage", desc:"Collier et boucles d'oreilles assortis.", price:null, img:"images/parure-feuillage.jpg"},
  {id:"collier-couronne", cat:"Colliers", name:"Collier Couronne", desc:"Cinq pierres en poire alignées.", price:4000, was:5000, img:"images/collier-couronne.jpg"},
  {id:"collier-riviere", cat:"Colliers", name:"Collier Rivière", desc:"Ligne de pierres et goutte suspendue, argenté.", price:4000, was:5000, img:"images/collier-riviere.jpg"},
  {id:"collier-onyx", cat:"Colliers", name:"Collier Nuit", desc:"Pierre noire coussin entourée d'or.", price:4000, was:5000, img:"images/collier-onyx.jpg"},
  {id:"coffret-coeurs", cat:"Colliers", name:"Coffret Cœurs", desc:"Collier et boucles d'oreilles cœur, en coffret.", price:4000, was:5000, img:"images/coffret-coeurs.jpg"},
  {id:"collier-infini", cat:"Colliers", name:"Collier Infini", desc:"Le symbole de l'infini, discret et élégant.", price:4000, was:5000, img:"images/collier-infini.jpg"},
  {id:"collier-soleil", cat:"Colliers", name:"Collier Soleil & Lune", desc:"Double rang doré, soleil et croissant de lune.", price:4000, was:5000, img:"images/collier-soleil-lune.jpg"},
  {id:"bague-fleurs-soleil", cat:"Bagues", sub:"fleurs", name:"Bague Fleurs Soleil", desc:"Fleurs lavande, cristal, orange et fuchsia, doré.", price:5000, adjustable:true, img:"images/bague-fleurs-soleil.jpg"},
  {id:"bague-fleurs-lavande", cat:"Bagues", sub:"fleurs", name:"Bague Fleurs Lavande", desc:"Fleurs rose, lilas et bleu, argenté.", price:5000, adjustable:true, img:"images/bague-fleurs-lavande.jpg"},
  {id:"bague-solitaire", cat:"Bagues", sub:"solitaire", name:"Bague Solitaire Étoilée", desc:"Grande pierre ronde et quatre petits éclats.", price:5000, adjustable:true, img:"images/bague-solitaire-etoilee.jpg"},
  {id:"bague-ovale", cat:"Bagues", sub:"solitaire", name:"Bague Ovale Torsadée", desc:"Pierre ovale sur anneau torsadé pavé.", price:5000, adjustable:true, img:"images/bague-ovale-torsadee.jpg"}
];

/* Ensembles à composer : la cliente choisit un collier + un bracelet.
   Le stock des deux bijoux baisse. Prix fixe, livraison réduite à Abidjan. */
window.TIMFA_SET = {
  price: 10000,
  colliers: ["collier-cygne-rose","collier-cygne-flamboyant","collier-sirene","collier-halo-violet","collier-etoiles"],
  bracelets: ["bracelet-liane#0","bracelet-liane#1","bracelet-liane#2","bracelet-noeud#0","bracelet-noeud#1","bracelet-coeur-rose","bracelet-papillon","bracelet-fleurs-violet"],
  ideas: [
    {c:"collier-cygne-rose", b:"bracelet-liane#0", img:"images/n-ens-cygne-rose.jpg"},
    {c:"collier-cygne-rose", b:"bracelet-liane#0", img:"images/n-ens-coffret-cygne-rose.jpg", label:"en coffret"},
    {c:"collier-cygne-flamboyant", b:"bracelet-noeud#0", img:"images/n-ens-cygne-noeud.jpg"},
    {c:"collier-cygne-flamboyant", b:"bracelet-liane#2", img:"images/n-ens-coffret-cygne.jpg", label:"en coffret"},
    {c:"collier-sirene", b:"bracelet-coeur-rose", img:"images/n-ens-sirene-coeur.jpg"},
    {c:"collier-sirene", b:"bracelet-noeud#0", img:"images/n-ens-sirene-noeud.jpg"},
    {c:"collier-halo-violet", b:"bracelet-liane#2", img:"images/n-ens-halo-liane.jpg"}
  ]
};

/* Informations affichées dans la fiche de chaque bijou.
   matiere : texte par défaut selon la catégorie (un bijou peut avoir son propre champ « matiere »).
   garantie : laissez vide pour ne pas afficher la rubrique. */
window.TIMFA_INFO = {
  matiere: {
    "Colliers": "Acier inoxydable, pierres en zircon.",
    "Bracelets & parures": "Acier inoxydable, pierres en zircon.",
    "Bagues": "Acier inoxydable, pierres en zircon."
  },
  garantie: {
    "Colliers": "Garantie 2 ans et plus.",
    "Bracelets & parures": "Garantie 6 mois et plus, avec un bon entretien.",
    "Bagues": "Garantie 5 mois et plus."
  },
  entretien: "Pour garder l’éclat : rangez le bijou dans son coffret, évitez le parfum et les produits ménagers, essuyez-le avec un chiffon doux.",
  emballage: "Chaque bijou est livré dans son coffret et son sac Timfa, prêt à offrir 🎁",
  carte: "Carte message offerte : écrivez votre mot, ou laissez-nous l’écrire pour vous."
};

/* Codes promo : code → réduction en F (doit être identique dans le code Apps Script, variable PROMOS) */
window.TIMFA_PROMOS = { "REINE": 500 };
