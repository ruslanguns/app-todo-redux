import { Component, OnInit } from '@angular/core';

import * as fromFiltro from './../../filter/filter.action';
import * as fromTodo from './../../todo/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todos.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './footer.component.html',
  styles: [`
  puntero {
    cursor: pointer;
  }
  `]
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {


    this.store.subscribe( state => {

      this.contarPendientes( state.todos );
      this.filtroActual = state.filtro;

    });
  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {

    const accion = new fromFiltro.SetFiltroAction( nuevoFiltro );
    this.store.dispatch( accion );
  }

  contarPendientes( todos: Todo[] ) {

    this.pendientes = todos.filter( todo => !todo.completado ).length;
  }

  borrarTodo() {
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch( accion );
  }

}
