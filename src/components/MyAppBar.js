import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Box, Button, Collapsible, Heading, Grommet,ResponsiveContext,Layer,Clock} from 'grommet';
import { grommet } from "grommet/themes";
import Content from "./Content";
import { FormClose,Notification } from 'grommet-icons';
import './style.css'

 
const jam = {
  marginLeft:'85%',
  marginTop:'10px',
  float:'right',
  color: 'black',
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
        background='white'
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
                    <img className="icon" src={require('./page/img/01.png')}
                    onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                    />
                     <Clock style={jam} type="digital" />          
                </AppBar>
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                 <Box full flex align='center' justify='center'>
                    <Content/>
                </Box>
                {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                    <Box flex
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
                    </Layer>
                )}
                </Box>
                </Box>
            
          )}
          </ResponsiveContext.Consumer>
        </Grommet>
          )}
        }
export default MyAppBar;