import React from 'react';
import { useNavigate,useLocation, useParams} from 'react-router-dom';
const MemberDetail = () => {
    const param = useParams();
    const userName = param.userName;
    // console.log("here " + userName)

    return (
        <div>
            <h4>유저이름은 {userName}</h4>
        </div>
    );
};

export default MemberDetail;