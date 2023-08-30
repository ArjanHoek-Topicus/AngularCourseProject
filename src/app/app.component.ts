import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  currentPage: "recipes" | "shopping-list" = "recipes";

  onPageChange(name: "recipes" | "shopping-list") {
    this.currentPage = name;
  }
}
