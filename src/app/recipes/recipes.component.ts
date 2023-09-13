import { Component } from "@angular/core";
import { Recipe } from "src/models/recipe.model";
import { RecipesService } from "../services/recipes.service";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent {
  selectedRecipe$: ReplaySubject<Recipe>;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.selectedRecipe$ = this.recipesService.recipeSelected;
  }
}
