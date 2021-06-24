export class Ingredient {
  // This way of creating a constructor automatically makes
  // name and amount available, without declaring them above
  // and assigning them within the constructor
  constructor(public name: string, public amount: number) {}
}