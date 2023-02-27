import React, { useState } from 'react';
import { NavBar } from "./NavBar.js";
import { HomePage } from "./HomePage.js";
import { Post } from "./Post.js";
import { CommunityPage } from "./Community.js";
import { PeoplePage } from "./PeoplePage.js";
import { ProfilePage } from "./ProfilePage.js";

import { Routes, Route, Navigate } from 'react-router-dom';


import users_data from "./user_data.json";

export default function App(props) {
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
                    <Route path='community' element={<CommunityPage />} />
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