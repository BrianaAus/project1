import React, {useState, useEffect, useContext} from "react"
import AppContext from "../Contexts/AppContext";


//let { playing, setPlaying } = useContext(AppContext)
// url = https://youtu.be/FOabQZHT4qY

const useAudio = url => {
    let { playing, setPlaying, audio, setAudio } = useContext(AppContext)
    
    //const [audio] = useState(new Audio(url));
    //const [playing, setPlaying] = useState(false);
    
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  
  const Player = ({ url }) => {
      /* url = `https://medea-music.com/wp-content/uploads/2018/05/The-Avengers-Theme-Song.mp3?_=2` */
    const [playing, toggle] = useAudio(url);
  
    return (
      <div className="musicPlayer">
        <button onClick={toggle}>{playing ? "⏸️ Pause Music  " : "▶️ Play Music  "}</button>
      </div>
    );
  };
  
  export default Player;