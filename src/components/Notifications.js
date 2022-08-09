import React from "react";
import FormSubmitionStack from "./FormSubmitionStack";
import styles from "./styles/Notifications.module.css";
import NewCustomNotificationForm from "./NewCustomNotificationForm";

const Notifications = (props) => {
  const verifyUser = (formid) => {
    props.verifyUser(formid);
  };
  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`${styles.panel} p-3 shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto">
                <h2 className="d-inline">Notifications</h2>
              </div>
              <div className="col-auto">
                <div>
                  <NewCustomNotificationForm></NewCustomNotificationForm>
                </div>
              </div>
            </div>

            <hr></hr>
          </header>
          <div>
            <div className={`row justify-content-start align-items-center`}>
              <div className="col-auto px-0">
                <a className="pl-3">New Form Submissions</a>
              </div>
              {/* <div className="col-auto">
                <a className="pl-3">Custom Notification Status</a>
              </div> */}
              <div className="col-auto ml-auto d-flex justify-content-end">
                <input placeholder="search" className="form-control"></input>
              </div>
            </div>
            <hr></hr>
          </div>
          <FormSubmitionStack verifyUser={verifyUser}></FormSubmitionStack>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Notifications;
