import AnimeList from "@/components/MainPageComponents/AnimeList/AnimeList";
import Search from "@/components/MainPageComponents/Search/Search";
import Season from "@/components/MainPageComponents/Season/Season";

export default function Home() {
  return (
    <div className="homepage">
      <Season/>
      <Search/>
      <AnimeList/>
    </div>
  );
}
