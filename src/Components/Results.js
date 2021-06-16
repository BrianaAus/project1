import './Results.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from "../Contexts/AppContext";

const Results = () => {

let {currentQuestion, setCurrentQuestion, arrayOfAnswers, setArrayOfAnswers } = useContext(AppContext)

setCurrentQuestion(0)

function countAnswers(arrayOfAnswers, results = {answer1:0, answer2:0, answer3:0, answer4:0, answer5:0, answer6:0} ){
    
    for(const answer in results){
        
        if(arrayOfAnswers[0] === answer){

            results[answer] = results[answer]+=1
        }
    }

    // Pop the first thing out of the array (make it smaller)
    arrayOfAnswers.shift()

    // Base Case: When our array is empty
    if(arrayOfAnswers <=0) {

        return results
    }

    // Else, recurse with a smaller array and slowly updated results
    else{
        return countAnswers(arrayOfAnswers, results)
    }
}

let countOfAnswers = countAnswers(arrayOfAnswers)
console.log(countOfAnswers)

console.log(Object.keys(countOfAnswers).reduce((a, b)=> obj[a] > obj[b] ? a: b)

/*const history = useHistory();

    window.addEventListener('beforeunload', (e) => {

    history.replace('/')

    e.returnValue = ''
})*/

    return(
    <header className="App-header">
        <div className="results"><p>{arrayOfAnswers}</p></div>
        <Link exact to = '/'>
        
          <button name="reset">
            Take the quiz again?
          </button>
        
        </Link>   
    </header>
    )
} 
export default Results