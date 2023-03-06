import React, { useState } from 'react';
import { NavBar } from "./NavBar.js";
import { HomePage } from "./HomePage.js";
import { PostPage } from "./PostPage.js";
import { CommunityPage } from "./Community.js";
import { PeoplePage } from "./PeoplePage.js";
import { MyProfilePage, UserProfilePage } from "./ProfilePage.js";
import { Routes, Route, Navigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';


import users_data from "./user_data.json";
import posts from "./posts_data.json";
import comments from "./comments_data.json";


export default function App(props) {
    const [allPosts, setAllPosts] = useState(posts);
    const [allUsers, setAllUsers] = useState(users_data);

    const addPost = (post_title, tags, details) => {
        const newPost = {
            "userID": 1,
            "postID": posts.length + 1,
            "post_title": post_title,
            "tags": tags,
            "details": details,
            "likes": [],
            "created_date": new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}),
            "comments": []
        };

        const updatePosts = [...allPosts, newPost];
        setAllPosts(updatePosts);
    }

    const [allComments, setAllComments] = useState(comments);
    const addComment = (comment) => {
        const newComment = {
            "userID": 5,
            "postID": 1,
            "created_date": new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}),
            "comment": comment
        };

        const updateComments = [...allComments, newComment];
        setAllComments(updateComments);
    }

    console.log(allPosts)
    console.log(allComments)

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Routes>
                    <Route path='*' element={<Navigate to='/home' />} />
                    <Route path='home' element={<HomePage />} />
                    <Route path='community' element={<CommunityPage addPostCallback={addPost} postsData={allPosts} usersData={allUsers} />} />
                    <Route path=':postTitle' element={<PostPage addCommentCallback={addComment} postsData={allPosts} usersData={allUsers} commentData={allComments} />} />
                    <Route path='people' element={<PeoplePage usersData={allUsers} />} />
                    <Route path='people/:profileName' element={<UserProfilePage usersData={allUsers} />} />
                    <Route path='profile' element={<MyProfilePage />} />
                </Routes>

                {/* <NavBar />
                <HomePage />
                <CommunityPage />
                <PeoplePage usersData={allUsers} />
                <ProfilePage />

                <Post /> */}
            </main>
            <footer>
                <p>&copy; iConnect 2023 </p>
            </footer>
        </>

    )
}