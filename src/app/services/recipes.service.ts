import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { recipeMock1, recipeMock2 } from "src/mocks/recipe.mock";
import { Recipe } from "src/models/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipes: Recipe[] = [recipeMock1, recipeMock2];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipeById(recipeId: string) {
    return this.recipes.find(({ id }) => id === recipeId);
  }

  addToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients([...recipe.ingredients]);
  }
}
