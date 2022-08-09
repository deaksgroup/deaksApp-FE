import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/UserDetails.module.css";
import axios from "axios";
import ViewContext from "../appView-context";

const UserDetails = (props) => {
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  let actions;
  const view = useContext(ViewContext);
  const [edit, isEdit] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const editDetails = () => {
    if (edit) {
      isEdit(false);
    } else {
      isEdit(true);
    }
  };

  const cancelForm = () => {
    if (props.userId != null && props.userId.action === "edit") {
      view.handleAppView("users");
      view.handleContent(null);
    }
  };
  return (
    <React.Fragment>
      <form>
        <div className="general-margin">
          <div className={`${styles.panel} p-3 shadow`}>
            <header className={styles.header}>
              <div className="row justify-content-between align-items-center">
                {" "}
                <div className="col-auto">
                  <h2 className="d-inline"></h2>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    onClick={editDetails}
                    className="btn btn-danger btn-small"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <hr></hr>
            </header>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Join Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputEmail4"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputPassword4">Deaks ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword4"
                  disabled={edit}
                ></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue={props.userId.user.fullName}
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Booking Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Contact Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Male"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Male"
                  disabled={edit}
                ></input>
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              ></input>
            </div> */}
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputCity">Unit Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputState">Street</label>
                <select
                  id="inputState"
                  className="form-control"
                  disabled={edit}
                >
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Sex</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Male"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">DOB</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Male"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">NRIC Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="General"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">PayNow Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Not Active"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Bank Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="General"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Bank Account Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Not Active"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Emargency Contact Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="General"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Emargency Contact Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="Not Active"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Relation</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue="General"
                  disabled={edit}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Account Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue={props.userId.user.accountStatus}
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Job Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue={props.userId.user.jobStatus}
                  disabled={edit}
                ></input>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="submit"
              className="btn btn-danger ml-3"
              onClick={cancelForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default UserDetails;
