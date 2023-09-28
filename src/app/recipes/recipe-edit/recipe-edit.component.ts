import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { delay, map, shareReplay, takeWhile, tap } from "rxjs";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  public recipeForm: FormGroup;
  public recipeId$ = this.route.params.pipe(
    map(({ id }) => id),
    shareReplay(1)
  );

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.recipeId$
      .pipe(
        map((id) => this.recipesService.getRecipeById(id)),
        takeWhile((recipe) => !!recipe),
        tap((recipe) => this.prepareFormForEdit(recipe))
      )
      .subscribe();
  }

  initForm(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      ingredients: new FormArray([]),
    });
  }

  prepareFormForEdit({
    name,
    description,
    imagePath,
    ingredients,
  }: Recipe): void {
    ingredients.forEach(() => this.onAddIngredient());
    this.recipeForm.setValue({
      name,
      description,
      imagePath,
      ingredients,
    });
  }

  public get ingredientsArray(): FormArray {
    return this.recipeForm.get("ingredients") as FormArray;
  }

  onAddIngredient(): void {
    const formControl = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
    this.ingredientsArray.push(formControl);
  }

  onRemoveIngredients(): void {
    this.ingredientsArray.clear();
  }

  onRemoveIngredient(index: number): void {
    this.ingredientsArray.removeAt(index);
  }

  onDeleteRecipe(): void {
    this.recipeId$.subscribe((id) => {
      this.recipesService.deleteRecipe(id);
      this.router.navigate(["/recipes"]);
    });
  }

  onSubmit(): void {
    this.recipeId$.pipe(delay(200)).subscribe((id) => {
      const { name, imagePath, description, ingredients } =
        this.recipeForm.value;

      const recipe = {
        name,
        imagePath,
        description,
        ingredients,
      };

      if (!id) {
        id = this.recipesService.addRecipe(recipe);
      } else {
        this.recipesService.updateRecipe({ id, ...recipe });
      }

      this.router.navigate(["/recipes", id]);
    });
  }
}
