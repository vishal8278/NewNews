import './App.css';

import React, { useState,  } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

const App= ()=>{
 const pageSize=15;
 const apiKey=process.env.REACT_APP_NEWS_API
  // apiKey="8aedb55b9c5947609ee9cba7c45b7cba"

  const [progress,setProgress]=useState(0);

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Navbar/>
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health" /></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
        </Router>
      </div>
    )

}

export default App