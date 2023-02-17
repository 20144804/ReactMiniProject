import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    const navigate =useNavigate();
    return (
        <div className="TodoTemplate">
            <button onClick={() => navigate("/BoardAdd")} >글쓰기</button>
            <div className="app-title">게시판</div>
            <ul>순번 작성자 제목 내용</ul>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;