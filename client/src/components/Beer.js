import React from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

class Beer extends React.Component {

    state = {

        status: {

        page: 0,
        total_entries: 0,
        per_page: 0,
        total_pages: 0,
        entries: [],
        }
    }



    beers = () => {  axios.get('/api/all_beers')
        .then(res => {

             this.setState(res.data)

             const status = this.state
             
            console.log(status.total_entries)
            console.log(status.per_page)
            console.log(status.total_pages)
            console.log(status.entries)





        // const beers = [res.data.total_entries][0]
        // const per_page = [res.data.per_page][0]
        // const page = [res.data.page][0]
        // const pages = [res.data.total_pages][0]
        
        // console.log(res.data)
        // console.log(beers, page, pages, per_page )

        // console.log([res.data.entries][0][38].name)


            })
    }

    randpg = () => { axios.get('/api/all_beers')
    .then(res => {
        const status = this.state
        this.setState(res.data)
                


        const numbeer =  status.total_entries
        console.log( numbeer )
        const  entrynum = Math.floor(Math.random() * (numbeer) +1)
        const tmp = Math.floor(entrynum/50)
        const num = (entrynum%50)
        this.setState({beerpg: tmp, beernm: num})

                 console.log(this.state.beerpg)
        /      console.log(this.state.beernm)
    

        })
    }


    mybeer = () => { 
     const  {beerpg, beernm } = this.state
        
    axios.get(`/api/all_beers?page=${beerpg}`) 
    .then(res => {



        console.log(res.data)
        console.log(this.state.beerpg)
        console.log(this.state.beernm)
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