import React from 'react';
import "./Post.css";

const Post = (props) => {
    const user = props.user;
    const imageUrl = props.imageUrl; // Fix typo: Change props.nickname to props.image
    const caption = props.caption; // Fix typo: Change props.nickanme to props.caption

    return (
        <article className='Post'>
            <header>
                <div className='Post-user'>
                    <div className='Post-user-avatar'>
                        <img src={user.avatar} alt={"image of "+user.userName} />
                    </div>
                    <div className='Post-user-nickname'>
                        <span>{user.userName}</span>
                    </div>
                </div>
            </header>
            <div className='post-image'>
                <div className='post-image-bg'>
                    <img src={imageUrl} alt={caption} />
                </div>
            </div>
            <div className='Post-caption'>
                <strong>{user.userName}</strong> {caption}
            </div>
        </article>
    );
}

export default Post;
