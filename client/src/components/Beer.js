import React from 'react'
import {Button } from 'semantic-ui-react'
import axios from 'axios'

class Beer extends React.Component {

    beers = () => {  axios.get('/api/all_beers')
    .then(res => {
      console.log(res.data)
    })
}

    render () {

        return (

            <Button onClick={this.beers} > Get Beers </Button>

        )
    }
}

export default Beer