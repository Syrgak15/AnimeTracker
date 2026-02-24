import Grid from "@/components/MUI-components/Grid/Grid";
import "./style.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function AnimeList() {
    return (
        <div className="anime-list">
            <div className="anime-list__title">
                <WhatshotIcon className="anime-list__title-icon" />
                Title
            </div>
            <div className="anime-grid">
                <Grid/>
            </div>
        </div>
    )
}