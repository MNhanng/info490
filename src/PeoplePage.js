import { useState } from "react";
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export function PeoplePage(props) {
    const [searchString, setSearchString] = useState("")
    const [selectedRole, setSelectedRole] = useState("all")
    const [selectedMajor, setSelectedMajor] = useState("all")
    const [selectedIndustry, setSelectedIndustry] = useState("all")
    const [selectedTag, setSelectedTag] = useState(false);
    const allProfiles = props.usersData

    // filter for people based on search string

    const onChange = (event) => {
        setSearchString(event.target.value);
    }
    const searchPeople = (people) => {
        return (people.first_name.toLowerCase().includes(searchString.toLowerCase()) || people.last_name.toLowerCase().includes(searchString.toLowerCase()));
    };
    const filteredPeople = (allProfiles).filter(searchPeople);

    // filter for people based selected filters and tags
    const handleRoleClick = (event) => {
        setSelectedRole(event.target.value);
    }
    const handleIndustryClick = (event) => {
        setSelectedIndustry(event.target.value);
    }
    const handleMajorClick = (event) => {
        setSelectedMajor(event.target.value);
    }
    const handleTagClick = () => {
        setSelectedTag(!selectedTag);
    }

    const filterByRole = (people) => {
        return people.role.includes(selectedRole);
    }
    const filterByIndustry = (people) => {
        return people.industry.includes(selectedIndustry);
    }
    const filterByMajor = (people) => {
        return people.major.includes(selectedMajor);
    }
    const filterByTag = (people) => {
        return people.contact.open_contact === "Yes";
    }

    let filteredByFiltersPeople = filteredPeople;
    if (selectedRole !== "all") {
        filteredByFiltersPeople = filteredPeople.filter(filterByRole)
    }
    if (selectedIndustry !== "all") {
        filteredByFiltersPeople = filteredPeople.filter(filterByIndustry)
    }
    if (selectedMajor !== "all") {
        filteredByFiltersPeople = filteredPeople.filter(filterByMajor)
    }
    if (selectedTag === true) {
        filteredByFiltersPeople = filteredPeople.filter(filterByTag)
    }

    return (
        <main>
            <h1>Profiles</h1>
            <PeopleSearchFilter onChange={onChange} handleRoleClick={handleRoleClick} handleIndustryClick={handleIndustryClick} handleMajorClick={handleMajorClick} handleTagClick={handleTagClick} />
            <Profiles usersData={filteredByFiltersPeople} />
        </main>
    )
}

function Profiles(props) {
    // const usersData = props.usersData
    const allProfiles = props.usersData.map((user) => {
        return <ProfileCard user={user} />
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

    const profileLink = '/people/' + encodeURIComponent(user.first_name + " " + user.last_name);

    return (
        <div className="card profile">
            <CardActionArea component={Link} to={profileLink}>
                <div className="profile-card-details">
                    <div className="profile-card-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                    <div className="profile-card-name">{user.first_name + " " + user.last_name}</div>
                    <div className="profile-card-role">{user.role}</div>
                    <div className="profile-card-industry">{user.industry}</div>
                    <div className="profile-card-major">{user.major}</div>
                    {openToContact(user.contact.open_contact)}
                </div>
            </CardActionArea>
        </div>
    )
}

function PeopleSearchFilter(props) {
    return (
        <div>
            <form className="search-bar" onChange={props.onChange} >
                <input type="search" placeholder="Search..." />
            </form>

            <div className="people-filter-container">
                <h2>Filter</h2>
                <div className="people-filters">
                    <div>
                        <select name="user_type" id="user_type" onChange={props.handleRoleClick} >
                            <option value="all" selected>Role</option>
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                        </select>
                    </div>
                    <div>
                        <select name="major" id="major" onChange={props.handleMajorClick}>
                            <option value="all" selected>Major</option>
                            <option value="Art">Art</option>
                            <option value="Business">Business</option>
                            <option value="Biology">Biology</option>
                            <option value="Chemisty">Chemistry</option>
                            <option value="Economics">Economics</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Public Health">Public Health</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Informatics">Informatics</option>
                        </select>
                    </div>
                    <div>
                        <select name="industry" id="industry" onChange={props.handleIndustryClick}>
                            <option value="all" selected>Industry</option>
                            <option value="Technology">Technology</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Business">Business</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                            <option value="Real Estate">Real Estate</option>
                        </select>
                    </div>
                    <div>
                        <input className="open_contact" type="button" value="Open To Contact" onClick={props.handleTagClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}