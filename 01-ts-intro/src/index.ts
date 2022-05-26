
/*
    ===== Código de TypeScript =====
*/

class Heroe {
    //  public alterEgo: string;
    //  public edad: number;
    //  public nombreReal: number;

     constructor(
         public alterEgo: string,
         public edad?: number,
         public nombreReal?: string
         ) {}
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);
