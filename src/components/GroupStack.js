import React from "react";
import EditGroupForm from "./editGroup";
import axios from "axios";
import styles from "./styles/GroupStack.module.css";

const GroupStack = (props) => {
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  const deleteGroup = (e) => {
    axios
      .delete(
        `https://deaksserver-version-1.herokuapp.com/groupList/${e.target.value}`
      )
      .then((resp) => {
        //console.log("resp", resp);
      })
      .then(() => {
        props.fetchGroups();
      });
  };
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Members</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.groups.map((group) => {
              return (
                <tr key={group._id}>
                  <th scope="row">1</th>
                  <td>{group.groupTitle}</td>
                  <td>15</td>
                  <td>12-2-2022</td>
                  <td>
                    <div className="d-flex align-items-center ">
                      <EditGroupForm group={group}></EditGroupForm>
                      <button
                        className="btn btn-danger mx-2 btn-sm"
                        onClick={deleteGroup}
                        value={group._id}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <th scope="row">2</th>
              <td>Group 2</td>
              <td>20</td>
              <td>12-2-2022</td>
              <td>
                <button className="btn btn-danger mx-2 btn-sm ">Delete</button>
                <button className="btn btn-danger mx-2 btn-sm">Edit</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Group 3</td>
              <td>10</td>
              <td>12-2-2022</td>
              <td>
                <button className="btn btn-danger  mx-2 btn-sm ">Edit</button>
                <button className="btn btn-danger  mx-2 btn-sm ">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default GroupStack;
