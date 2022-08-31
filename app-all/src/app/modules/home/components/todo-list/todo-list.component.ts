import { Component, DoCheck, OnInit } from '@angular/core';
import { first } from 'rxjs';

// interface
import { TaskList } from '../../model/task-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  // itens da lista
  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck() {
   this.setLocalStorate();
  }


  setEmitTaskListSans(event: string) {
    // console.log(event);
    this.taskList.push({ task: event, checked: false });
  }

  // deleta uma task
  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  // deleta todas task
  deleteAllTaskList() {
    const confirm = window.confirm("Deleter todos Sans?");
    if (confirm) {
      this.taskList = [];
    }
  }

  // deletea tesk vasias
  inputValidation(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("TaskSans vazia, deseja deletar task da list?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  setLocalStorate() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
