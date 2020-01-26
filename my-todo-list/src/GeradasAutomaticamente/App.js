import React from 'react';

import {Link} from 'react-router-dom'

import './App.css';

import Corpo from '../Todo-List/Corpo'

function App() {
  return (
    <div className="App">
      <h1>Página inicial</h1>

      <Link to="/lista">
        <button>Continuar</button>
      </Link>
    </div>
  );
}

export default App;
