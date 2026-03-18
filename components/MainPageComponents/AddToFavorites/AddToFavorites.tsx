"use client"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import { useSession } from 'next-auth/react';
import {AnimeListType} from "@/types/AnimeListType";
import "./style.css"
import {addToFavorites} from "@/services/addToFavorites";
import {deleteFromFavorites} from "@/services/deleteFromFavorites";
import {getFavorites} from "@/services/getFavorites";

interface AnimeListProps {
    anime: AnimeListType;
}

export default function AddToFavorites({anime}: AnimeListProps) {
    const [favorite, setFavorite] = useState<AnimeListType[]>([])
    const {data: session} = useSession();
    const userEmail = session?.user?.email;

    useEffect( () => {
        if(!userEmail) return;

        const getData = async () => {
            const res = await getFavorites(userEmail);
            setFavorite(res);
        }

        getData()
    }, [userEmail]);

    const isFavorite = favorite.some(item => item.animeId === anime.mal_id);

    const toggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!userEmail) return;

        if (isFavorite) {
            await deleteFromFavorites(anime.mal_id, userEmail);
            setFavorite(prev => prev.filter(item => item.animeId !== isFavorite.animeId));
        } else {
            await addToFavorites(anime, userEmail, anime.mal_id);
            setFavorite(prev => [...prev, { ...anime, email: userEmail, animeId: anime.mal_id }]);
        }
    };

    return (
        <>
            <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={toggleFavorite}>
                {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
        </>
    )
}