import React, { useContext, useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import styles from "./styles/NewSlotForm.module.css";
import ViewContext from "../appView-context";
import moment from "moment";
import Axios from "axios";
import axios from "axios";
import $, { data } from "jquery";
const NewSlotForm = () => {
  const view = useContext(ViewContext);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [outletGroups, setOutletGroups] = useState([]);
  const [loadedClients, setLoadedClients] = useState([]);
  const [loadedOutlets, setLoadedOutlets] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTIme] = useState("");
  const [reqVacancies, setReqVacancies] = useState("");
  const [releasingVacancies, setReleasingVacancies] = useState("");
  const [priority, setPriority] = useState("");
  const [payPerHour, setPayPerHour] = useState("");
  const [totalPay, setTotalPay] = useState("");
  const [date, setDate] = useState("");
  const [hotel, setHotel] = useState("");
  const [outlet, setOutlet] = useState("");
  //console.log(startTime, "....startTime");
  //console.log(parseInt(endTime), "...endTime");
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  let value = 5;
  //console.log(startTime);
  useEffect(() => {
    axios(`https://deaksappbe.herokuapp.com/groupList/all`).then((resp) => {
      setGroups(resp.data);

      //console.log("resp", resp.data);
    });
  }, []);
  useEffect(() => {
    axios(`https://deaksappbe.herokuapp.com/users`).then((resp) => {
      setUsers(resp.data);

      //console.log("resp", resp.data);
    });
  }, []);
  //console.log(hotel, "hotel");
  console.log(groups, "....groups");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://deaksappbe.herokuapp.com/hotelList",
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
        setLoadedClients(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  useEffect(() => {});
  const hotelChangeHandler = (e) => {
    setHotel(e.target.value);
  };
  const priorityChangeHandler = (e) => {
    setPriority(e.target.value);
  };
  const outletChangeHandler = (e) => {
    setOutlet(
      loadedOutlets.filter((outlet) => outlet._id === e.target.value)[0]
    );
  };
  const totalpayHandler = (e) => {
    setTotalPay(e.target.value);
  };
  const startTimeHandler = (e) => {
    setStartTime(e.target.value);
    console.log(startTime);
  };
  const endTimeHandler = (e) => {
    setEndTIme(e.target.value);
    console.log(endTime);
  };

  const selectDate = (e) => {
    setDate(e.target.value);
  };
  const payChangeHandler = (e) => {
    setPayPerHour(e.target.value);

    var pph = parseInt(e.target.value);
    var ppm = pph / 60;
    var STime = moment(startTime);
    var ETime = moment(endTime);
    // var duration = ETime.diff(STime, "minutes");
    var minutes = parseInt(moment.duration(ETime.diff(STime)).as("minutes"));
    console.log(STime);
    console.log(ETime);
    // console.log(duration, "...duration");
    console.log(pph, "...payperhoure");
    console.log(minutes, "....Total mintes");
    console.log(ppm, "......payperminutes");
    var tp = Math.abs(ppm * minutes);
    console.log(tp, "......TotalPay");

    setTotalPay(tp.toString());

    // var hoursMinutes = startTime.split(/[.:]/);
    // var hours = parseInt(hoursMinutes[0], 10);
    // var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    // var time = hours + minutes / 60;
    //console.log(time);
  };
  //console.log(outlet, ".outlet");
  useEffect(() => {
    setOutletGroups(groups.filter((group) => outlet._id === group.outletId));
  }, [groups, outlet]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://deaksappbe.herokuapp.com/adminoutletList/${hotel}`,
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
        //console.log(data, "..outletList....");
        setLoadedOutlets(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, [hotel]);
  //console.log(outletGroups, "....outletgroups");
  const GroupsList = [
    { key: "Group 1", id: 1 },
    { key: "Group 2", id: 2 },
    { key: "All", id: 3 },
    { key: "None", id: 4 },
  ];
  const UserList = [
    { key: "Option 1", id: 1 },
    { key: "Option 2", id: 2 },
    { key: "Option 3", id: 2 },
    { key: "Option 4", id: 2 },
    { key: "Option 5", id: 2 },
    { key: "Option 6", id: 2 },
    { key: "Option 7", id: 2 },
    { key: "Option 8", id: 2 },
  ];
  window.addEventListener(
    "keypress",
    function(e) {
      if (e.key === "Enter" && $(e.target)[0] != $("textarea")[0]) {
        e.preventDefault();
      }
    },
    false
  );
  const submitHandler = (e) => {
    e.preventDefault();

    let groups = [];
    selectedGroups.map((group) => {
      groups.push(group._id);
    });
    let sUsers = [];
    selectedUsers.map((user) => {
      sUsers.push(user._id);
    });

    let hotelName;

    hotelName = loadedClients.filter((Hotel) => Hotel._id == hotel);
    console.log(groups, "..groupsId");
    console.log(sUsers, "....sUsers");
    // console.log(priority);

    view.handleAppView("slots");
    view.handleContent("");
    //console.log("");
    const slot = {
      date: date,
      hotel: hotel,
      outletName: outlet.outletName,
      hotelName: hotelName[0].hotelName,
      outlet: outlet._id,
      startTime: moment(startTime, "YYYY-MM-DDTHH:mm").format("hh:mm A"),
      showGroups: groups,
      selectedUsers: sUsers,
      endTime: moment(endTime, "YYYY-MM-DDTHH:mm").format("hh:mm A"),
      reqVac: reqVacancies,
      relVac: releasingVacancies,
      payperhour: payPerHour,
      totalpay: totalPay,
      priority: priority,
    };
    // Axios({
    //   method: "POST",
    //   data: slot,
    //   withCredentials: true,
    //   headers: {
    //     // 'Content-Type': 'multipart/form-data',
    //     secret_token: localStorage.getItem("JWtToken"),
    //   },
    //   url: "https://deaksappbe.herokuapp.com/slotList",
    // }).then((res) => {
    //   //console.log(res, "token2");
    // });
    axios
      .post(`https://deaksappbe.herokuapp.com/slotList`, slot)
      .then((resp) => {
        //console.lyog("resp", resp);
      })
      .then(() => {});
  };
  // //console.log(selectedGroups);
  const handleSelectUser = (selectedList) => {
    setSelectedUsers(selectedList);
  };

  const handleRemoveUser = (selectedList) => {
    setSelectedUsers(selectedList);
  };
  const handleSelectGroup = (selectedList) => {
    setSelectedGroups(selectedList);
  };
  const handleRemoveGroup = (selectedList) => {
    setSelectedGroups(selectedList);
  };
  const reqVacancyHandler = (e) => {
    setReqVacancies(e.target.value);
  };
  const relVacancyHandler = (e) => {
    setReleasingVacancies(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="general-margin">
        <form onSubmit={submitHandler}>
          <div className={`${styles.panel} p-3 shadow`}>
            <header className={styles.header}>
              <div className="row justify-content-between align-items-center">
                {" "}
                <div className="col-auto">
                  <h4 className="d-inline">Add New Slot </h4>
                </div>
                <div className="col-auto">
                  <h6 className="d-inline align-items-center ">
                    <span className="display-4">{value} </span>{" "}
                  </h6>
                </div>
              </div>

              <hr></hr>
            </header>
            <div className="form-row mt-3">
              <div className="form-group col">
                <label htmlFor="exampleFormControlTextarea1">Select Date</label>
                <input
                  required
                  type="date"
                  className={styles.NSFDate}
                  onChange={selectDate}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="exampleFormControlTextarea1">Priority</label>
                <select
                  className="form-control"
                  required
                  onChange={priorityChangeHandler}
                >
                  <option selected></option>
                  <option value="H">High</option>
                  <option value="L">Low</option>
                </select>
              </div>
            </div>{" "}
            <div className="form-row mt-1">
              <div className="form-group col">
                <label required htmlFor="inputState">
                  Select Hotel
                </label>
                <select
                  id="inputState"
                  className="form-control"
                  name="hotelDetails"
                  onChange={hotelChangeHandler}
                >
                  <option></option>
                  {loadedClients != null &&
                    loadedClients.map((hotel) => {
                      return (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.hotelName}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="form-group col">
                <label required htmlFor="inputState">
                  Select Outlet
                </label>
                <select
                  onChange={outletChangeHandler}
                  id="inputState"
                  className="form-control"
                >
                  <option></option>
                  {loadedOutlets != null &&
                    loadedOutlets.map((outlet) => {
                      return (
                        <option key={outlet._id} value={outlet._id}>
                          {outlet.outletName}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form-group col">
                <label htmlFor="exampleFormControlTextarea1">
                  Job Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={outlet != null && outlet.jobRemarks}
                ></textarea>
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form-group col">
                <label htmlFor="exampleFormControlTextarea1">Start Time</label>
                <input
                  required
                  type="datetime-local"
                  onChange={startTimeHandler}
                  className={`form-control ${styles.NSFTime}`}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="exampleFormControlTextarea1">End Time</label>
                <input
                  required
                  type="datetime-local"
                  onChange={endTimeHandler}
                  className={`form-control ${styles.NSFTime}`}
                ></input>
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form-group col">
                <label>Requested Vacancies</label>
                <input
                  required
                  onChange={reqVacancyHandler}
                  value={reqVacancies}
                  type="number"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col">
                <label>Releasing Vacancies</label>
                <input
                  required
                  onChange={relVacancyHandler}
                  value={releasingVacancies}
                  type="number"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form-group col">
                <label htmlFor="inputState">OutLet Show Groups</label>
                <Multiselect
                  className={`${styles.searchBox} ${styles.optionContainer} ${styles.option} ${styles.multiselectContainer} ${styles.ighlightOption}`}
                  options={outletGroups} // Options to display in the dropdown
                  selectedValues={selectedGroups} // Preselected value to persist in dropdown
                  onSelect={handleSelectGroup} // Function will trigger on select event
                  onRemove={handleRemoveGroup} // Function will trigger on remove event
                  displayValue="groupTitle" // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form-group col">
                <label htmlFor="inputState">Show Selected Users</label>
                <Multiselect
                  className={`${styles.searchBox} ${styles.optionContainer} ${styles.option} ${styles.multiselectContainer} ${styles.ighlightOption}`}
                  options={users} // Options to display in the dropdown
                  selectedValues={selectedUsers} // Preselected value to persist in dropdown
                  onSelect={handleSelectUser} // Function will trigger on select event
                  onRemove={handleRemoveUser} // Function will trigger on remove event
                  selectionLimit={4}
                  displayValue="name" // Property name to display in the dropdown options
                />
              </div>
            </div>
            <div className="form-row mt-1">
              <div className="form- group col">
                <label>Pay per hour</label>
                <input
                  required
                  onChange={payChangeHandler}
                  value={payPerHour}
                  type="number"
                  className={styles.pay}
                ></input>
              </div>
              <div className="form- group col">
                <label>Total Pay</label>
                <input
                  value={totalPay}
                  type="number"
                  className={styles.pay}

                  // onChange={totalpayHandler}
                ></input>
              </div>
            </div>
            <hr className="mt-5"></hr>
            <footer className={` ${styles.footer}`}>
              <button type="button" className="btn btn-secondary m-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
            </footer>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default NewSlotForm;
