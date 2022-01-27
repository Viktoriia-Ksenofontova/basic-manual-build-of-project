import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => (
  <h1>
    My React and TypeScript App!
    <br /> {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(<App />, document.getElementById('root'));
