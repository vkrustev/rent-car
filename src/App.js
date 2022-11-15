import logo from './logo.svg';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Articles from './Articles';
import Forms from './Forms';
import Body from './Body'; 
import './App.css';

function App() {
  return (
    <div className="App">
          <Header></Header>
          <Sidebar></Sidebar>
          <Body></Body>
        
      <Footer></Footer>
    </div>
  );
}

export default App;
