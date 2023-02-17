import React, { useEffect, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
// import TodoModel from './TodoModel';


const App2 = () => {
  const [todos, onInsert, onDelete, onToggle, onAppendTodoList] = TodoModel();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetch("/todoList.do").then(response => response.json())
    .then(result => {
      if (result.status == true) {
        //result.todos에 있는 자료를 todos 배열에 저장한다
        onAppendTodoList(result.todos);
      }
      setLoading(true);
    });

  }, []);

  return (
    <>
    {loading ? (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </TodoTemplate>)
      : (
        <div className="App-loading">
          로딩 중 입니다...
        </div>
      )}
    </>      
  );
};


export default App2;
