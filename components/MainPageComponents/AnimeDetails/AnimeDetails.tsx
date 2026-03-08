import {AnimeListType} from "@/types/AnimeListType";
import "./style.css"
import GradeIcon from "@mui/icons-material/Grade";
import Box from "@mui/material/Box";
import AnimeVideoType from "@/types/AnimeVideoType";

interface AnimeListProps {
    anime: AnimeListType;
    video: AnimeVideoType | null;
}


export default function Details({anime, video}: AnimeListProps) {
    if(!video) return null;

    const videoUrl = video.promo[0]?.trailer?.embed_url || null;
    const videoTitle = video.promo[0]?.title;

    return (
        <div className="anime-details">
            <div className="anime-details__content">
                <div className="anime-details__image">
                    <div className="anime-details__image-wrapper">
                        <img src={anime.images.jpg.large_image_url} alt={anime.title}/>
                    </div>
                </div>
                <div className="anime-details__info">
                    <div className="anime-details__title">
                        <h1>{anime.title}</h1>
                    </div>

                    <div className="anime-details__genres">
                        {anime.genres.map((genre) => (
                            <span key={genre.name} className="anime-details__genre">
                            {genre.name}
                        </span>
                        ))}
                    </div>

                    <div className="anime-details__meta">
                        <div className="anime-details__meta-score">
                            <Box>
                                <GradeIcon fontSize="small"/>
                            </Box>
                            <span>{anime.score}</span>
                        </div>
                        <div className="anime-details__meta-year">
                            <span>{anime.aired.prop.from.year} Year</span>
                        </div>
                        <div className="anime-details__meta-episodes">
                            <span>{anime.episodes} Episodes</span>
                        </div>
                    </div>

                    <div className="anime-details__statuses">
                        <div className="anime-details__status">
                            <span>{anime.status}</span>
                        </div>
                        <div className="anime-details__type">
                            <span>{anime.type}</span>
                        </div>
                        <div className="anime-details__source">
                            <span>{anime.source}</span>
                        </div>
                    </div>

                    <div className="anime-details__synopsis">
                        <p>{anime.synopsis}</p>
                    </div>

                </div>
            </div>
            <div className="anime-details__trailer">
                <div className="anime-details__trailer-wrapper">
                    <iframe
                            src={videoUrl}
                            title={videoTitle}
                            allowFullScreen
                            className="anime-details__trailer-video"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}