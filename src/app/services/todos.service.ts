import { Injectable } from '@angular/core';
import { resolve } from 'path';
import { TODOS } from '../model/mock-data';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return TODOS;
  }

  async addTodo(todo: Partial<Todo>) {
    await sleep(200);
    return {
      id: Math.random().toString(36).substr(2, 9),
      ...todo,
    } as Todo;
  }

  async deleteTodo(id: string) {
    sleep(200);
  }

  async updateTodo(id: string, completed: boolean) {
    await sleep(200);
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
