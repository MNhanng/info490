import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';

export function PostPage(props) {
    const postKey = decodeURI(useParams().key);
    let post = _.find(props.postsData, { key: postKey });
    let postOwner = _.find(props.usersData, { userID: post.userID });

    const postID = post.postID;
    const comments = props.commentData;

    const postComments = comments.filter(comment => comment.postID === postID);


    return (
        <main>
            <div className="posts-page">
                <PostHeader post={post} postOwner={postOwner} likePostCallback={props.likePostCallback} currentUser={props.currentUser} />
                <CommentForm addCommentCallback={props.addCommentCallback} postID={postID} postKey={post.key}/>
                <AllComments commentData={postComments} usersData={props.usersData} />

            </div>
        </main>
    )
}

function PostHeader(props) {
    const post = props.post
    const postOwner = props.postOwner
    const [like, setLike] = useState(post.likes && post.likes.includes(props.currentUser.uid));

    const onLikeClick = () => {
        props.likePostCallback(post.key);
        setLike(!like);
    }

    let heartClass = "fa-regular fa-heart"
    if (like) {
        heartClass = "fa-solid fa-heart";
    } else {
        heartClass = "fa-regular fa-heart";
    }

    return (
        <div className="post-header">
            <Link to="/community"><button type="button" aria-label="Back to Community Page"><i className="fa-solid fa-arrow-left"></i></button></Link>
            <div className="post">
                <div className="post-info">
                    <div className="post-info-img"><img src={postOwner.profileImage ? postOwner.profileImage : require("../img/user-img.jpg")} alt="user profile" /></div>
                    <div className="post-info-name">{postOwner.firstName + " " + postOwner.lastName}</div>
                    <div className="post-info-divider">|</div>
                    <div className="post-info-date">{post.created_date}</div>
                    <div className="post-details-tag">{post.tags}</div>
                    <div className="post-info-likes">{post.likes && post.likes.length}{(!post.likes || post.likes.length === 0) && "0"} <i className={heartClass} onClick={onLikeClick} ></i></div>
                </div>
                <div className="post-title">{post.post_title}</div>
                <div className="post-content">{post.details}</div>
            </div>

            {/* <hr /> */}
        </div>
    )
}

function CommentForm(props) {

    const [commentInput, setCommentInput] = useState('');
    const commentHandleChange = (event) => {
        let newValue = event.target.value;
        setCommentInput(newValue);
    }

    const handleSubmit = (event) => {
        console.log("submitting", commentInput);
        props.addCommentCallback(commentInput, props.postID, props.postKey);
        setCommentInput('');
    }

    return (
        <div className="add-comment-box">
            {/* <form > */}
                <textarea onChange={commentHandleChange} value={commentInput} id="comment_details" name="comment_details" row="1" placeholder="Type new comment here..."></textarea>
                <button onClick={handleSubmit} type="submit" label="Add Comment">Add Comment</button>

            {/* </form> */}
        </div>
    )
}

function AllComments(props) {
    const allComments = props.commentData.map((comment) => {
        return <Comment comment={comment} commentOwner={_.find(props.usersData, { userID: comment.userID })} key={comment.key}/>
    })
    return allComments
}

function Comment(props) {
    const comment = props.comment;
    const commentOwner = props.commentOwner

    return (
        <div className="comment">
            <div className="comment-info">
                <div className="comment-info-img"><img src={commentOwner.profileImage ? commentOwner.profileImage : require("../img/user-img.jpg")} alt="user profile" /></div>
                <div className="comment-info-name">{commentOwner.firstName + " " + commentOwner.lastName}</div>
                <div className="comment-info-divider">|</div>
                <div className="comment-info-date">{comment.created_date}</div>
            </div>
            <div className="comment-content">{comment.comment}</div>
        </div>

    )
}