import {AnimeListType} from "@/types/AnimeListType";
import "./style.css"

interface AnimeListProps {
    anime: AnimeListType;
}


export default function Details({anime} : AnimeListProps) {

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

                </div>
            </div>
        </div>
    )
}