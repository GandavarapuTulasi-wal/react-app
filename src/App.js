import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Registration from './Registration'
import Footer from './Footer'
import Hobbies from './Hobbies';
import Native from './Native';
import Login from './Login';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <div>
      <Registration></Registration>
      </div>
      <h1>Hobbies</h1>
      <div className="card">
      <Hobbies></Hobbies>
      </div>
      <div>
        <Native></Native>
      </div>
      <div>
        <Login></Login>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
