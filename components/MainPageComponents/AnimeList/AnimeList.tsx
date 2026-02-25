import Grid from "@/components/MUI-components/Grid/Grid";
import "./style.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';

async function getAnimeLists() {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    if(!response.ok) throw new Error("Failed to fetch anime lists");

    const result = await response.json();
    return result.data;
}


export default async function AnimeList() {

    const animeLists = await getAnimeLists();

    return (
        <div className="anime-list">
            <div className="anime-list__title">
                <WhatshotIcon className="anime-list__title-icon" />
                Title
            </div>
            <div className="anime-grid">
                <Grid animeLists={animeLists}/>
            </div>
        </div>
    )
}