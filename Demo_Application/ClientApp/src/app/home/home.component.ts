import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  changeDropDownValue(event) {
    console.log("parent:" + event);
  }
}
