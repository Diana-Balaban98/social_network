import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import BackgroundProfile from "./BackgroundProfile/BackgroundProfile";
import UserImg from "./User/UserImg/UserImg";
import UserInfo from "./User/UserInfo/UserInfo";



const Profile = () => {
    return (
        <div className={s.content}>
           <BackgroundProfile/>
            <div className={s.wrapperUser}>
              <UserImg/>
               <UserInfo/>
            </div>)
            <MyPosts/>
        </div>
    )
}

export default Profile;
