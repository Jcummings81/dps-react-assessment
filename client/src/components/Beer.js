import React from 'react'
import { Button } from 'semantic-ui-react';
import axios from 'axios'

class Beer extends React.Component {

    state = {
        beers: [],
        total: 0,
        nextPage: false,
        pg: 1, 

    }


componentDidMount= () => {
        this.getTotal()
        this.setState({nextPage: true})

    }

getTotal = () => {
    axios.get('api/all_beers')
        .then( res => {
            this.setState({total: res.data.total_pages})
        })

        console.log(this.state.total)
}



getBeers = () => {  

    this.state.nextPage? axios.get(`/api/all_beers?page=${this.state.pg}`)
                .then( res => {
                    this.setState({beers: res.data.entries, pg: (this.state.pg + 1), nextPage: false })
                        for (let i = 0; i < this.state.beers.length; i++ )
                         {
                        console.log(this.state.beers[i].id)
                         }

    }) : null
}


    render () {
        return (
            <div>
            
        <Button onClick={this.getBeers}> Get Beers </Button>
        </div>
        )
    }
}

export default Beer