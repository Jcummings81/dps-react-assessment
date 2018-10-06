import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'


class RandomBeer extends React.Component {

    state = {
       count: 0
    }

    namebrew = () => {  axios.get('/api/beer/:name')
    .then(res => {
            const parsedRes = JSON.parse(res)
            console.log(parsedRes.total_entries)
            })
    }


    render () {

        return (
            <div>
                console.log({this.state.total_entries})
            <Button onClick={this.random} > Leave it to Dionysus </Button>
            </div>
        )
    }
}

export default RandomBeer