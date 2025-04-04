import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todos = tasks

  constructor() { }


  getAllTasks(){
    return this.todos
  }

  updateTask(todo: Task){
    const chosenTodoIndex = this.todos.findIndex((task: Task) => task.id == todo.id)
    this.todos.splice(chosenTodoIndex, 1)
    this.todos.splice(chosenTodoIndex, 0, todo)
  }

  addNewTask(todo: string){
    const newTask = {
      id : this.todos.length +1,
      task: todo,
      status: "incompleted",
      checked: false
    }

    this.todos.push(newTask)
  }

  deleteTodo(todo: Task){
    const taskIndex = this.todos.findIndex((task: Task) => task.id === todo.id)
    this.todos.splice(taskIndex, 1)
  }
}
