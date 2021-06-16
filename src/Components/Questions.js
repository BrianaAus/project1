import './Questions.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from "../Contexts/AppContext";

const Questions = () => {

function questionMaker(question,answer1,answer2,answer3,answer4,answer5,answer6){
    return {question: question,
            answer1: answer1, 
            answer2:answer2,
            answer3:answer3,
            answer4:answer4,
            answer5:answer5,
            answer6:answer6}
}

let {currentQuestion, setCurrentQuestion, arrayOfAnswers, setArrayOfAnswers } = useContext(AppContext) 

const arrayOfQuestions = [
    
    questionMaker('If you could have one superpower, what would it be?',
        'Super Strength',
        'Invisibility',
        'Super Intelligence',
        'Super Speed',
        'Telekinesis',
        'Weapon Mastery'),
    
    questionMaker('If your friends described you in one word, what would it be?',
        'Humble',
        'Adventurous',
        'Devious',
        'Witty',
        'Angry',
        'Nervous'),

    questionMaker('Who would you choose to fight by your side?',
        'War Machine',
        'Winter Solider',
        'Nick Fury',
        'Loki',
        'Rocket Raccoon',
        'Falcon'),

    questionMaker('Where would your secret lair/headquarters be?',
        'In a mountain',
        'Under the sea',
        'Wakanda',
        'New York',
        'Outer Space',
        'Volcano'),
]

console.log('State, currentQuestion: ', currentQuestion)
console.log('State, arrayOfAnswers: ', arrayOfAnswers)

function Previous(props){

    if(props.currentQuestion <= 0){
        return (<div className="previous clickable"><Link exact to ='/'><p>Back</p></Link></div>)
    }
    else {
        return(<div onClick={handlePrevious} className="previous clickable"><p>Previous</p></div>)
    }
}

function Next(props){

    if(props.currentQuestion >= arrayOfQuestions.length - 1){
        return (<div onClick={()=>{handleNext()}} className="next clickable hidden"><Link exact to ='/results'><p>Submit</p></Link></div>)
    }
    else {
        return(<div onClick={() => {handleNext()}} className="next clickable hidden"><p>Next</p></div>)
    }
}

function handleNext() {

    console.log('handleNext() has fired.')
    
    let answers = document.getElementsByClassName('answer')

    for(let i=0;i<answers.length;i+=1){
        if(answers[i].classList.contains('selected')){
            setArrayOfAnswers([...arrayOfAnswers, answers[i].id])
        }  
    }

    for(let i=0;i<answers.length;i+=1){
        answers[i].classList.remove('selected')
    }

    setCurrentQuestion(currentQuestion+=1)
}

function handlePrevious() {
    
    setArrayOfAnswers([...arrayOfAnswers.slice(0,arrayOfAnswers.length -1)])
    
    setCurrentQuestion(currentQuestion-=1)
}

function selectAnswer(e) {
    let answers = document.getElementsByClassName('answer')
    for(let i=0;i<answers.length;i+=1){
       answers[i].classList.remove('selected')
    }
    e.target.classList.add('selected')  
    document.querySelector('.next').classList.remove('hidden')
}

    return(
        <header className="App-header">
            <div className="questions-container">
                <div className="question"><p>{arrayOfQuestions[currentQuestion].question}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer1"><p>{arrayOfQuestions[currentQuestion].answer1}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer2"><p>{arrayOfQuestions[currentQuestion].answer2}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer3"><p>{arrayOfQuestions[currentQuestion].answer3}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer4"><p>{arrayOfQuestions[currentQuestion].answer4}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer5"><p>{arrayOfQuestions[currentQuestion].answer5}</p></div>
                <div onClick={(e) => {selectAnswer(e)}} className="answer clickable" id="answer6"><p>{arrayOfQuestions[currentQuestion].answer6}</p></div>
                <Previous currentQuestion={currentQuestion}/>
                <Next currentQuestion={currentQuestion}/>
            </div>    
        </header>
    )
}

export default Questions