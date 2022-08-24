// components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteallComponent } from './components/todo-button-deleteall/todo-button-deleteall.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteallComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
