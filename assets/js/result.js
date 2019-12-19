let transportValue;
let cadeauxValue;
let nourritureValue = 0;
let decoValue;

console.log(nourritureValue);
console.log(transportValue);
console.log(cadeauxValue);
console.log(decoValue);

var profil=0;
document.getElementById("mon-profil").addEventListener("click", function () {
    let t = parseInt(document.getElementById("value-t").innerText);
    let c = parseInt(document.getElementById("value-c").innerText);
    let n = parseInt(document.getElementById("value-n").innerText);
    let d = parseInt(document.getElementById("value-d").innerText);

    profil = t + c + n + d;

    if (profil <= 5) {
        document.getElementById("result-test").innerHTML="Pas question de proposer un de ces produits de grande consommation à Noël! Des légumes de saison, des cadeaux d'artisans locaux, et tout le monde en vélo. Tu épargne la planête et elle t'en remercie !";
        document.getElementById("result-title").innerHTML="Saint";
        document.getElementById("result-sub").innerHTML="Fervent défenseur responsable";
        document.getElementById("result-img").src="img/profil/angel.png";

    }else if (profil <= 7) {
        document.getElementById("result-test").innerHTML="Tu évites de prendre l'avion pour rejoindre ta famille à 1h de chez toi et tu préfères proposer des bons produits à Noël! Tu es sur la bonne voie! Encore quelques efforts pour qu'on vive dans un monde meilleur !";
        document.getElementById("result-title").innerHTML="Acteur concerné";
        document.getElementById("result-sub").innerHTML="De bons efforts";
        document.getElementById("result-img").src="img/profil/good.png";
    }else if (profil <= 9) {
        document.getElementById("result-test").innerHTML="Il t'arrive parfois d'avoir des remords quand tu prends ton gros 4x4 mais cela ne dure qu'entre 2 bouchées de la bonne dinde bien charnue de noël. Réveille-toi et agis !";
        document.getElementById("result-title").innerHTML="Diablotin";
        document.getElementById("result-sub").innerHTML="Tu n'es pas encore perdu !";
        document.getElementById("result-img").src="img/profil/evil.png";
    }else if (profil <= 12) {
        document.getElementById("result-test").innerHTML="Tu n'as que faire de l'écologie et tu ne te prends pas la tête avec ces histoires de responsabilité. Tu es un vrai démon !";
        document.getElementById("result-title").innerHTML="Démon";
        document.getElementById("result-sub").innerHTML="Vil capitaliste";
        document.getElementById("result-img").src="img/profil/demon.png";
    }
    console.log(profil);
});

