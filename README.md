# Informatics Capstone Project

## Problem Statement

How might UW undergraduate students achieve better networking and access to information from alumni so that they can pursue their academic/career goals successfully?

## Problem Context

According to survey data on networking, up to 85% of jobs on the market are filled via networking (Alder, 2016). In fact, many new job and internship openings are never posted and are instead filled by systems of networking and referrals from current employees (Belli, 2017). For college students, it is crucial that they build a strong professional network with alumni in order to stand out amongst other job/internship candidates (Intercell, 2021). They also need a way to connect with alumni mentors with similar academic/career interests to learn more about post-grad programs and take advantage of academic resources (Intercell, 2021). While colleges do offer their students networking opportunities such as mentoring programs, career fairs or academic advising, they're often not personalized to meet the needs of students (Maroe, 2020). What students really need is a platform to directly connect one-on-one with mentors of their choice to network and gain insider's perspectives that will help them in their journey on pursuing their academic and career goals. Without a platform to network with alumni, students may have a hard time figuring out their career/academic paths after graduation.

## Project Overview

iConnect helps UW students gain better networking and access to information by creating a platform where students can find alumni in career fields of interest so that they can pursue their career goals successfully. Research shows that having a strong professional network means students are able to receive mentorship advice and guidance, access to information related to their majors, academics, career paths and more. Connecting with alumni will help students expand their network and explore more career/internship opportunities. It will also help motivate students to continue pursuing their academic and career goals (Intercell, 2021). iConnect does just that with a Community feature that gives students the ability to post to a forum with topics concerning internship opportunities, career advice, and academic advice. Our community feature includes filters that students can use to find posts with relevant information regarding their career. iConnect also brings students and alumni together through the People feature, by putting the power of networking in the hands of the user. Students and Alumni can use the People feature to look for others who may have similar interests and opportunities to share with students. The People feature includes a chat feature that has yet to be implemented but will be used as a base for creating personal connections with Alumni.

## Open Sourcing Links

Presentation Deck: https://docs.google.com/presentation/d/1rZ8elPl4QYzRjDx55vVbt47wEkE65cc7Yms1LwHP75s/edit?usp=sharing 

Final Product: https://iconnect-23.web.app/signin 

Github: https://github.com/MNhanng/info490

## License

MIT license: LICENSE.md

## Contact Information

If you want to learn more about this project or are interested in continuing this project, please contact us at iConnectCapstoneTeam@gmail.com.

## Development Details

For the design of this project, we created an interactive prototype by using Figma. To validate concepts and test our prototype features, we conducted three rounds of user interviews. The main takeaway was that students need a way to better network with responsive alumni. Therefore, we iterated through our design to incorporate search and filtering options that would enable seamless networking between students and alumni. We also intentionally designed our interfaces to be simple for easy and intuitive navigation.

#### After iterations, we decided to include the following must-have features:

* A Community page for accessing current users’ posts and adding new posts
* A People page for searching for alumni or students
* A My Profile page for editing a user’s information to display on profiles that other users will see

#### Nice-to-have features: 

* An Events page for accessing information on events that users want to share with each other
* A Message page for direct communication between users
* Allowing users to like posts
* A Resources page

For the development of this project, we developed a React application by using Create React App. We used Firebase for the backend and to host our React application.

Currently, we have implemented all our must-have features. For our nice-to-have features, we have been able to implement the Events page and the ability for users to like posts. However, we have not been able to implement the chat and resources feature at this time.

#### To run this application locally, follow these steps:

* Clone this repository
* Run npm install to install all required dependencies
* Run npm start to to run this application on localhost:3000

Reference https://info340.github.io/react.html to learn more about how to set up React JS. 

Reference https://info340.github.io/firebase.html to learn more about how to set up Firebase.

Reference https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/ to learn more about how to deploy a React project on Firebase.

## Information About Our Code

Main files exists within the src/component/ folder:

* App.js: Handles routing between pages and loading data.
* NavBar.js: Creates the nav bar that appears on all pages and handles routing between tabs. 
* Community.js: Creates a page for users to access, search, filter, and sort posts. When users click on a post, they will be directed to the Post Page.
* EventsPage.js: Creates a page that contains all events currently in the system. Handles searching, filtering, and sorting of events.
* HomePage.js: Creates the page that users first see when they sign in. Also displays the top 5 upcoming events. 
* MessagePage.js: Creates a static page of the message feature. Contains incomplete functionalities that can be built upon in the future.
* PeoplePage.js: Creates the page where users can access all profiles currently on the app. Handles searching, filtering, and sorting functionalities. 
* Popups.js: Responsible for all popup interfaces that allow users to add/change some content on the app. 
* PostPage.js: Creates the page that users see when they click on a community post card. Handles adding comments and liking post activities.
* ProfilePage.js: Handles the interfaces for the My Profile page, the Edit Profile Popup page, and the individual User Profile page that users see after clicking on a profile card on the People page.
* SignInPage.js: Uses the ‘firebase/auth’ library for configuring user authentication.

## User Data

All stakeholders (our interviewees) will be notified of the project’s transition to open source by May 31, 2023. We do not have any systems that automatically collect user data, so there will not be any shutdown of such systems. The web application will continue to operate with all accounts under the ownership of our team until June 30, 2023, which is when this project will officially be transitioned to open source.  As of June 30, 2023, we will shut down Firebase which means the current site/link will no longer be active.

## Future Steps

* Additional user testing to target the needs and motivations of alumni stakeholders
* Improve the UI and UX of our application
* Enhance the web app’s responsiveness
* Implement a fully functional chat feature, including the ability to be notified when there is a new message and to send attachments
* Build a system for verifying users’ information regarding schooling, occupation, and experience
* Integrate security measures for data exchange among users

## References

1. Adler, L. (2016, February 28). New survey reveals 85% of all jobs are filled via networking. LinkedIn. Retrieved January 25, 2023, from https://www.linkedin.com/pulse/new-survey-reveals-85-all-jobs-filled-via-networking-lou-adler/?src=aff-ref&trk=aff-ir_progid.8005_partid.196318_sid._adid.449670&clickid=RBe1NlRYHxyNWFcSqx2h30cTUkA1CdXpTWZT3E0&mcid=6851962469594763264&irgwc=1
2. Belli, G. (2017, April 10). At least 70% of jobs are not even listed - here's how to up your chances of getting a great New gig. Business  Insider. Retrieved January 25, 2023, from https://www.businessinsider.com/at-least-70-of-jobs-are-not-even-listed-heres-  how-to-up-your-chances-of-getting-a-great-new-gig-2017-4
3. Intercell. (2021, September 9). Reasons why mentoring is beneficial for college students. LinkedIn. Retrieved January 25, 2023, from https://www.linkedin.com/pulse/reasons-why-mentoring-beneficial-college-students-/?trk=organization-update-content_share-article
4. Maroe, F. (2020, January 21). Do students really want to be mentored? LinkedIn. Retrieved January 25, 2023, from https://www.linkedin.com/pulse/do-students-really-want-mentored-fredrik-mar%C3%B8/
