/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Daniel'
}

const pasajero2: Pasajero = {
    nombre: 'Jessica',
    hijos: ['Elizabeth', 'Elias']
}

function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos( pasajero1 );