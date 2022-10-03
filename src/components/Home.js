import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Slots from "./Slots";
import styles from "./styles/Home.module.css";
import ViewContext from "../appView-context";
import NewSlotForm from "./NewSlotForm";
import Console from "./Console";
import Clients from "./Clients";
import Users from "./Users";
import NewOutletForm from "./NewOutletForm";
import UserDetails from "./UserDetails";
import Notifications from "./Notifications";
import LoginForm from "../login";
import VeryfyUserDetails from "./veryfyUserDetails";
import EditOutletForm from "./editOutletForm";
import { Routes, useNavigate } from "react-router-dom";

const Home = () => {
  const view = useContext(ViewContext);
  const [userEdit, setUserEdit] = useState({});
  const [outletEdit, setOutletEdit] = useState({});
  const [formId, setFromId] = useState({});
  const navigate = useNavigate();

  const editUser = (userId) => {
    setUserEdit(userId);
  };
  const editOutlet = (outlet) => {
    setOutletEdit(outlet);
  };
  const verifyUser = (formId) => {
    setFromId(formId);
  };
  const fetchGroups = () => {};
  useEffect(() => {
    view.handleAppView("users");
    view.handleContent(null);
  }, []);
  const setUsersView = () => {
    view.handleAppView("users");
    view.handleContent(null);
  };
  const setConsoleView = () => {
    view.handleAppView("console");
    view.handleContent(null);
  };
  const setClientsView = () => {
    view.handleAppView("clients");
    view.handleContent(null);
  };
  const setSlotsView = () => {
    view.handleAppView("slots");
    view.handleContent(null);
  };
  const setNotificationsView = () => {
    view.handleAppView("notifications");
    view.handleContent(null);
  };
  const logout = () => {
    localStorage.removeItem("JWtToken");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          DeaksApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {/* <a className="nav-link" href="#">
              Home
            </a>

            <a className="nav-link" href="#">
              Settings
            </a> */}
            {/* <a className="nav-link" href="#" onClick={setNotificationsView}>
              <div className={`d-flex ${styles.notofication}`}>
                <p className="m-0 p-0 ">Notifications</p>
                <div
                  className={`d-flex justifiy-content-center align-items-center `}
                >
                  <p className={`${styles.notificationNumber}`}>1</p>
                </div>
              </div>
            </a> */}
            <a className="nav-link ml-3" href="#" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </nav>

      <nav className={`shadow ${styles.side_nav}`}>
        <ul className={styles.nav_menu}>
          {/* <li
            className={`${styles.nav_item} nav-item ${styles.align_center} px-0 active`}
          >
            <a href="#" onClick={setConsoleView}>
              <span className="menu-text ">
                <i className="fas fa-home fa-lg "></i>
                <div>
                  <p>Console</p>
                </div>
              </span>
            </a>
          </li> */}
          <li
            className={`${styles.nav_item} nav-item ${styles.align_center} px-0 `}
          >
            <a href="#" defaultValue="users" onClick={setUsersView}>
              <span className="menu-text ">
                <i className="fas fa-home fa-lg "></i>
                <div>
                  <p>Users</p>
                </div>
              </span>
            </a>
          </li>
          <li
            className={`${styles.nav_item} nav-item ${styles.align_center} px-0`}
          >
            <a href=" #" onClick={setClientsView}>
              {" "}
              <span className={styles.menu_text}>
                <i className="fas fa-bars fa-lg"></i>
                <div>
                  <p>Clients</p>
                </div>
              </span>
            </a>
          </li>
          <li
            className={`${styles.nav_item} nav-item ${styles.align_center} px-0`}
          >
            <a href="#" onClick={setSlotsView}>
              <span className={styles.menu_text}>
                <i className="fas fa-sitemap fa-lg"></i>
                <div>
                  <p>Slots</p>
                </div>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {/* {view.viewState === "console" && <Console></Console>} */}
      {view.viewState === "slots" && <Slots></Slots>}
      {view.viewState === "edit-slot" && <NewSlotForm></NewSlotForm>}
      {view.viewState === "new-slot-form" && <NewSlotForm></NewSlotForm>}
      {view.viewState === "clients" && (
        <Clients editOutlet={editOutlet} fetchGroups={fetchGroups}></Clients>
      )}
      {view.viewState === "new-outlet-form" && <NewOutletForm></NewOutletForm>}
      {view.viewState === "edit-outlet-form" && (
        <EditOutletForm outlet={outletEdit}></EditOutletForm>
      )}
      {/* {view.viewState === "edit-outlet" && <NewOutletForm></NewOutletForm>} */}
      {view.viewState === "users" && <Users editUser={editUser}></Users>}
      {view.viewState === "user-details" && (
        <UserDetails userId={userEdit} formId={formId}></UserDetails>
      )}
      {view.viewState === "notifications" && (
        <Notifications verifyUser={verifyUser}></Notifications>
      )}
      {view.viewState === "verify-user-details" && (
        <VeryfyUserDetails form={formId}></VeryfyUserDetails>
      )}
      {/* <LoginForm></LoginForm> */}
    </React.Fragment>
  );
};
export default Home;
