import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Box, Text,Button, Collapsible, Heading, Grommet,ResponsiveContext,Layer,Clock} from 'grommet';
import { grommet } from "grommet/themes";
import Content from "./Content";
import { FormClose,Notification, Archive } from 'grommet-icons';
import './style.css'

 
const jam = {
  align:'right',
  marginLeft:'90%',
  marginTop:'5px',
  float:'right',
  color: 'white',
}; 

const theme = {
    global: {
      font: {
        size: '14px',
        height: '20px',
      },
    },
  };
const AppBar = (props) => (
      <Box
        tag='header'
        direction='row'
        align='left'
        color='white'
        background='black'
        justify='start'
        pad={{ left: 'small', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
      />
    );  
    class MyAppBar extends Component {
        state = {
            showSidebar: false,
          }
        render() {
        const { showSidebar } = this.state;
          return (
            <Grommet theme={theme}full>
            <ResponsiveContext.Consumer>
            {size => (
            <Box fill>
                <AppBar>
                    <Text color="white"
                    onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                    >
                        <b>PS</b>
                    </Text>
                    <Clock style={jam} type="digital" />              
                </AppBar>
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <ResponsiveContext.Consumer>
                {size => (
                 <Box full flex align='center' justify='center'>
                    <Content/>
                </Box>
                )}
                </ResponsiveContext.Consumer>
                {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                    <Box flex className="respo"
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/home">
                        <h4><b><i>MIKORAIL.ME</i></b></h4>
                        &nbsp;
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/profile">
                        <h4><b>PROFILE</b>&nbsp;</h4>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/portofolio">
                        <h4><b>PORTOFOLIO</b>&nbsp;</h4>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/contact">
                        <h4><b>CONTACT</b>&nbsp;</h4>
                        </Link>    
                    </Box>
                </Collapsible>
                 ): (
                    <Layer>
                     <Box 
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                        >
                        <Button
                            icon={<FormClose />}
                            onClick={() => this.setState({ showSidebar: false })}
                        />
                        </Box>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/home">
                        <h4><b><i>MIKORAIL.ME</i></b></h4>
                        &nbsp;
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/profile">
                        <h4><b>PROFILE</b>&nbsp;</h4>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/portofolio">
                        <h4><b>PORTOFOLIO</b>&nbsp;</h4>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/contact">
                        <h4><b>CONTACT</b>&nbsp;</h4>
                        </Link>    
                    </Layer>
                )}
                </Box>
                </Box>
            
          )}
          </ResponsiveContext.Consumer>
        </Grommet>
          );}
        }
export default MyAppBar;