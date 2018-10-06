import React from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'


class Beer extends React.Component {

    state = {

        beers: 0,
        per_page: 0,
        page: 0,
        pages: 0,
    }
   

    beers = () => {  axios.get('/api/all_beers')
        .then(res => {

        const beers = [res.data.total_entries][0]
        const per_page = [res.data.per_page][0]
        const page = [res.data.page][0]
        const pages = [res.data.total_pages][0]
        
        console.log(res.data)
        console.log(beers, page, pages, per_page )
            })
    }

    randbeer = () => { axios.get('/api/all_beers')
    .then(res => {
        const numbeer =  [res.data.total_entries][0]
        const  beerId = Math.floor(Math.random() * (numbeer) +1)
        console.log(beerId)

        const bingo = [numbeer.entries[beerId].name]
        console.log(bingo)


        })
    }

    render () {

        return (
            <div>
                <Button onClick={this.beers} > Get Beers </Button>
                <Button onClick={this.randbeer}> Randomize </Button>
            </div>
        )
    }
}

export default Beer