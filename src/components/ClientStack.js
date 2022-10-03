import React, { useState, useEffect } from "react";
import styles from "./styles/ClientStack.module.css";
import SingleClient from "./SingleClient.module";

const ClientStack = (props) => {
  const [loadedClients, setLoadedClients] = useState([]);
  const [refresh, setRefresh] = useState("");
  useEffect(() => {
    setRefresh(props.refresh);
  }, [props.refresh]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/hotelList",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              secret_token: localStorage.getItem("JWtToken"),
            },
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        // console.log(data, "......");
        setLoadedClients(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, [refresh]);
  //console.log(loadedClients);
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
      <div className="mt-4">
        {loadedClients.map((hotel) => {
          return (
            <SingleClient
              key={hotel._id}
              hotel={hotel}
              editOutlet={editOutlet}
              fetchGroups={fetchGroups}
              fetchClients={fetchClients}
            ></SingleClient>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default ClientStack;
