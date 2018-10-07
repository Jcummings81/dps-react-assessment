import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Beer extends React.Component {

    state = {
        beers: []
    }

getBeers = () => {  axios.get('/api/all_beers')

    .then(res => {
            this.setState({beers: res.data.entries})
            console.log(this.state)
            console.log(this.state.beers[0])
    })
}



    render () {
        return (
            
            
        <Button onClick={this.getBeers} > Get Beers </Button>
               
        )
    }
}

export default Beer