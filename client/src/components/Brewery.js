import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Brewery extends React.Component {

    state = {
        breweries: [],
        total: 0,
        nextPage: false,
        pg: 1, 

    }


componentDidMount= () => {
    this.setState({nextPage: true})
    
    axios.get('api/all_breweries')
        .then( res => {
            this.setState({total: res.data.total_pages})
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
        return (
            <div>
            
        <Button onClick={this.getBreweries}> Get Breweries </Button>
        </div>
        )
    }
}

export default Brewery