import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import _ from 'lodash';
import Modal from 'react-bootstrap/Modal';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile} from 'firebase/auth';

export function MyProfilePage(props) {
    console.log(props.currentUser)
    let user = _.find(props.usersData, { userID: props.currentUser.uid });
    console.log(user)

    const [image, setImage] = useState(undefined);
    const [imageUrl, setImageUrl] = useState(user.profileImage || "../img/user-img.jpg");
    console.log(imageUrl)

    const imageHandleChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const image = event.target.files[0]
            setImage(image);
            setImageUrl(URL.createObjectURL(image));
        }
    }

    const handleImageUpload = async (event) => {
        const storage = getStorage();
        const imageRef = storageRef(storage, "profileImages/" + user.userID + ".png");
        
        await uploadBytes(imageRef, image)
        const downloadUrlString = await getDownloadURL(imageRef);

        const db = getDatabase();
        const profileImageRef = ref(db, "users_data/" + user.userID + "/profileImage")
        firebaseSet(profileImageRef, downloadUrlString);
    }

    return (
        <div className="profile-popup">
            <div className="profile-popup-header">
                <div className="profile-sidebar">
                    <div className="profile-popup-img"><img src={imageUrl === "../img/user-img.jpg" ? require("../img/user-img.jpg") : imageUrl} alt="user profile" /></div>

                    <div className="image-upload">
                        <div>
                            <label htmlFor="profile_img"><i className="fa-solid fa-upload"></i> Upload</label>
                            <input onChange={imageHandleChange} id="profile_img" type="file" className="d-none" />
                        </div>
                        <div>
                            <button onClick={handleImageUpload} type="button" aria-label="Set Profile Image">Set Profile Image</button>
                        </div>
                    </div>

                    <div className="edit-button"><EditProfilePopup currentUser={props.currentUser} /></div>
                </div>
                {/* <div className="profile-header-details">
                </div> */}

                <div className="profile-popup-details">
                    <div className="profile-popup-name">
                        <div className="notice">* The information here will be used for your public user profile that can be found in the 'People' page.</div>
                        <div>{user.firstName + " " + user.lastName}</div>
                    </div>
                    <div className="profile-popup-contact">
                        <div>Email</div>
                        <div>{user.email ? user.email : props.currentUser.email}</div>
                    </div>
                    <div className="profile-popup-contact">
                        <div>Phone Number</div>
                        <div>{user.number ? user.number : 'No phone number found'}</div>
                    </div>
                    <div className="profile-popup-contact">
                        <div>Open to Contact?</div>
                        <div>{user.openContact ? user.openContact : 'No contact preference information found'}</div>
                    </div>
                    <div className="profile-popup-job-title">
                        <div>Job title</div>
                        <div>{user.jobTitle ? user.jobTitle : 'No job title information found'}</div>
                    </div>
                    <div className="profile-popup-employer">
                        <div>Employer</div>
                        <div>{user.employer ? user.employer : 'No employer information found'}</div>
                    </div>
                    <div className="profile-popup-industry">
                        <div>Industry</div>
                        <div>{user.industry ? user.industry : 'No industry information found'}</div>
                    </div>
                    <div className="profile-popup-major">
                        <div>Major</div>
                        <div>{user.major ? user.major : 'No major information found'}</div>
                    </div>
                    <div className="profile-popup-school">
                        <div>School</div>
                        <div>{user.school ? user.school : 'No school information found'}</div>
                    </div>
                    <div className="profile-popup-degree-type">
                        <div>Degree</div>
                        <div>{user.degree ? user.degree : 'No school information found'}</div>
                    </div>
                    <div className="profile-popup-grad-year">
                        <div>Graduation Year</div>
                        <div>{user.gradYear ? user.gradYear : 'No graduation year information found'}</div>
                    </div>
                    <div className="profile-popup-language">
                        <div>Language</div>
                        <div>{user.languages ? user.languages : 'No language information found'}</div>
                    </div>
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

        updateProfile(props.currentUser, { displayName: firstNameInput + " " + lastNameInput} );

    }

    return (
        // <div className="edit_profile">
        <>
            <button onClick={handleShow} type="button" aria-label="Edit profile"><div><i className="fa-regular fa-pen-to-square"></i> Edit Profile</div></button>

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
                                <option value="">Choose a Role:</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Student">Student</option>
                            </select> <br />

                            <label for="bio">Bio</label> <br />
                            <textarea onChange={bioHandleChange} id="bio" name="bio" rows="2"></textarea> <br />

                            <p><b>Contact Information</b></p>

                            <label for="open_contact">Open to Contact?</label>
                            <select onChange={openContactHandleChange} id="open_contact" name="open_contact">
                                <option value="">Choose a Preference:</option>
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
                                <option value="">Choose a Degree:</option>
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
                            <select onChange={majorHandleChange} name="major" id="major">
                                <option value="">Choose a Major:</option>
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
                            <br></br>
                        </div>

                        <div>
                            <p><b>Career</b></p>

                            <label for="industry">Industry</label>
                            <select onChange={industryHandleChange} id="industry" name="industry">
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
                        <button onClick={handleSubmit} type="submit" aria-label="Save profile information">Save</button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* </div> */}
        </>
    )
}



export function UserProfilePage(props) {
    const userKey = decodeURI(useParams().key);
    let user = _.find(props.usersData, { key: userKey });

    return (
        <main>
            <div className="profile-page">
                <Link to="/people"><button type="button" aria-label="Back to People Page"><i className="fa-solid fa-arrow-left"></i></button></Link>
                <div className="profile-intro">
                    <div className="profile-container">
                        <div className="profile-intro-img"><img src={user.profileImage ? user.profileImage : require("../img/user-img.jpg")} alt="user profile" /></div>
                        <div className="profile-intro-details">
                            <div className="profile-intro-name">{user.firstName + " " + user.lastName}</div>
                        </div>
                        {user.openContact === "Yes" && <div className="profile-intro-message-button"><Link to="/messages"><button type="button" aria-label="message">Message</button></Link></div>}
                    </div>
                    <div className="profile-bio-container">
                        <div className="profile-intro-tags">
                            {user.openContact === "Yes" ? <div className="profile-tag contact">Contact Me!</div> : <div className="profile-tag contact">Not Open to Contact</div>}
                            {(user.openContact === "Yes" && user.email) ? <div className="profile-tag email">{user.email}</div> : <div className="profile-tag email">No email found</div>}
                            {(user.openContact === "Yes" && user.number) ? <div className="profile-tag number">{user.number}</div> : <div className="profile-tag number">No number found</div>}
                            {user.role ? <div className="profile-tag role">{user.role}</div> : <div className="profile-tag role">No role found</div>}
                            {user.jobTitle ? <div className="profile-tag jobTitle">{user.jobTitle}</div> : <div className="profile-tag jobTitle">No job title found</div>}
                            {user.employer ? <div className="profile-tag employer">{user.employer}</div> : <div className="profile-tag employer">No employer found</div>}
                            {user.industry ? <div className="profile-tag industry">{user.industry}</div> : <div className="profile-tag industry">No industry found</div>}
                            {user.languages ? <div className="profile-tag industry">{user.languages}</div> : <div className="profile-tag languages">No languages found</div>}
                        </div>

                        <div className="profile-intro-bio">Bio</div>
                        <div className="profile-intro-bio-text">{user.bio ? user.bio : 'No bio found'}</div>

                        <div className="work-experience">
                            <div className="work-header">Work Experience</div>
                            <div className="work-details">
                                <div className="job">{user.jobTitle ? user.jobTitle : 'No job title found'}</div>
                                <div className="employer">{user.employer ? "@ " + user.employer : 'No employer found'}</div>
                            </div>
                        </div>

                        <div className="education-hist">
                            <div className="education-header">Education History</div>
                            {/* <div className="education-container"> */}
                            {/* <div className="logo"><img src={require("./img/logo.jpeg")} alt="uw logo" /></div> */}
                            <div className="education-details">
                                <div className="degree-type">{user.degree ? user.degree : 'No degree found'} – {user.major ? user.major : 'No major found'}</div>
                                {/* <div className="major">{user.major ? user.major : 'No major found'}</div> */}
                                <div className="school">{user.school ? user.school : 'No school found'}</div>
                                <div className="year">{user.gradYear ? user.gradYear : 'No graduation year found'}</div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>


            </div>
        </main>
    )
}