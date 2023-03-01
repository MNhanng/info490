import React, { useState } from 'react';
import { NavBar } from "./NavBar.js";
import { HomePage } from "./HomePage.js";
import { PostPage } from "./Post.js";
import { CommunityPage } from "./Community.js";
import { PeoplePage } from "./PeoplePage.js";
import { ProfilePage } from "./ProfilePage.js";

import { Routes, Route, Navigate } from 'react-router-dom';


import users_data from "./user_data.json";
import posts from "./posts.json";

export default function App(props) {
    const [allPosts, setAllPosts] = useState(posts);
    const [allUsers, setAllUsers] = useState(users_data);


    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Routes>
                    <Route path='*' element={<Navigate to='/home' />} />
                    <Route path='home' element={<HomePage />} />
                    <Route path='community' element={<CommunityPage postsData={allPosts} usersData={allUsers} />} />
                    <Route path=':postTitle' element={<PostPage postsData={allPosts} usersData={allUsers} />} />
                    <Route path='people' element={<PeoplePage usersData={allUsers} />} />
                    <Route path='profile' element={<ProfilePage />} />
                </Routes>

                {/* <NavBar />
                <HomePage />
                <CommunityPage />
                <PeoplePage usersData={allUsers} />
                <ProfilePage />

                <Post /> */}
            </main>
            <footer>
                <p>&copy; 2022 </p>
            </footer>
        </>

    )
}