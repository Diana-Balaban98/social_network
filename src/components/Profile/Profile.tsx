import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ProfileActionsType} from "../../redux/profile-reducer";
import {DialogsActionsType} from "../../redux/dialogs-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch(action: ProfileActionsType | DialogsActionsType): void
}

export const Profile = ({profilePage, dispatch}: ProfilePropsType) => {

    return (
        <div>
           <ProfileInfo/>
            <MyPosts
                profilePage={profilePage}
                dispatch={dispatch}/>
        </div>
    )
}

