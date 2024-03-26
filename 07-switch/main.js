// USO DE SWITCH

const edad = 2;

// if(edad === 1) {
//     console.log("Tienes un año");
// } else if(edad === 2) {
//     console.log("Tienes dos años");
// } else if(edad === 3) {
//     console.log("Tienes tres años");
// } else if(edad === 4) {
//     console.log("Tienes cuatro años");
// } else if(edad === 5) {
//     console.log("Tienes cinco años");
// } else if(edad === 6) {
//     console.log("Tienes seis años");
// }

switch(edad) {

    case 1: // Solo si "edad" es 1
        console.log("Tienes 1 año");
        break; // Rompe el ciclo de evaluación, no procede con las siguientes
    
    case 2: // Solo si "edad" es 2
        console.log("Tienes dos años");
        break;
    
    case 10: // Solo si "edad" es 10
        console.log("Tienes 10 años");
        break;
    
    default: // Es como un else
        console.log("No esta contemplada tu edad");
        break;
}
