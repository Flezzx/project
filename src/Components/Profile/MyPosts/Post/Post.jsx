import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-600w-426321556.jpg'></img>
        {props.message}
        <div>
            <span>Like {props.count}</span>
        </div>
    </div>

}
export default Post;    