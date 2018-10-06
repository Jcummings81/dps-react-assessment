import React from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

class Beer extends React.Component {

    state = {

        beerpg: 0,
        beernm: 0,

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

    randpg = () => { axios.get('/api/all_beers')
    .then(res => {
        const numbeer =  [res.data.total_entries][0]
        const  entrynum = Math.floor(Math.random() * (numbeer) +1)
        const tmp = Math.floor(entrynum/50)
        const num = (entrynum%50)
        this.setState({beerpg: tmp, beernm: num})

                console.log(this.state.beerpg)
                console.log(this.state.beernm)
    

        })
    }


    mybeer = () => { axios.get(`/api/all_beers?page=${10}&per_page=${50}`) 
    .then(res => {
        console.log(res.data)
        })
    }

    render () {

        return (
            <div>
                <Button onClick={this.beers} > Get Beers </Button>
                <Button onClick={this.randpg}> Randomize </Button>
                <Button onClick={this.mybeer}> mybeer </Button>

            </div>
        )
    }
}

export default Beer