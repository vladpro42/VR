import './App.css';
import About from './organisms/About';
import Bottom from './organisms/Bottom';
import Header from './organisms/Header';
import IntroDuction from './organisms/Introduction';
import Top from './organisms/Top';

const text = `Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.`

const introduction = {
  title: 'INTRODUCTION',
  subTitle: 'TO HYDRA VR',
  text: text
}
const why = {
  title: 'WHY BUILD',
  subTitle: 'WITH HYDRA?',
  text: text
}



function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <IntroDuction {...introduction} />
      <About />
      <IntroDuction {...why} />
      <Bottom />
    </div>
  );
}

export default App;
