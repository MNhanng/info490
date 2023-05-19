import { CardActionArea } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import _ from 'lodash';

export function EventsPage(props) {
    const [searchString, setSearchString] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const [inPersonTagColor, setInPersonTagColor] = useState(false)
    const [virtualTagColor, setVirtualTagColor] = useState(false)
    const [sort, setSort] = useState("newest");

    const allEvents = props.eventsData
    console.log(allEvents)

    // filter events by search
    const onChange = (event) => {
        setSearchString(event.target.value);
    }
    const searchEvents = (events) => {
        return (events.name.toLowerCase().includes(searchString.toLowerCase()));
    };
    const filteredEvents = (allEvents).filter(searchEvents)



    // filter events by tags
    const filterEvents = (events, filters) => {
        return events.filter(event => filters.some(filter => event.tags.includes(filter)))
    }
    const onClick = (event) => {
        if (selectedTags.includes(event.target.value)) {
            // if the selected tags array already include the tag user just clicked, remove it from array 
            setSelectedTags(selectedTags.filter((tag) => tag !== event.target.value))
        } else {
            // add it to array
            setSelectedTags([...selectedTags, event.target.value])
        }

        if (event.target.value === "In-Person") {
            setInPersonTagColor(!inPersonTagColor)
        } else {
            setVirtualTagColor(!virtualTagColor)
        }
    }
    // if the array is empty or filled, then show all data
    let filterByTags = null;
    if (selectedTags.length === 2 || selectedTags.length === 0) {
        filterByTags = filteredEvents
    } else {
        filterByTags = filterEvents(filteredEvents, selectedTags)
    }

    // sorted events
    const handleSort = (event) => {
        setSort(event.target.value);
    }

    let sortedEvents = null;
    if (sort === "oldest") {
        sortedEvents = filterByTags.sort((event1, event2) => {
            return new Date(event1.dateTime) - new Date(event2.dateTime);
        })
    } else if (sort === "newest") {
        sortedEvents = filterByTags.sort((event1, event2) => {
            return new Date(event2.dateTime) - new Date(event1.dateTime);
        })
    }

    return (
        <main>
            <EventPageHeader />
            <EventPageSearch onChange={onChange} onClick={onClick} inPersonTagColor={inPersonTagColor} virtualTagColor={virtualTagColor} handleSort={handleSort} />
            <AllEvents eventsData={sortedEvents} />
        </main>
    )
}

function EventPageHeader(props) {

    return (
        <div className="add-post">
            <h1>Events</h1>
            <Link to='/event-form'><button type="button" aria-label="add event">+</button></Link>
        </div>
    )
}

function EventPageSearch(props) {
    let inPersonTagClass = "In-Person";
    let virtualTagClass = "Virtual";

    if (props.inPersonTagColor) {
        inPersonTagClass = "clicked-in-person"
    }
    if (props.virtualTagColor) {
        virtualTagClass = "clicked-virtual"
    }

    return (
        <div>
            <form className="search-bar" onChange={props.onChange} >
                <input type="search" placeholder="Search for events" />
            </form>

            <div className="event-filter-container">
                <h2>Filter</h2>
                <div className="event-filters">
                    <div>
                        <input className={inPersonTagClass} type="button" value="In-Person" onClick={props.onClick} />
                    </div>
                    <div>
                        <input className={virtualTagClass} type="button" value="Virtual" onClick={props.onClick} />
                    </div>
                </div>
                <div className="event-sort">
                    <select name="event-sort" id="event-sort" onChange={props.handleSort} >
                        <option value="newest" defaultValue>Sort By Event Date (Newest)</option>
                        <option value="oldest">Sort By Event Date (Oldest)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function AllEvents(props) {
    const allEvents = props.eventsData.map((event) => {
        return <Event event={event} key={event.eventID} currentUser={props.currentUser} />
    })

    return (
        <div className="events-container">
            {allEvents}
        </div>
    )
}

function Event(props) {
    const event = props.event;
    const eventLink = '/events/' + encodeURIComponent(event.key);
    return (
        <div className="card-event">
            <CardActionArea component={Link} to={eventLink}>
                <div className="event-container">
                    {/* <div className="event-img"><img src={require("./img/user-img.jpg")} alt="event" /></div> */}
                    <div className="event-details">
                        <div className="event-name">{event.name}</div>
                        {event.tags && <div className="event-tag">{event.tags}</div>}
                        <div className="event-time"><i className="fa-regular fa-calendar-days"></i> {event.dateTime}</div>
                        <div className="event-location"><span>Location: </span>{event.location} </div>
                        <div className="event-desc"><span>Description: </span>{event.description}</div>
                        <div className="event-spec">{event.specifications}</div>
                    </div>
                    {/* <div className="event-button"><input className="learn-more-button" type="button" value="Learn More" /></div> */}
                </div>
            </CardActionArea>

        </div>
    )
}


export function EventForm(props) {
    const [nameInput, setNameInput] = useState('');
    const nameHandleChange = (event) => {
        let newValue = event.target.value;
        setNameInput(newValue);
    }

    const [dateTimeInput, setDateTimeInput] = useState('');
    const dateTimeHandleChange = (event) => {
        let newValue = event.target.value;
        setDateTimeInput(newValue);
    }

    const [locationInput, setLocationInput] = useState('');
    const locationHandleChange = (event) => {
        let newValue = event.target.value;
        setLocationInput(newValue);
    }

    const [tagInput, setTagInput] = useState('');

    const tagHandleClick = (event) => {
        let newValue = event.target.value;
        if (tagInput === newValue) {
            setTagInput('');
        } else {
            setTagInput(newValue);
        }
    }

    let inPersonTagClass = "In-Person";
    let virtualTagClass = "Virtual";
    if (tagInput === "In-Person") {
        inPersonTagClass = "clicked-in-person";
    } else if (tagInput === "Virtual") {
        virtualTagClass = "clicked-virtual";
    }


    const [descriptionInput, setDescriptionInput] = useState('');
    const descriptionHandleChange = (event) => {
        let newValue = event.target.value;
        setDescriptionInput(newValue);
    }

    const [specificationsInput, setSpecificationsInput] = useState('');
    const specificationsHandleChange = (event) => {
        let newValue = event.target.value;
        setSpecificationsInput(newValue);
    }

    const handleSubmit = (event) => {
        console.log("submitting", nameInput, dateTimeInput, locationInput, tagInput, descriptionInput, specificationsInput);
        props.addEventCallback(nameInput, dateTimeInput, locationInput, tagInput, descriptionInput, specificationsInput);
        setNameInput('');
        setDateTimeInput('');
        setLocationInput('');
        setTagInput('');
        setDescriptionInput('')
        setSpecificationsInput('');
    }

    return (
        <main>
            <div className="event-form-page">

                <Link to="/events"><button type="button" aria-label="Back to Events Page"><i className="fa-solid fa-arrow-left"></i></button></Link>

                <h1 className="event-form-heading">Create a New Event</h1>

                <form className='event-form'>
                    <p><em>Please fill out all fields before submitting this form.</em></p>
                    
                    <div>
                        <label for="title">Event Name</label> <br />
                        <input onChange={nameHandleChange} value={nameInput} type="text" id="post_title" /> <br />
                    </div>

                    <div>
                        <label htmlFor="event_datetime">Date and Time</label> <br />
                        <input onChange={dateTimeHandleChange} type="datetime-local" id="event_datetime" value={dateTimeInput} /> <br />
                    </div>

                    <div>
                        <label htmlFor="event_location">Location (If in-person, please provide the physical location. If virtual, please provide the link.) </label> <br />
                        <input onChange={locationHandleChange} type="text" id="event_location" value={locationInput} /> <br />
                    </div>

                    <div className="form-tags">
                        <div>
                            <label htmlFor="tags">Tags</label> <br />
                        </div>
                        <div className="tags">
                            <div>
                                <input onClick={tagHandleClick} className={inPersonTagClass} type="button" value="In-Person" />
                            </div>
                            <div>
                                <input onClick={tagHandleClick} className={virtualTagClass} type="button" value="Virtual" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description">Description</label> <br />
                        <textarea onChange={descriptionHandleChange} value={descriptionInput} id="event_description" name="description" rows="5"></textarea> <br />
                    </div>

                    <div>
                        <label htmlFor="event_specifications">Please specify any additional requirements for event participants.</label> <br />
                        <textarea onChange={specificationsHandleChange} value={specificationsInput} id="event_specifications" name="specifications" rows="5"></textarea> <br />
                    </div>

                    <div className="popup-button">
                        <Link to="/events"><button onClick={handleSubmit} type="submit" label="Create new event">Create</button></Link>
                    </div>

                </form>

            </div>

        </main>
    );
}

export function SingleEventPage(props) {
    let eventKey = decodeURI(useParams().key);
    let event = _.find(props.eventsData, { key: eventKey });
    console.log(eventKey)
    return (
        <div className="single-event-container">
            <Link to="/events"><button type="button" aria-label="Back to Events Page"><i className="fa-solid fa-arrow-left"></i></button></Link>
            <div className="single-event-header">
                <div className="single-event-title">{event.name}</div>
                {event.tags && <div className="single-event-tag">{event.tags}</div>}
            </div>
            <div className="single-event-details">
                <div className="single-event-date"><i className="fa-regular fa-calendar-days"></i> {event.dateTime}</div>
                {event.location && <div className="single-event-location"><span>Location: </span>{event.location}</div>}
                {event.description && <div className="single-event-description"><span>Description: </span>{event.description}</div>}
                <div className="single-event-spec">{event.specifications}</div>
            </div>
        </div>
    )
}