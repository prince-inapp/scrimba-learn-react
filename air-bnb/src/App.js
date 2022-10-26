import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
//import HeroImg from './assets/katie-zaferes.png';
import dataStore from './data';

function App() {
    const cards = dataStore.map((data, index)=>{
        return (
                <Card
                    key={index}
                    item = {data}
                />
        )
    })
  return (
    <div>
        <Navbar/>
        <Hero />
        <section className="card--list">
        {cards}
        </section>
    </div>
  );
}

export default App;
