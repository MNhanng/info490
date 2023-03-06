import { useState } from "react";
import { CreateButton } from "./ButtonsAndTags"
import { Link, useParams } from "react-router-dom";
import _ from 'lodash';

export function MyProfilePage(props) {
    const [firstNameInput, setFirstNameInput] = useState('');
    const firstNameHandleChange = (event) => {
        let newValue = event.target.value;
        setFirstNameInput(newValue);
    }

    const [lastNameInput, setLasttNameInput] = useState('');
    const lastNameHandleChange = (event) => {
        let newValue = event.target.value;
        setLasttNameInput(newValue);
    }

    const [roleInput, setRoleInput] = useState('');
    const roleHandleChange = (event) => {
        let newValue = event.target.value;
        setRoleInput(newValue);
    }

    const [bioInput, setBioInput] = useState('');
    const bioHandleChange = (event) => {
        let newValue = event.target.value;
        setBioInput(newValue);
    }

    const [openContactInput, setOpenContactInput] = useState('');
    const openContactHandleChange = (event) => {
        let newValue = event.target.value;
        setOpenContactInput(newValue);
    }

    const [numberInput, setNumberInput] = useState('');
    const numberHandleChange = (event) => {
        let newValue = event.target.value;
        setNumberInput(newValue);
    }

    const [emailInput, setEmailInput] = useState('');
    const emailHandleChange = (event) => {
        let newValue = event.target.value;
        setEmailInput(newValue);
    }

    const [schoolInput, setSchoolInput] = useState('');
    const schoolHandleChange = (event) => {
        let newValue = event.target.value;
        setSchoolInput(newValue);
    }

    const [degreeInput, setDegreeInput] = useState('');
    const degreeHandleChange = (event) => {
        let newValue = event.target.value;
        setDegreeInput(newValue);
    }

    const [gradYearInput, setGradYearInput] = useState('');
    const gradYearHandleChange = (event) => {
        let newValue = event.target.value;
        setGradYearInput(newValue);
    }

    const [majorInput, setMajorInput] = useState('');
    const majorHandleChange = (event) => {
        let newValue = event.target.value;
        setMajorInput(newValue);
    }

    const [industryInput, setIndustryInput] = useState('');
    const industryHandleChange = (event) => {
        let newValue = event.target.value;
        setIndustryInput(newValue);
    }

    const [employerInput, setEmployerInput] = useState('');
    const employerHandleChange = (event) => {
        let newValue = event.target.value;
        setEmployerInput(newValue);
    }

    const [jobTitleInput, setJobTitleInput] = useState('');
    const jobTitleHandleChange = (event) => {
        let newValue = event.target.value;
        setJobTitleInput(newValue);
    }

    const [languagesInput, setLanguagesInput] = useState('');
    const languagesHandleChange = (event) => {
        let newValue = event.target.value;
        setLanguagesInput(newValue);
    }


    const handleSubmit = (event) => {
        console.log("submitting", firstNameInput, lastNameInput, roleInput, bioInput, openContactInput, numberInput, emailInput, schoolInput, degreeInput, gradYearInput, majorInput, industryInput, employerInput, jobTitleInput, languagesInput);
    }

    return (
        <form className="edit_profile">
            <h1>Edit Profile</h1>
            <div>
                <label for="first_name">First Name</label>
                <input onChange={firstNameHandleChange} value={firstNameInput} type="text" /> <br></br>

                <label for="last_name">Last Name</label>
                <input onChange={lastNameHandleChange} value={lastNameInput} type="text" /> <br></br>

                <label for="role">Role</label>
                <select onChange={roleHandleChange} id="role" name="role">
                    <option value="Alumni">Alumni</option>
                    <option value="Student">Student</option>
                </select> <br />

                <label for="bio">Bio</label> <br />
                <textarea onChange={bioHandleChange} value={bioInput} id="bio" name="bio" rows="2"></textarea> <br />

                <p><b>Contact Information</b></p>

                <label for="open_contact">Open to Contact?</label>
                <select onChange={openContactHandleChange} id="open_contact" name="open_contact">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select> <br></br>

                <label for="contact_number">Contact Number</label>
                <input onChange={numberHandleChange} value={numberInput} type="text" /> <br></br>

                <label for="contact_email">Email</label>
                <input onChange={emailHandleChange} value={emailInput} type="text" /> <br></br>

            </div>

            <div>
                <p><b>Educational History</b></p>

                <label for="school">School</label>
                <input onChange={schoolHandleChange} value={schoolInput} type="text" /> <br></br>

                <label for="degree">Degree</label>
                <select onChange={degreeHandleChange} id="degree" name="degree">
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate Degree">Doctorate Degree</option>
                    <option value="Professional Degree">Professional Degree</option>
                    <option value="Other">Other</option>
                </select>

                <label for="grad_year">Graduation Year</label>
                <input onChange={gradYearHandleChange} value={gradYearInput} type="text" /> <br></br>

                <label for="Major">Major</label>
                <input onChange={majorHandleChange} value={majorInput} type="text" /> <br></br>
            </div>

            <div>
                <p><b>Career</b></p>

                <label for="industry">Industry</label>
                <select onChange={industryHandleChange} id="industry" name="industry">
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                </select>

                <label for="employer">Employer</label>
                <input onChange={employerHandleChange} value={employerInput} type="text" /> <br></br>

                <label for="job_title">Job Title</label>
                <input onChange={jobTitleHandleChange} value={jobTitleInput} type="text" /> <br></br>

                <label for="languages">Languages</label>
                <input onChange={languagesHandleChange} value={languagesInput} type="text" /> <br></br>
            </div>

            <div>
                <CreateButton onClick={handleSubmit} type="submit" title="Save" label="Save profile information" />
            </div>
        </form>
    )
}



export function UserProfilePage(props) {
    const profileNameLink = decodeURI(useParams().profileName);
    console.log(profileNameLink)
    let firstName = profileNameLink.split(' ')[0];
    let lastName = profileNameLink.split(' ')[1];
    let user = _.find(props.usersData, { first_name: firstName, last_name: lastName });

    return (
        <main>
            <div class="profile-page">
                <Link to="/people"><CreateButton type="button" title="<-" label="Back to People Page" /></Link>
                <div class="profile-intro">
                    <div class="profile-container">
                        <div class="profile-intro-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div class="profile-intro-details">
                            <div class="profile-intro-name">{user.first_name + " " + user.last_name}</div>
                            <div class="profile-intro-tags">[tags go here]</div>
                        </div>
                    </div>
                    <div class="profile-bio-container">
                        <div class="profile-intro-bio">Bio</div>
                        <div class="profile-intro-bio-text">{user.bio}</div>
                    </div>
                </div>

                <div class="education-hist">
                    <div class="education-header">Education History</div>
                    <hr />
                    <div class="education-container">
                        <div class="logo"><img src={require("./img/logo.jpeg")} alt="uw logo" /></div>
                        <div class="education-details">
                            <div class="degree-type">{user.degree}</div>
                            <div class="school">{user.school}</div>
                            <div class="year">{user.grad_year}</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}