import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
<<<<<<< HEAD
import {ProfilePageType} from "../../redux/store";
=======
import {ProfilePageType} from "../../redux/state";
>>>>>>> 3ca9c25ed428e665db47fc0d4c226c97175a77c8
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

