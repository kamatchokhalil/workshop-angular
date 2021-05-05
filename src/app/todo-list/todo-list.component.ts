import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import {CalculServiceService} from '../service/calcul-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo: Todo[];
  numOfItem: number;
  constructor(private myService: CalculServiceService ) { }

  ngOnInit(): void {
    this.listTodo = [
      {userId: 1, id: 1, title: 'delectus aut autem' , completed: false},
      {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
      {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
      {userId: 1, id: 4, title: 'quo adipisci enim quam ut ab', completed: true}];
  }

  getResult(){
    this.numOfItem = this.myService.getNumberOf(this.listTodo, 'completed', true);
  }

}
