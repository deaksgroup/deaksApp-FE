import React from "react";
import styles from "./styles/Users.module.css";
import UserStack from "./UserStack";

const Users = (props) => {
  const editUser = (userId) => {
    props.editUser(userId);
  };

  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`${styles.panel}  shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto d-flex justify-content-center align-items-center ">
                <h3 className="d-inline">Users</h3>
                {/* <h3 className={styles.total}> [2055]</h3> */}
              </div>
              <div className="col-auto">
                <input className="form-control" placeholder="search"></input>
              </div>
            </div>

            <hr></hr>
          </header>
          <UserStack editUser={editUser}></UserStack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
