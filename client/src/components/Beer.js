import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Beer extends React.Component {

    state = {
        beers: [],
        total: 0
    }

getTotal = () => {
    axios.get('api/all_beers')
        .then( res => {
            this.setState({total: res.data.total_pages})
        })

        console.log(this.state.total)
}


getBeers = () => {  
    this.getTotal()
    for (let j = 0; j <  this.state.total ; j++ )
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
            
            
        <Button onClick={ this.getBeers} > Get Beers </Button>
               
        )
    }
}

export default Beer