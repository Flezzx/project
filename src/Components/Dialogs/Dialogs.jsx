import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) =>{
    return(
        <div className={s.Dialog+' '+s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>

        </div>
    )
}

const Message = (props) =>{
        return(
            <div className={s.Message}>
                {props.message}
            </div>
        )
    }


const Dialogs = (props) =>{
    return(
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <DialogsItem name="Lego" id="1" />
                <DialogsItem name="Alex" id="2" />
                <DialogsItem name="Skyer" id="3" />
                <DialogsItem name="Lego" id="4" />
                <DialogsItem name="Lego" id="5" />
                <DialogsItem name="Lego" id="6" />
            </div>
            <div className={s.Messages}>
                <Message message={"Hello world"}/>

            </div>

        </div>
    )
}

export default Dialogs;