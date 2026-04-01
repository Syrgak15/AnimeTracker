export const deleteFromFavorites = async (
    animeId: number,
    email: string
) => {
    try {
        const res = await fetch("/api/favorites", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ animeId, email }),
        });

        if (!res.ok) {
            throw new Error("Failed to delete favorite");
        }

        return await res.json();
    } catch (error) {
        console.error("Delete error:", error);
        throw error;
    }
};