import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteFromFavorites} from "@/services/deleteFromFavorites";
import {useSession} from "next-auth/react";

interface Props {
    id: number,
    setAnimeList: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function DeleteFromFavorites({id, setAnimeList}: Props) {
    const {data: session} = useSession();
    const userEmail = String(session?.user?.email);
    console.log(id)

    const handleClick = async(e: any) => {
        e.preventDefault();

        const confirmDelete = window.confirm('Are you sure you want to remove this from favorites?');

        if (!confirmDelete) {
            return;
        }

       await deleteFromFavorites(id, userEmail);
       setAnimeList(prev => prev.filter(item => item.animeId !== id))
    }

    return (
        <>
            <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={(e) => handleClick(e)}>
                <DeleteOutlineIcon fontSize="medium"/>
            </div>
        </>
    )
}