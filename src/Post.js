export function Post(props) {
    return (
        <main>
            <div class="posts-page"> 
            <div class="post">
                <div class="post-info">
                    <div class="post-info-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                    <div class="post-info-name">David Smith</div>
                    <div class="post-info-divider">|</div>
                    <div class="post-info-date">Date and time posted</div>
                    <div class="post-info-likes">20 <i class="fa-regular fa-heart"></i></div>
                </div>
                <div class="post-title">Post Title</div>
                <div class="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
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