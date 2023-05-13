import React from "react";
import s from "./Dialogs.module.css"

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Sasha
                    </div>
                    <div className={s.dialog + " " + s.active}>
                        Diana
                    </div>
                    <div className={s.dialog}>
                        Julia
                    </div>
                    <div className={s.dialog}>
                        Victor
                    </div>
                    <div className={s.dialog}>
                        Alina
                    </div>
                </div>

                 <div className={s.messages}>
                     <div className={s.message}>Hi</div>
                     <div className={s.message}>How is your it-kamasutra?</div>
                     <div className={s.message}>Yo</div>
                 </div>
        </div>
    )
}