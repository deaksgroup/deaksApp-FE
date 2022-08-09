import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/UserStack.module.css";
import ViewContext from "../appView-context";

const UserStack = (props) => {
  const view = useContext(ViewContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  let user = 67;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://deaksserver-version-1.herokuapp.com/users",
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
        // //console.log(data,"......");
        setUsers(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    fetchUsers();
  }, []); //console.log(users);

  const editUser = (event) => {
    var select = users.filter((usr) => {
      return usr._id == event.target.value;
    });

    props.editUser({ user: select[0], action: "edit" });

    view.handleAppView("user-details");
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
            <th scope="col">Account Status</th>
            <th scope="col">Job Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">1055</th>
                <td>{user.fullName}</td>
                <td>{user.accountStatus}</td>
                <td>Active</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger mr-1"
                    onClick={editUser}
                    value={user._id}
                  >
                    Edit
                  </button>
                  <button className="btn btn-sm btn-danger mr-1">
                    Deactivate
                  </button>
                  <button className="btn btn-sm btn-danger mr-1">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default UserStack;
