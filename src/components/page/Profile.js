import React from 'react'
import './style.css'
import { Grommet, Box, Heading,Image,Paragraph,Text} from "grommet";
import {Gamepad,Camera,FormEdit,Grow,Inprogress,Keyboard,Music,Document,Accessibility,Like} from "grommet-icons";

const border = {
    borderColor: 'brand',
    marginTop:'0%',
    marginLeft:'0%'
  }; 

  
class Profile extends React.Component {
    render(){
        return(
            
            <div className="main">
                <Box flex >
                <Heading  style={border} size="medium" color="accent-1">
                       Profile Pages
                </Heading>
                    <br/>
                </Box>
                <div className="tengah">
                
                <Box full className="panel"
                pad="large"
                >
                    <Image className="pp" src={require('./img/MgV1oAXL_400x400.jpg')}  />
                    <Paragraph size="medium">
                        <b>Pratita Sujatmika</b>
                        <br/>
                        Fulltime Dreamer 
                        <br/>
                    </Paragraph>
                </Box>

                <Box full className="paneledu" 
                pad="large">
                    <Document alignSelf="center" justify="center" size="xlarge" pad="large" color="white" />
                    
                    <Paragraph size="medium" >
                        <Text size="large">
                        <b>Education</b>
                        </Text>
                        <ul>
                            <li>
                                <b>Gadjah Mada University (2017-now)</b>
                                <br/>
                                <sub>Computer and Information Diploma</sub>
                            </li>
                            <li>
                                <b>Yogyakarta 2 Vocational Highschool (2014-2017)</b>
                                <br/>
                                <sub>Multimedia</sub>
                            </li>
                        </ul>
                    </Paragraph>
                </Box>
                <br/>
                <Box className="panelBio" pad="medium">
                    <Accessibility size="xlarge"color="white">
                        </Accessibility>                    
                        <Text size="large"><b>Biological Info</b></Text>
                        <Text size="medium">
                        <ul>
                            <li>Born in Bantul,Yogyakarta,
                                Indonesia</li>
                            <li>August,6th 1999</li>
                        </ul>
                        </Text>
                </Box>
                </div>    

                <div>
                <Box className="panelInt" pad="medium" margin="small">
                     <Like size="xlarge"color="white">
                        </Like>
                        <br/>                    
                        <Text size="large" color="white" align="left"><b>Interested in</b></Text>
                        <Text size="medium"color="white">
                        <ul align="left">
                            <li>Game <Gamepad color="white" size="medium"/></li>
                            <li>Photography/Cinema <Camera color="white" size="medium"/></li>
                            <li>Drawing <FormEdit color="white" size="medium"/></li>
                            <li>Modifying Code/Stuff <Keyboard color="white" size="medium"/></li>
                            <li>Music <Music color="white" size="medium"/></li>
                        </ul>
                        </Text>
                </Box>
                </div>
                
            </div>
        )
    }
}

export default Profile;