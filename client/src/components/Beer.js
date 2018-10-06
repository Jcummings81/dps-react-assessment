import React from 'react'
import {Button } from 'semantic-ui-react'
import axios from 'axios'


class Beer extends React.Component {
   

    beers = () => {  axios.get('/api/all_beers')
        .then(res => {
            this.setState(res.data)

        const beers = [this.state.total_entries][0]
        const per_page = [this.res.data.per_page][0]
        const page = [this.res.data.page][0]
        const pages = [this.res.data.total_pages][0]
        

        console.log( beers, per_page, page, pages)
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