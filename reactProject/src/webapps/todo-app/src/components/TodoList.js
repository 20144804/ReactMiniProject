import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({todos, onDelete, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem 
                    todo={todo} 
                    key={key} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                    style={style}/>
            );
        }, [onDelete, onToggle, todos]
    );
    return (
        <List
            class="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    );
};

export default React.memo(TodoList);