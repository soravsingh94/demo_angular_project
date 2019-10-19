import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html'
})

export class DropDownComponent {
  @Output()
  changeDropDownValue: EventEmitter<any> = new EventEmitter();

  countryItem: any;
  objArray = [
    { id: 'india', name: 'India' },
    { id: 'us', name: 'US' },
    { id: 'canada', name: 'Canada' },
    { id: 'china', name: 'China' },
  ];

  changeValue() {
    this.changeDropDownValue.emit(this.countryItem);
    console.log(this.countryItem);
  }

}
