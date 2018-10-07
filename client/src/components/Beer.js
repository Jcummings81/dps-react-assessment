import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import axios from 'axios'
import Hopsin from './Hopsin'

class Beer extends React.Component {

    state = {
        beers: [],
        totpages: 0,
        randpg: 0,
        randent: 0,
        nextPage: false,
        pg: 1, 

    }


componentDidMount= () => {
    this.setState({nextPage: true})

    axios.get('api/all_beers')
        .then( res => {
            this.setState({totpages: res.data.total_pages, beers: res.data.entries})
        })
    
    this.setRand()
    }



setRand = () => {
   this.setState({randpg: Math.floor((Math.random() * this.state.total ) + 1), 
    randent: Math.floor((Math.random() * 50 ) + 1)
   })

}

getRand = () => {
    axios.get(`api/all_beers?page=${this.state.randpg}`)
        .then( res => {
            this.setState({beers: res.data.entries})
            console.log(this.state.beers[this.state.randent].name)
            this.setState({randpg: 0, randent: 0 })
            this.setRand()
        })
}


getBeers = () => {  

    this.state.nextPage? axios.get(`/api/all_beers?page=${this.state.pg}`)
                .then( res => {
                    this.setState({beers: res.data.entries, pg: (this.state.pg + 1), nextPage: false })
                        for (let i = 0; i < this.state.beers.length; i++ )
                         {
                        console.log(this.state.beers[i].id)
                         }

    }) : null
}


    render () {

        const { beers } = this.state

        return (
            <div>

    <Card.Group itemsPerRow={4} stackable>
        { beers.map( brew => <Hopsin key={brew.id }{...brew} /> ) }
      </Card.Group>
        <Button onClick={this.getBeers}> Get Beers </Button>
        <Button onClick={this.getRand}> What Would Dionysus Do? </Button>
     

        </div>
        )
    }
}

export default Beer