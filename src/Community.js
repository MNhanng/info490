import { NewPostPopup } from "./Popups"

export function CommunityPage(props) {
    return (
        <main>
            <CommunityPageHeader />
            <CommunityPageSearch />
            <AllPosts postsData={props.postsData} />
        </main>
    )
}

function CommunityPageHeader(props) {
    return (
        <div class="add-post"  onclick="window.location='NewPostPopup.html';">
            <h1>Community Posts</h1>
            {/* <button type="button" aria-label="add post">+</button> */}
            <NewPostPopup />
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
    const posts = props.postsData;
    const allPosts = Object.keys(posts).map((post) => {
        return <Post post={posts[post]}/>
    })


    return (
        <div className="posts-container">
            {allPosts}
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>     
    )
}

function Post(props) {
    const post = props.post;
    return (
        <div class="card-post" onclick="window.location='posts.html';">
            <div className="post-card-details">
                <div class="post-details">
                    <div class="post-details-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                    <div class="post-details-name">Username</div>
                    <div class="post-details-divider">|</div>
                    <div class="post-details-date">{post.created_date}</div>
                    <div class="post-details-likes">20 <i class="fa-regular fa-heart"></i></div>
                </div>

                <div class="post-content-details">
                    <div class="post-content-title">{post.post_title}</div>
                    <div class="post-content-text">{post.details}
                    </div>
                </div>
            </div>
        </div>
    )
}