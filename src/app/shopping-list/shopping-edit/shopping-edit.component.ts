import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { Ingredient } from "src/models/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") nameEl: ElementRef;
  @ViewChild("amountInput") amountEl: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(): void {
    const name = this.nameEl.nativeElement.value;
    const amount = +this.amountEl.nativeElement.value;

    this.shoppingListService.addIngredient({ name, amount });
  }

  clearInput(): void {
    this.nameEl.nativeElement.value = "";
    this.amountEl.nativeElement.value = "";
  }
}
