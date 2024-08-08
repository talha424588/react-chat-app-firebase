
import './userList.css';
const UserInfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" srcset="" />
                <img src="./video.png" alt="" srcset="" />
                <img src="./edit.png" alt="" srcset="" />
            </div>
        </div>
    )
}

export default UserInfo;