import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
import Hooks from './Hooks';
import { BrowserRouter,Switch,Route,useParams,Link } from 'react-router-dom';

function Home (props){
  // return (<Link to='/about'>Go to About</Link>)
  return (
    <button onClick={()=>props.history.push('/about')}>Go to About</button>
  )
}
function About (props){
  console.log(props)
  return <h1>About {props.name}</h1>
}
function Contact (props){
  console.log(props)
  const id = props.match.params.id;
  //const id1 = useParams();
  return <h1>Contact {id} <About name='about' /></h1>
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/hooks" component={Hooks}/>
        <Route path="/about" component={About}/>
        <Route path="/contact/:id" component={Contact}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
