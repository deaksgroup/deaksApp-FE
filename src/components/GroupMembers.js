import React from "react";
import MembersStack from "./MembersStack";
import styles from "./styles/GroupMembers.module.css";

const GroupMembers = (props) => {
  return (
    <React.Fragment>
      <div className="genral-margin">
        <div className={`${styles.panel} p-3  shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto d-flex justify-content-center align-items-center ">
                <h5 className="d-inline">Members</h5>
                <h3 className={styles.total}> [2055]</h3>
              </div>
              <div className="col-auto">
                <input className="form-control" placeholder="search"></input>
              </div>
            </div>

            <hr></hr>
          </header>
          <MembersStack selectedUsers={props.selectedUsers}></MembersStack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroupMembers;
