import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") open: boolean = false;

  @HostListener("document:click", ["$event"]) click(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.open = !this.open;
    } else {
      this.open = false;
    }
  }

  constructor(private elementRef: ElementRef) {}
}
