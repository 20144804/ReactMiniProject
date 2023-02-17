import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardAdd = () => {
    const sessionStorage = window.sessionStorage;
    const writer =sessionStorage.getItem("userName");
    const [title , setTitle]=useState("");
    const [content , setContent]=useState("");
    const [board_passwd , setboard_passwd]=useState("");
    const navigate =useNavigate();

    const inputboard_passwd = (e) =>{
        setboard_passwd(e.target.value);
    };

    const inputTitle = (e) =>{
        setTitle(e.target.value);
    };
    
    const inputContent = (e) =>{
        setContent(e.target.value);
    };


    const submitForm = () =>{
        if(!window.confirm("작성하시겠습니까?"))
            return;
        let param = {
            writer:writer,
            title : title,
            content : content,
            board_passwd:board_passwd
        };
        console.log(param);
        fetch("/board/BoardAdd.do", { 
            method: "POST",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(param)
          })
          .then(response => response.json())
          .then(jsonResult => {
            alert(jsonResult.message);
            if (jsonResult.status == true) {
               alert(jsonResult.message);
               navigate("/BoardMain");
            }
          });
    };


    return (
        <div>
            <form className='addForm'>
                작성자 <input type="text" className='writer' value={writer} readOnly/><br/>
                제목 <input type="text" className ="title" value={title}  onChange={inputTitle}/><br/>
                내용 <textarea  className ="content" value={content} onChange={inputContent} /><br/>
                비밀번호 <input type="text" value={board_passwd} onChange={inputboard_passwd} /><br/>
            </form>
            <input type="button" value="작성" onClick={submitForm}/>
            <button onClick={() => {navigate(-1)}}>게시글로</button>
        </div>

    );
};

export default BoardAdd;