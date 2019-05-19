import React,{Component} from 'react';
import MyAppBar from './components/MyAppBar';
import { Grommet } from 'grommet';
const theme = {
  global: {
    font: {
      family: 'Roboto Mono',
      size: '12px',
      height: '12px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <MyAppBar/>
    </Grommet>
  );
}

export default App;
