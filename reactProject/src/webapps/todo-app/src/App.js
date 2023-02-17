import React, {useState} from 'react';
import {Routes,Route, Link} from 'react-router-dom';
import BoardAdd from './components/BoardAdd';
import BoardDetail from './components/BoardDetail';
import BoardMain from './components/BoardMain';
import MainPage from './MainPage';
import AddMember from "./pages/AddMember";
import Help from "./pages/Help";
import MemberDetail from './pages/MemberDetail';


const App = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userName,  setUserName] =useState("");
    
    const changeLogin = (flag) => {
        setIsLogin(flag);
    }
    const settingUserName = (userName) => {
        setUserName(userName);
    }



    //function changeIsLogin(){ setIsLogin(true);};

    return (     
       <>
           <div>
           <Link to={"/"} >home</Link>
                <Routes >
                    <Route path="/" element={<MainPage isLogin={isLogin} userName={userName}  settingUserName={settingUserName} changeLogin={changeLogin}/>}/>
                    <Route path="/Help" element={<Help />}/>
                    <Route path="/MemberDetail/:userName" element={<MemberDetail />}/>
                    <Route path="/AddMember" element={<AddMember />}/>
                </Routes>
                <Routes >
                    <Route path="/BoardMain" element={<BoardMain/>}/>
                    <Route path="/BoardDetail/:seq" element={<BoardDetail/>}/>
                    <Route path="/BoardAdd" element={<BoardAdd/>}/>
                </Routes>
            </div>

       </> 
    );
};

export default App;