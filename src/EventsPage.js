import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useState } from "react";

export function EventsPage(props) {

    return (
        <main>
            <EventPageHeader />
            <EventPageSearch />
            <AllEvents />
        </main>
    )
}

function EventPageHeader(props) {

    return (
        <div className="add-post">
            <h1>Events</h1>
            <button type="button" aria-label="add event">+</button>
        </div>
    )
}

function EventPageSearch(props) {

    return (
        <div>
            <form className="search-bar" >
                <input type="search" placeholder="Search..." />
            </form>

            <div class="event-filter-container">
                <h2>Filter</h2>
                <div class="event-filters">
                    <div>
                        <select name="topics" id="topics">
                            <option value="Academic">Academic</option>
                            <option value="Career">Career</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                    </div>
                    <div>
                        <input class="upcoming" type="button" value="Most Upcoming" />
                    </div>
                    <div>
                        <input class="workshop" type="button" value="Workshop" />
                    </div>
                    <div>
                        <input class="in-person" type="button" value="In-Person" />
                    </div>
                </div>
            </div>

        </div>
    )
}

function AllEvents(props) {

    return (
        <div class="events-container">
            <Event />
            <Event />
        </div>
    )
}

function Event(props) {

    return (
        <div className="card-event">
            <CardActionArea component={Link} to={''}>
                <div class="event-container">
                    <div class="event-img"><img src={require("./img/user-img.jpg")} alt="event" /></div>
                    <div class="event-details">
                        <div class="event-name">Event Name</div>
                        <div class="event-time"><i class="fa-regular fa-calendar-days"></i> Event Time | Event Date</div>
                        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                    <div class="event-button"><input class="learn-more-button" type="button" value="Learn More" /></div>
                </div>
            </CardActionArea>

        </div>
    )
}