import React from 'react';
import { useState} from 'react';
import { useNavigate} from 'react-router-dom';
const AddMember = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [userName, setUserName] = useState("");
    const [passwd2, setPasswd2] = useState("");

    const inputId = (e) => {
        setId(e.target.value);
       };
    
    const inputPasswd = (e) => {
        setPasswd(e.target.value);
    };

    const inputUserName = (e) => {
        setUserName(e.target.value);
       };
    
    const inputPasswd2 = (e) => {
        setPasswd2(e.target.value);
    };
   


    const dupId = (e) => {
      e.preventDefault();
      let param={
        id: id
      };
        fetch("/member/dupIdCheck.do", { 
            method: "POST",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(param)
          })
          .then(response => response.json())
          .then(jsonResult => {
            alert(jsonResult.message);
            if (jsonResult.status == "true") {
               alert(jsonResult.message);
            }
          });

    }



    function submitForm (){
        let param={
            id: id,
            passwd:passwd,
            userName:userName
          };

        fetch("/member/addMember.do", { 
            method: "POST",
            headers : {"Content-type" : "application/json; charset=utf-8"},
            body: JSON.stringify(param)
          })
          .then(response => response.json())
          .then(jsonResult => {
            alert(jsonResult.message);
            if (jsonResult.status == true) {
                alert(jsonResult.message);
            }else{
            //   setId("");
            //   setPasswd("");
            //   forFocus.current.focus();
            }
          });
        };

    const joinform_check = () =>{
        if (id === "") { 
            alert("???????????? ???????????????.");
            return false; 
          };
          if (passwd === "") {
            alert("??????????????? ???????????????.");
            return false;
          };

          if (passwd !== passwd2) {
            alert("??????????????? ???????????? ????????????..");
            return false;
          };

          if (userName === "") {
            alert("????????? ???????????????.");
            return false;
          };
          return true;
    }
       
    const addMember  = (e) => {
	    e.preventDefault();
	    if(joinform_check())
            submitForm();
    }

    return (
        <div>
            <h2>????????????</h2>
            <form className='addMember' >
               ????????? <input type="text" className="id" size="20"   onChange={inputId} />
				<input type="button" name="dupUidCheckButton" value="????????????" onClick ={dupId} /><br/>
				???????????? <input className="passwd" type="password" size="20"   onChange={inputPasswd}/><br/>
                ???????????? ?????? <input className="passwd2"  type="password" size="20"  onChange={inputPasswd2}/> <br/>
                ?????? <input className="userName" type="text" size="20" onChange={inputUserName}/>		
            </form>

            <button type="submit" className='addMemberButton' onClick={addMember} >????????????</button>
            <button onClick={() => {navigate(-1)}}>????????????</button>
        </div>
    );
};

export default AddMember;