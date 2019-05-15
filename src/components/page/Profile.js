import React from 'react'
import './style.css'
import { Grommet, Box, Carousel,Clock, Heading,Image} from "grommet";
const border = {
    borderColor: 'brand',
  }; 
  
class Profile extends React.Component {
    render(){
        return(
            <div>
                <Box full>
                <Heading className="kanan1">
                       Profile Pages
                </Heading>
                <Image className="pp" src={require('./img/MgV1oAXL_400x400.jpg')} style={border} />
                    <Image className="imageBG1"src="https://absurd.design/assets/img/connect.png" fit="contain"
                        string="Welcome to Pratita Sujatmika sites"
                    />
                    
                </Box>
            </div>
        )
    }
}

export default Profile;