import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todos.model';

import * as fromFiltro from './../../filter/filter.action';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFiltro.filtrosValidos;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
