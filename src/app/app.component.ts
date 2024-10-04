import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-plant-form></app-plant-form>
    <app-plant-list></app-plant-list>
    <app-user-list></app-user-list>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
