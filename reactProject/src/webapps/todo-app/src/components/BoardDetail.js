import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
const BoardDetail = () => {
    const param = useParams();
    const [writer , setWriter]=useState("");
    const [title , setTitle]=useState("");
    const [content , setContent]=useState("");
    const [board_passwd , setboard_passwd]=useState("");
    const navigate =useNavigate();

    useEffect(()=>{
        fetch("/board/BoardDetail.do", { 
            method: "POST",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(param)
          })
          .then(response => response.json())
          .then(jsonResult => {
          if(jsonResult.status === true){
            console.log("board", jsonResult.board);
            setWriter(jsonResult.board.writer);
            setTitle(jsonResult.board.title);
            setContent(jsonResult.board.content);
          } 
      });
    
    }, []);

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
        if(!window.confirm("수정하시겠습니까?"))
            return;
        let updateParam = {
            seq:param.seq,
            title : title,
            content : content,
            board_passwd:board_passwd
        };
        console.log(updateParam);
        fetch("/board/BoardUpdate.do", { 
            method: "PUT",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(updateParam)
          })
          .then(response => response.json())
          .then(jsonResult => {
            alert(jsonResult.message);
            if (jsonResult.status == true) {
               alert(jsonResult.message);            
            }
            setboard_passwd("");
          });
    };

    const deleteForm =() =>{
    if(!window.confirm("삭제하시겠습니까?"))
        return;
    let deleteParam = {
        seq:param.seq,
        board_passwd:board_passwd
    };
    console.log(deleteParam);
    fetch("/board/BoardDelete.do", { 
        method: "DELETE",
        headers : {"Content-type" : "application/json; charset=utf-8"},
        body: JSON.stringify(deleteParam)
      })
      .then(response => response.json())
      .then(jsonResult => {
        alert(jsonResult.message);
        if (jsonResult.status == true) {
           alert(jsonResult.message);
           navigate("/BoardMain");
        }else{
            inputboard_passwd("");
        }
      });
};

    return (
        <div>
            <form className='updateForm'>
                작성자 <input type="text" className='writer' value={writer} readOnly/><br/>
                제목 <input type="text" className ="title" value={title}  onChange={inputTitle}/><br/>
                내용 <textarea  className ="content" value={content} onChange={inputContent} /><br/>
                비밀번호 <input type="text" value={board_passwd} onChange={inputboard_passwd} /><br/>
            </form>
            <input type="button" value="수정" onClick={submitForm}/>
            <button onClick={deleteForm}>삭제</button>
            <button onClick={() => {navigate(-1)}}>게시글로</button>
        </div>
    );
};

export default BoardDetail;