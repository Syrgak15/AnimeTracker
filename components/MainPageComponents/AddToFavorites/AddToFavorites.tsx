"use client"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import { useSession } from 'next-auth/react';
import { addFavoriteAnime } from "../../../app/lib/addFavoriteAnime";
import {AnimeListType} from "@/types/AnimeListType";
import "./style.css"

interface AnimeListProps {
    anime: AnimeListType;
}

export default function AddToFavorites({anime}: AnimeListProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const {data: session} = useSession();
    const userId = String(session?.user?.id);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setIsClicked(prev => !prev);
        await addFavoriteAnime(userId, anime);
    }

    return (
        <>
            <div onClick={handleClick} style={{display: 'inline-block', cursor: 'pointer'}}>
                {!isClicked ? <FavoriteBorderIcon/> : <FavoriteIcon/>}
            </div>
        </>
    )
}