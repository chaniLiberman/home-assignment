import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage';
//import Modal from './components/Modal';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home-page' element={<HomePage/>}/>
          {/* <Route path='/home-page/modal/:id' element={<Modal id={undefined}/>}/> */}
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
