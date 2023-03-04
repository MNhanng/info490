import { CreateButton } from "./ButtonsAndTags"

export function ProfilePage(props) {
    return (
        <form className="edit_profile">
            <h1>Edit Profile</h1>
            <div>
                <label for="first_name">First Name</label>
                <input type="text" /> <br></br>

                <label for="last_name">Last Name</label>
                <input type="text" /> <br></br>

                <label for="role">Role</label>
                <select id="role" name="role">
                    <option value="Alumni">Alumni</option>
                    <option value="Student">Student</option>
                </select> <br />

                <label for="bio">Bio</label> <br />
                <textarea id="bio" name="bio" rows="2"></textarea> <br />

                <p><b>Contact Information</b></p>

                <label for="open_contact">Open to Contact?</label>
                <select id="open_contact" name="open_contact">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select> <br></br>

                <label for="contact_number">Contact Number</label>
                <input type="text" /> <br></br>

                <label for="contact_email">Email</label>
                <input type="text" /> <br></br>

            </div>

            <div>
                <p><b>Educational History</b></p>

                <label for="school">School</label>
                <input type="text" /> <br></br>

                <label for="degree">Degree</label>
                <select id="degree" name="degree">
                    <option value="Associate">Associate Degree</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="Doctorate">Doctorate Degree</option>
                    <option value="Professional">Professional Degree</option>
                    <option value="Other">Other</option>
                </select>

                <label for="grad_year">Graduation Year</label>
                <input type="text" /> <br></br>

                <label for="Major">Major</label>
                <input type="text" /> <br></br>
            </div>

            <div>
                <p><b>Career</b></p>

                <label for="industry">Industry</label>
                <select id="industry" name="industry">
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                </select>

                <label for="employer">Employer</label>
                <input type="text" /> <br></br>

                <label for="job_title">Job Title</label>
                <input type="text" /> <br></br>

                <label for="languages">Languages</label>
                <input type="text" /> <br></br>
            </div>

            <div>
            <CreateButton type="submit" title="Save" label="Save profile information" />
            </div>
        </form>
    )
}



// export function ProfilePage(props) {
//     return (
//         <main>
//             <div class="profile-page">
//                 <div class="profile-intro">
//                     <div class="profile-container">
//                         <div class="profile-intro-img"><img src={require("./img/user-img.jpg")} alt="user profile" /></div>
//                         <div class="profile-intro-details">
//                             <div class="profile-intro-name">David Smith</div>
//                             <div class="profile-intro-tags">[tags go here]</div>
//                         </div>
//                     </div>
//                     <div class="profile-bio-container">
//                         <div class="profile-intro-bio">Bio</div>
//                         <div class="profile-intro-bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
//                     </div>
//                 </div>

//                 <div class="education-hist">
//                     <div class="education-header">Education History</div>
//                     <hr />
//                     <div class="education-container">
//                         <div class="logo"><img src={require("./img/logo.jpeg")} alt="uw logo" /></div>
//                         <div class="education-details">
//                             <div class="degree-type">Master of Professional Accounting</div>
//                             <div class="school">Foster School of Business</div>
//                             <div class="year">2019-2021</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }