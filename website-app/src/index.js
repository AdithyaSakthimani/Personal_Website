import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Resume from './Resume';
import NoteState from './components/NoteState';

// Set up routing with HashRouter
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NoteState>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
    </NoteState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
