import React from 'react'
import {Button } from 'semantic-ui-react'
import axios from 'axios'


class Beer extends React.Component {


    beers = () => {  axios.get('/api/all_beers')
        .then(res => {
        this.setState( [ res.data.total_entries] )
        console.log(this.state[0])
            })
    }

 
    render () {

        return (
            <div>
                <Button onClick={this.beers} > Get Beers </Button>
            </div>
        )
    }
}

export default Beer