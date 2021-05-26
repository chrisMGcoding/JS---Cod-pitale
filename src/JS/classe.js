class Patient {
    constructor (nom, maladie, argent, poche, etatDeSante) {
        this.nom = nom,
        this.maladie = maladie,
        this.argent = argent,
        this.poche = poche;
        this.etatDeSante = etatDeSante;
        this.traitement = (patient) => {
            if (patient.maladie == "Mal Indenté" && this.argent >= medicament1.prix) {
                this.poche.push(medicament1)
                console.log(`${medicament1.nom} a été ajouté à la poche et coûte ${medicament1.prix}`);
            }
            else if (patient.maladie == "Unsave" && this.argent >= medicament2.prix) {
                this.poche.push(medicament2)
                console.log(`${medicament2.nom} a été ajouté à la poche et coûte ${medicament2.prix}`)
            }
            else if (patient.maladie == "404" && this.argent >= medicament3.prix) {
                this.poche.push(medicament3)
                console.log(`${medicament3.nom} a été ajouté à la poche et coûte ${medicament3.prix}`)
            }
            else if (patient.maladie == "Azmatique" && this.argent >= medicament4.prix) {
                this.poche.push(medicament4)
                console.log(`${medicament4.nom} a été ajouté à la poche et coûte ${medicament4.prix}`)
            }
            else if (patient.maladie == "SyntaxError" && this.argent >= medicament5.prix) {
                this.poche.push(medicament5)
                console.log(`${medicament5.nom} a été ajouté à la poche et coûte ${medicament5.prix}`)
            }
            else {
                cimetiere.nbPersonne.push(this);
                pharmacie.nbPersonne.splice(0, 1);
                console.log(`${this.nom} n'avait pas assez d'argent et est parti au ${cimetiere.nom}`);
            };
        }
        this.goTo = (depart, arrivee) => {
            arrivee.nbPersonne.push(this);
            depart.nbPersonne.splice(0, 1)
            console.log(`${this.nom} est bien arrivé à ${arrivee.nom}`);
        };
        this.takeCare = () => {
            this.poche.splice(0 ,1);
            this.etatDeSante = "Guéri";
            console.log(`${this.nom} a pris son medicament et est ${this.etatDeSante}`);
        };
        this.payerMedecin = (banane) => { 
            this.argent -= 50;
            banane.argent += 50;
            console.log(`il reste ${this.argent}€ à ${this.nom} et ${banane.argent}€ à la pharmacie`)
        };
        this.payerMedicament = () => { 
            let x = this.poche[0].prix;
            this.argent -= x;
            pharmacie.caisse += x;
            console.log(`il reste ${this.argent}€ à ${this.nom} et ${pharmacie.caisse}€ à la pharmacie`)
        };
    }
}

class Lieux {
    constructor (nom, nbPersonne) {
        this.nom = nom;
        this.nbPersonne = nbPersonne;
    }
}

class Pharmacie extends Lieux {
    constructor (nom, nbPersonne, stock, caisse) {
        super(nom, nbPersonne);
        this.stock = stock;
        this.caisse = caisse;
    }
}

class Traitement {
    constructor (nom, prix) {
        this.nom = nom;
        this.prix = prix;

    }
}

let medicament1 = new Traitement("ctrl - maj - f", 60);
let medicament2 = new Traitement("saveOnFocusChange", 100);
let medicament3 = new Traitement("checkLinkRelation", 35);
let medicament4 = new Traitement("Ventoline", 40);
let medicament5 = new Traitement("f12 + doc", 20);

let waitingRoom = new Lieux("Salle d'attente", []);
let cimetiere = new Lieux("Cimetière", []);
let pharmacie = new Pharmacie("Pharmacie", [], [], 0);

export {Patient,Lieux,Pharmacie,Traitement}