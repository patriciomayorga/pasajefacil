import React from "react";

import { Header } from "../components/Header/Header";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ListOfPlaceCards } from "../components/ListOfPlaceCards/ListOfPlaceCards";

export function Home() {
  return (
    <div>
      <Header />
      <SearchBox />
      <ListOfPlaceCards />
      <div className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>hfghfghfgh practicando sdf sdfreact.</p>
      </div>
    </div>
  );
}
