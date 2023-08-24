import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeClick = new EventEmitter<Recipe>();

  selectRecipe(): void {
    this.recipeClick.emit(this.recipe);
  }
}
