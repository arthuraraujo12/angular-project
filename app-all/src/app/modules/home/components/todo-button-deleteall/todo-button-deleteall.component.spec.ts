import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleteallComponent } from './todo-button-deleteall.component';

describe('TodoButtonDeleteallComponent', () => {
  let component: TodoButtonDeleteallComponent;
  let fixture: ComponentFixture<TodoButtonDeleteallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonDeleteallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonDeleteallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
