"use client"

import "./style.css"
import {AnimeListType} from "@/types/AnimeListType";
import GridRecommendations from "@/components/MUI-components/GridRecommendations/GridRecommendations";

export default function RecommendationsClientComponent({recommendations}: {recommendations: AnimeListType[]}) {
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