import { NewPostPopup } from "./Popups"
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useState } from "react";

export function CommunityPage(props) {
    const allPosts = props.postsData
    const [searchString, setSearchString] = useState("")
    const onChange = (event) => {
        setSearchString(event.target.value);
    }
    const searchPosts = (posts) => {
        return (posts.post_title.toLowerCase().includes(searchString.toLowerCase()) || posts.details.toLowerCase().includes(searchString.toLowerCase()));
    };
    const filteredPosts = (allPosts).filter(searchPosts)

    return (
        <main>
            <CommunityPageHeader />
            <CommunityPageSearch onChange={onChange} />
            <AllPosts postsData={filteredPosts} usersData={props.usersData} />
        </main>
    )
}

function CommunityPageHeader(props) {
    return (
        <div className="add-post" onclick="window.location='NewPostPopup.html';">
            <h1>Community Posts</h1>
            {/* <button type="button" aria-label="add post">+</button> */}
            <NewPostPopup />
        </div>
    )
}

function CommunityPageSearch(props) {
    return (
        <div>
            <form className="search-bar" onChange={props.onChange} >
                <input type="search" placeholder="Search..." />
            </form>

            <div className="post-filter-container">
                <h2>Filter</h2>
                <div className="post-tags">
                    <div>
                        <input className="Academic" type="button" value="Academic" />
                    </div>
                    <div>
                        <input className="Career" type="button" value="Career" />
                    </div>
                    <div>
                        <input className="Micellaneous" type="button" value="Micellaneous" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function AllPosts(props) {
    // const posts = props.postsData;
    const allPosts = props.postsData.map((post) => {
        return <Post post={post} postOwner={_.find(props.usersData, { userID: post.userID })} />
    })

    return (
        <div className="posts-container">
            {allPosts}
        </div>
    )
}

function Post(props) {
    const post = props.post;
    const owner = props.postOwner;

    const postLink = '/' + encodeURIComponent(post.post_title);

    return (
        <div className="card-post">
            <CardActionArea component={Link} to={postLink}>
                <div className="post-card-details">
                    <div className="post-details">
                        <div className="post-details-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div className="post-details-name">{owner.first_name + " " + owner.last_name}</div>
                        <div className="post-details-divider">|</div>
                        <div className="post-details-date">{post.created_date}</div>
                        <div className="post-details-tag">{post.tags}</div>
                        <div className="post-details-likes">20 <i className="fa-regular fa-heart"></i></div>
                    </div>

                    <div className="post-content-details">
                        <div className="post-content-title">{post.post_title}</div>
                        <div className="post-content-text">{post.details}</div>
                    </div>
                </div>
            </CardActionArea>

        </div>
    )
}