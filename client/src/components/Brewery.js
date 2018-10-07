import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

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
            this.setState({totpages: res.data.total_pages})
        })

    this.setRand()
}

setRand = () => {
   this.setState({randpg: Math.floor((Math.random() * this.state.total ) + 1), 
    randent: Math.floor((Math.random() * 50 ) + 1)
   })

}

getRand = () => {
    axios.get(`api/all_breweries?page=${this.state.randpg}`)
        .then( res => {
            this.setState({breweries: res.data.entries})
            console.log(this.state.breweries[this.state.randent].name)
            this.setState({randpg: 0, randent: 0 })
            this.setRand()
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
        <Button onClick={this.getRand}>Chips Fall Where They May</Button>
        </div>
        )
    }
}

export default Brewery