import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message="Second post"count='6' />  
            <Post message="Mine first post" count='5'/>  
            <Post />  
        </div>
     

    </div>
}
export default MyPosts;