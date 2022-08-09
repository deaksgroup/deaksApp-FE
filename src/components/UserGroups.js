import React from "react";
import GroupStack from "./GroupStack";
import styles from "./styles/UserGroups.module.css";

const UserGroups = () => {
  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`${styles.panel} p-3 shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto">
                <h2 className="d-inline">User Groups</h2>
              </div>
              <div className="col-auto">
                <div>
                  <button className="btn btn-sm btn-danger ml-auto">
                    + Create Group
                  </button>
                </div>
              </div>
            </div>

            <hr></hr>
          </header>
          <div>
            <div className={`row justify-content-between align-items-center`}>
              <div className="col-auto p-0">
                <div className="row align-items-center mx-0">
                  <h5 className="col">Group List</h5>
                </div>
              </div>
              <div className="col-auto">
                <input className="form-control" placeholder="search"></input>
              </div>
            </div>
            <hr></hr>
            <GroupStack></GroupStack>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UserGroups;
