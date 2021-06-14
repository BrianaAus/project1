import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Questions from './Components/Questions'
import Results from './Components/Results'

function App() {
  return (
  <>
  <div className="App-background"></div>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/questions" component={Questions}></Route>
        <Route exact path="/results" component={Results}></Route>
      </Switch>
    </div>
  </>
  );
}

export default App;
