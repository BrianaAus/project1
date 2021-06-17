import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from "../Contexts/AppContext";
import panel2Image from "../Images/panel2.jpg"
import panel3Image from "../Images/panel3.jpg"
import './Home.css';
import Player from './Player';

function Home() {

  let { setCurrentQuestion } = useContext(AppContext)
  
  setCurrentQuestion(0)

    return(

      <header className="App-header">
        
      <div className="container">

        <div className="panel1"><img src={'https://insidepulse.com/wp-content/uploads/2018/11/Avengers-700-aka-10-spoilers-0-A.jpg'} alt="logo" /></div>

        <div className="panel2"><img src={panel2Image} alt="logo" /></div>

        <div className="panel3"><img src={panel3Image} alt="logo" /></div>

        <div className="panel4"> 
          
          <Link exact to = '/questions'>
          
          <button name="TakeQuiz">
            CLICK HERE TO TAKE THE QUIZ!
          </button>
        
          </Link>
        </div>

        <div className="intro">
            Which MCU Avenger are you!?
        </div>
        
        <Player/>
      </div>
      
    </header>
    )
} 
export default Home