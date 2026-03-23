"use client";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from "@/components/MUI-components/Modal/Modal";
import {useEffect, useState} from "react";
import {useSession} from 'next-auth/react';
import {AnimeListType} from "@/types/AnimeListType";
import {addToFavorites} from "@/services/addToFavorites";
import {deleteFromFavorites} from "@/services/deleteFromFavorites";
import {getFavorites} from "@/services/getFavorites";
import "./style.css";
import * as React from "react";
import {FavoriteAnimeList} from "@/types/FavoriteAnimeList";

interface AnimeListProps {
    anime: AnimeListType;
}

export default function AddToFavButton({anime}: AnimeListProps) {
    const [favorites, setFavorites] = useState<FavoriteAnimeList[]>([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {data: session} = useSession();
    const userEmail = session?.user?.email;

    useEffect(() => {
        if (!userEmail) return;

        const fetchFavorites = async () => {
            const res = await getFavorites(userEmail);
            setFavorites(res);
        };

        fetchFavorites();
    }, [userEmail]);

    const isFavorite = favorites.some(
        item => item.animeId === anime.mal_id
    );

    const toggleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!userEmail) {
            handleOpen();
            return;
        }

        if (isFavorite) {
            await deleteFromFavorites(anime.mal_id, userEmail);
            setFavorites(prev =>
                prev.filter(item => item.animeId !== anime.mal_id)
            );
        } else {
            const newFavorite = await addToFavorites(anime, userEmail, anime.mal_id);
            setFavorites(prev => [...prev, newFavorite]);
        }
    };

    return (
        <>
            <div className="fav-button" onClick={toggleClick}>
                <div className="fav-content">
                    <div className="fav-content__icon">
                        {isFavorite ? (
                            <FavoriteIcon sx={{color: "rgb(161 247 5 / 96%)"}} fontSize="small"/>
                        ) : (
                            <FavoriteBorderIcon sx={{color: "rgb(161 247 5 / 96%)"}} fontSize="small"/>
                        )}
                    </div>
                    <div className="fav-content__text">
                      <span>
                        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                      </span>
                    </div>
                </div>
            </div>
            <Modal open={open} handleClose={handleClose}/>
        </>
    );
}