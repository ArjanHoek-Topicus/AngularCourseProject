import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  startWith,
  withLatestFrom,
} from "rxjs";
import { ingredientMock1, ingredientMock2 } from "src/mocks/ingredient.mock";
import { Ingredient } from "src/models/ingredient.model";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  private ingredientsSubject = new BehaviorSubject<Ingredient[]>([
    ingredientMock1,
    ingredientMock2,
  ]);

  public ingredients$ = this.ingredientsSubject.asObservable();
  public startedEditingSubject = new Subject<string>();
  public startedEditing$ = this.startedEditingSubject.pipe(
    startWith(null),
    withLatestFrom(this.ingredients$),
    map(([itemName, ingredients]) =>
      ingredients.find(({ name }) => name === itemName)
    )
  );

  private get ingredients(): Ingredient[] {
    return this.ingredientsSubject.getValue();
  }

  addIngredient(ingredient: Ingredient): void {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredientsSubject.next([...this.ingredients, ...ingredients]);
  }

  updateIngredient(currentName: string, updatedItem: Ingredient): void {
    this.ingredientsSubject.next(
      this.ingredients.map((item) =>
        item.name === currentName ? updatedItem : item
      )
    );
  }

  deleteIngredient(itemName: string): void {
    this.ingredientsSubject.next(
      this.ingredients.filter(({ name }) => name !== itemName)
    );
  }

  getIngredientByName(name: string): Ingredient {
    return this.ingredients.find((item) => item.name === name);
  }
}
