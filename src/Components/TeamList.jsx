import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";
import SideBar from "./SideBar";

export const TeamList = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const teamFromLS = localStorage.getItem("team");

    if (teamFromLS) {
      const dataFromLS = JSON.parse(teamFromLS);
      setTeamData(dataFromLS);
    }
  }, []);

  return (
    <>
      <div className={styles.filterandCards}>
        <SideBar />
        <div className={styles.userCard}>
          {teamData.map((el) => (
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
    </>
  );
};
