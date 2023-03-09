import { useEffect } from "react";

export function HomePage(props) {
    const allUsers = props.usersData;
    const currentUser = props.currentUser

    // check if currentuser info already exists in the db
    // if exists, profileMatch.length > 0
    // if does not exist, profileMatch = 0, so call addNewUserProfile to add empty profile
    useEffect(() => {
        const checkUserProfiles = (profiles) => {
            return (profiles.userID.includes(currentUser.uid));
        };
        const profileMatch = allUsers.filter(checkUserProfiles)
        console.log(profileMatch)
        if (profileMatch === undefined || profileMatch.length === 0) {
            props.addNewProfileCallback();
        }
    }, []);
        
    return (
        <main>
            <div className="home-page">
            <div className="home-content">
                <div className="home-header">Connect With Our Networking Team</div>
                <div className="home-button"><a href="CommunityPage.html"><button type="button">Start Exploring</button></a></div>
            </div>

            <div className="home-image">
                <img src={require("./img/home-image.png")} alt="Home page" />
            </div> 
        </div>
        {/* <HomeBoard/> */}
        </main>
    )
}

// function HomeBoard(props) {
//     return (
//         <div className="home-activities">
//             <div className="home-activities-header">Recently Viewed (or Liked Posts or Events)</div>
//             <div className="home-activities-items">
//                 <div className="recently-viewed-item"></div>
//                 <div className="recently-viewed-item"></div>
//                 <div className="recently-viewed-item"></div>
//                 <div className="recently-viewed-item"></div>
//             </div> 
            
//         </div>
//     )
// }

