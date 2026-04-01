export const getFavorites = async (email: string) => {
    const res = await fetch(`api/favorites?email=${email}`);
    if (!res.ok) throw new Error("Failed to get favorites");
    return res.json();
};
