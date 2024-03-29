"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("친구 만나기");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.removeComplete(); // 완료한 항목을 지우기
myTodoCollection.getTodoItems(true).forEach((item) => (item.printDetails()));
console.log("=====================================");
myTodoCollection.getTodoItems(false).forEach((item) => (item.printDetails()));
myTodoCollection.removeComplete();
