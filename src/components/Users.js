import React, { useState } from "react";
import styles from "./styles/Users.module.css";
import UserStack from "./UserStack";

const Users = (props) => {
  const[filterOption,setFilterOption] = useState("All");
  const[search,setSearch] = useState(""); 
  const changeFilter = (e)=>{
    setFilterOption(e.target.value);
  }
 
  const editUser = (userId) => {
    props.editUser(userId);
  };
const searchNames = (e)=>{
  setFilterOption(e.target.value);


}
  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`${styles.panel}  shadow`}>
          <header className={styles.header}>
            <div className="row justify-content-between align-items-center">
              {" "}
              <div className="col-auto d-flex justify-content-center align-items-center mt-5">
                <h3 className="d-inline">Users</h3>
                {/* <h3 className={styles.total}> [2055]</h3> */}
              </div>
              
              <div className="col-auto">
               
                <select
                  className="form-control"
                  required
                  onChange={changeFilter}
                >
                  <option selected value="All"> All</option>
                  <option value="Authorized">Authorized</option>
                  <option value="Unauthorized">Unauthorized</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="col-auto">
                <input className="form-control" placeholder="search" onChange={searchNames}></input>
              </div>
            </div>

            <hr></hr>
          </header>
          <UserStack editUser={editUser} filterOption={filterOption} ></UserStack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
