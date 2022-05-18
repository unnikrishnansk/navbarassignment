
import './App.css';
import {Button} from "./components/Button";
import { Links } from './components/Links';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='insidemain'>
      <Logo/>
      <Links/>
     <Button/>
     </div>
     </div>
    </div>
  );
}

export default App;
