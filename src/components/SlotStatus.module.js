import React, { useEffect, useState } from "react";
import styles from "./styles/SlotStatus.module.css";

const SlotStatus = (props) => {
  const [users, setUsers] = useState([]);
  const [confirmedUsers, setConfirmedUsers] = useState([]);
  const [waitingList, setWaitingList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://deaksappbe.herokuapp.com/users",
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
        setUsers(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  //console.log(props.slots, "...slot");
  let ConfirmedUsers = [];
  let WaitingListUsers = [];
  useEffect(() => {
    if (props.slots.Slot.ConfirmedRequests != null) {
      users.map((user) => {
        props.slots.Slot.ConfirmedRequests.map((userId) => {
          if (user._id == userId) {
            //console.log();
            ConfirmedUsers.push(user);
          }
        });
      });
    }
    setConfirmedUsers(ConfirmedUsers);
  }, [users]);
  useEffect(() => {
    if (props.slots.Slot.WaitingRequests != null) {
      users.map((user) => {
        props.slots.Slot.WaitingRequests.map((userId) => {
          if (user._id == userId) {
            //console.log();
            WaitingListUsers.push(user);
          }
        });
      });
    }
    setWaitingList(WaitingListUsers);
  }, [users]);
  return (
    <React.Fragment>
      <div>
        <button
          className="btn btn-danger mx-2 btn-sm"
          type="button"
          data-toggle="modal"
          data-target="#staticBackdropSlotStatus"
        >
          status
        </button>
        <form>
          <div
            className="modal fade"
            id="staticBackdropSlotStatus"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabelSlotStatus"
            aria-hidden="true"
          >
            <div className={`modal-dialog ${styles.modal_lg}`}>
              <div className="modal-content">
                <div className="modal-header">
                  <h3
                    className="modal-title"
                    id="staticBackdropLabelSlotStatus"
                  >
                    Slot 5 {props.slot}
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className={`${styles.panel} p-3 `}>
                    <div className="form-row mt-3">
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Select Date
                        </label>
                        <input type="date" className={styles.SSDate}></input>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Time
                        </label>
                      </div>
                    </div>{" "}
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Select Hotel</label>
                        <select id="inputState" className="form-control">
                          <option></option>
                          <option value="CAR">Le Maridien</option>
                          <option value="CAR">...</option>
                        </select>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="inputState">Select Outlet</label>
                        <select id="inputState" className="form-control">
                          <option value="car">Choose...</option>
                          <option value="car">...</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Job Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Start Time
                        </label>
                        <input type="time" className={styles.SSTime}></input>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          End Time
                        </label>
                        <input type="time" className={styles.SSTime}></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label>Requested Vacancies</label>
                        <input type="number" className="form-control"></input>
                      </div>
                      <div className="form-group col">
                        <label>Releasing Vacancies</label>
                        <input type="number" className="form-control"></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Show Groups</label>
                        <select id="inputState" className="form-control">
                          <option defaultValue="all">All</option>
                          <option value="CAR">Group 1</option>
                          <option value="CAR">Group 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Show Single User</label>
                        <input type="text" className="form-control"></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label>Pay per hour</label>
                        <input type="number" className={styles.pay}></input>
                      </div>
                      <div className="form-group col">
                        <label>Total Pay</label>
                        <input type="number" className={styles.pay}></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.submissionPanel} p-3 shadow`}>
                  <header className={styles.header}>
                    <div className="row justify-content-between align-items-center">
                      {" "}
                      <div className="col-auto">
                        <h4 className="d-inline">
                          Submissions{" "}
                          <span style={{ color: "red" }}> CLOSSED </span>
                        </h4>
                      </div>
                    </div>

                    <hr></hr>
                  </header>
                  <div>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">ID</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {confirmedUsers.map((user, i) => {
                          return (
                            <tr key={user._id}>
                              <th scope="row">{i + 1}</th>
                              <td>{user.fullName}</td>
                              <td>1025</td>
                              <td>Booked</td>
                              <td>
                                <button className="btn btn-danger mx-2 btn-sm">
                                  Decline
                                </button>
                                <button className="btn btn-danger  mx-2 btn-sm ">
                                  Responses
                                </button>
                              </td>
                            </tr>
                          );
                          i++;
                        })}
                        {waitingList.map((user, i) => {
                          return (
                            <tr key={user._id}>
                              <th scope="row">{i + 1}</th>
                              <td>{user.fullName}</td>
                              <td>1025</td>
                              <td>WaitingList</td>
                              <td>
                                <button className="btn btn-danger mx-2 btn-sm">
                                  Approve
                                </button>
                                <button className="btn btn-danger  mx-2 btn-sm ">
                                  Responses
                                </button>
                              </td>
                            </tr>
                          );
                          i++;
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.addSingleUser}></div>
                  <hr></hr>
                  <div className={`form-row justify-content-center`}>
                    <div className="form-group col-9">
                      <label>Add User</label>
                      <input type="search" className={styles.SSSearch}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center col-3">
                      <button className="btn btn-sm btn-danger">Add</button>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SlotStatus;
