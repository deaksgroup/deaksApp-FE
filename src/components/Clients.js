import React, { useContext, useState, useEffect } from "react";
import ClientStack from "./ClientStack";
import NewHotelFrom from "./NewHotelForm";
import styles from "./styles/Client.module.css";

import ViewContext from "../appView-context";

import "./styles/generalStyle.css";

const Client = (props) => {
  const view = useContext(ViewContext);
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://deaksappbe.herokuapp.com/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            secret_token: localStorage.getItem("JWtToken"),
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        //console.log(data, "......");
        setUsers(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  const createNewOutlet = () => {
    view.handleAppView("new-outlet-form");
  };
  const editOutlet = (outlet) => {
    props.editOutlet(outlet);
  };
  const fetchGroups = () => {
    props.fetchGroups();
  };
  const fetchClients = () => {
    setRefresh("now");
  };
  return (
    <React.Fragment>
      <div className="general-margin mt-5">
        <div className={`${styles.panel} p-3 shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto">
                <h2>All Clients</h2>
              </div>
              <div className="col-auto d-flex justify-content-start align-items-center">
                <NewHotelFrom
                  edit={null}
                  fetchClients={fetchClients}
                ></NewHotelFrom>
                <button
                  className="btn btn-sm btn-danger ml-2"
                  onClick={createNewOutlet}
                  style={{
                    borderRadius: "20px",
                    height: "50px",
                    padding: "0px 20px",
                  }}
                >
                  + New Outlet
                </button>
              </div>
            </div>

            <hr></hr>
            <footer>
              <div
                className={`row align-items-center px-4 ${styles.headingbar}`}
              >
                <div className="col-4">
                  <h6>Hotel Name</h6>
                </div>
                <div className="col-4">
                  <h6>SOA Mail</h6>
                </div>
                <div className="col-4">
                  <h6>Action</h6>
                </div>
              </div>
            </footer>
          </header>
          <ClientStack
            refresh={refresh}
            editOutlet={editOutlet}
            fetchGroups={fetchGroups}
          ></ClientStack>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Client;
