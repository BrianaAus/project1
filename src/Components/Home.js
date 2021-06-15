import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {

    return(
        <header className="App-header">
        
        <img src={'https://www.sideshow.com/storage/product-images/501023U/excelsior_pow-entertainment_silo_lg.png'} className="App-logo" alt="logo" />
        <p className="intro">
          Which Marvel Character are you? 👀
        </p>
        <Link exact to = '/questions'>
        <button name="TakeQuiz">
          Take the Quiz!
          </button>
        </Link>
      </header>
    )
} 
export default Home