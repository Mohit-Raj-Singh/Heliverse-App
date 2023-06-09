import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserCard.module.css"
import SideBar from "./SideBar";

export const SearchResult = () => {
  const { id } = useParams();
  const [viewData, setViewData] = useState([]);

  const showData = async () => {
    try {
      const res = await fetch(`https://mock4-server-uoq7.onrender.com/users?id=${id}`);
      const res2 = await res.json();
      console.log(res2);
      setViewData([...res2]);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    showData();
  }, [id]);

  return (
    <div className={styles.filterandCards}>
    <SideBar />
    <div>
      {viewData.map((el) => (
        <div key={el.id} className={styles.container}>
          <img src={el.avatar} alt={el.first_name} />
          <h3>Name: {el.first_name + " " + el.last_name}</h3>
          <p>Email: {el.email}</p>
          <p>Gender: {el.gender}</p>
          <p>Domain: {el.domain}</p>
          <p>{el.available}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
