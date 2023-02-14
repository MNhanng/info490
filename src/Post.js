export function Post(props) {
    return (
        <main>
            <div class="posts-page"> 
                <div class="post">
                    <div class="post-info">
                        <div>Name</div>
                        <div>Date posted</div>
                    </div>
                    <div class="post-title">Post Title</div>
                    <div class="post-content">Contents of post</div>
                </div>

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
                <div>Name</div>
                <div>Date posted</div>
            </div>
            <div class="comment-content">Comment</div>
        </div>
    )
}