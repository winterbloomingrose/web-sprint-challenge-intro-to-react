import React, { useEffect, useState } from 'react';
import Character from './components/Character';

import './App.css';
import axios from 'axios';
import styled from "styled-components";
const Styled = styled.div

const App = () => {
  return (
    <Styled className="App">
      <h1 className="Header">Star WarsCharacters</h1>
      <Character />
    </Styled>
  );
}

export default App;
