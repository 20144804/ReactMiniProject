import React, { useEffect } from 'react';
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
  import TodoModel from './TodoModel';
const BoardMain = () => {
  const [todos, onInsert, onDelete, onToggle, onAppendBoardList] = TodoModel();
  
  useEffect(()=>{
    fetch("/board/BoardList.do")
      .then(response => response.json())
      .then(jsonResult => {
    if (jsonResult.status == true) {
      //result.todos에 있는 자료를 todos 배열에 저장한다
      onAppendBoardList(jsonResult.boardList);
    }
  });

}, []);
    return (
        <>
          <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
          </TodoTemplate>
        </>      
      );
    };

export default BoardMain;