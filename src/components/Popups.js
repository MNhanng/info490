import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export function NewPostPopup(props) {
    const [showPopup, setShowPopup] = useState(false);

    const handleShow = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);

    const [titleInput, setTitleInput] = useState('');
    const titleHandleChange = (event) => {
        let newValue = event.target.value;
        setTitleInput(newValue);
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

    let academicTagClass = "Academic";
    let careerTagClass = "Career";
    let miscTagClass = "Miscellaneous";
    if (tagInput === "Academic") {
        academicTagClass = "clicked-academic";
    } else if (tagInput === "Career") {
        careerTagClass = "clicked-career";
    } else if (tagInput === "Miscellaneous") {
        miscTagClass = "clicked-misc";
    }


    const [detailsInput, setDetailsInput] = useState('');
    const detailsHandleChange = (event) => {
        let newValue = event.target.value;
        setDetailsInput(newValue);
    }

    const handleSubmit = (event) => {
        console.log("submitting", titleInput, tagInput, detailsInput);
        props.addPostCallback(titleInput, tagInput, detailsInput);
        setTitleInput('');
        setTagInput('');
        setDetailsInput('');
        setShowPopup(false);
    }

    return (
        <>
            <button onClick={handleShow} type="button" label="Create new post">+</button>
            <Modal show={showPopup} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p><em>Please fill out all fields before submitting this form.</em></p>
                        <div>
                            <label for="title">Post Title</label>
                            <input onChange={titleHandleChange} value={titleInput} type="text" id="post_title" /> <br />
                        </div>

                        <div className="form-tags">
                            <div>
                                <label for="tags">Tags</label>
                            </div>
                            <div className="tags">
                                <div>
                                    <input onClick={tagHandleClick} className={academicTagClass} type="button" value="Academic" />
                                </div>
                                <div>
                                    <input onClick={tagHandleClick} className={careerTagClass} type="button" value="Career" />
                                </div>
                                <div>
                                    <input onClick={tagHandleClick} className={miscTagClass} type="button" value="Miscellaneous" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="post_details">Details</label> <br />
                            <textarea onChange={detailsHandleChange} value={detailsInput} id="post_details" name="details" rows="5"></textarea> <br />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="popup-button">
                        <button onClick={handleSubmit} type="submit" label="Create new post">Create</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function ProfilePopup(props) {

    const [showPopup, setShowPopup] = useState(false);

    const handleShow = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);

    return (
        <>
            {/* <CreateButton onClick={handleShow} type="button" title="New Project" label="Create new project" /> */}

            <Modal show={showPopup} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="profile-popup">
                        <div className="profile-popup-header">
                            <div className="profile-popup-img"><img src="img/user-img.jpg" alt="user profile"></img></div>
                            <div className="profile-header-details">
                                <div className="profile-popup-name">David Smith</div>
                                <div className="profile-popup-contact">Contact davidsmith@gmail.com</div>
                            </div>
                        </div>

                        <div className="profile-popup-details">
                            <div className="profile-popup-job-title">
                                <div>Job title</div>
                                <div>Business Analyst</div>
                            </div>
                            <div className="profile-popup-employer">
                                <div>Employer</div>
                                <div>Microsoft</div>
                            </div>
                            <div className="profile-popup-industry">
                                <div>Industry</div>
                                <div>Technology</div>
                            </div>
                            <div className="profile-popup-major">
                                <div>Major</div>
                                <div>Informatics</div>
                            </div>
                            <div className="profile-popup-school">
                                <div>School</div>
                                <div>University of Washington</div>
                            </div>
                            <div className="profile-popup-degree-type">
                                <div>Degree</div>
                                <div>Bachelor's degree</div>
                            </div>
                            <div className="profile-popup-grad-year">
                                <div>Graduation Year</div>
                                <div>2018</div>
                            </div>
                            <div className="profile-popup-language">
                                <div>Language</div>
                                <div>English, Spanish</div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}