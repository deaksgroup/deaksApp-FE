import React from "react";
import styles from "./styles/MembersStack.module.css";

const MembersStack = (props) => {
  let i = 0;
  const deleteUser = (e) => {
    props.deleteUser(e.target.value);
  };

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
            <th scope="col">Booking Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.selectedUsers.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">{i++}</th>
                <td>{user.name}</td>
                <td>{user.bookingName}</td>
                <td>{user.contactNumber}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger mr-1"
                    onClick={deleteUser}
                    value={user._id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MembersStack;
