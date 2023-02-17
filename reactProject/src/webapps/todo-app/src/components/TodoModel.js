import  { useReducer} from 'react';

  const TODO_ACTION = {
    INSERT: 1,
    REMOVE: 2,
    TOGGLE: 3,
    APPEND_TODO_LIST : 4
  };
  Object.freeze(TODO_ACTION);
        
  function todoReducer(todos,action){
    switch(action.type){
      case TODO_ACTION.INSERT:
          return todos.concat(action.todo);
      case TODO_ACTION.REMOVE:
          return todos.filter(todo => todo.id !== action.id);
      case TODO_ACTION.TOGGLE:
          return todos.map(todo => todo.id === action.id ? {...todo, checked:!todo.checked} : todo,);
      case TODO_ACTION.APPEND_TODO_LIST:
          return todos.concat(action.todos);
      default:
        return todos;
    }
  }
  
  export default function TodoModel() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const onInsert = title => {
      fetch("/todoInsert.do", { 
        method: "POST",
        headers : {"Content-type" : "application/json; charset=utf-8"},
        body: JSON.stringify({
          title : title
        })
      })
      .then(response => response.json())
      .then(result => {
        if (result.status == true) {
          dispatch({type : TODO_ACTION.INSERT, todo : {id:result.current, title : title, checked:result.checked}});
        }
      });
    } 

    const onDelete = id => {
      if (!window.confirm("삭제 하시겠습니까?")) return ;

      fetch("/todoDelete.do", { 
        method: "POST",
        headers : {"Content-type" : "application/json; charset=utf-8"},
        body: JSON.stringify({
          id: id,
        })
      })
      .then(response => response.json())
      .then(result => {
        if (result.status == true) {
          dispatch({type : TODO_ACTION.REMOVE, id});
        }
      });
    }

    const onToggle = (id, checked) => {
      fetch("/todoToggle.do", { 
        method: "POST",
        headers : {"Content-type" : "application/json; charset=utf-8"},
        body: JSON.stringify({
          id: id,
          checked: checked,
        })
      })
      .then(response => response.json())
      .then(result => {
        if (result.status == true) {
          //result.todos에 있는 자료를 todos 배열에 저장한다
          dispatch({type : TODO_ACTION.TOGGLE, id, checked : result.checked});
        }
      });
    }

    const onAppendBoardList = todoList => {
      dispatch({type : TODO_ACTION.APPEND_TODO_LIST, todos : todoList});
    }

    return [todos, onInsert, onDelete, onToggle, onAppendBoardList];
  }
  