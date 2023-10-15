import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";


import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App ">
        <Header />
        <Navbar />
    </div>
   
  );
}

export function Header() {
  return ( 
    <header>
        <h1 className="App-main"> Welcome the Student Business Hub </h1>
        <h2 >Placeholder text...............</h2>
      </header>

  )
}

