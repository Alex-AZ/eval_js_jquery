// Calcul moyenne
const notes = [8, 15, 18];
const moyenne = calcul(notes);

function calcul(notes) {
    let somme = 0;

    notes.forEach(note => {
        somme += note;
    })

    return somme / notes.length;
}

console.log(moyenne);

// Calcul moyenne + mention
const notes2 = [8, 15, 18];

function mention(notes) {
    let somme = 0;

    notes.forEach(note => {
        somme += note;
    })

    const moy = somme / notes.length;

    if (moy > 16) {
        return 'Très bien';
    } else if (moy > 10) {
        return 'Assez bien';
    } else {
        return 'Fail';
    }
}

console.log(mention(notes2));

// Trouver taille string
const toto = 'toto';

console.log(toto.length);
console.log(toto[1]);
console.log(toto[toto.length - 1]);

// Trouver taille array
const name = 'toto';
const age = 28;
const passions = ['tata', 'titi'];
const array = [name, age, passions];

console.log(array.length);
console.log(array[0].length);
console.log(array[2][1]);

// Trouver initiales
const nameBis = 'toto';
const firstName = 'titi';
const initials = nameBis[0] + firstName[0];

const phraseDeBienvenue = [];
phraseDeBienvenue.push(name, firstName, initials);

console.log(phraseDeBienvenue);

// Class - IMC
class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc() {
        return (this.poids / (this.taille * this.taille)).toFixed(2);
    }

    display() {
        console.log(`Nom : ${this.nom} | Poids : ${this.poids} | Taille : ${this.taille} | IMC : ${this.calculImc()}`);
    }
}

const list = [
    new Imc('Sébastien Chabal', 135, 1.89),
    new Imc('Julien Meyer', 52, 1.60),
    new Imc('Toto Titi', 60, 1.75)
];

list.forEach(imc => {
    imc.display();
});

// Ma petite entreprise
class Salarie {
    constructor(nom, prenom, age, salaireMensuel) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
    }

    n = 12; // Nombre de mois
    xxx = 90; // Charges

    salaireAnnuel() {
        return (this.salaireMensuel * this.n) + ((this.salaireMensuel * this.n) * this.xxx / 100);
    }
}

class Pme {
    constructor(nom, salaries) {
        this.nom = nom;
        this.salaries = salaries;
    }

    r = 300000; // Revenus de ventes
    ff = 20000; // Frais fixes
    fa = 50000; // Frais achat de matériel

    calculBilanAnnuel() {
        return this.r - this.ff - this.fa - this.calculTotalSalairesAnnuel();
    }

    calculTotalSalairesAnnuel() {
        let totalSalaires = 0;

        this.salaries.forEach(salarie => {
            totalSalaires += salarie.salaireAnnuel();
        });

        return totalSalaires;
    }
}

const pme = new Pme('ADRAR', [
    new Salarie('Toto', 'Titi', 25, 2000),
    new Salarie('Tata', 'Tutu', 30, 3000),
    new Salarie('Tonton', 'Tantan', 40, 4000)
]);

console.log(pme.calculBilanAnnuel());

// Comptes bancaires
class CompteBancaire {
    constructor(nom) {
        this.nom = nom;
        this.solde = 0;
    }

    credit(montant) {
        this.solde += montant;
        console.log(`Ajout de: ${montant} pour: ${this.nom}`);
    }

    retrait(montant) {
        try {
            if (this.solde >= montant) {
                this.solde -= montant;
                console.log(`Retrait de: ${montant} pour: ${this.nom}`);
            } else {
                throw new Error();
            }
        } catch (e) {
            console.log(`----->${this.nom}, retrait de: ${montant} refusé avec solde: ${this.solde}`);
        }
    }

    virement(compteBeneficiaire, montant) {
        console.log(`Virement de: ${montant} de: ${this.nom} vers: ${compteBeneficiaire.nom}`);
        this.retrait(montant);
        compteBeneficiaire.credit(montant);
    }

    display() {
        console.log(`Titulaire: ${this.nom}, solde: ${this.solde}`);
    }
}

const clients = {
    alex: new CompteBancaire('Alex', 1000),
    clovis: new CompteBancaire('Clovis', 1000),
    marco: new CompteBancaire('Marco', 1000)
};

clients.alex.credit(1000);
clients.clovis.credit(1000);
clients.marco.credit(1000);
clients.alex.retrait(100);
clients.marco.virement(clients.clovis, 300);
clients.alex.retrait(1200);
clients.alex.display();
clients.clovis.display();
clients.marco.display();

// Supprimer voyelles
document.getElementById('toto').addEventListener('keyup', e => {
    let newValue = '';

    e.target.value.split('').forEach(letter => {
        if (!['a', 'e', 'i', 'o', 'u', 'y'].includes(letter)) {
            newValue += letter;
        }
    });

    console.log(newValue);
});

// Regex login / mot de passe
const errorDiv = document.getElementById('error');

document.getElementById('login').addEventListener('keyup', e => {
    const regex = /.+@.+\..+/;
    e.target.style.backgroundColor = regex.test(e.target.value) ? 'green' : 'red';
});

document.getElementById('password').addEventListener('keyup', e => {
    const regex = /^(?=.+\d)(?=.+\w)(?=.+[-_,?;.:/!]).{6,8}$/;

    if (regex.test(e.target.value)) {
        errorDiv.style.border = '1px solid green';
        errorDiv.textContent = 'ok';
    } else {
        errorDiv.style.border = '1px solid red';
        errorDiv.textContent = 'Le mot de passe doit contenir entre 6 et 8 caractères, dont au moins un chiffre, '
    }
});

// Editeur de texte + local storage
const divDisplay = document.getElementById('local-storage-display');
const input = document.getElementById('local-storage-input');

if (localStorage.getItem('divDisplay')) {
    input.value = localStorage.getItem('divDisplay');
}

input.addEventListener('keyup', e => {
    divDisplay.innerHTML = marked(e.target.value);
    localStorage.setItem('divDisplay', divDisplay.textContent);
});