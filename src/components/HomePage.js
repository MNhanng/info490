import { useEffect } from "react";

export function HomePage(props) {
    // const allUsers = props.usersData;
    // const currentUser = props.currentUser

    // check if currentuser info already exists in the db
    // if exists, profileMatch.length > 0
    // if does not exist, profileMatch = 0, so call addNewUserProfile to add empty profile
    // useEffect(() => {
    //     const checkUserProfiles = (profiles) => {
    //         return (profiles.userID.includes(currentUser.uid));
    //     };
    //     const profileMatch = allUsers.filter(checkUserProfiles)
    //     console.log(profileMatch)
    //     if (profileMatch === undefined || profileMatch.length === 0) {
    //         props.addNewProfileCallback();
    //     }
    // }, []);

    return (
        <main>
            <div className="home-page">
                <div className="home-content">
                    <div className="home-header">Welcome to iConnect!</div>
                    <div className="home-button"><a href="CommunityPage.html"><button type="button">Start Exploring</button></a></div>
                </div>

                <div className="home-image">
                    <img src={require("../img/home-image.png")} alt="Home page" />
                </div>
            </div>
            {/* <HomeBoard/> */}
            <div className="home-event-container">
                <UpcomingEvents eventsData={props.eventsData} />
            </div>
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

function UpcomingEvents(props) {
    const events = props.eventsData;

    const upcomingEvents = events.sort((event1, event2) => {
        return new Date(event1.dateTime) - new Date(event2.dateTime);
    })
    .slice(0, 5)
    .map((event) => {
        return (
            <div className="event-details">
                <div className="event-name">{event.name}</div>
                {event.tags && <div className="event-tag">{event.tags}</div>}
                <div className="event-time"><i className="fa-regular fa-calendar-days"></i> {event.dateTime}</div>
                <div className="event-location"><span>Location: </span>{event.location} </div>
                <div className="event-desc"><span>Description: </span>{event.description}</div>
                <div className="event-spec">{event.specifications}</div>
            </div>
        )
    })

    return (
        upcomingEvents
    );
}

