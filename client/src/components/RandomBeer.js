import React from 'react'
import { Button, Card } from 'semantic-ui-react';
import axios from 'axios'


class RandomBeer extends React.Component {

    state = {
       randent: 1, 
       randpg: 1,
       totpages: 0,
       ents: []
    }


    componentDidMount= () => {
        axios.get(`api/all_beers?`)
        .then( res => {

        

                    this.setState({randpg: Math.floor((Math.random() * res.data.total_entries ) + 1), 
                        randent: Math.floor((Math.random() * 50 ) + 1 )})

        })            
                }

     
     getRand = () => {
        const { randent, ents} = this.state
         axios.get(`api/all_beers?page=${this.state.randpg}`)
             .then( res => {
                this.setState({ents: res.data.entr})
                console.log(ents)
            })
            }

    render () {
        return (
            <div>
        
                     <Button onClick={this.getRand}> What Would Dionysus Do? </Button>
            </div>
        )
 }
}

export default RandomBeer