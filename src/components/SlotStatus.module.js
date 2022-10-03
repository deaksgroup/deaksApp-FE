import React, { useEffect, useState } from "react";
import styles from "./styles/SlotStatus.module.css";

const SlotStatus = (props) => {
  const [users, setUsers] = useState(props.slots.Users);
  const [confirmedUsers, setConfirmedUsers] = useState([]);
  const [waitingList, setWaitingList] = useState([]);
  let ConfirmedUsers = [];
  let WaitingListUsers = [];

  useEffect(() => {
    if (props.slots.Slot.ConfirmedRequests != null) {
      // console.log("CONFIRMED REQUESTS");

      users.map((user) => {
        props.slots.Slot.ConfirmedRequests.map((userId) => {
          if (user._id == userId) {
            // console.log(user.name);
            ConfirmedUsers.push(user);
          }
        });
      });
      setConfirmedUsers(ConfirmedUsers);
    }
    setConfirmedUsers(ConfirmedUsers);
  }, [users]);

  useEffect(() => {
    // console.log("WAITING REQUESTS");

    if (props.slots.Slot.WaitingRequests != null) {
      users.map((user) => {
        props.slots.Slot.WaitingRequests.map((userId) => {
          if (user._id == userId) {
            //console.log();
            WaitingListUsers.push(user);
          }
        });
      });
      setWaitingList(WaitingListUsers);
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
          data-target={`#staticBackdrop${props.slots.Slot._id}`}
        >
          status
        </button>
        <form>
          <div
            className="modal fade"
            id={`staticBackdrop${props.slots.Slot._id}`}
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby={`staticBackdropLabel${props.slots.Slot._id}`}
            aria-hidden="true"
          >
            <div className={`modal-dialog ${styles.modal_lg}`}>
              <div className="modal-content">
                <div className="modal-header">
                  <h3
                    className="modal-title"
                    id={`staticBackdropLabel${props.slots.Slot._id}`}
                  >
                    {props.slots.Slot.hotelName} {props.slots.Slot.outletName}
          
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
                        <input disabled type="date" className={styles.SSDate} value={props.slots.Slot.timeStamp}></input>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Time
                        </label>
                      </div>
                    </div>{" "}
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Hotel</label>
                        <select disabled id="inputState" className="form-control">
                          <option selected >{props.slots.Slot.hotelName}</option>
                          
                          
                        </select>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="inputState">Outlet</label>
                        <select disabled id="inputState" className="form-control">
                          <option value="car">{props.slots.Slot.outletName}</option>
                        
                        </select>
                      </div>
                    </div>
                 
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          Start Time
                        </label>
                        <input disabled type="text" className="form-control" value={props.slots.Slot.startTime}></input>
                      </div>
                      <div className="form-group col">
                        <label htmlFor="exampleFormControlTextarea1">
                          End Time
                        </label>
                        <input disabled type="text"className="form-control" value={props.slots.Slot.endTime}></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label>Requested Vacancies</label>
                        <input disabled type="number" value={props.slots.Slot.
requestedVacancies} className="form-control"></input>
                      </div>
                      <div className="form-group col">
                        <label>Releasing Vacancies</label>
                        <input disabled type="number" value={props.slots.Slot.

releasingVacancies} className="form-control"></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Show Groups</label>
                        <select disabled id="inputState" className="form-control">
                          <option defaultValue="all">All</option>
                          <option value="CAR">Group 1</option>
                          <option value="CAR">Group 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label htmlFor="inputState">Show Single User</label>
                        <input disabled type="text" className="form-control"></input>
                      </div>
                    </div>
                    <div className="form-row mt-1">
                      <div className="form-group col">
                        <label>Pay per hour</label>
                        <input disabled type="number" className={styles.pay} value={props.slots.Slot.payPerHour}></input>
                      </div>
                      <div className="form-group col">
                        <label>Total Pay</label>
                        <input disabled type="number" className={styles.pay} value={props.slots.Slot.totalPayForSlot}></input>
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
                          <span style={{ color: "red" }}>
                            {" "}
                            {props.slots.Slot.status}{" "}
                          </span>
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
                          console.log(user.name);
                          return (
                            <tr key={user._id}>
                              <th scope="row">{i + 1}</th>
                              <td>{user.name}</td>
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
                        })}

                        {waitingList.map((user, i) => {
                          return (
                            <tr key={user._id}>
                              <th scope="row">{i + 1}</th>
                              <td>{user.name}</td>
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
                      <button disabled className="btn btn-sm btn-danger">Add</button>
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
