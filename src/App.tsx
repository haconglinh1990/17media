import React from 'react';
import styled from 'styled-components';
import { ListItem } from './components';

const Wrap = styled.div`
  font-size: 1rem;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft JhengHei',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Wrap>
        <ListItem />
      </Wrap>
    </div>
  );
};

export default App;
