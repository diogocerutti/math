import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom' 
import Router from './ApplicationRouter'
import Navbar from './components/Navbar/Navbar';
import { Line }from 'react-lineto';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>

            <div className='content' style={{paddingTop: '30px'}}>
                <Router/>
            </div>
            <div>
                <Line x0={0} y0={0} x1={10} y1={10} />
            </div>
            {/*
            <div className='footer'>
                <div className='container'>
                    Aivaras Kriksciunas, 2020
                </div>
            </div>
            */}
        </BrowserRouter>
    )

}

export default App;