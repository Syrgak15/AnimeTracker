"use client"

import "./style.css"
import Skeleton from "@/components/MUI-components/Skeleton/Skeleton";
import { useSession } from 'next-auth/react';
import {useEffect, useState} from "react";
import {getFavorites} from "@/app/services/favorites/getFavorites";
import FavoritesList from "@/components/ProfileComponents/FavoritesList/FavoritesList";

export default function Favorites() {
    const {data: session, status} = useSession();
    const [favorites, setFavorites] = useState<any[]>([]);
    const userId = String(session?.user?.id);

    useEffect(() => {
        const getFavoriteAnimes = async() => {
            if(!session?.user?.id) return;

            const data = await getFavorites(userId);
            setFavorites(data);
        }

        getFavoriteAnimes();

    }, [session]);


    if (status === "loading") {
        return (
            <Skeleton/>
        )
    }

    if(status !== "authenticated") {
        return (
            <p>You are not authorized to view this page!</p>
        )
    }

    console.log(favorites);

    return (
        <div className="favorites">
            <div className="favorites-content">
                <div className="favorites__title">
                    <span>My Favorites List</span>
                </div>
                <div className="favorites__subtitle">
                    <p>All anime added to your favorites</p>
                </div>
                <div className="favorites__grid">
                    <FavoritesList anime={favorites}/>
                </div>
            </div>
        </div>
    )
}