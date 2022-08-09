import React from "react";
import styles from "./styles/MembersStack.module.css";

const MembersStack = (props) => {
  return (
    <React.Fragment>
      <table className={`table ${styles.table}`}>
        <thead className="thead-light">
          <tr>
            <th scope="col">
              #<i className="bi bi-sort-numeric-up"></i>
            </th>
            <th scope="col">
              Name<i className="bi bi-sort-numeric-up"></i>
            </th>
            <th scope="col">Account Status</th>
            <th scope="col">Job Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.selectedUsers.map((user) => {
            return <tr key={user._id}>
              <th scope="row">1055</th>
              <td>{user.fullName}</td>
              <td>Verified</td>
              <td>Active</td>
              <td>
                <button className="btn btn-sm btn-danger mr-1">Delete</button>
              </td>
            </tr>
          })}


        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MembersStack;
