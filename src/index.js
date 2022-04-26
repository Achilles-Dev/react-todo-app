import React from 'react';
import ReactDOM from "react-dom";
import TodoContainer from '../src/functionBased/components/TodoContainer';
import '../src/functionBased/components/App.css';
import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)