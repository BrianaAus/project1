import './Questions.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Questions = () => {

function questionMaker(question,answer1,answer2,answer3,answer4){
    return {question: question,
            answer1: answer1, 
            answer2:answer2,
            answer3:answer3,
            answer4:answer4}

}

const arrayOfQuestions = [
    
    questionMaker('If you could have one superpower, what would it be?',
        'Super Strength',
        'Invisibility',
        'Super Strength',
        'Super Speed'),
    
    questionMaker('If your friends described you in one word, what would it be?',
        'Humble',
        'Adventurous',
        'Devious',
        'Witty'),

    questionMaker('Who would you choose as a sidekick?',
        'War Machine',
        'Winter Solider',
        'Hawk Eye',
        'Loki'),

    questionMaker('Where would your secret lair/headquarters be?',
        'In a mountain',
        'Under the sea',
        'Wakanda',
        'New York'),
]

let [currentQuestion, setCurrentQuestion] =  useState(0) 
let [arrayOfAnswers, setArrayOfAnswers] = useState([])


function Previous(props){

    if(props.currentQuestion <= 0){
        return (<div className="previous clickable"><Link exact to ='/'><p>Back</p></Link></div>)
    }
    else {
        return(<div onClick={() => {setCurrentQuestion(currentQuestion--)}} className="previous clickable"><p>Previous</p></div>)
    }
}

function Next(props){

    if(props.currentQuestion >= arrayOfQuestions.length - 1){
        return (<div className="next clickable"><Link exact to ='/results'><p>Submit</p></Link></div>)
    }
    else {
        return(<div onClick={() => {setCurrentQuestion(currentQuestion++)}} className="next clickable"><p>Next</p></div>)
    }
}

    return(
    <header className="App-header">
        <div className="questions-container">
            <div className="question"><p>{arrayOfQuestions[currentQuestion].question}</p></div>
            <div className="answer clickable" id="answer1"><p>{arrayOfQuestions[currentQuestion].answer1}</p></div>
            <div className="answer clickable" id="answer2"><p>{arrayOfQuestions[currentQuestion].answer2}</p></div>
            <div className="answer clickable" id="answer3"><p>{arrayOfQuestions[currentQuestion].answer3}</p></div>
            <div className="answer clickable" id="answer4"><p>{arrayOfQuestions[currentQuestion].answer4}</p></div>
            <Previous currentQuestion={currentQuestion}/>
            <Next currentQuestion={currentQuestion}/>
        </div>    
    </header>
    )
} 
export default Questions