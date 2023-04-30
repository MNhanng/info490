import { NewPostPopup } from "./Popups"
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useState } from "react";

export function CommunityPage(props) {
    const [searchString, setSearchString] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const [academicTagColor, setAcademicTagColor] = useState(false)
    const [careerTagColor, setCareerTagColor] = useState(false)
    const [miscTagColor, setMiscTagColor] = useState(false)
    const [sort, setSort] = useState("newest");
    const allPosts = props.postsData
    console.log(allPosts)

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

        if (event.target.value === "Academic") {
            setAcademicTagColor(!academicTagColor)
        } else if (event.target.value === "Career") {
            setCareerTagColor(!careerTagColor)
        } else {
            setMiscTagColor(!miscTagColor)
        }
    } 
    // if the array is empty or filled, then show all data
    let filterByTags = null;
    if (selectedTags.length === 3 || selectedTags.length === 0) {
        filterByTags = filteredPosts
    } else {
        filterByTags = filterPosts(filteredPosts, selectedTags)
    }

    // sort posts
    
    const handleSort = (event) => {
        setSort(event.target.value);
    }

    let sortedPosts = null;
    if (sort === "newest") {
        sortedPosts = filterByTags.sort((post1, post2) => {
            return new Date(post1.created_date) - new Date(post2.created_date);
        })
    } else if (sort === "oldest") {
        sortedPosts = filterByTags.sort((post1, post2) => {
            return new Date(post2.created_date) - new Date(post1.created_date);
        })
    } else if (sort === "popular") {
        sortedPosts = filterByTags.sort((post1, post2) => {
            let numLikes1 = 0;
            let numLikes2 = 0;
            if (post1.likes && post1.likes.length > 0) {
                numLikes1 = post1.likes.length;
            }
            if (post2.likes && post2.likes.length > 0) {
                numLikes2 = post2.likes.length;
            }
            return numLikes2 - numLikes1;
        })
    }

    return (
        <main>
            <CommunityPageHeader addPostCallback={props.addPostCallback}/>
            <CommunityPageSearch onChange={onChange} onClick={onClick} academicTagColor={academicTagColor} careerTagColor={careerTagColor} miscTagColor={miscTagColor} handleSort={handleSort} />
            <AllPosts postsData={sortedPosts} usersData={props.usersData} currentUser={props.currentUser}/>
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
    let academicTagClass = "Academic";
    let careerTagClass = "Career";
    let miscTagClass = "Miscellaneous";
    if (props.academicTagColor) {
        academicTagClass = "clicked-academic"
    }
    if (props.careerTagColor) {
        careerTagClass = "clicked-career"
    }
    if (props.miscTagColor) {
        miscTagClass = "clicked-misc"
    }

    return (
        <div>
            <form className="search-bar" onChange={props.onChange} >
                <input type="search" placeholder="Search for posts" />
            </form>

            <div className="post-filter-container">
                <h2>Filter</h2>
                <div className="post-tags">
                    <div>
                        <input className={academicTagClass}type="button" value="Academic" onClick={props.onClick} />
                    </div>
                    <div>
                        <input className={careerTagClass} type="button" value="Career" onClick={props.onClick} />
                    </div>
                    <div>
                        <input className={miscTagClass} type="button" value="Miscellaneous" onClick={props.onClick} />
                    </div>
                </div>
                <div className="post-sort">
                    <select name="post-sort" id="post-sort" onChange={props.handleSort} >
                        <option value="newest" defaultValue>Sort By Date (Most Recent)</option>
                        <option value="oldest">Sort By Date (Oldest)</option>
                        <option value="popular">Sort By Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function AllPosts(props) {
    const allPosts = props.postsData.map((post) => {
        return <Post post={post} key={post.postID} postOwner={_.find(props.usersData, { userID: post.userID })} currentUser={props.currentUser}/>
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

    let heartClass;
    if (post.likes && post.likes.length !== 0 && post.likes.includes(props.currentUser.uid)) {
        heartClass = "fa-solid fa-heart";
    } else {
        heartClass = "fa-regular fa-heart";
    }


    return (
        <div className="card-post">
            <CardActionArea component={Link} to={postLink}>
                <div className="post-card-details">
                    <div className="post-details">
                        <div className="post-details-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div className="post-details-name">{owner.firstName + " " + owner.lastName}</div>
                        <div className="post-details-divider">|</div>
                        <div className="post-details-date">{post.created_date}</div>
                        <div className="post-details-tag">{post.tags}</div>
                        <div className="post-details-likes">{post.likes && post.likes.length}{(!post.likes || post.likes.length === 0) && "0"} <i className={heartClass} ></i></div>
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