import { NewPostPopup } from "./Popups"
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useState } from "react";

export function CommunityPage(props) {
    const [searchString, setSearchString] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const allPosts = props.postsData

    // filter posts by search
    const onChange = (event) => {
        setSearchString(event.target.value);
    }
    const searchPosts = (posts) => {
        return (posts.post_title.toLowerCase().includes(searchString.toLowerCase()) || posts.details.toLowerCase().includes(searchString.toLowerCase()));
    };
    const filteredPosts = (allPosts).filter(searchPosts)



    // filter posts by tags
    const filterPosts = (posts, filters) => {
        return posts.filter( post => filters.some( filter => post.tags.includes(filter)))
    }
    const onClick = (event) => {
        if (selectedTags.includes(event.target.value)) {
            // if the selected tags array already include the tag user just clicked, remove it from array 
            setSelectedTags(selectedTags.filter((tag) => tag !== event.target.value))
        } else {
            // add it to array
            setSelectedTags([...selectedTags, event.target.value])
        }
    } 
    // if the array is empty or filled, then show all data
    let filterByTags = null;
    if (selectedTags.length === 3 || selectedTags.length === 0) {
        filterByTags = filteredPosts
    } else {
        filterByTags = filterPosts(filteredPosts, selectedTags)
    }

    

    return (
        <main>
            <CommunityPageHeader addPostCallback={props.addPostCallback}/>
            <CommunityPageSearch onChange={onChange} onClick={onClick} />
            <AllPosts postsData={filterByTags} usersData={props.usersData} />
        </main>
    )
}

function CommunityPageHeader(props) {
    
    return (
        <div className="add-post">
            <h1>Community Posts</h1>
            {/* <button type="button" aria-label="add post">+</button> */}
            <NewPostPopup addPostCallback={props.addPostCallback}/>
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
                        <input className="Academic" type="button" value="Academic" onClick={props.onClick} />
                    </div>
                    <div>
                        <input className="Career" type="button" value="Career" onClick={props.onClick} />
                    </div>
                    <div>
                        <input className="Miscellaneous" type="button" value="Miscellaneous" onClick={props.onClick} />
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