"use client"

import AnimeList from "@/components/MainPageComponents/AnimeList/AnimeList";
import Search from "@/components/MainPageComponents/Search/Search";
import Season from "@/components/MainPageComponents/Season/Season";
import {useState} from "react";

export default function Home() {

  const [searchResult, setSearchResult] = useState("");

  return (
    <div className="homepage">
      <Season/>
      <Search onSearch={setSearchResult}/>
      <AnimeList query={searchResult}/>
    </div>
  );
}
