import { NavBar } from "./NavBar.js"
import { HomePage } from "./HomePage.js"
import { Post } from "./Post.js"
import { CommunityPage } from "./Community.js"
import { PeoplePage } from "./PeoplePage.js"
import { ProfilePage } from "./ProfilePage.js"

export default function App(props) {
    return (
        <body>
            <NavBar />
            <HomePage />
            <CommunityPage />
            <PeoplePage />
            <ProfilePage />

            <Post />
        </body>
        
    )
}