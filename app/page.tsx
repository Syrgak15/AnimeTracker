
import AnimeList from "@/components/MainPageComponents/AnimeList/AnimeList";
import Season from "@/components/MainPageComponents/Season/Season";

export default function Home() {

  return (
    <div className="homepage">
      <Season/>
      <AnimeList/>
    </div>
  );
}
