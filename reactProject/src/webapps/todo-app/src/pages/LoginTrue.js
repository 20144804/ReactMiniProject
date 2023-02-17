import React, { useEffect, useRef, useState } from 'react';
import { useNavigate,Link, useParams  } from 'react-router-dom';

const LoginTrue = ({userName, changeLogin}) => {
    //const[param, setParam] = useState('');
    const userName1 = useRef({userName});
    // console.log("zzzzz", userName1.current.userName );
    const navigate = useNavigate();
    const logout =()=>{
        changeLogin(false);
        alert("로그아웃")
    }
    return (
        <div>
            <h4>환영합니다.<Link to={`MemberDetail/${userName1.current.userName}`}>{userName}</Link>님</h4>
            <button  onClick={() => navigate("/BoardMain")} >게시판</button>
            <button  className="logoutButton" onClick={logout} >로그아웃</button>  
        </div>
    );
};

export default LoginTrue;