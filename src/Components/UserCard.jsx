import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/action";
import Pagination from "./Pagination";
import styles from "./UserCard.module.css";

const UserCard = () => {
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(user);

  const [pageFilter, setPageFilter] = useState({
    pageNumber:1,
    limit:10,
    totalPages:0,
   })
   const {pageNumber, limit}= pageFilter;

  useEffect(() => {
    getAllUsers(dispatch);
  }, []);


  return (
    <>
    <h2>Users List</h2>
    <input type="text" />
    <button>Search</button>
    <select name="" id="">
        <option value="all">All</option>
        <option value="domain">Domain</option>
        <option value="gender">Gender</option>
        <option value="Availability">Availability</option>
    </select>
    <div className={styles.userCard}>
      

      {user.length > 0 &&
        user.map((el) => (
          <div key={el.id} className={styles.container}>
            
            <img src={el.avatar} alt={el.first_name} />
            <h3>{el.first_name + " " + el.last_name}</h3>
            <p>{el.email}</p>
            <p>{el.gender}</p>
            
            <p>{el.domain}</p>
            <p>{el.available}</p>
            </div>
        
        ))}

      <Pagination
        total={user?.length}
        current={page}
        onChange={(page) => setPage(page)}
      />
    </div>
    </>
  );
};

export default UserCard;
