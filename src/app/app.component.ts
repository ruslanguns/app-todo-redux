import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  prueba: number [] = [];

  constructor() {
    this.prueba = [20, 30, 40, 50];

    this.prueba = [...this.prueba, 60];
    this.prueba = [5, ...this.prueba];
  }
}
