import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useState } from "react";
import { CreateButton } from './ButtonsAndTags';

export function EventsPage(props) {
    const [searchString, setSearchString] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const [inPersonTagColor, setInPersonTagColor] = useState(false)
    const [virtualTagColor, setVirtualTagColor] = useState(false)

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

        if (event.target.value == "In-Person") {
            setInPersonTagColor(!inPersonTagColor)
        } else {
            setVirtualTagColor(!virtualTagColor)
        }
    }
    // if the array is empty or filled, then show all data
    let filterByTags = null;
    if (selectedTags.length === 3 || selectedTags.length === 0) {
        filterByTags = filteredEvents
    } else {
        filterByTags = filterEvents(filteredEvents, selectedTags)
    }

    return (
        <main>
            <EventPageHeader />
            <EventPageSearch onChange={onChange} onClick={onClick} inPersonTagColor={inPersonTagColor} virtualTagColor={virtualTagColor} />
            <AllEvents eventsData={filterByTags} />
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
                <input type="search" placeholder="Search..." />
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
            </div>
        </div>
    )
}

function AllEvents(props) {
    const allEvents = props.eventsData.map((event) => {
        return <Event event={event} key={event.eventID} currentUser={props.currentUser} />
    })

    return (
        <div class="events-container">
            {allEvents}
        </div>
    )
}

function Event(props) {
    const event = props.event;

    return (
        <div className="card-event">
            <CardActionArea component={Link} to={''}>
                <div className="event-container">
                    {/* <div className="event-img"><img src={require("./img/user-img.jpg")} alt="event" /></div> */}
                    <div className="event-details">
                        <div className="event-name">{event.name}</div>
                        <div className="event-tag">{event.tags}</div>
                        <div className="event-time"><i className="fa-regular fa-calendar-days"></i> {event.dateTime}</div>
                        <div className="event-location">Location: {event.location} </div>
                        <div className="event-desc">{event.description}</div>
                        <div className="event-spec">{event.specifications}</div>
                    </div>
                    {/* <div className="event-button"><input className="learn-more-button" type="button" value="Learn More" /></div> */}
                </div>
            </CardActionArea>

        </div>
    )
}


export function EventForm(props) {
    const [inPersonTagColor, setInPersonTagColor] = useState(false)
    const [virtualTagColor, setVirtualTagColor] = useState(false)

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
        setTagInput(newValue);

        if (event.target.value == "In-Person") {
            setInPersonTagColor(!inPersonTagColor)
        } else {
            setVirtualTagColor(!virtualTagColor)
        }

    }

    let inPersonTagClass = "In-Person";
    let virtualTagClass = "Virtual";
    if (inPersonTagColor) {
        inPersonTagClass = "clicked-in-person"
    }
    if (virtualTagColor) {
        virtualTagClass = "clicked-virtual"
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

                <Link to="/events"><CreateButton type="button" title="<<" label="Back to Events Page" /></Link>
                
                <form className='event-form'>
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
                            <label for="tags">Tags</label> <br />
                        </div>
                        <div class="tags">
                            <div>
                                <input onClick={tagHandleClick} className={inPersonTagClass} type="button" value="In-Person" />
                            </div>
                            <div>
                                <input onClick={tagHandleClick} className={virtualTagClass} type="button" value="Virtual" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="description">Description</label> <br />
                        <textarea onChange={descriptionHandleChange} value={descriptionInput} id="event_description" name="description" rows="5"></textarea> <br />
                    </div>

                    <div>
                        <label for="event_specifications">Please specify any additional requirements for event participants.</label> <br />
                        <textarea onChange={specificationsHandleChange} value={specificationsInput} id="event_specifications" name="specifications" rows="5"></textarea> <br />
                    </div>

                    <div className="popup-button">
                        <Link to="/events"><CreateButton onClick={handleSubmit} type="submit" title="Create" label="Create new event" /></Link>
                    </div>

                </form>

            </div>

        </main>
    );
}