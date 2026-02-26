import Grid from "@/components/MUI-components/Grid/Grid";
import "./style.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {useEffect, useState} from "react";
import {AnimeListType} from "@/types/AnimeListType";

export default  function AnimeList({query} : {query: string}) {

    const [animeLists, setAnimeLists] = useState([]);
    const [initialAnimeLists, setInitialAnimeLists] = useState([]);

    useEffect(() => {
       async function fetchData() {
           try {
               const response = await fetch("https://api.jikan.moe/v4/top/anime");
               if(!response.ok) throw new Error("Failed to fetch anime lists");

               const result = await response.json();
               setAnimeLists(result.data);
               setInitialAnimeLists(result.data);
           } catch(e: unknown) {
               console.log(e)
           }
       }
       fetchData();
    }, [])

    useEffect(() => {
        if(!query) {
            setInitialAnimeLists(animeLists);
            return;
        }
        setInitialAnimeLists(animeLists.filter((anime: AnimeListType) => anime.title.toLowerCase().includes(query.toLowerCase())));

    }, [query, animeLists]);
    return (
        <div className="anime-list">
            <div className="anime-list__title">
                <WhatshotIcon className="anime-list__title-icon" />
                Title
            </div>
            <div className="anime-grid">
                <Grid animeLists={initialAnimeLists}/>
            </div>
        </div>
    )
}