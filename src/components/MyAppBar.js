import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Box, Button, Collapsible, Heading, Grommet,ResponsiveContext,Layer} from 'grommet';
import { grommet } from "grommet/themes";
import Content from "./Content";
import { FormClose,Notification } from 'grommet-icons';

 
    
const theme = {
    global: {
      font: {
        family: 'Press Start 2P',
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
        background='brand'
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
                    <Button icon={<Notification />}
                    onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                    />            
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
                        <b><i>MIKORAIL.ME</i></b>
                        &nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/profile">
                        <b>PROFILE</b>&nbsp;
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/portofolio">
                        <b>PORTOFOLIO</b>&nbsp;
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'brand' }} to="/contact">
                        <b>CONTACT</b>&nbsp;
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