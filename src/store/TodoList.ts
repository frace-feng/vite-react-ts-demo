import { makeObservable, observable, action } from "mobx";
import { Item } from "../components/BaseList";
class TodoList {
  constructor() {
    makeObservable(this, {
      todoList: observable,
      updateTodoList: action,
      deleteTodoList: action,
      addTodoList: action,
    })
  }
  todoList = [{
    name: Math.random().toString().slice(2, 8),
    id: 1,
  }];
  updateTodoList(payload: Item) {
    const index = this.todoList.findIndex((elem) => elem.id === payload.id);
    this.todoList[index].name = payload.name;
  }
  deleteTodoList(id: Item["id"]) {
    const index = this.todoList.findIndex((elem) => elem.id === id);
    console.log(index)
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
  addTodoList() {
    const maxId = this.todoList[this.todoList.length - 1]?.id || 0;
    this.todoList.push({
      name: Math.random().toString().slice(2, 8),
      id: maxId + 1,
    })
  }
}

export default new TodoList()