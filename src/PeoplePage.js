import { useState } from "react";

export function PeoplePage (props) {
    // get users data in array form
    const allProfiles = Object.values(props.usersData)

    // filter for people based on search string
    const [searchString, setSearchString] = useState("")
    const onChange = (event) => {
        setSearchString(event.target.value);
    }
    const searchPeople = (people) => {
        return (people.first_name.toLowerCase().includes(searchString.toLowerCase()) || people.last_name.toLowerCase().includes(searchString.toLowerCase()));
    };
    const filteredPeople = (allProfiles).filter(searchPeople);

    return (
        <main>
            <h1>Profiles</h1>
            <PeopleSearchFilter onChange={onChange}/>
            <Profiles usersData={filteredPeople}/>
        </main>
    )
}

function Profiles(props) {
    // const usersData = props.usersData
    const allProfiles = props.usersData.map((user) => {
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
                <div className="profile-card-role">{user.role}</div>
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
            <form className="search-bar" onChange={props.onChange} >
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