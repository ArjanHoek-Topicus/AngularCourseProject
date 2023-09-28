import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipe$ = this.route.params.pipe(
      map(({ id }) => this.recipesService.getRecipeById(id))
    );
  }

  addToShoppingList(recipe: Recipe): void {
    this.recipesService.addToShoppingList(recipe);
  }

  onDeleteRecipe(): void {
    this.recipe$.subscribe(({ id }) => {
      this.recipesService.deleteRecipe(id);
      this.router.navigate([".."], { relativeTo: this.route });
    });
  }
}
