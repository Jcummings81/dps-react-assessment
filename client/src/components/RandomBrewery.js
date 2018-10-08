import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import axios from 'axios'


class RandomBrewery extends React.Component {

    state = {
       randent: 1, 
       randpg: 1,
       totpages: 0,
       ents: [],
       name: ''
    }


    componentDidMount= () => {
        axios.get(`api/all_breweries?`)
        .then( res => {
                    this.setState({randpg: Math.floor((Math.random() * res.data.total_entries ) + 1), 
                    randent: Math.floor((Math.random() * 50 ) + 1 ), ents: res.data.entries}
                    )

                     })            
                }

     
     getRand = () => {
        const { randpg, ents, randent, name} = this.state
         axios.get(`api/all_breweries?page=${randpg}`)
             .then( res => {
                this.setState({name: ents[randent].name})})
     }

    render () {
       
        return (
            <div>
                 <Button onClick={this.getRand}> Dart to the Map! </Button>
                 <Card>
                    <Card.Content>
                        <Card.Header>{this.state.name}</Card.Header>
                    </Card.Content>
                </Card>
            </div>
        )
 }
}

export default RandomBrewery