import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  Subscription,
  map,
  shareReplay,
  take,
  tap,
  withLatestFrom,
} from "rxjs";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { Ingredient } from "src/models/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements AfterViewInit, OnDestroy {
  @ViewChild("f", { static: false }) f: NgForm;
  private valueChangesSub: Subscription;

  private editItem$ = this.shoppingListService.startedEditing$.pipe(
    tap((item) => {
      if (item) {
        const { name, amount } = item;

        this.f.setValue({
          name,
          amount,
        });
      }
    }),
    shareReplay(1)
  );

  public editMode$ = this.editItem$.pipe(map((item) => !!item));

  constructor(private shoppingListService: ShoppingListService) {}

  ngAfterViewInit(): void {
    // Enter edit mode when a value is typed that already exists
    // this.valueChangesSub = this.f.valueChanges
    //   .pipe(withLatestFrom(this.editItem$))
    //   .subscribe(([{ name }, editItem]) => {
    //     console.log(name);
    //     if (editItem) return;
    //     const ingredient = this.shoppingListService.getIngredientByName(name);
    //     console.log(ingredient);
    //     // if (ingredient) {
    //     //   this.shoppingListService.startedEditingSubject.next(name);
    //     // }
    //   });
  }

  onSubmit(): void {
    const { name, amount } = this.f.value;

    this.editItem$.pipe(take(1)).subscribe((editItem) => {
      if (editItem) {
        this.shoppingListService.updateIngredient(editItem.name, {
          name,
          amount,
        });
      } else {
        this.shoppingListService.addIngredient({ name, amount });
      }

      this.reset();
    });
  }

  onDelete(): void {
    const { name } = this.f.value;
    this.shoppingListService.deleteIngredient(name);
    this.reset();
  }

  reset(): void {
    this.f.reset();
    this.shoppingListService.startedEditingSubject.next(null);
  }

  ngOnDestroy(): void {
    // this.valueChangesSub.unsubscribe();
  }
}
