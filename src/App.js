import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Questions from './Components/Questions'
import Results from './Components/Results'
import AppContext from "./Contexts/AppContext";
import { useState } from 'react'

function App() {

  let [currentQuestion, setCurrentQuestion] = useState(0) 
  let [arrayOfAnswers, setArrayOfAnswers] = useState([])
  let [winningHero, setWinningHero] = useState('')
  let [winningHeroThumbnail, setWinningHeroThumbnail] = useState({})
  let [winningHeroDescription, setWinningHeroDescription] = useState('')

  return (
    
    <AppContext.Provider
      value={{
        currentQuestion, 
        setCurrentQuestion,
        arrayOfAnswers,
        setArrayOfAnswers,
        winningHero,
        setWinningHero,
        winningHeroThumbnail,
        setWinningHeroThumbnail,
        winningHeroDescription,
        setWinningHeroDescription
      }}>

    <div className="App-background"></div>

    <div className="App">

      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/questions" component={Questions}></Route>
        <Route exact path="/results" component={Results}></Route>

      </Switch>

    </div>

    </AppContext.Provider>
  );
}

export default App;
