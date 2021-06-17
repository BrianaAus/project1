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
        
        async function getCharacterThumbnail(winningHero){

            let id = getWinningID(winningHero)
            let ts = Date.now()
            let md5Hash = MD5(`${ts}c97d166646fd9693e047bb4db704549ef2c6982b57a9282eee09f642116d68d165ec7808`).toString()
            let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=57a9282eee09f642116d68d165ec7808&hash=${md5Hash}`
            
            let response = await fetch(url)
            .then(data => data.json())
            .then(data => setWinningHeroThumbnail(data.data.results[0].thumbnail))

            return response
        }

        async function getCharacterDescription(winningHero){

            let id = getWinningID(winningHero)
            let ts = Date.now()
            let md5Hash = MD5(`${ts}c97d166646fd9693e047bb4db704549ef2c6982b57a9282eee09f642116d68d165ec7808`).toString()
            let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=57a9282eee09f642116d68d165ec7808&hash=${md5Hash}`
            
            let response = await fetch(url)
            .then(data => data.json())
            .then(data => setWinningHeroDescription(data.data.results[0].description))

            return response
        }

        getCharacterThumbnail(winningHero)
        getCharacterDescription(winningHero)

    }, [])

    return(

        <header className="App-header">

            <img className="thumbnail" src = {`${winningHeroThumbnail.path}.${winningHeroThumbnail.extension}`} alt="image"></img>

            <div className="results"><p>You are {winningHero}!</p></div>

            <div className="description">{winningHeroDescription || "This Hero does not have a descprtion!"}</div>

            <Link exact to = '/'>
            
            <button name="reset">
                TAKE THE QUIZ AGAIN?
            </button>
            
            </Link>

        </header>
    )
} 
export default Results