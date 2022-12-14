import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>

        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
        </div>
        <div className={s.posts}>
            <Post message="Second post" count='6'/>
            <Post message="Mine first post" count='5'/>
            <Post/>
        </div>


    </div>
}
export default MyPosts;