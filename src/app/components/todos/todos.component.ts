import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: todo[];
  inputName: string = '';
  count: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'This is my First Todo', completed: false },
      { content: 'This is my Second Todo', completed: true },
      { content: 'This is my third Todo', completed: false },
      { content: 'This is my fourth Todo', completed: false },
      { content: 'This is my fifth Todo', completed: true },
    ];
  }

  toogleLine(id: number) {
    let newOne = this.todos.find((element, i) => i == id);
    newOne.completed = !newOne.completed;
  }

  editId(id: number) {
    let newOne = this.todos.find((element, i) => i == id);
    this.inputName = newOne.content;
    this.count = id;
    console.log('Count', this.count);
  }

  deleteId(id: number) {
    this.todos = this.todos.filter((element, i) => i !== id);
  }

  addTodo() {
    if (this.count != 0) {
      this.todos[this.count].content = this.inputName;
      this.count = 0;
    } else {
      this.todos.push({
        content: this.inputName,
        completed: false,
      });
    }
    this.inputName = '';
  }
}
