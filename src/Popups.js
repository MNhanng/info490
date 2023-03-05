import React, { useState } from 'react';
import { CreateButton } from './ButtonsAndTags';
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
      setTagInput(newValue);
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
            <CreateButton onClick={handleShow} type="button" title="+" label="Create new post" />

            <Modal show={showPopup} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label for="title">Post Title</label>
                            <input onChange={titleHandleChange} value={titleInput} type="text" id="post_title" /> <br />
                        </div>

                        <div className="form-tags">
                            <div>
                                <label for="tags">Tags</label>
                            </div>
                            <div class="tags">
                                <div>
                                    <input onClick={tagHandleClick} className="Academic" type="button" value="Academic" />
                                </div>
                                <div>
                                    <input onClick={tagHandleClick} className="Career" type="button" value="Career" />
                                </div>
                                <div>
                                    <input onClick={tagHandleClick} className="Micellaneous" type="button" value="Micellaneous" />
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
                        <CreateButton onClick={handleSubmit} type="submit" title="Create" label="Create new post" />
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
            <CreateButton onClick={handleShow} type="button" title="New Project" label="Create new project" />

            <Modal show={showPopup} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="profile-popup">
                        <div class="profile-popup-header">
                            <div class="profile-popup-img"><img src="img/user-img.jpg" alt="user profile"></img></div>
                            <div class="profile-header-details">
                                <div class="profile-popup-name">David Smith</div>
                                <div class="profile-popup-contact">Contact davidsmith@gmail.com</div>
                            </div>
                        </div>

                        <div class="profile-popup-details">
                            <div class="profile-popup-job-title">
                                <div>Job title</div>
                                <div>Business Analyst</div>
                            </div>
                            <div class="profile-popup-employer">
                                <div>Employer</div>
                                <div>Microsoft</div>
                            </div>
                            <div class="profile-popup-industry">
                                <div>Industry</div>
                                <div>Technology</div>
                            </div>
                            <div class="profile-popup-major">
                                <div>Major</div>
                                <div>Informatics</div>
                            </div>
                            <div class="profile-popup-school">
                                <div>School</div>
                                <div>University of Washington</div>
                            </div>
                            <div class="profile-popup-degree-type">
                                <div>Degree</div>
                                <div>Bachelor's degree</div>
                            </div>
                            <div class="profile-popup-grad-year">
                                <div>Graduation Year</div>
                                <div>2018</div>
                            </div>
                            <div class="profile-popup-language">
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