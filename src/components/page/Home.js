import React,{Component} from 'react'
import { Attraction, Car, TreeOption } from "grommet-icons";
import { Grommet, Box, Carousel,Clock, Heading,Image} from "grommet";
import { grommet } from "grommet/themes";
import SimpleWorldMap from "./fragment/SimpleWorldMap";
import SimpleCalendar from "./fragment/SimpleCalendar";
import Background from './img/01.png';
import './style.css'
// import { url } from 'inspector';
class Home extends React.Component {
    render(){
        return(
                <div>
                    <Box full>
                    <Image className="imageBG"src="https://absurd.design/assets/img/Surrealist-Lightbulb.gif" fit="contain"
                        string="Welcome to Pratita Sujatmika sites"
                    />
                    <Heading className="kanan">
                        Welcome to<br/>
                        Pratita Sujatmika
                        <br/>sites
                    </Heading>
                    </Box>
                </div>
               

        )
    }
}

export default Home;
  