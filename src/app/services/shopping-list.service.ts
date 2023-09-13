import { EventEmitter, Injectable } from "@angular/core";
import { ingredientMock1, ingredientMock2 } from "src/mocks/ingredient.mock";
import { Ingredient } from "src/models/ingredient.model";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [ingredientMock1, ingredientMock2];

  addIngredient(ingredient: Ingredient): void {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }
}
