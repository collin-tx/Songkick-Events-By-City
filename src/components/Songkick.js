import React, { Component } from 'react'

export class Songkick extends Component {
    
    state = {
        cityID: '',
        eventData: [],
        term: 'Dallas',
        loading: false,
        error: ''
    }

    componentDidMount(){
        this.getLocationID();
    }

    getEventData = (id) => {
        const url = `https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=pk8dcHXeCupj6Kxr`;
        console.log(id);
    }

    getLocationID = () => {
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
            //this.state.cityData.resultsPage && this.getEventData();
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Songkick
