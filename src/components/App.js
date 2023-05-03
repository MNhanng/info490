import React, { useState, useEffect } from 'react';
import { NavBar } from "./NavBar.js";
import { SignInPage } from './SignInPage.js';
import { HomePage } from "./HomePage.js";
import { PostPage } from "./PostPage.js";
import { CommunityPage } from "./Community.js";
import { EventsPage, EventForm } from './EventsPage.js';
import { MessagesPage } from './MessagesPage.js';
import { PeoplePage } from "./PeoplePage.js";
import { MyProfilePage, UserProfilePage } from "./ProfilePage.js";
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

const nullUser = { uid: null };

export default function App(props) {
    const [currentUser, setCurrentUser] = useState(nullUser)
    const [alertMessage, setAlertMessage] = useState(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) { // logged in
                console.log(firebaseUser)
                firebaseUser.firstName = firebaseUser.firstName || firebaseUser.displayName.substring(0, firebaseUser.displayName.indexOf(' '));
                firebaseUser.lastName = firebaseUser.lastName || firebaseUser.displayName.substring(firebaseUser.displayName.indexOf(' ') + 1);

                const db = getDatabase();
                const firstNameRef = ref(db, 'users_data/' + firebaseUser.uid + '/firstName');
                const lastNameRef = ref(db, 'users_data/' + firebaseUser.uid + '/lastName');
                // const emailRef = ref(db, 'users_data/' + firebaseUser.uid + '/email');
                const userIDRef = ref(db, 'users_data/' + firebaseUser.uid + '/userID');

                firebaseSet(firstNameRef, firebaseUser.firstName);
                firebaseSet(lastNameRef, firebaseUser.lastName);
                // firebaseSet(emailRef, firebaseUser.email);
                firebaseSet(userIDRef, firebaseUser.uid)

                setCurrentUser(firebaseUser);
                navigateTo('/home');
            } else { // not logged in
                console.log("not signed in")

                setCurrentUser(nullUser)
                navigateTo('/sign-in');
            }
        })
    }, []);
    console.log(currentUser);

    const [allUsers, setAllUsers] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [allComments, setAllComments] = useState([]);
    const [allEvents, setAllEvents] = useState([]);


    // read data from firebase
    useEffect(() => {
        const db = getDatabase();
        const allUserProfileRef = ref(db, 'users_data/');
        const allPostsRef = ref(db, 'posts_data/');
        const allCommentsRef = ref(db, 'comments_data/');
        const allEventsRef = ref(db, 'events_data');

        const userFunction = onValue(allUserProfileRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const userObj = valueObj[keyString];
                userObj.key = keyString;
                return userObj;
            })

            setAllUsers(objArray);
        })

        const postsFunction = onValue(allPostsRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const postObj = valueObj[keyString];
                postObj.key = keyString;
                return postObj;
            })

            let commentsArray = [];
            objArray.forEach((obj) => {
                if (obj['comments']) {
                    const commentKeys = Object.keys(obj['comments']);
                    const commentArray = commentKeys.map((keyString) => {
                        const commentObj = obj['comments'][keyString];
                        commentObj.key = keyString;
                        return commentObj;
                    })
                    commentArray.forEach((comment) => {
                        commentsArray.push(comment);
                    })
                }
            })
            
            setAllComments(commentsArray);
            setAllPosts(objArray);
        })

        // const commentsFunction = onValue(allCommentsRef, (snapshot) => {
        //     const valueObj = snapshot.val();
        //     const objKeys = Object.keys(valueObj);
        //     const objArray = objKeys.map((keyString) => {
        //         const commentObj = valueObj[keyString];
        //         commentObj.key = keyString;
        //         return commentObj;
        //     })
        //     setAllComments(objArray);
        // })

        const eventsFunction = onValue(allEventsRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const eventObj = valueObj[keyString];
                eventObj.key = keyString;
                return eventObj;
            })

            setAllEvents(objArray);
        })

        function cleanup() {
            userFunction();
            postsFunction();
            // commentsFunction();
            eventsFunction();
        }
        return cleanup;
    }, [currentUser]);

    // function for adding new profiles for first time users / people who just signed up
    // const addNewUserProfile = () => {
    //     const newProfile = {
    //         "bio": "",
    //         "degree": "",
    //         "email": currentUser.email,
    //         "employer": "",
    //         "firstName": currentUser.displayName.substring(0, currentUser.displayName.indexOf(' ')),    
    //         "lastName": currentUser.displayName.substring(currentUser.displayName.indexOf(' ') + 1),
    //         "gradYear": "",
    //         "industry": "",
    //         "jobTitle": "",
    //         "languages": "",
    //         "major": "",
    //         "number": "",
    //         "openContact": "",
    //         "role": "",
    //         "school": "",
    //         "userID": currentUser.uid
    //     }
    //     const db = getDatabase();
    //     const allProfilesRef = ref(db, 'users_data/')
    //     firebasePush(allProfilesRef, newProfile).then(() => console.log("Successfully added new user profile")).catch((error) => setAlertMessage(error.message));
    // }



    const addPost = (post_title, tags, details) => {
        let postID = 0;
        if (allPosts.length === 0) {
            postID = 0;
        } else {
            postID = allPosts[allPosts.length - 1].postID + 1;
        }
        const newPost = {
            "userID": currentUser.uid,
            "postID": postID,
            "post_title": post_title,
            "tags": tags,
            "details": details,
            "likes": [],
            "created_date": new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
            "comments": []
        };
        const db = getDatabase();
        const allPostsRef = ref(db, 'posts_data/')
        firebasePush(allPostsRef, newPost).then(() => console.log("Successfully added new post")).catch((error) => setAlertMessage(error.message));
    }

    const addComment = (comment, postID, postKey) => {
        const newComment = {
            "userID": currentUser.uid,
            "postID": postID,
            "created_date": new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
            "comment": comment
        };
        const db = getDatabase();
        // const allPostsRef = ref(db, 'comments_data/')
        const allCommentsRef = ref(db, 'posts_data/' + postKey + '/comments');
        firebasePush(allCommentsRef, newComment).then(() => console.log("Successfully added new comment")).catch((error) => setAlertMessage(error.message));
    }

    const likePost = (postKey) => {
        const post = allPosts.find(post => post.key === postKey);
        if (!post.likes) {
            post.likes = []
        }
        if (post.likes.includes(currentUser.uid)) {
            const index = post.likes.indexOf(currentUser.uid);
            post.likes.splice(index, 1);
        } else {
            post.likes.push(currentUser.uid);
        }
        const db = getDatabase();
        const postRef = ref(db, 'posts_data/' + postKey);
        firebaseSet(postRef, post).then(() => console.log("Successfully liked/unliked post")).catch((error) => setAlertMessage(error.message));
    }

    const addEvent = (name, dateTime, location, tags, description, specifications) => {
        let eventID = 0;
        if (allEvents.length === 0) {
            eventID = 0;
        } else {
            eventID = allEvents[allEvents.length - 1].eventID + 1;
        }
        const newEvent = {
            "userID": currentUser.uid,
            "eventID": eventID,
            "name": name,
            "dateTime": new Date(dateTime).toLocaleString('en-us'),
            "location": location,
            "tags": tags,
            "description": description,
            "specifications": specifications,
            "likes": ["placeholder"],
            "created_date": new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
        };
        const db = getDatabase();
        const allEventsRef = ref(db, 'events_data/')
        firebasePush(allEventsRef, newEvent).then(() => console.log("Successfully added new event")).catch((error) => setAlertMessage(error.message));
    }

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Routes>
                    <Route path='*' element={<Navigate to='/home' />} />
                    <Route path="signin" element={<SignInPage />} />

                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path='home' element={<HomePage eventsData={allEvents} />} />
                        <Route path='community' element={<CommunityPage currentUser={currentUser} addPostCallback={addPost} postsData={allPosts} usersData={allUsers} />} />
                        <Route path=':postTitle' element={<PostPage currentUser={currentUser} addCommentCallback={addComment} postsData={allPosts} usersData={allUsers} commentData={allComments} likePostCallback={likePost}/>} />
                        <Route path='people' element={<PeoplePage usersData={allUsers} />} />
                        <Route path='events' element={<EventsPage eventsData={allEvents} />} />
                        <Route path=':event-form' element={<EventForm addEventCallback={addEvent} />} />
                        <Route path='messages' element={<MessagesPage />} />
                        <Route path='people/:profileName' element={<UserProfilePage usersData={allUsers} />} />
                        <Route path='my-profile' element={<MyProfilePage currentUser={currentUser} usersData={allUsers}/>} />
                    </Route>
                </Routes>
            </main>
            <footer>
                <p>&copy; iConnect 2023 </p>
            </footer>
        </>

    )

    function ProtectedPage(props) {
        // checks if user is logged in
        if (props.currentUser.uid === null) {
            return <Navigate to='/signin' />
        } else {
            return <Outlet />
        }
    }
}