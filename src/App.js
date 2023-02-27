import React, { useState } from 'react';
import { NavBar } from "./NavBar.js";
import { HomePage } from "./HomePage.js";
import { Post } from "./Post.js";
import { CommunityPage } from "./Community.js";
import { PeoplePage } from "./PeoplePage.js";
import { ProfilePage } from "./ProfilePage.js";

import users_data from "./user_data.json";

export default function App(props) {
const [allUsers, setAllUsers] = useState(users_data);

    return (
        <body>
            <NavBar />
            <HomePage />
            <CommunityPage />
            <PeoplePage usersData={allUsers} />
            <ProfilePage />

            <Post />
        </body>
        
    )
}