import { Component, OnInit } from "@angular/core";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {
  recipes$ = this.recipesService.recipes$;

  constructor(private recipesService: RecipesService) {}
}
