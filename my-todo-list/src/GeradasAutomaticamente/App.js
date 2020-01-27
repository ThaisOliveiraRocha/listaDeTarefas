import React from 'react';

import {Link} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Página inicial</h1>

      <p>Adicionar tarefas</p>
      <Link to="/lista">
        <button>Adicionar</button>
      </Link>

      <p>Verificar eventos no calendário</p>
      <Link to="/calendario">
        <button>Continuar</button>
      </Link>

      <p>Agenda</p>
      <Link to="/agenda">
        <button>Continuar</button>
      </Link>
    </div>
  );
}

export default App;
