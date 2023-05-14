import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div className={s.contentImg}>
            <div className={s.wrapperUser}>
                <div className={s.userImg}>
                    <img src="https://www.shkolazhizni.ru/img/content/i233/233106_or.jpg" alt="cat"/>
                </div>
                <div>
                    <h3 className={s.userTitle}>Diana B.</h3>
                    <div className={s.userInfo}>
                        <a className={s.item}><p>Date of Birth: 24 february</p></a>
                        <a className={s.item}><p>City: Minsk</p></a>
                        <a className={s.item}><p>Education: VSU'19</p></a>
                        <a className={s.item}>< p> Web Site: in process</p></a>
                    </div>
                </div>
            </div>
        </div>

    )
}