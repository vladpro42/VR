import './App.css';
import About from './organisms/About';
import Header from './organisms/Header';
import IntroDuction from './organisms/Introduction';
import Top from './organisms/Top';


function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <IntroDuction />
      <About />
    </div>
  );
}

export default App;
