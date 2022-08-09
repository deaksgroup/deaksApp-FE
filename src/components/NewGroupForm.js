import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import styles from "./styles/NewGroupForm.module.css";
import GroupMembers from "./GroupMembers";
import axios from "axios";
import $ from "jquery";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const NewGroupForm = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("as");
  const [time, setTime] = useState("d");
  const [date, setDate] = useState("e");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
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
        //console.log(data, "......");
        setUsers(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  const titileChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;

  //console.log(props.outlet, " outlet");
  // const UserList = [
  //   { key: "Option 12", id: 1 },
  //   { key: "Option 2", id: 2 },
  //   { key: "Option 3", id: 2 },
  //   { key: "Option 4", id: 2 },
  //   { key: "Option 5", id: 2 },
  //   { key: "Option 6", id: 2 },
  //   { key: "Option 7", id: 2 },
  //   { key: "Option 8", id: 2 },
  // ];
  // window.addEventListener(
  //   "keypress",
  //   function (e) {
  //     if (e.key === "Enter" && ($(e.target) != $("textarea")[0])) {
  //       e.preventDefault();
  //     }
  //   },
  //   false
  // );

  const handleSelectUser = (selectedList) => {
    setSelectedUsers(selectedList);
  };

  const handleRemoveUser = (selectedList) => {
    setSelectedUsers(selectedList);
  };

  const submitGroupHandler = async () => {
    const selected = [];
    selectedUsers.map((user) => {
      selected.push(user._id);
    });

    axios
      .post(`https://deaksserver-version-1.herokuapp.com/groupList`, {
        outletId: props.outlet.outlet._id,
        title: title,
        users: selected,
      })
      .then((resp) => {
        //console.log("resp", resp);
      })
      .then(() => {
        props.fetchGroups();
      });
  };

  let Content = <GroupMembers selectedUsers={selectedUsers}></GroupMembers>;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-sm btn-danger ml-2"
        data-toggle="modal"
        data-target={`#staticBackdrop${props.outlet.outlet._id}`}
      >
        + Create Group
      </button>{" "}
      <div>
        <div
          className="modal fade"
          id={`staticBackdrop${props.outlet.outlet._id}`}
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby={`staticBackdropLabel${props.outlet.outlet._id}`}
          aria-hidden="true"
        >
          <div className={`modal-dialog ${styles.modal_lg}`}>
            <div className="modal-content">
              <div className="modal-header ">
                <div className="row justify-content-between align-items-center">
                  <div className="col">
                    <h5
                      className="modal-title"
                      id={`staticBackdropLabel${props.outlet.outlet._id}`}
                    >
                      New Group <span className="display-4">5</span>
                      <span className="ml-5">
                        {props.outlet.outlet.outletName}
                      </span>
                    </h5>
                  </div>
                </div>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="form-row mt-3">
                    <div className="form-group col d-flex justify-content-center align-items-center">
                      <label htmlFor="exampleFormControlTextarea1">Date</label>
                      <input type="date" className={styles.NGFDate}></input>
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center col">
                      <label htmlFor="exampleFormControlTextarea1">Time</label>
                      <input type="time" className={styles.NGFTime}></input>
                    </div>
                  </div>{" "}
                  <div className={`form-row ${styles.next}`}>
                    <div className="col">
                      <label htmlFor="ourletname">Group Title</label>
                      <input
                        id="outletname"
                        type="text"
                        className="form-control "
                        placeholder="Eg. Group "
                        onChange={titileChangeHandler}
                        value={title}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className={`form-row ${styles.next}`}>
                  <div className="form-group col">
                    <label htmlFor="inputState">Select Users</label>
                    <Multiselect
                      className={`${styles.searchBox} ${styles.optionContainer} ${styles.option} ${styles.multiselectContainer} ${styles.ighlightOption}`}
                      options={users} // Options to display in the dropdown
                      selectedValues={selectedUsers} // Preselected value to persist in dropdown
                      onSelect={handleSelectUser} // Function will trigger on select event
                      onRemove={handleRemoveUser} // Function will trigger on remove event
                      selectionLimit={50}
                      displayValue="fullName" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
              </div>
              {Content}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={submitGroupHandler}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NewGroupForm;
