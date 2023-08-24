import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { Ingredient } from "src/models/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @Output() add = new EventEmitter<Ingredient>();

  @ViewChild("nameInput") nameEl: ElementRef;
  @ViewChild("amountInput") amountEl: ElementRef;

  addIngredient(): void {
    const name = this.nameEl.nativeElement.value;
    const amount = +this.amountEl.nativeElement.value;

    this.add.emit({ name, amount });
  }

  clearInput(): void {
    this.nameEl.nativeElement.value = "";
    this.amountEl.nativeElement.value = "";
  }
}
