import { Component } from "@angular/core";
import { ShoppingListService } from "../services/shopping-list.service";
import { shareReplay, take, tap } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent {
  ingredients$ = this.shoppingListService.ingredients$;

  constructor(private shoppingListService: ShoppingListService) {}

  public onEditItem(name: string): void {
    this.shoppingListService.startedEditingSubject.next(name);
  }
}
