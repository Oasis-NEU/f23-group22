import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";


//import logo from "./logo.svg";
import './App.css';
import HomePage from "./HomePage.js";

export default function App() {
  return (
    <div className="App">
        <div className="flex flex-col h-screen">
        <Header />
        <Navbar />
        <HomePage />
        </div>
    </div>
   
  );
}

export function Header() {
  return ( 
    <header>
        <h1 className="App-main"> Welcome the Student Business Hub </h1>
    </header>
    


  )
}

