import React,{Component} from 'react'
import { Attraction, Car, TreeOption } from "grommet-icons";
import { Grommet, Box, Carousel,Clock, Heading,Image} from "grommet";
import { grommet } from "grommet/themes";
import './style.css'
// import { url } from 'inspector';
class Home extends React.Component {
    render(){
        return(
                <div>
                    <Box full className="mabur">
                    <Box  className="kui">
                    <Heading className="kanan">
                            Welcome to<br/>
                            Pratita Sujatmika
                            <br/>sites
                        </Heading>
                    </Box>        
                    <Box className="iku">
                            <Image className="imageBG"src="https://absurd.design/assets/img/Surrealist-Lightbulb.gif" fit="contain"
                                string="Welcome to Pratita Sujatmika sites"
                            />
                        </Box>                    
                    </Box>
                </div>
               

        )
    }
}

export default Home;
  