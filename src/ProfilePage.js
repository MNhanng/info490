import { useState, useEffect } from "react";
import { CreateButton } from "./ButtonsAndTags"
import { Link, useParams } from "react-router-dom";
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

export function MyProfilePage(props) {
    console.log(props.currentUser)
    let user = _.find(props.usersData, { userID: props.currentUser.uid });
    console.log(user)

    return (
        <div class="profile-popup">
            <EditProfilePopup currentUser={props.currentUser} />
            <div class="profile-popup-header">
                {/* <div class="profile-popup-img"><img src="img/user-img.jpg" alt="user profile"></img></div> */}
                <div class="profile-header-details">
                    {/* <div class="profile-popup-name">Name: {user.firstName + " " + user.lastName}</div>
                    <div class="profile-popup-contact">Email: {user.email}</div>
                    <div class="profile-popup-contact">Phone Number: {user.number ? user.jobTitle : 'No job title information found'}</div>
                    <div class="profile-popup-contact">Open to Contact? {user.openContact ? user.openContact : 'No contact preference information found'}</div> */}
                </div>
            </div>

            <div class="profile-popup-details">
                <div class="profile-popup-name">
                    <div>Name</div> 
                    <div>{user.firstName + " " + user.lastName}</div>
                </div>
                <div class="profile-popup-contact">
                    <div>Email</div>
                    <div>{user.email}</div>
                </div>
                <div class="profile-popup-contact">
                    <div>Phone Number</div>
                    <div>{user.number ? user.number : 'No phone number found'}</div>
                </div>
                <div class="profile-popup-contact">
                    <div>Open to Contact?</div>
                    <div>{user.openContact ? user.openContact : 'No contact preference information found'}</div>
                </div>
                <div class="profile-popup-job-title">
                    <div>Job title</div>
                    <div>{user.jobTitle ? user.jobTitle : 'No job title information found'}</div>
                </div>
                <div class="profile-popup-employer">
                    <div>Employer</div>
                    <div>{user.employer ? user.employer : 'No employer information found'}</div>
                </div>
                <div class="profile-popup-industry">
                    <div>Industry</div>
                    <div>{user.industry ? user.industry : 'No industry information found'}</div>
                </div>
                <div class="profile-popup-major">
                    <div>Major</div>
                    <div>{user.major ? user.major : 'No major information found'}</div>
                </div>
                <div class="profile-popup-school">
                    <div>School</div>
                    <div>{user.school ? user.school : 'No school information found'}</div>
                </div>
                <div class="profile-popup-degree-type">
                    <div>Degree</div>
                    <div>{user.school ? user.school : 'No school information found'}</div>
                </div>
                <div class="profile-popup-grad-year">
                    <div>Graduation Year</div>
                    <div>{user.gradYear ? user.gradYear : 'No graduation year information found'}</div>
                </div>
                <div class="profile-popup-language">
                    <div>Language</div>
                    <div>{user.languages ? user.languages : 'No language information found'}</div>
                </div>
            </div>
        </div>

    );
}

export function EditProfilePopup(props) {
    const [showPopup, setShowPopup] = useState(false);

    const handleShow = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);

    const userUID = props.currentUser.uid;
    console.log(userUID);

    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [roleInput, setRoleInput] = useState('');
    const [bioInput, setBioInput] = useState('');
    const [openContactInput, setOpenContactInput] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [schoolInput, setSchoolInput] = useState('');
    const [degreeInput, setDegreeInput] = useState('');
    const [gradYearInput, setGradYearInput] = useState('');
    const [majorInput, setMajorInput] = useState('');
    const [industryInput, setIndustryInput] = useState('');
    const [employerInput, setEmployerInput] = useState('');
    const [jobTitleInput, setJobTitleInput] = useState('');
    const [languagesInput, setLanguagesInput] = useState('');

    useEffect(() => {
        const db = getDatabase();
        const firstNameRef = ref(db, 'users_data/' + userUID + '/firstName');
        const lastNameRef = ref(db, 'users_data/' + userUID + '/lastName');
        const roleRef = ref(db, 'users_data/' + userUID + '/role');
        const bioRef = ref(db, 'users_data/' + userUID + '/bio');
        const openContactRef = ref(db, 'users_data/' + userUID + '/openContact');
        const numberRef = ref(db, 'users_data/' + userUID + '/number');
        const emailRef = ref(db, 'users_data/' + userUID + '/email');
        const schoolRef = ref(db, 'users_data/' + userUID + '/school');
        const degreeRef = ref(db, 'users_data/' + userUID + '/degree');
        const gradYearRef = ref(db, 'users_data/' + userUID + '/gradYear');
        const majorRef = ref(db, 'users_data/' + userUID + '/major');
        const industryRef = ref(db, 'users_data/' + userUID + '/industry');
        const employerRef = ref(db, 'users_data/' + userUID + '/employer');
        const jobTitleRef = ref(db, 'users_data/' + userUID + '/jobTitle');
        const languagesRef = ref(db, 'users_data/' + userUID + '/languages');

        console.log(firstNameRef)

        const fnFunction = onValue(firstNameRef, (snapshot) => {
            const fnObj = snapshot.val();
            setFirstNameInput(fnObj);
        })

        const lnFunction = onValue(lastNameRef, (snapshot) => {
            const lnObj = snapshot.val();
            setLastNameInput(lnObj);
        })

        const roleFunction = onValue(roleRef, (snapshot) => {
            const roleObj = snapshot.val();
            setRoleInput(roleObj);
        })

        const bioFunction = onValue(bioRef, (snapshot) => {
            const bioObj = snapshot.val();
            setBioInput(bioObj);
        })

        const openContactFunction = onValue(openContactRef, (snapshot) => {
            const openContactObj = snapshot.val();
            setOpenContactInput(openContactObj);
        })

        const numberFunction = onValue(numberRef, (snapshot) => {
            const numberObj = snapshot.val();
            setNumberInput(numberObj);
        })

        const emailFunction = onValue(emailRef, (snapshot) => {
            const emailObj = snapshot.val();
            setEmailInput(emailObj);
        })

        const schoolFunction = onValue(schoolRef, (snapshop) => {
            const schoolObj = snapshop.val();
            setSchoolInput(schoolObj);
        })

        const degreeFunction = onValue(degreeRef, (snapshop) => {
            const degreeObj = snapshop.val();
            setDegreeInput(degreeObj);
        })

        const gradYearFunction = onValue(gradYearRef, (snapshop) => {
            const gradYearObj = snapshop.val();
            setGradYearInput(gradYearObj);
        })

        const majorFunction = onValue(majorRef, (snapshop) => {
            const majorObj = snapshop.val();
            setMajorInput(majorObj);
        })

        const industryFunction = onValue(industryRef, (snapshop) => {
            const industryObj = snapshop.val();
            setIndustryInput(industryObj);
        })

        const employerFunction = onValue(employerRef, (snapshop) => {
            const employerObj = snapshop.val();
            setEmployerInput(employerObj);
        })

        const jobTitleFunction = onValue(jobTitleRef, (snapshop) => {
            const jobTitleObj = snapshop.val();
            setJobTitleInput(jobTitleObj);
        })

        const languageFunction = onValue(languagesRef, (snapshop) => {
            const languageObj = snapshop.val();
            setLanguagesInput(languageObj);
        })

        console.log("firebasing");

        function cleanup() {
            fnFunction();
            lnFunction();
            roleFunction();
            bioFunction();
            openContactFunction();
            numberFunction();
            emailFunction();
            schoolFunction();
            degreeFunction();
            gradYearFunction();
            majorFunction();
            industryFunction();
            employerFunction();
            jobTitleFunction();
            languageFunction();
        }

        return cleanup;
    }, [])

    const firstNameHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('first name', newValue);
        setFirstNameInput(newValue);
    }

    const lastNameHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('last name', newValue);
        setLastNameInput(newValue);
    }

    const roleHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('role', newValue);
        setRoleInput(newValue);
    }

    const bioHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('bio', newValue);
        setBioInput(newValue);
    }

    const openContactHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('open contact', newValue);
        setOpenContactInput(newValue);
    }

    const numberHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('number', newValue);
        setNumberInput(newValue);
    }

    const emailHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('email', newValue);
        setEmailInput(newValue);
    }

    const schoolHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('school', newValue);
        setSchoolInput(newValue);
    }

    const degreeHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('degree', newValue);
        setDegreeInput(newValue);
    }

    const gradYearHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('grad year', newValue);
        setGradYearInput(newValue);
    }

    const majorHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('major', newValue);
        setMajorInput(newValue);
    }

    const industryHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('industry', newValue);
        setIndustryInput(newValue);
    }

    const employerHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('employer', newValue);
        setEmployerInput(newValue);
    }

    const jobTitleHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('job title', newValue);
        setJobTitleInput(newValue);
    }

    const languagesHandleChange = (event) => {
        let newValue = event.target.value;
        console.log('languages', newValue);
        setLanguagesInput(newValue);
    }

    const handleSubmit = () => {
        console.log("submitting", firstNameInput, lastNameInput, roleInput, bioInput, openContactInput, numberInput, emailInput, schoolInput, degreeInput, gradYearInput, majorInput, industryInput, employerInput, jobTitleInput, languagesInput);

        const db = getDatabase();
        const userIDRef = ref(db, 'users_data/' + userUID + '/userID');
        const firstNameRef = ref(db, 'users_data/' + userUID + '/firstName');
        const lastNameRef = ref(db, 'users_data/' + userUID + '/lastName');
        const roleRef = ref(db, 'users_data/' + userUID + '/role');
        const bioRef = ref(db, 'users_data/' + userUID + '/bio');
        const openContactRef = ref(db, 'users_data/' + userUID + '/openContact');
        const numberRef = ref(db, 'users_data/' + userUID + '/number');
        const emailRef = ref(db, 'users_data/' + userUID + '/email');
        const schoolRef = ref(db, 'users_data/' + userUID + '/school');
        const degreeRef = ref(db, 'users_data/' + userUID + '/degree');
        const gradYearRef = ref(db, 'users_data/' + userUID + '/gradYear');
        const majorRef = ref(db, 'users_data/' + userUID + '/major');
        const industryRef = ref(db, 'users_data/' + userUID + '/industry');
        const employerRef = ref(db, 'users_data/' + userUID + '/employer');
        const jobTitleRef = ref(db, 'users_data/' + userUID + '/jobTitle');
        const languagesRef = ref(db, 'users_data/' + userUID + '/languages');

        firebaseSet(userIDRef, userUID)
        firebaseSet(firstNameRef, firstNameInput);
        firebaseSet(lastNameRef, lastNameInput);
        firebaseSet(roleRef, roleInput);
        firebaseSet(bioRef, bioInput);
        firebaseSet(openContactRef, openContactInput);
        firebaseSet(numberRef, numberInput);
        firebaseSet(emailRef, emailInput);
        firebaseSet(schoolRef, schoolInput);
        firebaseSet(degreeRef, degreeInput);
        firebaseSet(gradYearRef, gradYearInput);
        firebaseSet(majorRef, majorInput);
        firebaseSet(industryRef, industryInput);
        firebaseSet(employerRef, employerInput);
        firebaseSet(jobTitleRef, jobTitleInput);
        firebaseSet(languagesRef, languagesInput);
    }

    return (
        // <div className="edit_profile">
        <>
            <CreateButton onClick={handleShow} type="button" title="Edit Profile" label="Edit profile" />

            <Modal show={showPopup} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile for {firstNameInput + " " + lastNameInput}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <h1>Edit Profile for {firstNameInput + " " + lastNameInput}</h1> */}
                    <div className="edit_profile">
                        <div>
                            <label for="first_name">First Name</label>
                            <input onChange={firstNameHandleChange} type="text" /> <br></br>

                            <label for="last_name">Last Name</label>
                            <input onChange={lastNameHandleChange} type="text" /> <br></br>

                            <label for="role">Role</label>
                            <select onChange={roleHandleChange} id="role" name="role">
                                <option value="">Choose A Role:</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Student">Student</option>
                            </select> <br />

                            <label for="bio">Bio</label> <br />
                            <textarea onChange={bioHandleChange} id="bio" name="bio" rows="2"></textarea> <br />

                            <p><b>Contact Information</b></p>

                            <label for="open_contact">Open to Contact?</label>
                            <select onChange={openContactHandleChange} id="open_contact" name="open_contact">
                                <option value="">Choose A Preference:</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select> <br></br>

                            <label for="contact_number">Contact Number</label>
                            <input onChange={numberHandleChange} type="text" /> <br></br>

                            <label for="contact_email">Email</label>
                            <input onChange={emailHandleChange} type="text" /> <br></br>

                        </div>

                        <div>
                            <p><b>Educational History</b></p>

                            <label for="school">School</label>
                            <input onChange={schoolHandleChange} type="text" /> <br></br>

                            <label for="degree">Degree</label>
                            <select onChange={degreeHandleChange} id="degree" name="degree">
                                <option value="">Choose A Degree:</option>
                                <option value="Associate Degree">Associate Degree</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="Doctorate Degree">Doctorate Degree</option>
                                <option value="Professional Degree">Professional Degree</option>
                                <option value="Other">Other</option>
                            </select>
                            <br></br>

                            <label for="grad_year">Graduation Year</label>
                            <input onChange={gradYearHandleChange} type="text" /> <br></br>

                            <label for="Major">Major</label>
                            {/* <input onChange={majorHandleChange} type="text" /> <br></br> */}
                            <select onChange={majorHandleChange} name="major" id="major">
                                <option value="">Choose a Major:</option>
                                <option value="Art">Art</option>
                                <option value="Business">Business</option>
                                <option value="Biology">Biology</option>
                                <option value="Chemisty">Chemistry</option>
                                <option value="Economics">Economics</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Public Health">Public Health</option>
                                <option value="Nursing">Nursing</option>
                                <option value="Informatics">Informatics</option>
                                <option value="Psychology">Psychology</option>
                                <option value="Communication">Communication</option>
                                <option value="Biochemistry">Biochemistry</option>
                                <option value="Social Work">Social Work</option>
                                <option value="Dance">Dance</option>
                                <option value="Music">Music</option>
                                <option value="Finance">Finance</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Film Studies">Film Studies</option>
                                <option value="Geography">Geography</option>
                                <option value="Anthropology">Anthropology</option>
                                <option value="Political Science">Political Science</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Korean">Korean</option>
                                <option value="Vietnamese">Vietnamese</option>
                                <option value="Latin">Latin</option>
                                <option value="Math">Math</option>
                                <option value="Statistics">Statistics</option>
                                <option value="Microbiology">Microbiology</option>
                                <option value="Medical Lab Science">Medical Lab Science</option>
                                <option value="Education">Education</option>
                            </select>
                            <br></br>
                        </div>

                        <div>
                            <p><b>Career</b></p>

                            <label for="industry">Industry</label>
                            <select onChange={industryHandleChange} id="industry" name="industry">
                                <option value="">Choose A Industry:</option>
                                <option value="Technology">Technology</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Business">Business</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Education">Education</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Public Services">Public Services</option>
                                <option value="Government">Government</option>
                                <option value="Law">Law</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Construction">Construction</option>
                                <option value="Food">Food</option>
                                <option value="Education">Tourism</option>
                                <option value="Art">Art</option>
                                <option value="Fashion">Fashion</option>
                            </select>
                            <br></br>

                            <label for="employer">Employer</label>
                            <input onChange={employerHandleChange} type="text" /> <br></br>

                            <label for="job_title">Job Title</label>
                            <input onChange={jobTitleHandleChange} type="text" /> <br></br>

                            <label for="languages">Languages</label>
                            <input onChange={languagesHandleChange} type="text" /> <br></br>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className="popup-button">
                        <CreateButton onClick={handleSubmit} type="submit" title="Save" label="Save profile information" />
                    </div>
                </Modal.Footer>
            </Modal>
            {/* </div> */}
        </>
    )
}



export function UserProfilePage(props) {
    const profileNameLink = decodeURI(useParams().profileName);
    console.log(profileNameLink)
    let firstName = profileNameLink.split(' ')[0];
    let lastName = profileNameLink.split(' ')[1];
    let user = _.find(props.usersData, { firstName: firstName, lastName: lastName });

    return (
        <main>
            <div className="profile-page">
                <Link to="/people"><CreateButton type="button" title="<-" label="Back to People Page" /></Link>
                <div className="profile-intro">
                    <div className="profile-container">
                        <div className="profile-intro-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div className="profile-intro-details">
                            <div className="profile-intro-name">{user.firstName + " " + user.lastName}</div>
                            <div className="profile-intro-tags">
                                {user.openContact === "Yes" ? <div className="profile-tag contact">Contact Me!</div> : <div className="profile-tag contact">Not Open to Contact</div>}
                                {user.openContact === "Yes" ? <div className="profile-tag email">{user.email}</div> : <div className="profile-tag email">No email found</div>}
                                {user.openContact === "Yes" ? <div className="profile-tag number">{user.number}</div> : <div className="profile-tag number">No number found</div>}
                                <br />
                                {user.role ? <div className="profile-tag role">{user.role}</div> : <div className="profile-tag role">No role found</div>}
                                {user.jobTitle ? <div className="profile-tag jobTitle">{user.jobTitle}</div> : <div className="profile-tag jobTitle">No job title found</div>}
                                {user.employer ? <div className="profile-tag employer">{user.employer}</div> : <div className="profile-tag employer">No employer found</div>}
                                {user.industry ? <div className="profile-tag industry">{user.industry}</div> : <div className="profile-tag industry">No industry found</div>}
                                {user.languages ? <div className="profile-tag industry">{user.languages}</div> : <div className="profile-tag languages">No languages found</div>}
                            </div>
                        </div>
                    </div>
                    <div className="profile-bio-container">
                        <div className="profile-intro-bio">Bio</div>
                        <div className="profile-intro-bio-text">{user.bio ? user.bio : 'No bio found'}</div>
                    </div>
                </div>

                <div className="education-hist">
                    <div className="education-header">Education History</div>
                    <hr />
                    <div className="education-container">
                        <div className="logo"><img src={require("./img/logo.jpeg")} alt="uw logo" /></div>
                        <div className="education-details">
                            <div className="degree-type">{user.degree ? user.degree : 'No degree found'}</div>
                            <div className="major">{user.major ? user.major : 'No major found'}</div>
                            <div className="school">{user.school ? user.school : 'No school found'}</div>
                            <div className="year">{user.gradYear ? user.gradYear : 'No graduation year found'}</div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}