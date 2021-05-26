// import des Class

import {Patient,Lieux,Pharmacie,Traitement} from "./classe.js";

// création des instances Patient

let patient1 = new Patient("Marcus", "Mal Indenté", 100, [], "malade");
let patient2 = new Patient("Optimus", "Unsave", 200, [], "malade");
let patient3 = new Patient("Sangoku", "404", 80, [], "malade");
let patient4 = new Patient("DarthVader", "Azmatique", 110, [], "malade");
let patient5 = new Patient("Semicolon", "SyntaxError", 60, [], "malade");

// création des instances Lieux

let waitingRoom = new Lieux("Salle d'attente", []);
let cimetiere = new Lieux("Cimetière", []);
let pharmacie = new Pharmacie("Pharmacie", [], [], 0);

// création des instances Traitement

let medicament1 = new Traitement("ctrl - maj - f", 60);
let medicament2 = new Traitement("saveOnFocusChange", 100);
let medicament3 = new Traitement("checkLinkRelation", 35);
let medicament4 = new Traitement("Ventoline", 40);
let medicament5 = new Traitement("f12 + doc", 20);

// création du stock de la pharmacie

pharmacie.stock.push(medicament1, medicament2, medicament3, medicament4, medicament5);

// création Objet docteur 

let docteur = {
    nom : "Docteur",
    argent : 0,
    cabinet : [],
    diagnostique (patient) {
        if (patient.maladie == "Mal Indenté") {
            console.log(`le traitement pour ${patient.maladie} est ${medicament1.nom}`);
        }
        else if (patient.maladie == "Unsave") {
            console.log(`le traitement pour ${patient.maladie} est ${medicament2.nom}`);
        }
        else if (patient.maladie == "404") {
            console.log(`le traitement pour ${patient.maladie} est ${medicament3.nom}`);
        }
        else if (patient.maladie == "Azmatique") {
            console.log(`le traitement pour ${patient.maladie} est ${medicament4.nom}`);
        }
        else if (patient.maladie == "SyntaxError") {
            console.log(`le traitement pour ${patient.maladie} est ${medicament5.nom}`);
        }
    },
    patientIn (patient) {
        docteur.cabinet.push(patient);
        let x = waitingRoom.nbPersonne.indexOf(patient);
        waitingRoom.nbPersonne.splice(x, 1);
        console.log(`${patient.nom} est entré dans le cabinet`);
        console.log(`on a diagnostiqué un(e) ${patient.maladie} au patient`);
    },
    patientOut (patient) {
        let w = docteur.cabinet.indexOf(patient);
        waitingRoom.nbPersonne.push(patient);
        docteur.cabinet.splice(w, 1);
        console.log(`${patient.nom} a quitté le cabinet`);
    }
}

// début des consultations

waitingRoom.nbPersonne.push(patient1, patient2, patient3, patient4, patient5);

console.log(`il y a actuellement ${waitingRoom.nbPersonne.length} personnes dans la salle d'attente`);

// patient 1

docteur.patientIn(patient1);

docteur.diagnostique(patient1);
patient1.payerMedecin(docteur);

docteur.patientOut(patient1);

patient1.goTo(waitingRoom, pharmacie);

patient1.traitement(patient1);

// patient 2

console.log("-----------------------------");

console.log(`il y a actuellement ${waitingRoom.nbPersonne.length} personnes dans la salle d'attente`);

docteur.patientIn(patient2);

docteur.diagnostique(patient2);
patient2.payerMedecin(docteur);

docteur.patientOut(patient2);

patient2.goTo(waitingRoom, pharmacie);

patient2.traitement(patient2);

patient2.takeCare();

// patient 3

console.log("-----------------------------");

console.log(`il y a actuellement ${waitingRoom.nbPersonne.length} personnes dans la salle d'attente`);

docteur.patientIn(patient3);

docteur.diagnostique(patient3);
patient3.payerMedecin(docteur);

docteur.patientOut(patient3);

patient3.goTo(waitingRoom, pharmacie);

patient3.traitement(patient3);

// patient 4

console.log("-----------------------------");

console.log(`il y a actuellement ${waitingRoom.nbPersonne.length} personnes dans la salle d'attente`);

docteur.patientIn(patient4);

docteur.diagnostique(patient4);
patient4.payerMedecin(docteur);

docteur.patientOut(patient4);

patient4.goTo(waitingRoom, pharmacie);

patient4.traitement(patient4);

patient4.takeCare();

// patient 5

console.log("-----------------------------");

console.log(`il y a actuellement ${waitingRoom.nbPersonne.length} personnes dans la salle d'attente`);

docteur.patientIn(patient5);

docteur.diagnostique(patient5);
patient5.payerMedecin(docteur);

docteur.patientOut(patient5);

patient5.goTo(waitingRoom, pharmacie);

patient5.traitement(patient5);

patient5.takeCare();