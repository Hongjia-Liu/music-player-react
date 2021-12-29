import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {

    const audioRef = useRef(null);

    const playSongHandler = () => {
        audioRef.current[isPlaying ? "pause" : "play"]();
        setIsPlaying(!isPlaying);
    }

    const timeUpdateHandler = (e) => {
        setSongInfo({...songInfo, currentTime: e.target.currentTime, duration: e.target.duration})
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value })
    }

    const autoPlayHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        }
    }

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    return ( 
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio onLoadedData={autoPlayHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div> 
     );
}
 
export default Player;