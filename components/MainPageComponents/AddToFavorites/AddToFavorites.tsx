"use client"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import "./style.css"

export default function AddToFavorites() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setIsClicked(prev => !prev);
    }

    return (
        <>
            <div onClick={handleClick} style={{display: 'inline-block', cursor: 'pointer'}}>
                {!isClicked ? <FavoriteBorderIcon/> : <FavoriteIcon/>}
            </div>
        </>
    )
}