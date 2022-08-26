import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() emitItemTaskList = new EventEmitter();
  // adiciona a tesk na lista
  addItemTaskListSans: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // submete o item para adiciona a list
  submitItemTaskList() {
    this.addItemTaskListSans = this.addItemTaskListSans.trim();
    if(this.addItemTaskListSans) {
      // console.log(this.addItemTaskListSans);
      this.emitItemTaskList.emit(this.addItemTaskListSans);
      this.addItemTaskListSans = "";
    }

  }
}
