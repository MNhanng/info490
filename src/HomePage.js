
export function HomePage(props) {

    return (
        <main>
            <div class="home-page">
            <div className="home-content">
                <div className="home-header">Connect With Our Networking Team</div>
                <div className="home-button"><a href="CommunityPage.html"><button type="button">Start Exploring</button></a></div>
            </div>

            <div className="home-image">
                <img src={require("./img/home-image.png")} alt="Home page" />
            </div> 
        </div>
        <HomeBoard/>
        </main>
    )
}

function HomeBoard(props) {
    return (
        <div className="home-activities">
            <div className="home-activities-header">Recently Viewed (or Liked Posts or Events)</div>
            <div className="home-activities-items">
                <div className="recently-viewed-item"></div>
                <div className="recently-viewed-item"></div>
                <div className="recently-viewed-item"></div>
                <div className="recently-viewed-item"></div>
            </div> 
            
        </div>
    )
}

