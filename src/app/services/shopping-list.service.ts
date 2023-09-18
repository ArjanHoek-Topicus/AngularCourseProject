import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ingredientMock1, ingredientMock2 } from "src/mocks/ingredient.mock";
import { Ingredient } from "src/models/ingredient.model";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  private ingredients = new BehaviorSubject<Ingredient[]>([
    ingredientMock1,
    ingredientMock2,
  ]);
  public ingredients$ = this.ingredients.asObservable();

  addIngredient(ingredient: Ingredient): void {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.next([...this.ingredients.getValue(), ...ingredients]);
  }
}
