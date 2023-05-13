import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/action";
import styles from "./UserCard.module.css";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import SideBar from "./SideBar";
import Page from "./Page";

const UserCard = () => {
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.UserReducer.users);
  const dispatch = useDispatch();
  console.log(user);

  const ref = useRef(null);
  const [hiddenDiv, setHiddenDiv] = useState(false);
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initQuery = searchParams.get("q");



  const debounce = (fn, timeout) => {
    let timerid;
    return () => {
      clearTimeout(timerid);
      timerid = setTimeout(() => {
        fn();
      }, timeout);
    };
  };
  const handleinput = debounce(() => {
    const val = ref.current.value;
    console.log(" event val check in debounce ", val);
    setHiddenDiv(true);
    setSearchVal(val);
  }, 500);

  window.addEventListener("click", (e) => {
    console.log(e.target.id, " check window ");
    if (e.target.id !== "inputBox") {
      setHiddenDiv(false);
    }
  });

  useEffect(() => {
    if (user.length === 0 || location || initQuery) {
      const gender = searchParams.getAll("gender");
      const domain = searchParams.getAll("domain");
      const available = searchParams.getAll("available");
      const q = searchParams.get("q");
      const limit = 20;
      const getUsersParams = {
        params: {
          gender,
          domain,
          available,
          _limit: limit,
          _page: page,
        },
      };

      dispatch(getAllUsers(getUsersParams));
      console.log(page);
    }
  }, [dispatch, location.search, searchParams, initQuery, page]);

  //Add team

  // let teamArray = JSON.parse(localStorage.getItem("team")) || [];
  const [team, setTeam] = useState([]);
  let teamArray = localStorage.getItem("team");
  useEffect(() => {
    if (teamArray) {
      setTeam(JSON.parse(teamArray));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  function checkID(alreadyID) {
    for (let i = 0; i < team.length; i++) {
      if (team[i].id == alreadyID) {
        return false;
      } else {
        return true;
      }
    }
  }

  function returnDomain(checkDomain) {
    if (team[0].domain == checkDomain) {
      return true;
    }
    return false;
  }

  console.log(checkID(2));

  const handleAddTeam = (index) => {
    if (index.available == true) {
      if (team.length === 0) {
        setTeam([...team, index]);
        alert("Added Sucessfully.");
      } else {
        if (returnDomain(index.domain)) {
          setTeam([...team, index]);
          alert("Added Sucessfully.");
        } else {
          alert("Domain not matched");
        }
      }
    } else {
      alert("User is not availbale");
    }
  };

  return (
    <div>
      <div className={styles.filterandCards}>
        <div>
          <SideBar />
        </div>

        <div className={styles.userCard}>
          {user.length > 0 &&
            user.map((el) => (
              <div key={el.id} className={styles.container}>
                <img src={el.avatar} alt={el.first_name} />
                <h3>Name: {el.first_name + " " + el.last_name}</h3>
                <p>Email: {el.email}</p>
                <p>Gender: {el.gender}</p>
                <p>Domain: {el.domain}</p>
                <p>Availability: {el.available ? "Available" : "Not-Available"}</p>
                <button
                  className={styles.addTeam}
                  onClick={() => handleAddTeam(el)}
                >
                  Add to Team
                </button>
              </div>
            ))}


        </div>

      </div>
      <Page
        total={user?.length}
        current={page}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default UserCard;
