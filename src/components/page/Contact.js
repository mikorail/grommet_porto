import React from 'react'
import './style.css'
import { Attraction, Car, TreeOption, Facebook,Twitter } from "grommet-icons";
import {Box,Image,Heading, Button} from 'grommet';
class Contact extends React.Component {
    render(){
        return(
            <div>
                <Box full>
                    <Image className="imageBG4" src={require('./img/02.png')}/>
                    <Box className="link">
                    <Button 
                        className="button"
                        pad="small"
                        margin="small"
                        size="xsmall"
                        icon={<Facebook />}
                        label="Pratito Sujatmiko"
                        onClick={() => {}}>
                    </Button>
                    <Button 
                        className="button"
                        pad="small"
                        margin="small"
                        size="xsmall"
                        icon={<Twitter />}
                        label="@pandasmu"
                        onClick={() => {}}>
                    </Button>
                    </Box>
                </Box>

            </div>
        )
    }
}

export default Contact;