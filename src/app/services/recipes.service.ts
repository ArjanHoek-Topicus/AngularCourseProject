import { Injectable } from "@angular/core";
import { recipeMock1, recipeMock2 } from "src/mocks/recipe.mock";
import { Recipe } from "src/models/recipe.model";
import { ShoppingListService } from "./shopping-list.service";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipes = new BehaviorSubject<Recipe[]>([recipeMock1, recipeMock2]);
  public recipes$ = this.recipes.asObservable();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipeById(recipeId: string) {
    return this.recipes.getValue().find(({ id }) => id === recipeId);
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients([...recipe.ingredients]);
  }
}
