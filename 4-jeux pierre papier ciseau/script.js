const choixOrdinateurConteneur = document.getElementById("choix-ordinateur");
const choixUtilisateurConteneur = document.getElementById("choix-utilisateur");
const resultat = document.getElementById("resultat");
const boutonChoix = document.querySelectorAll("button");

let choixUtilisateur, choixOrdinateur, reponse;

boutonChoix.forEach((choixPossible) =>
	choixPossible.addEventListener("click", (e) => {
        e.preventDefault();
		choixUtilisateur = e.target.id;
		choixUtilisateurConteneur.innerHTML = `<img src ="img/${choixUtilisateur}.jpeg">`;
		genererChoixOrdinateur();
        verification();
	})
);

const genererChoixOrdinateur = () => {
	reponse = Math.floor(Math.random() * 3 + 1);
	choixOrdinateur =
		reponse === 1 ? "pierre" : reponse === 2 ? "papier" : "ciseau";
	choixOrdinateurConteneur.innerHTML = `<img src ="img/${choixOrdinateur}.jpeg">`;
};

const verification = () => {
	reponse =
		choixOrdinateur == choixUtilisateur
			? "égalité"
			: (choixUtilisateur == "papier" && choixOrdinateur == "ciseau") ||
			  (choixUtilisateur == "ciseau" && choixOrdinateur == "pierre") ||
			  (choixUtilisateur == "pierre" && choixOrdinateur == "papier")
			? "Perdu !"
			: "Gagné !";
            resultat.innerHTML = reponse;
};
