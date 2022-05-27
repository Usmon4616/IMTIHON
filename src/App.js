import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Cnopka from './components/Cnopka'
import Pasti from './components/Pasti'
import Kinola from './components/Kinola'
import Carusel from './components/navbarla/Carusel'
import Aylantirish from './components/Aylantirish'
import Eng from './components/Engpasti'
import Oxiri from './components/Oxiri'


function App() {
  return (
    <div>
      <div className="App1">
        <Navbar />


      </div>
      <div className='pasti1'>
        <Pasti />
        <Kinola />
        <Aylantirish/>
        <Eng/>
        <h1>В тренде</h1>
        <Aylantirish/>
        <Oxiri/>



        
        

      </div>
    </div>
  );
}

export default App;
