import { Component } from "@angular/core";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent {
  selectedRecipe: Recipe = null;

  selectRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
