import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


export function NavBar(props) {

    const handleSignOut = () => {
        signOut(getAuth())
    }

    return (
        <div className="nav">
            <div className="logo"><Link to='/home'>iConnect</Link></div>
            <div className="nav-container">
                <div className="nav-elems">
                    <li><Link to='/home'><span className="home-icon"><i className="fa-solid fa-house"></i> Home</span></Link></li>
                    <li><Link to='/community'><span className="community-icon"><i className="fa-solid fa-globe"></i> Community</span></Link></li>
                    <li><Link to='/people'><span className="community-icon"><i className="fa-solid fa-users"></i> People</span></Link></li>
                    <li><Link to='/events'><span className="event-icon"><i className="fa-regular fa-calendar-days"></i> Events</span></Link></li>
                    <li><Link to='/my-profile'><span className="profile-icon"><i className="fa-solid fa-user"></i> My Profile</span></Link></li>
                    <li><a href="/signin" onClick={handleSignOut}><span className="settings-icon"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</span></a></li>
                </div>
            </div>
            <hr />
        </div>
    )
}