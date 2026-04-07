import RecommendationsClientComponent from "@/components/MainPageComponents/Recommendations/RecommendationsClientComponent";

async function getRecommendations() {
    try {
        const req = await fetch(`https://api.jikan.moe/v4/seasons/now?page=3`, { next: { revalidate: 60 } })

        if(!req.ok) throw new Error("Failed to fetch recommendations data");

        const res = await req.json();
        return res.data.sort(() => Math.random() - 0.5).slice(0, 5);

    } catch(e: any) {
        console.error(e);
        return [];
    }
}

export default async function RecommendationsServerComponent() {

    const recommendations = await getRecommendations();

    return (
        <RecommendationsClientComponent recommendations={recommendations}/>
    )
}
