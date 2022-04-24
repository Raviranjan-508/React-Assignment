import './App.css';
import { Add,Sub,Mul,Div } from './Components/Calculator';
function App() {
  return (
    <div className="App">
     <>
     <ul>
        <li>{Add(4,5)}</li>
        <li>{Sub(5,4)}</li>
        <li>{Mul(2,3)}</li>
        <li>{Div(4,2)}</li>
      </ul>
      </>
    </div>
  );
}

export default App;
