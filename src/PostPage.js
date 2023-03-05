import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
import { CreateButton } from './ButtonsAndTags';

export function PostPage(props) {
    const postTitleLink = decodeURI(useParams().postTitle);
    let post = _.find(props.postsData, { post_title: postTitleLink });
    let postOwner = _.find(props.usersData, { userID: post.userID });

    const postID = post.postID;
    const comments = props.commentData;

    const postComments = comments.filter(comment => comment.postID === postID);


    return (
        <main>
            <div className="posts-page">
                <PostHeader post={post} postOwner={postOwner} />
                <CommentForm addCommentCallback={props.addCommentCallback}/>
                <AllComments commentData={postComments} usersData={props.usersData} />

            </div>
        </main>
    )
}

function PostHeader(props) {
    const post = props.post
    const postOwner = props.postOwner
    return (
        <div>
            <Link to="/community"><CreateButton type="button" title="<-" label="Back to Community Page" /></Link>
            <div className="post">
                <div className="post-info">
                    <div className="post-info-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                    <div className="post-info-name">{postOwner.first_name + " " + postOwner.last_name}</div>
                    <div className="post-info-divider">|</div>
                    <div className="post-info-date">{post.created_date}</div>
                    <div className="post-details-tag">{post.tags}</div>
                    <div className="post-info-likes">{post.likes.length} <i className="fa-regular fa-heart"></i></div>
                </div>
                <div className="post-title">{post.post_title}</div>
                <div className="post-content">{post.details}</div>
            </div>

            <hr />
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
        props.addCommentCallback(commentInput);
        setCommentInput('');
    }

    return (
        <div className="add-comment-box">
            <form >
                <textarea onChange={commentHandleChange} value={commentInput} id="comment_details" name="comment_details" row="1" placeholder="Type new comment here..."></textarea>
                {/* <button onClick={handleSubmit} type="submit" title="Add Comment" label="Add Comment">Add Comment</button> */}
                <CreateButton onClick={handleSubmit} type="submit" title="Add Comment" label="Add Comment"/>

            </form>
        </div>
    )
}

function AllComments(props) {
    const allComments = props.commentData.map((comment) => {
        return <Comment comment={comment} commentOwner={_.find(props.usersData, { userID: comment.userID })} />
    })

    return allComments
}

function Comment(props) {
    const comment = props.comment;
    const commentOwner = props.commentOwner

    return (
        <div className="comment">
            <div className="comment-info">
                <div className="comment-info-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                <div className="comment-info-name">{commentOwner.first_name + " " + commentOwner.last_name}</div>
                <div className="comment-info-divider">|</div>
                <div className="comment-info-date">{comment.created_date}</div>
            </div>
            <div className="comment-content">{comment.comment}</div>
        </div>

    )
}