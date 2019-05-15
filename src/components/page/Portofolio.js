import React from 'react'
import './style.css'
import axios from 'axios';
import { Heading,Box,Image } from 'grommet';

const style={

}

export default class Portofolio extends React.Component {
    state = {
        portofolios: []
    }
  
    componentDidMount() {
      axios.get(`http://my-json-server.typicode.com/mikorail/portojson/portofolio/`)
        .then(res => {
          const portofolios = res.data;
          this.setState({ portofolios });
        })
    }
    render(){
        return(
            <div>
                <Box full clasName="mabur">
                <Heading className="kanan3" size="small">
                    Portofolio page
                    <ul>
                        { this.state.portofolios.map(portofolio => <li>{portofolio.nama+portofolio.deskripsi}</li>)}
                    </ul>
                </Heading>
                <Box>
                    <Image className="imageBG3" src={require('./img/10.png')}/>
                </Box>
                    
                </Box>
            </div>
        )
    }
}