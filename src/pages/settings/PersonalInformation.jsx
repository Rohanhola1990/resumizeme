import { useState } from "react";
import { Link } from "react-router-dom";

import {PremiumIcon} from "../../assets/Icons"

import UserImage from "../../assets/images/user.jpg"

import "./style.css"

const PersonalInformation = () => {
    const [isPremium, setIsPremium] = useState(true)
    return (
        <div className="width-container settings-personal-information">
            {
                isPremium &&
                    <div className="premium-account card-inline green-card">
                        <figure
                            className="card-image d-flex f-align-center f-justify-center"
                        >
                            <PremiumIcon />
                        </figure>
                        <div className="card-content">
                            <h3>Premium Account</h3>
                            <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>
                        </div>
                    </div>
            }

            <section className="settings-section user-information">
                <header className="section-header">
                    <h3>Personal Information</h3>
                </header>

                <div className="settings-form clearfix">
                    <figure
                        className="user-display-image float-right"
                        style={{
                            backgroundImage: `url(${UserImage})`
                        }}
                    >
                    </figure>
                    <form className="no-overflow">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>First Name</label>
                                    <div className="form-element">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>Last Name</label>
                                    <div className="form-element">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>City</label>
                                    <div className="form-element">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>Postal Code</label>
                                    <div className="form-element">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group sticky-label">
                                    <label>Address</label>
                                    <div className="form-element">
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>Email</label>
                                    <div className="form-element">
                                        <input type="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>Phone</label>
                                    <div className="form-element">
                                        <input type="tel" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group sticky-label">
                                    <label>Password</label>
                                    <div className="form-element">
                                        <input type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="form-footer">
                            <p>
                                Use this email to log in to your <Link to="https://www.resumedone.io" target="_blank" className="link">resumedone.io</Link> account and receive notifications.
                            </p>

                            <button
                                className="btn btn-default btn-blue"
                            >Save</button>
                        </footer>
                    </form>
                </div>
            </section>

            <section className="settings-section settings-visibility">
                <label
                    className="inline-checkbox"
                >
                    <input type="checkbox" name="" id="" />
                    <span
                        className="check-box"
                    ></span>
                    <span 
                        className="checkbox-text"
                    >
                        Show my profile to serious employers on <Link to="https://www.hirethesbest.io" target="_blank" className="link">hirethesbest.io</Link> for free
                    </span>
                </label>
            </section>

            <section className="settings-section delete-account">
                <h4>
                    Delete account
                </h4>
                <p>
                    If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.
                </p>
                <button className="btn text-btn red-text">
                    Yes, Delete my account
                </button>
            </section>

            <section className="settings-section">
                <p>
                    <Link to="https://www.hirethesbest.io" target="_blank" className="link">Get in touch with our support team</Link> if you have any 
                    question or want to leave some feedback. We’ll be happy to hear from you.
                </p>
            </section>

            <footer className="inPage-footer">
                <nav
                    className="d-flex"
                >
                    <Link
                        to="tnc"
                        target="_blank"
                    >Terms & Conditions</Link>
                    <Link
                        to="privacy"
                        target="_blank"
                    >Privacy Policy</Link>
                    <Link
                        to="faq"
                        target="_blank"
                    >FAQ</Link>
                    <Link
                        to="contactUs"
                        target="_blank"
                    >Contact Us</Link>
                </nav>
            </footer>
        </div>
    );
}

export default PersonalInformation;