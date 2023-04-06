import './App.css';
import Foot from './components/Foot';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Page2 from './components/Page2';
import Scrollcards from './components/Scrollcards';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Page2/>
      <Scrollcards/>
      <Subscribe/>
      <Foot/>
    </div>
  );
}

export default App;
