import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'


class Brewery extends React.Component {



breweries = () => {  axios.get('/api/all_breweries')
    .then(res => {
      console.log(res.data)
    })
}

    render () {
        return (
        
            <Button onClick={this.breweries} > Get Breweries </Button>
            
        )
    }
}

export default Brewery