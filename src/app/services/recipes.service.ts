import { Injectable, EventEmitter } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { recipeMock1, recipeMock2 } from "src/mocks/recipe.mock";
import { Recipe } from "src/models/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipes: Recipe[] = [recipeMock1, recipeMock2];
  recipeSelected = new ReplaySubject<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  selectRecipe(recipe: Recipe): void {
    this.recipeSelected.next(recipe);
  }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients([...recipe.ingredients]);
  }
}
