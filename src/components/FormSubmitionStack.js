import React, { useContext, useEffect, useState } from "react";
import ViewContext from "../appView-context";
import axios from "axios";
// import styles from "./styles/FormSubmitionStack.module.css";

const FormSubmitionStack = (props) => {
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  const view = useContext(ViewContext);
  const [submissions, setSubmissions] = useState([]);

  const [users, setUsers] = useState([]);
  //   const [selectedUser, setSelectedUser] = useState([{}]);

  useEffect(() => {
    const fetchUsers = () => {
      axios(`https://deaksappbe.herokuapp.com/users`)
        .then((resp) => {
          // console.log("resp", resp.data);
          // setUsers(resp.data);
        })
        .then(() => {
          // props.fetchGroups();
          //   //console.log(users);
        });
    };
    fetchUsers();
  }, []);
  const verifyUser = (e) => {
    const selectForm = submissions.filter((form) => form._id == e.target.value);
    const selectUser = users.filter((user) => user._id == selectForm[0].userId);
    console.log(selectForm, "...form");
    console.log(users);

    props.verifyUser({ form: selectForm[0], user: selectUser[0] });
    //console.log(selectForm[0], selectUser[0]);
    view.handleAppView("verify-user-details");
  };

  useEffect(() => {
    const fetch = () => {
      axios(`https://deaksappbe.herokuapp.com/submit`)
        .then((resp) => {
          //console.log("resp", resp.data);
          // setSubmissions(resp.data);
        })
        .then(() => {
          // props.fetchGroups();
        });
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((form) => {
              return (
                <tr key={form._id}>
                  <th scope="row">1</th>
                  <td>{form.fullName}</td>
                  <td>12-05-2022</td>
                  <td>{form.accountStatus}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mx-2"
                      onClick={verifyUser}
                      value={form._id}
                    >
                      Open
                    </button>
                    <button className="btn btn-danger mx-2 btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default FormSubmitionStack;
