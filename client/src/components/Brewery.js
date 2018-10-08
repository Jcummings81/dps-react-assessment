import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import axios from 'axios'
import BrewPlace from './BrewPlace'

class Brewery extends React.Component {

    state = {
        breweries: [],
        totpages: 0,
        randpg: 0,
        randent: 0,
        nextPage: false,
        pg: 1, 

    }


componentDidMount= () => {
    this.setState({nextPage: true})

    axios.get('api/all_breweries')
        .then( res => {
            this.setState({totpages: res.data.total_pages, breweries: res.data.entries})
        })

}


getBreweries = () => {  
    this.setState({nextPage: true})

    this.state.nextPage? axios.get(`/api/all_breweries?page=${this.state.pg}`)
                .then( res => {
                    this.setState({breweries: res.data.entries, pg: (this.state.pg + 1), nextPage: false })
                        for (let i = 0; i < this.state.breweries.length; i++ )
                         {
                        console.log(this.state.breweries[i].id)
                         }

    }) : null
}


    render () {

        const { breweries } = this.state

        return (

        <div>
            
            <Button onClick={this.getBreweries}> Get Breweries </Button>

            <Card.Group itemsPerRow={4} stackable>
                { breweries.map( place => <BrewPlace key={place.id }{...place} /> ) }
             </Card.Group>
            
         </div>
        )
    }
}

export default Brewery