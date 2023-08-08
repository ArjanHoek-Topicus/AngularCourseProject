import { Component } from "@angular/core";
import { ingredientMock1, ingredientMock2 } from "src/mocks/ingredient.mock";
import { Ingredient } from "src/models/ingredient.model";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [ingredientMock1, ingredientMock2];

    constructor() {}
}
