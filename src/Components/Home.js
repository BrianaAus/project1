import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from "../Contexts/AppContext";
import './Home.css';

function Home() {

  let { setCurrentQuestion } = useContext(AppContext)
  
  setCurrentQuestion(0)

    return(

      <header className="App-header">
        
        <img src={'https://i.pinimg.com/originals/ed/d1/b8/edd1b8723c175517c85ffee2f6c2e0a9.jpg'} className="App-logo" alt="logo" />
        
        <p className="intro">
          Which MCU Avenger are you!?
        </p>
        
        <Link exact to = '/questions'>
        
          <button name="TakeQuiz">
            CLICK HERE TO TAKE THE QUIZ!
          </button>
        
        </Link>

      </header>
    )
} 
export default Home