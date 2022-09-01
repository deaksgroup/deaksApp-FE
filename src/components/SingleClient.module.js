import React, { useContext, useState, useEffect } from "react";
import NewGroupForm from "./NewGroupForm";
import styles from "./styles/SingleClient.module.css";
import ViewContext from "../appView-context";
import NewHotelFrom from "./NewHotelForm";
import EditHotel from "./EditHotel.js";
import { useNavigate } from "react-router-dom";

const SingleClient = (props) => {
  // const navigate = useNavigate();
  // const navigateHandler = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/newHotelForm');
  // };

  const view = useContext(ViewContext);
  const [loadedOutlets, setLoadedOutlets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5002/adminoutletList/${props.hotel._id}`,
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
        //console.log(data, "......");
        setLoadedOutlets(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  const editHotel = () => {
    view.handleContent({ hotel: "hotel", key: "edit" });
  };
  const deleteHotel = async (e) => {
    const response = await fetch(
      `http://localhost:5002/hotelList/${e.target.value}`,
      {
        method: "DELETE",

        headers: {
          // 'Content-Type': 'multipart/form-data',
          secret_token: localStorage.getItem("JWtToken"),
        },
      }
    );
    const ResponseData = await response;
    await props.fetchClients();
  };
  const editOutlet = (e) => {
    // view.handleContent({ key: "edit" ,id:e.target.value});
    var selected = loadedOutlets.filter(
      (outlet) => outlet._id == e.target.value
    );
    props.editOutlet({ outlet: selected[0] });
    view.handleAppView("edit-outlet-form");
  };
  const fetchGroups = () => {
    props.fetchGroups();
  };
  const deleteOutlet = async (e) => {
    const response = await fetch(
      `http://localhost:5002/adminoutletList/${e.target.value}`,
      {
        method: "DELETE",

        headers: {
          // 'Content-Type': 'multipart/form-data',
          secret_token: localStorage.getItem("JWtToken"),
        },
      }
    );
    const ResponseData = await response;
  };
  return (
    <React.Fragment>
      <div className={`shadow-sm mt-1`}>
        <div className="row my-2 px-4  align-items-center">
          <div className="col-4">
            <h6>{props.hotel.hotelName}</h6>
          </div>
          <div className="col-4">
            <h6>{props.hotel.SOAMail}</h6>
          </div>
          <div className="col-4 d-flex align-items-center ">
            <EditHotel key={props.hotel._id} hotel={props.hotel}></EditHotel>
            {/* <button onClick={navigateHandler} className="btn btn-sm btn-danger ml-2">Delete</button> */}
            <button
              className="btn btn-sm btn-danger ml-2"
              onClick={deleteHotel}
              value={props.hotel._id}
            >
              Delete
            </button>
            <i
              className={`bi bi-caret-down-square-fill p-auto ml-2 ${styles.icon}`}
            ></i>
          </div>
        </div>
        <div>
          <div className="row align-content-center">
            <div className={`col ${styles.outletList}`}>
              <h5 className="my-2 p-0">OUTLETS</h5>
            </div>
          </div>

          {loadedOutlets.map((outlet) => {
            return (
              <div key={outlet._id} className={styles.outlet}>
                {" "}
                <div className={`row align-content-center shadow-sm`}>
                  {" "}
                  <div className="col d-flex align-items-center">
                    <h6 className="p-3 ">{outlet.outletName}</h6>
                    <button
                      className={`btn btn-sm btn-danger ml-auto`}
                      value={outlet._id}
                      onClick={editOutlet}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger ml-2"
                      onClick={deleteOutlet}
                      value={outlet._id}
                    >
                      Delete
                    </button>
                    <NewGroupForm
                      outlet={{ outlet: outlet, action: "edit" }}
                      fetchGroups={fetchGroups}
                    ></NewGroupForm>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleClient;
