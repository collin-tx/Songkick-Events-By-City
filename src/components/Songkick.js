import React, { Component } from 'react';
import Event from './Event';

export class Songkick extends Component {
    
    state = {
        cityID: '',
        city: '',
        eventData: [],
        term: 'Dallas',
        loading: false,
        error: ''
    }

    componentDidMount(){
        this.getLocationID();
    }

    handleChange = (e) => {
        this.setState({ term: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getLocationID();
    }


    getEventData = (id) => {
        const url = `https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=pk8dcHXeCupj6Kxr`;
        
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ eventData: data, loading: false })
        })

    }

    getLocationID = () => {
        this.setState( () => { 
            return { loading: true }
        });
        const city = this.state.term;
        const url = `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=pk8dcHXeCupj6Kxr`;

        fetch(url).then(response =>{
            return response.json();
        })
            .then(data => {
                const cityID = data.resultsPage.results.location[0].metroArea.id;
                this.setState({ cityID });
                this.getEventData(cityID);
            });
        this.setState({ city, term: ''});
    }
    
    render() {
        const firstTwelve = this.state.eventData.resultsPage && this.state.eventData.resultsPage.results.event.filter((event, index) => {
            return index < 12;
        }).map((event, index) => {
            return (

                <Event name={event.displayName} 
                venue={event.venue.displayName} 
                date={event.start.date} 
                time={event.start.time} 
                city={event.location.city}
                key={event.id} />
            )
        })

        return (
            <div id="main">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} 
                    value={this.state.term} placeholder="type a city name..."
                    id="userInput" />
                    <button id="submit-btn">Submit</button>
                </form>
                <p id="loading">{this.state.loading && "Loading..."}</p>
                <h2 id="cityName">{this.state.city}</h2>
                <ul id="list">
                    {this.state.eventData.resultsPage && firstTwelve}
                </ul>
            </div>
        )
    }
}

export default Songkick
