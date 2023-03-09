import { useState, useEffect } from "react";
import { CreateButton } from "./ButtonsAndTags"
import { Link, useParams } from "react-router-dom";
import _ from 'lodash';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

export function MyProfilePage(props) {
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
        <div className="edit_profile">
            <h1>Edit Profile for {firstNameInput + " " + lastNameInput}</h1>
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

                <label for="grad_year">Graduation Year</label>
                <input onChange={gradYearHandleChange} type="text" /> <br></br>

                <label for="Major">Major</label>
                <input onChange={majorHandleChange} type="text" /> <br></br>
            </div>

            <div>
                <p><b>Career</b></p>

                <label for="industry">Industry</label>
                <select onChange={industryHandleChange} id="industry" name="industry">
                    <option value="">Choose A Industry:</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                </select>

                <label for="employer">Employer</label>
                <input onChange={employerHandleChange} type="text" /> <br></br>

                <label for="job_title">Job Title</label>
                <input onChange={jobTitleHandleChange} type="text" /> <br></br>

                <label for="languages">Languages</label>
                <input onChange={languagesHandleChange} type="text" /> <br></br>
            </div>

            <div>
                <CreateButton onClick={handleSubmit} type="submit" title="Save" label="Save profile information" />
            </div>
        </div>
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
            <div class="profile-page">
                <Link to="/people"><CreateButton type="button" title="<-" label="Back to People Page" /></Link>
                <div class="profile-intro">
                    <div class="profile-container">
                        <div class="profile-intro-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
                        <div class="profile-intro-details">
                            <div class="profile-intro-name">{user.firstName + " " + user.lastName}</div>
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
                            <div class="year">{user.gradYear}</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}