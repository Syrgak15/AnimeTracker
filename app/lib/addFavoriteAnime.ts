import { AnimeListType } from "@/types/AnimeListType";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

/* doc() - Создает ссылку на документ в базе. То есть мы говорим Firebase: "Вот документ, с которым я хочу работать"
   setDoc() - Это функция которая записывает данные в Firestore.
   getFirestore -Это подключение к Firestore, созданное в lib/firebase.ts.
 */

export const addFavoriteAnime = async (userId: string, anime: AnimeListType) => {
    const ref = doc(db, "users", userId, "favorites", String(anime.mal_id));

    await setDoc(ref, {
        title: anime.title,
        score: anime.score,
        episodes: anime.episodes,
        type: anime.type,
        status: anime.status,
        source: anime.source,
        images: anime.images.jpg.large_image_url,
        aired: anime.aired.prop.from.year,
    })
};