import React, { useState } from 'react';
import './TodoListItem.scss';
import { Link } from 'react-router-dom';

const TodoListItem = ({todo, onDelete, onToggle, style}) => {
    const {seq, title, writer,content} = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <li/>{seq}번
                    <ul>{writer}</ul> 
                    <ul>{title}</ul> 
                    <ul> <Link to={`/BoardDetail/${seq}`}>{content}</Link></ul>  
                   
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);
//export default TodoListItem;
