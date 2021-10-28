import axios from 'axios'
import React, { useState } from "react";
import "../styles/contactForm.css"

const ContactForm = (props) => {

    const initialFormData = Object.freeze({
        emailAddress: "",
        message: "",
        name: ""
    });

    let showError = false;
    let showSuccess = false;
    let showForm = true;

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        let headers = {
            headers: {
              "x-api-key": process.env.GATSBY_EMAIL_API_KEY,
            }
        }

        const emailConfig = {
          fromEmail: formData.email,
          name: formData.name,
          message: formData.message
        };
        
        await axios.post(process.env.GATSBY_EMAIL_ENDPOINT, emailConfig, headers)
          .then(res => {
            showError = false;
            showSuccess = true;
            showForm = false;
            console.log("passed");

          }).catch((e) => {
            console.log(e);
            //show error
            showError = true;
            showSuccess = false;
            showForm = true;
            console.log("failed");
          });
    }

    return (
        <div className="contact-form">
            {
                showForm ?
                    <form acceptCharset="UTF-8" onSubmit={e => {handleSubmit(e)}} target="_blank">
                        <div>
                            <label>Full Name</label>
                            <div>
                                <input 
                                    className="contact-name-input" 
                                    onChange={handleChange} 
                                    type="text" name="name" 
                                    placeholder=" Enter your first and last name" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>Email address</label>
                            <div>
                                <input
                                    className="contact-email-input" 
                                    type="email" 
                                    name="email"
                                    onChange={handleChange}
                                    placeholder=" Enter your email address" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>Message</label>
                            <div>
                                <textarea 
                                    className="contact-message-input" 
                                    type="text" name="message"
                                    onChange={handleChange} 
                                    placeholder=" Enter your message" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        <button className="contact-submit-button" type="submit">SUBMIT</button>
                    </form>
                : null
            }
            {
                showError ?
                    <p><b>Something went wrong, please try again!</b></p>
                : null
            }
            {
                showSuccess ?
                    <p><b>Thank you for your message! I should contact you shortly.</b></p>
                : null
            }
        </div>
    )
}

export default ContactForm;