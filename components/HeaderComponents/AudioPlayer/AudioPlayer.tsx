"use client"

import "./style.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import {useEffect, useRef, useState} from "react";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audio.current = new Audio("track.mp3");
        audio.current.play();
    }, []);

    const togglePlayer = () => {
        if(isPlaying) {
            audio?.current?.play();
        } else {
            audio?.current?.pause();
        }
        setIsPlaying(prev => !prev);
    }

    return (
        <div className="audio-player">
            <button
                onClick={togglePlayer}
                className="audio-icon"
            >
                {!isPlaying
                    ?
                    <MusicNoteIcon className="music-note-icon"/>
                    :
                    <MusicOffIcon className="music-off-icon"/>
                }
            </button>
        </div>
    )
}