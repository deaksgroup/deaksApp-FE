import React, { useContext, useEffect, useState } from "react";
import GroupStack from "./GroupStack";
import Multiselect from "multiselect-react-dropdown";
import NewGroupForm from "./NewGroupForm";
import styles from "./styles/NewOutletForm.module.css";
import ViewContext from "../appView-context";
import axios from "axios";
import UserDetails from "./UserDetails";
import $ from "jquery";

const EditOutletForm = (props) => {
  const view = useContext(ViewContext);
  const Outlet = props.outlet.outlet;
  const [file, setfile] = useState([]);
  const [groomingFiles, setGroomingFiles] = useState([]);
  const [howToFiles, setHowTofiles] = useState([]);
  const [jobRemarks, setJobRemarks] = useState(Outlet.jobRemarks);
  const [payment, setPayment] = useState(Outlet.payment);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [title, setTitile] = useState(Outlet.outletName);
  const [hotel, setHotel] = useState(Outlet.hotelName);
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [contact, setContact] = useState(Outlet.outletAdminNo);
  const [youtubeLink, setYoutubeLink] = useState(Outlet.youtubeLink);
  const [address, setAddress] = useState(Outlet.billingAddress);
  const [loadedClients, setLoadedClients] = useState([]);
  const [groups, setGroups] = useState([]);
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  //console.log(hotel);
  //console.log(props.outlet);
  const nameChangeHandler = (e) => {
    setTitile(e.target.value);
  };

  const hotelChangeHandler = (e) => {
    setHotel(e.target.value);
  };
  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  };
  const youtubeLinkChangeHandler = (e) => {
    setYoutubeLink(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const jobRemarksHandler = (event) => {
    setJobRemarks(event.target.value);
  };
  const paymentRemarksHandler = (event) => {
    setPayment(event.target.value);
  };
  // $("#submit-code").onclick(function() {
  //   $("div.output").html($(".support-answer-textarea").val().replace(/\n/g, "<br>"));
  // });
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5002/hotelList", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           secret_token: localStorage.getItem("JWtToken"),
  //         },
  //       });
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       const data = await response.json();
  //       console.log(data, "......");
  //       setLoadedClients(data);
  //     } catch (error) {
  //       //console.log(error.message);
  //     }
  //   };
  //   getData();
  // }, []);
  // useState(() => {
  //   let selected = [];
  //   selected = loadedClients.filter(
  //     (hotel) => hotel._id == Outlet.hoteldetails
  //   );
  //   //console.log(selected, ".selected");
  //   setSelectedHotel(selected);
  //   console.log(loadedClients);
  //   console.log(selectedHotel, "....selscted");
  // }, [loadedClients]);
  //console.log(selectedHotel, "selectedHotel");
  props.outlet.outlet != null &&
    useEffect(() => {
      const fetch = async () => {
        axios(
          `http://localhost:5002/groupList/${props.outlet.outlet._id}`
        ).then((resp) => {
          setGroups(resp.data);

          //console.log("resp", resp.data);
        });
      };
      fetch();
    }, []);

  const GroupsList = [
    { key: "Group 1", id: 1 },
    { key: "Group 2", id: 2 },
    { key: "All", id: 3 },
    { key: "None", id: 4 },
  ];

  // //console.log(file);
  const handleSelectGroup = (selectedList) => {
    setSelectedGroups(selectedList);
  };
  const handleRemoveGroup = (selectedList) => {
    setSelectedGroups(selectedList);
  };
  //console.log(groups, "...groups.");
  //console.log(selectedGroups, "...selwc.");
  const imageChange = (event) => {
    setfile(event.target.files);

    const preview = document.getElementById("previewImages");

    Array.from(event.target.files).forEach((file) => {
      const reader = new FileReader();
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      reader.abort();
      reader.onload = () => {
        var image = new Image();
        image.src = String(reader.result);
        image.classList.add(`${styles.previewImage}`);
        preview.appendChild(image);
      };
      reader.readAsDataURL(file);
    });
  };
  //console.log(props.outlet.outlet.outletImages, "........outletImages");
  useEffect(() => {
    props.outlet.outlet.outletImages.map((imageId) => {
      const preview = document.getElementById("previewImages");
      var image = new Image();
      image.src = String(`http://localhost:5002/images/${imageId}`);
      //console.log(image.src, "....imgSrc");
      image.classList.add(`${styles.previewImage}`);
      preview.appendChild(image);
    });
  }, []);

  const groomingChange = (event) => {
    setGroomingFiles(event.target.files);

    const preview = document.getElementById("previewGrooming");

    Array.from(event.target.files).forEach((file) => {
      const reader = new FileReader();
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      reader.abort();
      reader.onload = () => {
        var image = new Image();
        image.src = String(reader.result);
        image.classList.add(`${styles.previewImage}`);
        preview.appendChild(image);
      };
      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    props.outlet.outlet.groomingImages.map((imageId) => {
      const preview = document.getElementById("previewGrooming");
      var image = new Image();
      image.src = String(`http://localhost:5002/images/${imageId}`);
      //console.log(image.src, "....imgSrc");
      image.classList.add(`${styles.previewImage}`);
      preview.appendChild(image);
    });
  }, []);
  const howToChange = (event) => {
    setHowTofiles(event.target.files);

    const preview = document.getElementById("previewHowTo");

    Array.from(event.target.files).forEach((file) => {
      const reader = new FileReader();
      while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
      }

      reader.abort();
      reader.onload = () => {
        var image = new Image();
        image.src = String(reader.result);
        image.classList.add(`${styles.previewImage}`);
        preview.appendChild(image);
      };
      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    props.outlet.outlet.howToImages.map((imageId) => {
      const preview = document.getElementById("previewHowTo");
      var image = new Image();
      image.src = String(`http://localhost:5002/images/${imageId}`);
      //console.log(image.src, "....imgSrc");
      image.classList.add(`${styles.previewImage}`);
      preview.appendChild(image);
    });
  }, []);
  const submitHandler = async (event) => {
    event.preventDefault();
    view.handleAppView("clients");
    view.handleContent(null);
    let groupIds = [];
    selectedGroups.map((group) => {
      groupIds.push(group._id);
    });
    const outlet = {
      id: props.outlet.outlet._id,
      title: title,
      hotel: hotel,
      hotelName: Outlet.hotelName,
      address: address,
      contact: contact,
      jobRemarks: jobRemarks,
      payment: payment,

      userGroups: groupIds,
      youtubeLink: youtubeLink,
    };
    const formData = new FormData();
    Object.keys(file).map(function (key, index) {
      formData.append("outletImages", file[key]);
    });
    Object.keys(groomingFiles).map(function (key, index) {
      formData.append("groomingImages", groomingFiles[key]);
    });
    Object.keys(howToFiles).map(function (key, index) {
      formData.append("howToImages", howToFiles[key]);
    });
    formData.append("state", JSON.stringify(outlet));

    const response = await fetch("http://localhost:5002/adminoutletList", {
      method: "PATCH",
      body: formData,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        secret_token: localStorage.getItem("JWtToken"),
      },
    });
    const ResponseData = await response;
  };
  const cancelForm = () => {
    view.handleAppView("clients");
    view.handleContent(null);
  };
  const fetchGroups = async () => {
    axios(`http://localhost:5002/groupList/${props.outlet.outlet._id}`).then(
      (resp) => {
        setGroups(resp.data);

        //console.log("resp", resp.data);
      }
    );
  };
  useEffect(() => {
    let selected = [];
    groups.map((group) => {
      Outlet.userGroups.map((Group) => {
        if (group._id == Group) {
          selected.push(group);
        }
      });
    });
    setSelectedGroups(selected);
  }, [groups]);

  let Content = (
    <div className="eneral-margin">
      <div className={`${styles.panel} p-3 shadow`}>
        <header className={styles.header}>
          <div className="row justify-content-between align-items-center">
            {" "}
            <div className="col-auto">
              <h4 className="d-inline">Outlet User Groups</h4>
            </div>
            <div className="col-auto">
              <div>
                <NewGroupForm
                  outlet={props.outlet}
                  fetchGroups={fetchGroups}
                ></NewGroupForm>
              </div>
            </div>
          </div>

          <hr></hr>
        </header>
        <div>
          <div className={`row justify-content-between align-items-center`}>
            <div className="col-auto">
              <input className="form-control" placeholder="search"></input>
            </div>
          </div>
          <hr></hr>
          <GroupStack groups={groups} fetchGroups={fetchGroups}></GroupStack>
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <div className="general-margin">
        <form onSubmit={submitHandler}>
          <div className={`${styles.panel} p-3 shadow`}>
            <header className={styles.header}>
              <div className="row justify-content-between align-items-center">
                {" "}
                <div className="col-auto">
                  <h4 className="d-inline my-3">Outlet Details</h4>
                </div>
                {/* <div className="col-auto">
                  <h6 className="d-inline align-items-center ">
                    <span className="display-4">5 </span>{" "}
                  </h6>
                </div> */}
              </div>

              <hr></hr>
            </header>
            <div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="ourletname">Outlet Name</label>
                  <input
                    id="outletname"
                    type="text"
                    className="form-control "
                    placeholder="Eg. Banquet.."
                    onChange={nameChangeHandler}
                    required
                    value={title}
                    // defaultValue={props.outlet.outlet.outletName}
                  ></input>
                </div>
                <div className="col">
                  <label htmlFor="hotelname">Select Hotel</label>
                  {/* <select
                    name="hotelDetails"
                    id="hotelname"
                    className="form-control"
                    onChange={hotelChangeHandler}
                    required
                    // value={hotel}
                  >
                    {" "}
                    {selectedHotel.map((hotel) => {
                      return (
                        <option selected key={hotel._id} value={hotel._id}>
                          {hotel.hotelName}
                        </option>
                      );
                    })}
                  </select> */}
                  <input
                    disabled
                    id="hotelDetails"
                    type="text"
                    className="form-control "
                    // placeholder="Eg. Banquet.."
                    // onChange={nameChangeHandler}

                    value={hotel}
                    // defaultValue={props.outlet.outlet.outletName}
                  ></input>
                </div>
              </div>

              <div className={styles.next}>
                <div className={`form-row`}>
                  <div className="col">
                    <textarea
                      type="text"
                      className="form-control "
                      placeholder="Billing Address"
                      onChange={addressChangeHandler}
                      value={address}
                      required
                      //   defaultValue={props.outlet.outlet.billingAddress}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.next}>
                  <div className={`form-row`}>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Contact Number"
                        onChange={contactChangeHandler}
                        value={contact}
                        // defaultValue={props.outlet.outlet.outletAdminNo}
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        type="text  "
                        className="form-control "
                        placeholder="Youtube Link "
                        onChange={youtubeLinkChangeHandler}
                        value={youtubeLink}
                        // defaultValue={props.outlet.outlet.youtubeLink}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col">
                    <label htmlFor="ourletname">Job Remarks</label>
                    <textarea
                      id="outletname"
                      type="text"
                      rows={5}
                      className="form-control "
                      placeholder="Eg. Banquet.."
                      onChange={jobRemarksHandler}
                      value={jobRemarks}
                      //   defaultValue={props.outlet.outlet.jobRemarks}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col">
                    <label htmlFor="ourletname">Payment</label>
                    <textarea
                      id="outletname"
                      type="text"
                      rows={5}
                      className="form-control "
                      placeholder="Eg. Banquet.."
                      onChange={paymentRemarksHandler}
                      value={payment}
                      //
                      //   defaultValue={props.outlet.outlet.payment}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-3"></div>
                <div className={`form-row mt-1 ${styles.next}`}>
                  <div className="form-group col">
                    <label htmlFor="inputState">Show Groups</label>
                    <Multiselect
                      className={`${styles.searchBox} ${styles.optionContainer} ${styles.option} ${styles.multiselectContainer} ${styles.ighlightOption}`}
                      options={groups} // Options to display in the dropdown
                      selectedValues={selectedGroups} // Preselected value to persist in dropdown
                      onSelect={handleSelectGroup} // Function will trigger on select event
                      onRemove={handleRemoveGroup} // Function will trigger on remove event
                      displayValue="groupTitle" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className={`form-group ${styles.next}`}>
                  <label htmlFor="exampleFormControlFile1">Outlet Images</label>
                  <input
                    type="file"
                    onChange={imageChange}
                    multiple={true}
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    accept="image/png, image/jpeg ,image/jpg"
                  ></input>
                </div>
              </div>
              <div id="previewImages">
                {/* <img src="http://localhost:5002/images/f6d30125640c6220ba3af9119dd724d2"></img> */}
              </div>

              {/* <div>
                <div className={`form-group ${styles.next}`}>
                  <label htmlFor="exampleFormControlFile1">Outlet Video</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    onChange={videoChange}
                    accept="video/mp4"
                  ></input>
                </div>
                <div id="previewVideo"></div>
              </div> */}
              <hr className="mt-5"></hr>

              <div>
                <div>
                  <label htmlFor="exampleFormControlFile1">Grooming</label>
                  <input
                    type="file"
                    onChange={groomingChange}
                    multiple={true}
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    accept="image/png, image/jpeg ,image/jpg"
                  ></input>
                </div>
              </div>
              <div id="previewGrooming"></div>
              <hr className="mt-5"></hr>
              <div>
                <div>
                  <label htmlFor="exampleFormControlFile1">How to report</label>
                  <input
                    type="file"
                    onChange={howToChange}
                    multiple={true}
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    accept="image/png, image/jpeg ,image/jpg"
                  ></input>
                </div>
              </div>
              <div id="previewHowTo"></div>
              <hr className="mt-5"></hr>
              {props.outlet != null && Content}
              <hr className="mt-5"></hr>
              <footer className={` ${styles.footer} `}>
                <div className="mx-auto">
                  <button
                    type="button"
                    onClick={cancelForm}
                    className="btn btn-secondary mx-1"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary mx-1">
                    Submit
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default EditOutletForm;
