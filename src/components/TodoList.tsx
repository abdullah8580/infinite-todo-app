"use client";
import React from "react";
import { useState } from "react";

type todoType = {
  id: number;
  title: string;
  isDone: boolean;
};

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<todoType[]>([]);
  const [done, setDone] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      {
        id: todos.length + 1,
        title: todo,
        isDone: false,
      },
    ];
    setTodo("");
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo: todoType) => todo.id !== id);

    const reorganizedTodos = updatedTodos.map((todo, index) => ({
      ...todo,
      id: index + 1,
    }));

    setTodos(reorganizedTodos);
  };

  // const checkStatus = (id: number) => {
  //   todos.map((todo: todoType) => {
  //     if (todo.id === id) {
  //       setDone(true);
  //     }
  //   });
  // };

  return (
    <div>
      <div className=" flex items-center justify-evenly w-full mt-5">
        <textarea
          value={todo}
          onChange={onChange}
          className="flex lg:mt-2 items-center w-96 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm rounded-lg text-slate-400 "
        />
        <button
          className="p-3 font-bold rounded-full border-2 border-white text-white"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div>
        <h2 className="text-lg font-bold mt-10 mb-5">Your Todos:</h2>
        {todos.map((todo) => (
          <div
            className="w-full flex items-center justify-around border-b-2 border-red-500 mb-10"
            key={todo.id}
          >
            <div>No.{todo.id}</div>
            <div className="text-white font-medium">{todo.title}</div>

            <button
              className="text-white bg-red-500 rounded-full p-3 border-2 border-white font-bold"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
