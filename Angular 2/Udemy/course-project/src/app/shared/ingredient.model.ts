export class Ingredient {
  constructor(public name: string, public amount: number) { }
}

// The above class is a shorthand method to write the full class under
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name, amount){
//         this.name = name;
//         this.amount = amount;
//     }
// }