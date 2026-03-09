"use client"

import "./style.css"
import {useEffect, useState} from "react";
import {AnimeListType} from "@/types/AnimeListType";
import GridRecommendations from "@/components/MUI-components/GridRecommendations/GridRecommendations";

export default function Recommendations() {

    const [recommendations, setRecommendations] = useState<AnimeListType[]>([]);

    useEffect(() => {
        async function fetchRecommendations() {
            try {
                const req = await fetch("https://api.jikan.moe/v4/seasons/now?page=3");
                if (!req.ok) {
                    throw new Error("Failed to fetch recommendations");
                }
                const res = await req.json();
                setRecommendations(
                    [...res.data]
                        .sort(() => Math.random() - 0.5)
                        .slice(0,5)
                    );

            } catch (e: unknown) {
                console.log(e);
                return [];
            }
        }
        fetchRecommendations();
    }, []);


    return (
        <div className="recommendations">
            <div className="recommendations-title">
                <span>Recommended</span>
            </div>

            <div className="recommendations-list">
                <GridRecommendations recommendations={recommendations}/>
            </div>
        </div>
    )
}