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
        return (people.firstName.toLowerCase().includes(searchString.toLowerCase()) || people.lastName.toLowerCase().includes(searchString.toLowerCase())
            || ((people.firstName).toLowerCase() + ' ' + (people.lastName).toLowerCase()).includes(searchString.toLowerCase())
            || (people.jobTitle && people.jobTitle.toLowerCase().includes(searchString.toLowerCase())));
    };
    let filteredPeople = (allProfiles).filter(searchPeople);

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
        return people.role && people.role.includes(selectedRole);
    }
    const filterByIndustry = (people) => {
        return people.industry && people.industry.includes(selectedIndustry);
    }
    const filterByMajor = (people) => {
        return people.major && people.major.includes(selectedMajor);
    }
    const filterByTag = (people) => {
        return people.openContact && people.openContact.includes("Yes");
    }

    if (selectedRole !== "all") {
        filteredPeople = filteredPeople.filter(filterByRole)
    }
    if (selectedIndustry !== "all") {
        filteredPeople = filteredPeople.filter(filterByIndustry)
    }
    if (selectedMajor !== "all") {
        filteredPeople = filteredPeople.filter(filterByMajor)
    }
    if (selectedTag === true) {
        filteredPeople = filteredPeople.filter(filterByTag)
    }

    return (
        <main>
            <h1>Profiles</h1>
            <PeopleSearchFilter onChange={onChange} handleRoleClick={handleRoleClick} handleIndustryClick={handleIndustryClick} handleMajorClick={handleMajorClick} handleTagClick={handleTagClick} selectedTag={selectedTag} />
            <Profiles usersData={filteredPeople} />
        </main>
    )
}

function Profiles(props) {
    // const usersData = props.usersData
    const allProfiles = props.usersData.map((user) => {
        return <ProfileCard user={user} key={user.userID} />
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

    const profileLink = '/people/' + encodeURIComponent(user.key);

    return (
        <div className="card profile">
            <CardActionArea component={Link} to={profileLink}>
                <div className="profile-card-details">
                    <div className="profile-card-img"><img src={user.profileImage ? user.profileImage : require("../img/user-img.jpg")} alt="user profile" /></div>
                    <div className="profile-card-name">{user.firstName + " " + user.lastName}</div>
                    {user.role && <div className="profile-card-role">{user.role}</div>}
                    {openToContact(user.openContact)}
                    {user.major && <div className="profile-card-major"><span>Major: </span>{user.major}</div>}
                    {user.industry && <div className="profile-card-industry"><span>Current Industry: </span>{user.industry}</div>}
                    {user.jobTitle && <div className="profile-card-job"><span>Current Occupation: </span>{user.jobTitle}</div>}
                </div>
            </CardActionArea>
        </div>
    )
}

function PeopleSearchFilter(props) {
    let tagClass = "open_contact";
    if (props.selectedTag) {
        tagClass = "open_contact-clicked"
    }
    return (
        <div>
            <form className="search-bar" onChange={props.onChange} >
                <input type="search" placeholder="Search for people (ex: 'John Doe' or 'Project Manager')" />
            </form>

            <div className="people-filter-container">
                <h2>Filter</h2>
                <div className="people-filters">
                    <div>
                        <select name="user_type" id="user_type" onChange={props.handleRoleClick} >
                            <option value="all" defaultValue>Role</option>
                            <option value="Student">Student</option>
                            <option value="Alumni">Alumni</option>
                        </select>
                    </div>
                    <div>
                        <select name="major" id="major" onChange={props.handleMajorClick}>
                            <option value="all" defaultValue>Major</option>
                            <option value="American Ethnic Studies">American Ethnic Studies</option>
                            <option value="Anthropology">Anthropology</option>
                            <option value="Applied Mathematics">Applied Mathematics</option>
                            <option value="Aquatic and Fishery Sciences">Aquatic and Fishery Sciences</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Art">Art</option>
                            <option value="Asian Languages and Culture">Asian Languages and Culture</option>
                            <option value="Asian Studies">Asian Studies</option>
                            <option value="Astronomy">Astronomy</option>
                            <option value="Atmospheric Sciences">Atmospheric Sciences</option>
                            <option value="Business">Business</option>
                            <option value="Biochemistry">Biochemistry</option>
                            <option value="Bioengineering">Bioengineering</option>
                            <option value="Biology">Biology</option>
                            <option value="Chemisty">Chemistry</option>
                            <option value="Chemical Engineering">Chemical Engineering</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Cinema & Media Studies">Cinema & Media Studies</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Classics">Classics</option>
                            <option value="Communication">Communication</option>
                            <option value="Community, Environment, and Planning">Community, Environment, and Planning</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Dance">Dance</option>
                            <option value="Design">Design</option>
                            <option value="Drama">Drama</option>
                            <option value="Early Childhood and Family Studies">Early Childhood and Family Studies</option>
                            <option value="Earth and Space Sciences">Earth and Space Sciences</option>
                            <option value="Economics">Economics</option>
                            <option value="Education">Education</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Environmental Engineering">Environmental Engineering</option>
                            <option value="Environmental Health">Environmental Health</option>
                            <option value="European Studies">European Studies</option>
                            <option value="Finance">Finance</option>
                            <option value="Film Studies">Film Studies</option>
                            <option value="Food Systems, Nutrition, and Health">Food Systems, Nutrition, and Health</option>
                            <option value="French">French</option>
                            <option value="Geography">Gender, Women, and Sexuality Studies</option>
                            <option value="Geography">Geography</option>
                            <option value="Health Informatics and Health Information Management">Health Informatics and Health Information Management</option>
                            <option value="History">History</option>
                            <option value="Human Centered Design and Engineering">Human Centered Design and Engineering</option>
                            <option value="Industrial Engineering">Industrial Engineering</option>
                            <option value="Informatics">Informatics</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Jazz Studies">Jazz Studies</option>
                            <option value="Jewish Studies">Jewish Studies</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Korean">Korean</option>
                            <option value="Latin">Latin</option>
                            <option value="Latin American and Caribbean Studies">Latin American and Caribbean Studies</option>
                            <option value="Linguistics">Linguistics</option>
                            <option value="Materials Science Engineering">Materials Science Engineering</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Marine Biology">Marine Biology</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Medical Laboratory Science">Medical Laboratory Science</option>
                            <option value="Microbiology">Microbiology</option>
                            <option value="Music">Music</option>
                            <option value="Neuroscience">Neuroscience</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Oceanography">Oceanography</option>
                            <option value="Orchestral Instruments">Orchestral Instruments</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Physics">Physics</option>
                            <option value="Political Science">Political Science</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Public Health - Global Health">Public Health - Global Health</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Scandinavian Studies">Scandinavian Studies</option>
                            <option value="Social Welfare">Social Welfare</option>
                            <option value="Sociology">Sociology</option>
                            <option value="South Asian Languages and Literature (Hindi and Sanskrit)">South Asian Languages and Literature (Hindi and Sanskrit)</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Speech and Hearing Sciences">Speech and Hearing Sciences</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Swedish">Swedish</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Voice (Music)">Voice (Music)</option>
                        </select>
                    </div>
                    <div>
                        <select name="industry" id="industry" onChange={props.handleIndustryClick}>
                            <option value="all" defaultValue>Industry</option>
                            <option value="">Choose an Industry:</option>
                                <option value="Aerospace">Aerospace</option>
                                <option value="Art">Art</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Biotechnology">Biotechnology</option>
                                <option value="Business">Business</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Construction">Construction</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="Education">Education</option>
                                <option value="Energy">Energy</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Finance">Finance</option>
                                <option value="Food">Food</option>
                                <option value="Government">Government</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Hospitality">Hospitality</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Law">Law</option>
                                <option value="Nonprofit">Nonprofit</option>
                                <option value="Media">Media</option>
                                <option value="Pharmaceutical">Pharmaceutical</option>
                                <option value="Politics">Politics</option>
                                <option value="Public Services">Public Services</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Retail">Retail</option>
                                <option value="Sports">Sports</option>
                                <option value="Technology">Technology</option>
                                <option value="Tourism">Tourism</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Utilities">Utilities</option>
                        </select>
                    </div>
                    <div>
                        <input className={tagClass} type="button" value="Open To Contact" onClick={props.handleTagClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}