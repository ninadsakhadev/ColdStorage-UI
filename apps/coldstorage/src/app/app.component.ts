import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'coldstorage-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'Swami Samarth Cold Storage';
  isAuthenticated: boolean = true;
  constructor() {}
}
