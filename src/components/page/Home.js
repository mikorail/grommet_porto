import React,{Component} from 'react'
import { Attraction, Car, TreeOption } from "grommet-icons";
import { Grommet, Box, Carousel,Image,WorldMap } from "grommet";
import { grommet } from "grommet/themes";
import SimpleWorldMap from "./fragment/SimpleWorldMap";
import SimpleCalendar from "./fragment/SimpleCalendar";
import './style.css'

class Home extends React.Component {
    render(){
        return(
           <div >
            <img className="imageBG" src={require('./img/01.png')}/>
           </div>
        )
    }
}

export default Home;
  