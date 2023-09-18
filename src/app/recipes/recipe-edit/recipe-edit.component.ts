import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subject, map } from "rxjs";
import { Recipe } from "src/models/recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  mode: Observable<"NEW" | "EDIT">;
  recipe: Subject<Recipe>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mode = this.route.params.pipe(map(({ id }) => (id ? "EDIT" : "NEW")));
  }
}
