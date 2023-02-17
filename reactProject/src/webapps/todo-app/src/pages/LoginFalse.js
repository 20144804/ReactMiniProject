import { useState,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFalse = ({settingUserName,changeLogin}) => {
    const sessionStorage = window.sessionStorage;
    const navigate = useNavigate();
    const forFocus =useRef(null);

    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");

    

    const inputId = (e) => {
        setId(e.target.value);
        sessionStorage.setItem("id" , id);
       };
    
    const inputPasswd = (e) => {
        setPasswd(e.target.value);
    };
   
    const sendForm = (e) =>{
        e.preventDefault();
    
  

        let param={
            id: id,
            passwd:passwd
          };

        fetch("/member/login.do", { 
            method: "POST",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(param)
          })
          .then(response => response.json())
          .then(jsonResult => {
            alert(jsonResult.message);
            if (jsonResult.status == "true") {
                console.log(jsonResult);
                changeLogin(true);
                settingUserName(jsonResult.userName);
                sessionStorage.setItem("userName" ,jsonResult.userName)
            }else{
              setId("");
              setPasswd("");
              forFocus.current.focus();
            }
          });
        };


    return (
      <div>
      <form className="loginForm" onSubmit={sendForm}>   
      <input
          type="text"
          className="idForm"
          placeholder="아이디 입력"
          name="id"
          value={id}
          onChange={inputId}
          ref={forFocus}
      />
      <br/>
      <input
          type="password"
          className="passwdForm"
          placeholder="비밀번호 입력"
          name="passwd"
          value={passwd}
          onChange={inputPasswd}
      />
      <br/>
        <button type="submit" >로그인</button>
      </form>
          <button  onClick={() => navigate("/AddMember")} >회원가입</button>
          <button  onClick={() => navigate("/Help")} >도움말</button>
      </div>
    );
};

export default LoginFalse;
