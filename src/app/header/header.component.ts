import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() currentPage: string;
  @Output() pageChange = new EventEmitter<"recipes" | "shopping-list">();

  navToPage(name: "recipes" | "shopping-list") {
    this.pageChange.emit(name);
  }
}
