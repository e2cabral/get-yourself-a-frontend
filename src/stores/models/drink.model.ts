export class Drink {
  constructor(
    id: number,
    name: string,
    category: string,
    preparation: string,
    image: string,
    ingredients: Array<any>
  ) {
    this.id = id
    this.name = name
    this.category = category
    this.preparation = preparation
    this.image = image
    this.ingredients = ingredients
  }

  public id: number
  public name: string
  public category: string
  public preparation: string
  public image: string
  public ingredients: Array<any>
}