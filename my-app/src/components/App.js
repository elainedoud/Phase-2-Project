
import '../App.css';
import Header from "./Header"
import ThemeParkPage from "./ThemeParkPage"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    fetch("http://localhost:3000/theme-Parks")
    .then(r=>r.json())
    .then(data=>console.log(data))

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render</h1>
        <Header />
        <ThemeParkPage  />
      </header>
    </div>
  );
}

export default App;
