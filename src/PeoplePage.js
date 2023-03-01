export function PeoplePage (props) {
    return (
        <main>
            <h1>Profiles</h1>
            <PeopleSearchFilter />
            <Profiles usersData={props.usersData}/>
        </main>
    )
}

function Profiles(props) {
    const usersData = props.usersData
    const allProfiles = Object.values(usersData).map((user) => {
        return <ProfileCard user={user}/>
    })

    return (
        <div className="profiles-container">
            {allProfiles}
        </div>

    )
}

function ProfileCard(props) {
    let user = props.user;

    const openToContact = (contact) => {
        if (contact === "Yes") {
            return (
                <div className="profile-card-contact">Open to Contact</div>
            )
        }
    }

    return (
        <div className="card profile" onclick="window.location='ProfilePopUp.html';">
            <div className="profile-card-details">
                <div className="profile-card-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                <div className="profile-card-name">{user.first_name + " " + user.last_name}</div>
                <div className="profile-card-job">{user.job_title}</div>
                <div className="profile-card-industry">{user.industry}</div>
                <div className="profile-card-major">{user.major}</div>
                {openToContact(user.contact.open_contact)}
            </div>
        </div>
    )
}

function PeopleSearchFilter (props) {
    return (
        <div>
             <form className="search-bar">
            <input type="search" placeholder="Search..." />
        </form>

        <div className="people-filter-container">
            <h2>Filter</h2>
            <div className="people-filters">
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
                    <input className="open_contact" type="button" value="Open To Contact" />
                </div>
            </div>
        </div>
        </div>
    )
}