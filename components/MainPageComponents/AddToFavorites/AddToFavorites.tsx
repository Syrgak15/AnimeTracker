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
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<AnimeListType[]>([])
    const {data: session} = useSession();
    const userEmail =  String(session?.user?.email);

    useEffect( () => {
        if(!userEmail || !anime) return;

        const getData = async () => {
            const res = await getFavorites(userEmail);
            setFavorite(res);
            const existingAnime = favorite.some(item => item.mal_id === anime.mal_id);
            setIsClicked(existingAnime);
        }
        getData()
    }, [userEmail, anime?.mal_id]);



    const toggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!userEmail) return;

        const existingAnime = favorite.find(item => item.mal_id === anime.mal_id);

        if (existingAnime) {
            await deleteFromFavorites(anime.mal_id, userEmail);
            setFavorite(prev => prev.filter(item => item.id !== existingAnime.id));
            setIsClicked(false);

        } else {
            await addToFavorites(anime, userEmail, anime.mal_id);
            setFavorite(prev => [...prev, { ...anime, email: userEmail, animeId: anime.mal_id }]);
            setIsClicked(true);
        }
    };

    return (
        <>
            <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={toggleFavorite}>
                {isClicked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
        </>
    )
}