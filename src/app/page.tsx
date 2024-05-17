import React from "react";
import TodoList from "@/components/TodoList";

function page() {
  return (
    <div className="h-screen bg-slate-500">
      <h1 className="text-xl font-bold text-center">Todo App in Next JS</h1>
      <TodoList />
    </div>
  );
}

export default page;
