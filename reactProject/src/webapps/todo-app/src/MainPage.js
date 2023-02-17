
import LoginFalse from './pages/LoginFalse';
import LoginTrue from './pages/LoginTrue';


const MainPage = ({isLogin, userName,settingUserName, changeLogin}) => {
    
    return (
        <div>
            {isLogin ? <LoginTrue userName={userName} changeLogin={changeLogin}/> :  <LoginFalse settingUserName={settingUserName} changeLogin={changeLogin}/> }
        </div>
    );
};

export default MainPage;