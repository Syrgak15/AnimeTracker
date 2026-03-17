export const getFavorites = async (email: string) => {
    const res = await fetch(`http://localhost:3001/favorites?email=${email}`)
    return res.json();
}