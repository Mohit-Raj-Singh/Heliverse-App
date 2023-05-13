import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCard from "./UserCard";
import { SearchResult } from "./SearchResult";
import { TeamList } from "./TeamList";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/searchResult/:id" element={<SearchResult />} />
        <Route path="/teamlist" element={<TeamList />} />
      </Routes>
    </div>
  );
};
