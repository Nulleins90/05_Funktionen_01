/***** Funktionen 01 *****/

// ausgabeNamen();

// function ausgabeNamen() {
//     let firstName = "Jan";
//     console.log("Hallo " + firstName + "!");
// }


// Möglichkeit 2
// ausgabeNamenPara();
// ausgabeNamenPara("Hans");
// ausgabeNamenPara(prompt("Vorname?:"));

// function ausgabeNamenPara(firstName) {
//     if (firstName == "" || firstName == undefined) {
//         firstName = "niemand";
//     }
//     // if (firstName == undefined) {
//     //     firstName = "nobody";
//     // }
//     console.log("Hallo " + firstName + "!");
// }

// mehrere Parameter

// ausgabeNamenParas("Hans", "Wurst");
// ausgabeNamenParas(prompt("Vorname?"), prompt("Nachname?"));
// function ausgabeNamenParas(firstName, familyName) {
//     if (firstName == "" || firstName == undefined) {
//         firstName = "Niemand";
//     }
//     if (familyName == "" || familyName == undefined) {
//         familyName = "Niemandssohn";
//     }
//     console.log("Hallo " + firstName + " " + familyName + "!");
// }

// single responsibility principle

function ausgabeNamenParams2(firstName, familyName) {

    // 1. Funktionalität: string composing
    const outputStr = "Hallo " + firstName + " " + familyName + "!";

    // 2. Funktionalität: data output
    console.log(outputStr);    
}

ausgabeNamenParams2("Max", "Mütze");