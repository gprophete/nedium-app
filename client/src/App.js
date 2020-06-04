import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Feed from "./components/Feed.js"
import Post from "./components/Post.js"
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1>Hello World</h1>
    <Router>
   
      <Switch>
        <Route exact path="/" component={Feed}/>
        <Route exact path="/singlePost/:postId" component={Post} />
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
