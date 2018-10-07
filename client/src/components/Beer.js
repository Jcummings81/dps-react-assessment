import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Beer extends React.Component {

    state = {
        beers: []
    }



getBeers = () => {  
    for (let j = 0; j < 4 ; j++ )
    axios.get(`/api/all_beers?page=${j}`) 

    .then(res => {
            this.setState({beers: res.data.entries})
            console.log(this.state)
            for (let i = 0; i < this.state.beers.length; i++ )
            console.log(this.state.beers[i].name)
    })

}





    render () {
        return (
            
            
        <Button onClick={this.getBeers} > Get Beers </Button>
               
        )
    }
}

export default Beer