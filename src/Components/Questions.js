import './Questions.css';

const Questions = () => {

    return(
    <header className="App-header">
        <div className="questions-container">
            <div className="question"><p>If you could have one superpower, what would it be?</p></div>
            <div className="answer clickable" id="answer1"><p>Super Strength</p></div>
            <div className="answer clickable" id="answer2"><p>Invisibility</p></div>
            <div className="answer clickable" id="answer3"><p>Telekinesis</p></div>
            <div className="answer clickable" id="answer4"><p>Super Intelligence</p></div>
            <div className="previous clickable"><p>Previous</p></div>
            <div className="next clickable"><p>Next</p></div>
        </div>    
    </header>
    )
} 
export default Questions