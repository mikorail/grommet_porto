import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box,Grommet } from 'grommet';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const theme = {
  global: {
    font: {
      family: 'Source Code Pro',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <div className="App">
      <AppBar>
        Hello Grommet
      </AppBar>
    </div>
  );
}

export default App;
