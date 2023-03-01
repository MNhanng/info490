import { Link, useParams } from 'react-router-dom';
import _ from 'lodash';
import { CreateButton } from './ButtonsAndTags';

export function PostPage(props) {
    const postTitleLink = decodeURI(useParams().postTitle);
    let post = _.find(props.postsData, { post_title: postTitleLink });
    let postOwner = _.find(props.usersData, { userID: post.userID })


    return (
        <main>
            <div class="posts-page">
                <Link to="/community"><CreateButton type="button" title="<-" label="Back to Community Page" /></Link>
                <div class="post">
                    <div class="post-info">
                        <div class="post-info-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div class="post-info-name">{postOwner.first_name + " " + postOwner.last_name}</div>
                        <div class="post-info-divider">|</div>
                        <div class="post-info-date">{post.created_date}</div>
                        <div className="post-details-tag">{post.tags}</div>
                        <div class="post-info-likes">{post.likes.length} <i class="fa-regular fa-heart"></i></div>
                    </div>
                    <div class="post-title">{post.post_title}</div>
                    <div class="post-content">{post.details}</div>
                </div>

                <hr />

                <div class="add-comment-box">
                    <textarea id="freeform" name="freeform">Type new comment here...</textarea>
                    <button type="button">Add Comment</button>
                </div>

                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </main>
    )
}


function Comment(props) {
    return (
        <div class="comment">
            <div class="comment-info">
                <div class="comment-info-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                <div class="comment-info-name">David Smith</div>
                <div class="comment-info-divider">|</div>
                <div class="comment-info-date">Date and time posted</div>
            </div>
            <div class="comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>

    )
}