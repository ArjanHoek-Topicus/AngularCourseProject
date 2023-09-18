import { Component } from "@angular/core";
import { ShoppingListService } from "../services/shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
  ingredients$ = this.shoppingListService.ingredients$;

  constructor(private shoppingListService: ShoppingListService) {}
}
