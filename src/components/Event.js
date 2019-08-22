import React, { Component } from 'react'

export class Event extends Component {
    render() {
        return (
              <li className="event">
                <h3>{this.props.name}</h3>
                <p>{this.props.venue}</p>
                <p>{this.props.date} {this.props.time == null ? '' : this.props.time}</p>
                <p>{this.props.city}</p>
              </li>
        )
    }
}

export default Event;
