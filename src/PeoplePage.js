export function PeoplePage (props) {
    return (
        <main>
            <h1>Profiles</h1>
            <PeopleSearchFilter />
            <Profiles />
        </main>
    )
}

function Profiles(props) {
    return (
        <div class="profiles-container">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        </div>

    )
}

function ProfileCard(props) {
    return (
        <div class="card profile" onclick="window.location='ProfilePopUp.html';">
            <div class="profile-card-details">
                <div class="profile-card-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                <div class="profile-card-name">David Smith</div>
                {/* <div class="tags">[filter tags go here]</div> */}
                <div class="profile-card-industry">Technology</div>
                <div class="profile-card-major">Informatics</div>
            </div>
        </div>
    )
}

function PeopleSearchFilter (props) {
    return (
        <div>
             <form class="search-bar">
            <input type="search" placeholder="Search..." />
        </form>

        <div class="people-filter-container">
            <h2>Filter</h2>
            <div class="people-filters">
                <div>
                    <select name="user_type" id="user_type">
                        <option value="Student">Student</option>
                        <option value="Alumni">Alumni</option>
                    </select>
                </div>
                <div>
                    <select name="major" id="major">
                        <option value="Major">Major</option>
                        <option value="Informatics">Informatics</option>
                    </select>
                </div>
                <div>
                    <select name="industry" id="industry">
                        <option value="Industry">Industry</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div>
                    <input class="open_contact" type="button" value="Open To Contact" />
                </div>
            </div>
        </div>
        </div>
    )
}