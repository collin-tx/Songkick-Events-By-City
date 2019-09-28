import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <h2 className="pageTitle">Contact</h2>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/collin-miller-smith/" target="_blank" rel="noopener noreferrer" className="btn contact-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="https://github.com/collin-tx" target="_blank" rel="noopener noreferrer" className="btn contact-link"><i className="fab fa-github"></i> GitHub</a>
                    <a href="https://twitter.com/collin_miller" target="_blank" rel="noopener noreferrer" className="btn contact-link"><i className="fab fa-twitter"></i> Twitter</a>
                    <a href="mailto:cmsmith.tx@gmail.com" className="btn contact-link"><i className="fa fa-at"></i>Send an email</a>
                </div>
            </div>
        )
    }
}

export default Contact
