export const deleteFromFavorites = async (animeId: number, userEmail: string) => {
    try {
        const res = await fetch(`http://localhost:3001/favorites?animeId=${animeId}&email=${userEmail}`);
        const data = await res.json();

        if (data.length === 0) return; // ничего не найдено

        const favoriteId = data[0].id; // верхний id
        await fetch(`http://localhost:3001/favorites/${favoriteId}`, { method: "DELETE" });
    } catch(e:unknown) {
        console.log(e);
    }
}