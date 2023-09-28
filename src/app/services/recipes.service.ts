import { Injectable } from "@angular/core";
import { recipeMock1, recipeMock2 } from "src/mocks/recipe.mock";
import { NewRecipe, Recipe } from "src/models/recipe.model";
import { ShoppingListService } from "./shopping-list.service";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipesSubject = new BehaviorSubject<Recipe[]>([
    recipeMock1,
    recipeMock2,
  ]);
  public recipes$ = this.recipesSubject.asObservable();

  constructor(private shoppingListService: ShoppingListService) {}

  private get recipes(): Recipe[] {
    return this.recipesSubject.getValue();
  }

  public getRecipeById(recipeId: string) {
    return this.recipesSubject.getValue().find(({ id }) => id === recipeId);
  }

  public addToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients([...recipe.ingredients]);
  }

  public updateRecipe(recipe: Recipe): void {
    this.recipesSubject.next(
      this.recipes.map((item) => (item.id === recipe.id ? recipe : item))
    );
  }

  public addRecipe(recipe: NewRecipe): string {
    const id = Math.trunc(+new Date() * Math.random()).toString();
    this.recipesSubject.next(this.recipes.concat({ id, ...recipe }));
    return id;
  }

  public deleteRecipe(id: string): void {
    this.recipesSubject.next(this.recipes.filter((item) => item.id !== id));
  }
}
