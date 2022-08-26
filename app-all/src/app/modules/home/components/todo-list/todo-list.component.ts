import { Component, OnInit } from '@angular/core';

// interface
import { TaskList } from '../../model/task-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // itens da lista
  taskList: Array<TaskList> = [
    // componetes de teste
    // {task: "Sans Task", checked: true},
    // {task: "outra Sans Task", checked: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setEmitTaskListSans(event: string){
    // console.log(event);
    this.taskList.push({task: event, checked: false});
  }

  // deleta uma task
  deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  // deleta todas task
  deleteAllTaskList(){
    const confirm = window.confirm("Deleter todos Sans?");
    if(confirm){
    this.taskList = [];
  }
}

}
