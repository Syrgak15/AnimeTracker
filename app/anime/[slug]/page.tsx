import AnimePageClient from "@/app/anime/[slug]/AnimePageClient";

async function getAnimeDetails(slug: string) {
    try {
        const [reqAnime, reqVideo, reqCharacters] = await Promise.all([
            fetch(`https://api.jikan.moe/v4/anime/${slug}`, { next: { revalidate: 60 } }),
            fetch(`https://api.jikan.moe/v4/anime/${slug}/videos`, { next: { revalidate: 60 } }),
            fetch(`https://api.jikan.moe/v4/anime/${slug}/characters`, { next: { revalidate: 60 } }),
        ]);

        if (!reqAnime.ok || !reqVideo.ok || !reqCharacters.ok) {
            throw new Error("Failed to fetch anime data");
        }

        const [resAnime, resVideo, resCharacters] = await Promise.all([
            reqAnime.json(),
            reqVideo.json(),
            reqCharacters.json(),
        ]);

        return {
            anime: resAnime.data,
            video: resVideo.data,
            characters: resCharacters.data,
        };

    } catch (e) {
        console.error(e);

        return {
            anime: null,
            video: [],
            characters: [],
            recommendations: []
        };
    }
}

export default async function AnimeDetailsPage({
                                                   params
                                               }: {
    params: { slug: string }
}) {
    const { slug } = await params;

    const data = await getAnimeDetails(slug);

    return (
        <AnimePageClient
            anime={data.anime}
            videoUrl={data.video}
            characters={data.characters}
        />
    );
}