import React from "react";
import s from "./UserInfo.module.css";


const UserInfo = () => {
    return  (
        <div className="userInfo">
        <h3 className={s.userTitle}>Diana B.</h3>
        <div className="userDescription">
            <a className={s.item}><p>Date of Birth: 24 february</p></a>
            <a className={s.item}><p>City: Minsk</p></a>
            <a className={s.item}><p>Education: VSU'19</p></a>
            <a className={s.item}>< p> Web Site: in process</p></a>
        </div>
    </div>
    )
}

export default UserInfo;