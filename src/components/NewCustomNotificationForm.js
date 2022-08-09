import React from "react";
import styles from "./styles/NewCustomNotificationForm.module.css";

const NewCustomNotificationForm = () => {
  let value = 5;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-sm btn-danger ml-2"
        data-toggle="modal"
        data-target="#staticBackdropCustomNotification"
      >
        + New Custom Notification
      </button>{" "}
      <form>
        <div
          className="modal fade"
          id="staticBackdropCustomNotification"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabelCustomNotification"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="staticBackdropLabelCustomNotification"
                >
                  New Custom Notification
                </h5>
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
                <div className="form-row mt-3">
                  <div className="form-group col">
                    <label htmlFor="exampleFormControlTextarea1">
                      Select Date
                    </label>
                    <input type="date" className={styles.CNFDateInput}></input>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="exampleFormControlTextarea1">Time</label>
                  </div>
                </div>{" "}
                <div className="form-row mt-1">
                  <div className="form-group col">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
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
                      End Time
                    </label>
                    <input type="time" className={styles.CNFEndTime}></input>
                  </div>
                </div>
                <div>
                  <header className={`my-5 ${styles.header}`}>
                    <div className="my-2">
                      <h5>Options</h5>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-auto mx-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="Confirm"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Confirm
                          </label>
                        </div>
                      </div>
                      <div className="col-auto mx-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="Decline"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Decline
                          </label>
                        </div>
                      </div>
                      <div className="col-auto mx-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="Ignore"
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="inlineCheckbox3"
                          >
                            Ignore
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-row"></div>
                  </header>
                </div>
                <div className="form-row mt-1">
                  <div className="form-group col">
                    <label htmlFor="inputState">Show Groups</label>
                    <select id="inputState" className="form-control">
                      <option>All</option>
                      <option>Group 1</option>
                      <option>Group 2</option>
                    </select>
                  </div>
                </div>
                <div className="form-row mt-1">
                  <div className="form-group col">
                    <label htmlFor="inputState">Show Users</label>
                    <input type="text" className="form-control"></input>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default NewCustomNotificationForm;
