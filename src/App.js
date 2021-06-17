import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Questions from './Components/Questions'
import Results from './Components/Results'
import AppContext from "./Contexts/AppContext";
import { useState } from 'react'

function App() {
  let url = `https://medea-music.com/wp-content/uploads/2018/05/The-Avengers-Theme-Song.mp3?_=2`
  let [currentQuestion, setCurrentQuestion] = useState(0) 
  let [arrayOfAnswers, setArrayOfAnswers] = useState([])
  let [winningHero, setWinningHero] = useState('')
  let [winningHeroThumbnail, setWinningHeroThumbnail] = useState({})
  let [winningHeroDescription, setWinningHeroDescription] = useState('')
  let [randomBackground, setRandomBackground] = useState(null)
  //for audio player Player.js
  let [playing, setPlaying] = useState(false)
  let [audio, setAudio] = useState(new Audio(url))

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
        setWinningHeroDescription,
        randomBackground,
        setRandomBackground,
        //Player.js
        playing,
        setPlaying,
        audio,
        setAudio,
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
