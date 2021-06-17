import './Results.css';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import AppContext from "../Contexts/AppContext";
import MD5 from 'crypto-js/md5'

const Results = () => {

    

    let { winningHero, winningHeroThumbnail, setWinningHeroThumbnail, winningHeroDescription, setWinningHeroDescription } = useContext(AppContext)


    useEffect(() => {

        function getWinningID(winningHero) {
            
            switch(winningHero) {
            
                case 'Thor':
                return '1009664'
                
                case 'Iron Man':
                return '1009368'
                
                case 'Captain America':
                return '1009220'
                
                case 'Black Widow':
                return '1009189'
    
                case 'Hawkeye':
                return '1009338'
    
                case 'Hulk':
                return '1009351'
                
                default:
                return null
            }
            
        }
        
        async function getCharacterInfo(winningHero){

            let id = getWinningID(winningHero)
            let ts = Date.now()
            let md5Hash = MD5(`${ts}c97d166646fd9693e047bb4db704549ef2c6982b57a9282eee09f642116d68d165ec7808`).toString()
            let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=57a9282eee09f642116d68d165ec7808&hash=${md5Hash}`
            
           try{
            let response = await fetch(url)
            .then(data => data.json())
            .then(data => {
                setWinningHeroDescription(data.data.results[0].description)
                setWinningHeroThumbnail(data.data.results[0].thumbnail)})

            return response} catch(error){
                return (error)
            }
        }

        getCharacterInfo(winningHero)

    }, [])

    return(

        <header className="App-header">

        <div className="results-container">

            <div className="thumbnail"><img  src = {`${winningHeroThumbnail.path}.${winningHeroThumbnail.extension}`} alt="image"></img></div>

            <div className="results">You are {winningHero}!</div>

            <div className="description">{winningHeroDescription || "This Hero does not have a descprtion!"}</div>

            <div className="reset">

                <Link exact to = '/'>
                
                <button name="reset">
                    TAKE THE QUIZ AGAIN?
                </button>
                
                </Link>
            </div>

        </div>

        </header>
    )
} 
export default Results