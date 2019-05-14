import React,{Component} from 'react'
import { Attraction, Car, TreeOption } from "grommet-icons";
import { Grommet, Box, Carousel,Clock, Heading,Subhead} from "grommet";
import { grommet } from "grommet/themes";
import SimpleWorldMap from "./fragment/SimpleWorldMap";
import SimpleCalendar from "./fragment/SimpleCalendar";
import './style.css'
import { url } from 'inspector';

const bg={
    backgroundImage:url('./img/01.png')
}
const mabur={
    marginTop:'-20%'
}

class Home extends React.Component {
    render(){
        return(
           <div style={bg}>
            <div style={mabur}>
                <Heading>Welcome to<br/>
                Pratita Sujatmika
                <br/>sites</Heading>
            </div>        
           </div> 
        )
    }
}

export default Home;
  