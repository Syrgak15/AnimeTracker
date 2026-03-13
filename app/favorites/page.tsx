"use client"

import "./style.css"
import Skeleton from "@/components/MUI-components/Skeleton/Skeleton";
import { useSession } from 'next-auth/react';
import FavoritesListServer from "@/components/ProfileComponents/FavoritesList/FavoritesListServer";

export default function Favorites() {

    const { status} = useSession();

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
                    <FavoritesListServer/>
                </div>
            </div>
        </div>
    )
}