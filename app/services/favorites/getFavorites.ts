import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export const getFavorites = async (userId: string) => {
    const ref = collection(db, "users", userId, "favorites");

    const snapshot = await getDocs(ref);

    const favoriteAnimes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return favoriteAnimes;
}
