import './Questions.css';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AppContext from "../Contexts/AppContext";

const Questions = () => {

    function questionMaker(question,answer1,answer2,answer3,answer4,answer5,answer6) {
    
    return {question: question,
            answer1: answer1, 
            answer2:answer2,
            answer3:answer3,
            answer4:answer4,
            answer5:answer5,
            answer6:answer6}
}

let {currentQuestion, setCurrentQuestion, arrayOfAnswers, setArrayOfAnswers, setWinningHero } = useContext(AppContext) 

const arrayOfQuestions = [
    
    questionMaker('If you could have one superpower, what would it be?',
        'Flying',
        'Super Intelligence',
        'Super Strength',
        'Invisiblity',
        'Invulnerability',
        'Weapon Mastery'),
    
    questionMaker('If your friends described you in one word, what would it be?',
        'Adventurous',
        'Witty',
        'Humble',
        'Devious',
        'Angry',
        'Calm'),

    questionMaker('Who would you choose to fight by your side?',
        'Loki',
        'War Machine',
        'Falcon',
        'Winter Soilder',
        'Nick Fury',
        'Valkyrie'),

    questionMaker('Where would your secret lair/headquarters be?',
        'In outer space',
        'In a mountain',
        'In a city',
        'The arctic circle',
        'A secluded forest',
        'A volcano'),

    questionMaker('What is your biggest weakness?',
        'You have an ego',
        'You have a need to control',
        'You are too trusting',
        'You hate people',
        'You have a temper',
        'You lack confidence'),

    questionMaker('What of these is your favorite food?',
        'Steak',
        'Caviar',
        'Apple Pie',
        'Shrimp Cocktail',
        'Spinach',
        'Double Cheeseburger'),

    questionMaker('Which of these do you want the most?',
        'Fame',
        'Money',
        'Safety',
        'Security',
        'Freedom',
        'Recognition'),

    questionMaker('What is your favorite color?',
        'Purple',
        'Yellow',
        'Blue',
        'Red',
        'Green',
        'Orange'),

    questionMaker('Which of these intrigues you the most?',
        'Mythology',
        'Economics',
        'History',
        'Acrobatics',
        'Science',
        'Geometry'), 
        
    questionMaker('Which animal are you most like?',
        'Frog',
        'Hawk',
        'Dog',
        'Monkey',
        'Gorilla',
        'Cat')   
]

function Previous(props){

    if(props.currentQuestion <= 0){

        return (<div className="previous clickable"><Link exact to ='/'><p>Back</p></Link></div>)
    }

    else {

        return(<div onClick={handlePrevious} className="previous clickable"><p>Previous</p></div>)
    }
}

function Next(props){

    if(props.currentQuestion >= arrayOfQuestions.length - 1) {

        return (<div onClick={()=>{handleNext()}} className="next clickable hidden"><Link exact to ='/results'><p>Submit</p></Link></div>)
    }

    else {

        return(<div onClick={() => {handleNext()}} className="next clickable hidden"><p>Next</p></div>)
    }
}

function handleNext() {
    
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

function countAnswers(arrayOfAnswers, results = { answer1 : 0, answer2 : 0, answer3 : 0, answer4 : 0, answer5 : 0, answer6 : 0, answer7: 0}) {
        
    for(const answer in results){
        
        if(arrayOfAnswers[0] === answer){

            results[answer] = results[answer]+=1
        }
    }

    arrayOfAnswers.shift()

    if(arrayOfAnswers <= 0) {

        return results
    }

    else{

        return countAnswers(arrayOfAnswers, results)
    }
}

useEffect(() => {

    let countOfAnswers = countAnswers(arrayOfAnswers)

    let winningAnswer = Object.keys(countOfAnswers).reduce((a, b) => {

        return countOfAnswers[a] > countOfAnswers[b] ? a : b

    })

    // Return appropriate hero
    let superHero = (winningAnswer) => {

        switch(winningAnswer) {
            
            case 'answer1':
            return 'Thor' 
            
            case 'answer2':
            return 'Iron Man'
            
            case 'answer3':
            return 'Captain America'
            
            case 'answer4':
            return 'Black Widow'

            case 'answer5':
            return 'Hawkeye'

            case 'answer6':
            return 'Hulk'
            
            default:
            return ' not worthy!'
        }
    } 

    setWinningHero(superHero(winningAnswer))

}, [arrayOfAnswers])

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