import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileActionsType} from "../../redux/profile-reducer";
import {DialogsActionsType} from "../../redux/dialogs-reducer";
import {ProfilePageType} from "../../redux/store";

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

