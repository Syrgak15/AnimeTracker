"use client"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSession } from 'next-auth/react';
import {AnimeListType} from "@/types/AnimeListType";
import "./style.css"
import {addToFavorites} from "@/services/addToFavorites";
import {deleteFromFavorites} from "@/services/deleteFromFavorites";
import * as React from "react";
import Modal from "@/components/MUI-components/Modal/Modal";
import {FavoriteAnimeList} from "@/types/FavoriteAnimeList";
import {useEffect} from "react";
import {getFavorites} from "@/services/getFavorites";

interface AnimeListProps {
    anime: AnimeListType;
    favorites: FavoriteAnimeList[];
    isInFav?: boolean;
}

export default function AddToFavorites({anime, favorites, isInFav}: AnimeListProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isFav, setIsFav] = React.useState(isInFav)
    const {data: session} = useSession();
    const userEmail = session?.user?.email;


    const toggleFavorite = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!userEmail) {
            handleOpen();
            return;
        }

        try {
            if (isFav) {
                await deleteFromFavorites(anime.mal_id, userEmail);
                setIsFav(false);
            } else {
                await addToFavorites(anime, userEmail, anime.mal_id);
                setIsFav(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={toggleFavorite}>
                {isFav ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
            <Modal open={open} handleClose={handleClose}/>
        </>
    )
}