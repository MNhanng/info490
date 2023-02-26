export function ProfilePage(props) {
    return (
        <main>
            <div class="profile-page">
                <div class="profile-intro">
                    <div class="profile-container">
                        <div class="profile-intro-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div class="profile-intro-details">
                            <div class="profile-intro-name">David Smith</div>
                            <div class="profile-intro-tags">[tags go here]</div>
                        </div>
                    </div>
                    <div class="profile-bio-container">
                        <div class="profile-intro-bio">Bio</div>
                        <div class="profile-intro-bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>

                <div class="education-hist">
                    <div class="education-header">Education History</div>
                    <hr />
                    <div class="education-container">
                        <div class="logo"><img src={require("./img/logo.jpeg")} alt="uw logo" /></div>
                        <div class="education-details">
                            <div class="degree-type">Master of Professional Accounting</div>
                            <div class="school">Foster School of Business</div>
                            <div class="year">2019-2021</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}