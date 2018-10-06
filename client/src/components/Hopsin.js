import React from 'react'
import {Button } from 'semantic-ui-react'
import axios from 'axios'

class Hopsin extends React.Component {

   

    namebrew = () => {  axios.get('/api/beer/:name')
    .then(res => {
     this.setState(res.data)
     console.log(this.state)
            })
    }

    render () {

        return (
            <div>
                <Button onClick={this.namebrew} > Beer By Name </Button>
            </div>
        )
    }
}

export default Hopsin