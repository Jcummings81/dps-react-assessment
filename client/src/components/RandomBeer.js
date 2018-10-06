import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'


class RandomBeer extends React.Component {

    state = {
       count: 0
    }

    random = () => {  axios.get('/api/beer')
    .then(res => {
            console.log(res.data)
            })
    }


    render () {

        return (
            <div>
            <Button onClick={this.random} > Leave it to Dionysus </Button>
            </div>
        )
    }
}

export default RandomBeer