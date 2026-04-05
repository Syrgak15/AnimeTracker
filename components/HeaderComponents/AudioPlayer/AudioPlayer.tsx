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

        const wasPlaying = localStorage.getItem("isPlayingLocalStorage");

        if (wasPlaying === "true") {
            audio.current.play();
        }
    }, []);

    const togglePlayer = () => {
        if(isPlaying) {
            audio?.current?.play();
            localStorage.setItem("isPlayingLocalStorage", "true");
        } else {
            audio?.current?.pause();
            localStorage.setItem("isPlayingLocalStorage", "false");
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