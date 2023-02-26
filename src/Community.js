export function CommunityPage(props) {
    return (
        <main>
            <CommunityPageHeader />
            <CommunityPageSearch />
            <AllPosts />
        </main>
    )
}

function CommunityPageHeader(props) {
    return (
        <div class="add-post"  onclick="window.location='NewPostPopup.html';">
            <h1>Community Posts</h1>
            <button type="button" aria-label="add post">+</button>
        </div>
    )
}

function CommunityPageSearch(props) {
    return (
        <div>
            <form class="search-bar">
                <input type="search" placeholder="Search..." />
            </form>

            <div class="post-filter-container">
                <h2>Filter</h2>
                <div class="post-tags">
                    <div>
                        <input class="Academic" type="button" value="Academic" />
                    </div>
                    <div>
                        <input class="Career" type="button" value="Career" />
                    </div>
                    <div>
                        <input class="Micellaneous" type="button" value="Micellaneous" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function AllPosts(props) {
    return (
        <div className="posts-container">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>     
    )
}

function Post(props) {
    return (
        <div class="card-post" onclick="window.location='posts.html';">
            <div className="post-card-details">
                <div class="post-details">
                    <div class="post-details-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                    <div class="post-details-name">Username</div>
                    <div class="post-details-divider">|</div>
                    <div class="post-details-date">Date and time posted</div>
                    <div class="post-details-likes">20 <i class="fa-regular fa-heart"></i></div>
                </div>

                <div class="post-content-details">
                    <div class="post-content-title">Post title</div>
                    <div class="post-content-text">Some example post content goes here. vfdkrkdhr lshrcjfbkh
                        sufhlurbvrxhf shfrkubisbriuhushruh kushfkuhrnshrkhsur lsihfruhsuh sfhurhfuosh sf ouoo ufsrbchks
                        sfhh vfdkrkdhr lshrcjfbkh sufhlurbvrxhf shfrkubisbriuhushruh kushfkuhrnshrkhsur lsihfruhsuh
                        sfhurhfuosh sf ouoo ufsrbchks sfhh vfdkrkdhr lshrcjfbkh sufhlurbvrxhf shfrkubisbriuhushruh
                        kushfkuhrnshrkhsur lsihfruhsuh sfhurhfuosh sf ouoo ufsrbchks sfhh
                    </div>
                </div>
            </div>
        </div>
    )
}