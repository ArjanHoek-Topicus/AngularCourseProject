import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ReplaySubject } from "rxjs";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe$: ReplaySubject<Recipe>;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipe$ = this.recipesService.recipeSelected;
  }

  addToShoppingList(recipe: Recipe): void {
    this.recipesService.addToShoppingList(recipe);
  }
}
