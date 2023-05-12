import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCard from "./UserCard";
import { SearchResult } from "./SearchResult";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/searchResult/:id" element={<SearchResult />} />
      </Routes>
    </div>
  );
};
