import React, { useState, useEffect } from 'react';
import { NavBar } from "./NavBar.js";
import { SignInPage } from './SignInPage.js';
import { HomePage } from "./HomePage.js";
import { PostPage } from "./PostPage.js";
import { CommunityPage } from "./Community.js";
import { PeoplePage } from "./PeoplePage.js";
import { MyProfilePage, UserProfilePage } from "./ProfilePage.js";
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

// import users_data from "./user_data.json";
// import posts from "./posts_data.json";
// import comments from "./comments_data.json";

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

                setCurrentUser(firebaseUser);
                navigateTo('/home');
            } else { // not logged in
                console.log("not signed in")

                setCurrentUser(nullUser)
                navigateTo('/sign-in');
            }
        })
    }, []);

    // const [allPosts, setAllPosts] = useState(posts);
    // const [allUsers, setAllUsers] = useState(users_data);
    // const [allComments, setAllComments] = useState(comments);
    const [allUsers, setAllUsers] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [allComments, setAllComments] = useState([]);

    // read data from firebase
    useEffect(() => {
        const db = getDatabase();
        const allUserProfileRef = ref(db, 'users_data/');
        const allPostsRef = ref(db, 'posts_data/')
        const allCommentsRef = ref(db, 'comments_data/')

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
            setAllPosts(objArray);
        })

        const commentsFunction = onValue(allCommentsRef, (snapshot) => {
            const valueObj = snapshot.val();
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const commentObj = valueObj[keyString];
                commentObj.key = keyString;
                return commentObj;
            })
            setAllComments(objArray);
        })

        function cleanup() {
            userFunction();
            postsFunction();
            commentsFunction();
        }
        return cleanup;
    }, [currentUser]);


    // testing some things
    // if the users_data db does not contain the current users info, then add blank profile to db
    // if (!Object.values(allUsers).includes(currentUser.uid)) {
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
    //     const allUserProfileRef = ref(db, 'users_data/');
    //     firebasePush(allUserProfileRef, newProfile).then(() => console.log("Successfully added new post")).catch((error) => setAlertMessage(error.message));
    // }

    const addPost = (post_title, tags, details) => {
        const newPost = {
            "userID": currentUser.uid,
            "postID": allPosts.length + 1,
            "post_title": post_title,
            "tags": tags,
            "details": details,
            "likes": ["placeholder"],
            "created_date": new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
            "comments": []
        };
        const db = getDatabase();
        const allPostsRef = ref(db, 'posts_data/')
        firebasePush(allPostsRef, newPost).then(() => console.log("Successfully added new post")).catch((error) => setAlertMessage(error.message));
    }

    const addComment = (comment, postID) => {
        const newComment = {
            "userID": currentUser.uid,
            "postID": postID,
            "created_date": new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
            "comment": comment
        };
        const db = getDatabase();
        const allPostsRef = ref(db, 'comments_data/')
        firebasePush(allPostsRef, newComment).then(() => console.log("Successfully added new comment")).catch((error) => setAlertMessage(error.message));
    }

    console.log(allPosts)
    console.log(allComments)

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
                        <Route path='home' element={<HomePage />} />
                        <Route path='community' element={<CommunityPage currentUser={currentUser} addPostCallback={addPost} postsData={allPosts} usersData={allUsers} />} />
                        <Route path=':postTitle' element={<PostPage currentUser={currentUser} addCommentCallback={addComment} postsData={allPosts} usersData={allUsers} commentData={allComments} />} />
                        <Route path='people' element={<PeoplePage usersData={allUsers} />} />
                        <Route path='people/:profileName' element={<UserProfilePage usersData={allUsers} />} />
                        <Route path='profile' element={<MyProfilePage currentUser={currentUser} />} />
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