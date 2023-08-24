import { Component, EventEmitter, Output } from "@angular/core";
import { recipeMock1, recipeMock2 } from "src/mocks/recipe.mock";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {
  @Output() recipeClick = new EventEmitter<Recipe>();

  recipes: Recipe[] = [recipeMock1, recipeMock2];

  selectRecipe(recipe: Recipe): void {
    this.recipeClick.emit(recipe);
  }
}
