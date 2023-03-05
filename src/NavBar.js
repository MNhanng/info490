import { Link } from 'react-router-dom';


export function NavBar(props) {
    return (
        <div className="nav">
            <div className="logo">iConnect</div>
            <div className="nav-container">
                <div className="nav-elems">
                    <li><Link to='/home'><span className="home-icon"><i className="fa-solid fa-house"></i> Home</span></Link></li>
                    <li><Link to='/community'><span className="community-icon"><i className="fa-solid fa-globe"></i> Community</span></Link></li>
                    <li><Link to='/people'><span className="community-icon"><i className="fa-solid fa-users"></i> People</span></Link></li>
                    <li><Link to='/profile'><span className="profile-icon"><i className="fa-solid fa-user"></i> Profile</span></Link></li>
                    <li><a><span className="settings-icon"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</span></a></li>
                </div>
            </div>
            <hr/>
        </div>
    )
}