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
        beers: [], 
        }
        
    }

    totpages = () => { 
        axios.get('/api/all_beers')
            .then( res => {
                this.setState({ total_pages: res.data.total_pages})
                return total_pages
            })



    pages = () => { 
        
        for (let i = 0; i < (totpagees()); i++)
         {
            axios.get(`/api/all_beers?page=${i}`)
            .then(res => { 
                 console.log(res.data)            
                            })
                .catch( error => {
                    console.log(error.response);
                });
            }  
           
    }

   

    // randpg = () => { axios.get('/api/all_beers')
    // .then(res => {
    //     this.setState(res.data)

    //     const status = this.state
    //     console.log(status)
        

        //const status = this.state

        // //Random page and entry number setter
        // const numbeer =  status.total_entries
        // const  entrynum = Math.floor(Math.random() * (numbeer) +1)
        // const tmp = Math.floor(entrynum/50)
        // const num = (entrynum%50)

        // status.page = tmp

        // this.setState({status})
       

        // //console.log(this.state)
        //   console.log(tmp)
        //   console.log(status.page)
        //   console.log(status.entries)


        //     console.log(status)

            
        // })

   // }

    render () {

        return (
            <div>
                <Button onClick={this.pages} > Get Beers </Button>
                {/* <Button onClick={this.randpg}> Randomize </Button> */}

            </div>
        )
    }
}

export default Beer