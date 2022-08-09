import React, { useContext, useState, useEffect } from "react";
import styles from "./styles/Slots.module.css";
import "./styles/generalStyle.css";

import SlotStack from "./SlotStack";

import ViewContext from "../appView-context";
const Slots = () => {
  const view = useContext(ViewContext);

  const createNewSlot = () => {
    view.handleAppView("new-slot-form");
  };
  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`${styles.panel} p-3 shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto">
                <h2 className="d-inline">Slots</h2>
              </div>
              <div className="col-auto">
                <div>
                  <button
                    className="btn btn-sm btn-danger ml-auto"
                    onClick={createNewSlot}
                    style={{
                      borderRadius: "20px",
                      height: "50px",
                      padding: "0px 20px"
                    }}
                  >
                    + New Slot
                  </button>
                </div>
              </div>
            </div>

            <hr></hr>
          </header>
          <div>
            <div className={`row justify-content-between align-items-center`}>
              <div className="col-auto px-0">
                <div className="row align-items-center mx-0">
                  <h5 className="col">Active Slots</h5>
                  <h3>2</h3>
                </div>
              </div>
              <div className="col-auto">
                <input className="form-control" placeholder="search"></input>
              </div>
            </div>
            <hr></hr>
            <SlotStack></SlotStack>
          </div>
          {/* <header>
          <div
            className={`row justify-content-around align-items-center ${styles.header}`}
          >
            <div className="col-auto">Slot Number</div>
            <div className="col-auto">Hotel</div>
            <div className="col-auto">Submissions</div>
            <div className="col-auto">Status</div>
            <div className="col-auto">Action</div>
          </div>
        </header> */}
        </div>
        {/* <Console></Console>
        <SlotStatus></SlotStatus>
        <NewHotelFrom></NewHotelFrom>
        <NewOutletForm></NewOutletForm>
        <NewSlotForm></NewSlotForm>
        <Client></Client>
        <Notifications></Notifications>
        <NewCustomNotificationForm></NewCustomNotificationForm>
        <UserGroups></UserGroups>
        <NewGroupForm></NewGroupForm>
        <Users></Users>
        <UserDetails></UserDetails>  */}
      </div>
    </React.Fragment>
  );
};
export default Slots;
