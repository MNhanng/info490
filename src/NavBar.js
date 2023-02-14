export function NavBar(props) {
    return (
        <div class="nav">
            <div class="nav-container">
                <div class="logo">Logo</div>
                <div class="nav-elems">
                    <li><a href="HomePage.html"><span class="home-icon"><i class="fa-solid fa-house"></i> Home</span></a></li>
                    <li><a href="CommunityPage.html"><span class="community-icon"><i class="fa-solid fa-globe"></i> Community</span></a></li>
                    <li><a href="PeoplePage.html"><span class="community-icon"><i class="fa-solid fa-users"></i> People</span></a></li>
                    <li><a><span class="profile-icon"><i class="fa-solid fa-user"></i> Profile</span></a></li>
                    <li><a><span class="settings-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</span></a></li>
                </div>
            </div>
            <hr/>
        </div>
    )
}