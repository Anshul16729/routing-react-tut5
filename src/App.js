import './App.css';
import React from 'react';
// import Nav from './Nav';
// import Home from './Home';
// import About from './About';
import User from './User';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  let users = [
    { id: 1, name: 'anshul', email: 'anshul@gmail.com' },
    { id: 2, name: 'john', email: 'john@gmail.com' },
    { id: 3, name: 'sam', email: 'sam@gmail.com' },
    { id: 4, name: 'david', email: 'david@gmail.com' },
    { id: 5, name: 'tony', email: 'tony@gmail.com' },
    { id: 13, name: 'prince', email: 'prince@gmail.com' }
  ]
  return (
    <div className="App">
      {/* Routing */}
      {/* <Nav/>
      <Route path="/about"> <About /></Route>   
      <Route path="/" exact={true}> <Home /></Route>   */}

      {/* Page Not Found - 404 Page */}
      {/* <Router>
        <Link to="/">Home</Link><br /><br />
        <Link to="/about">About</Link><br /><br />
        <Link to="/login">Login</Link><br /><br />
        <Switch>
          <Route path="/" exact={true}><Home /> </Route>
          <Route path="/about"><About /></Route>
          <Route path="*"><Page404 /></Route>
        </Switch>
      </Router> */}

      {/*  Dynamic Routing */}
      <Router>
        <h1>Dynamic Routing</h1>
        {
          users.map((item) =>
            <div><Link to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>)
        }
      <Route path="/user/:id/:name"><User /></Route>
      </Router>













    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is Home Page of website</p>
//     </div>
//   )
// }

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is About Page of website</p>
//     </div>
//   )
// }

// function Page404() {
//   return (
//     <div>
//       <h1>404 Page</h1>
//       <p>This Page not Found</p>
//     </div>
//   )
// }

export default App;
