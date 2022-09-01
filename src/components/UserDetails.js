import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/UserDetails.module.css";
import axios from "axios";
import ViewContext from "../appView-context";

const UserDetails = (props) => {
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  let actions;
  const view = useContext(ViewContext);
  const [edit, isEdit] = useState(true);

  const [fullName, setFullName] = useState(props.userId.user.name);
  const [deaksId, setDeaksId] = useState();
  const [bookingName, setbookingName] = useState(props.userId.user.bookingName);
  const [contact, setContact] = useState(props.userId.user.contactNumber);
  const [email, setEmail] = useState(props.userId.user.email);
  const [street, setStreet] = useState(props.userId.user.street);
  const [floorNumber, setFloorNumber] = useState(props.userId.user.floorNumber);
  const [zipCode, setZipCode] = useState(props.userId.user.zipCode);
  const [city, setCity] = useState(props.userId.user.city);
  const [unitNumber, setUnitNumber] = useState(props.userId.user.unitNumber);
  const [sex, setSex] = useState(props.userId.user.Sex);
  const [Dob, setDob] = useState(props.userId.user.DOB);
  const [residentStatus, setResidentStatus] = useState(
    props.userId.user.residentStatus
  );
  const [FSInstitute, setFSInstitute] = useState(props.userId.user.FSInstitute);
  const [FSIDNumber, setFSIDNumber] = useState(props.userId.user.FSIDNumber);
  const [NRIC, setNRIC] = useState(props.userId.user.NRIC);
  const [PayNow, setPayNow] = useState(props.userId.user.PayNow);
  const [bankName, setBankName] = useState(props.userId.user.bankName);
  const [bankAccNumber, setBankAccNumber] = useState(
    props.userId.user.bankAccNo
  );
  const [verificationStatus, setVerificationStatus] = useState(
    props.userId.user.verificationStatus
  );
  const [emeregencyContactNumber, setEmergencyContactNumber] = useState(
    props.userId.user.emergencyContact
  );
  const [emeregencyContactName, setEmergencyContactName] = useState(
    props.userId.user.emergencyContactName
  );
  const [emeregencyContactRelation, setEmergencyContactRelation] = useState(
    props.userId.user.emergencyContactRelation
  );
  const [accountStatus, setAccounStatus] = useState(
    props.userId.user.accountStatus
  );
  const [jobStatus, setJobStatus] = useState(props.userId.user.jobStatus);

  const editDetails = () => {
    if (edit) {
      isEdit(false);
    } else {
      isEdit(true);
    }
  };
  const accountStatusHandler = (e) => {
    setAccounStatus(e.target.value);
  };
  const verificationStatusHandler = (e) => {
    setVerificationStatus(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const verifiedUser = {
      userId: props.userId.user._id,
      name: fullName,
      deaksId: deaksId,
      bookingName: bookingName,
      contactNumber: contact,
      email: email,
      street: street,

      zipCode: zipCode,
      city: city,
      unitNumber: unitNumber,
      Sex: sex,
      DOB: Dob,
      residentStatus: residentStatus,
      FSInstitute: FSInstitute,
      FSIDNumber: FSIDNumber,
      NRIC: NRIC,
      PayNow: PayNow,
      bankName: bankName,
      bankAccNo: bankAccNumber,
      emeregencyContactNumber: emeregencyContactNumber,

      emeregencyContactName: emeregencyContactName,

      emeregencyContactRelation: emeregencyContactRelation,
      accountStatus: accountStatus,
      jobStatus: jobStatus,
      verificationStatus: verificationStatus,
    };

    axios
      .patch("http://localhost:5002/users", {
        verifiedUser,
      })
      .then((resp) => {
        //console.log(resp.body);
      });
  };

  const cancelForm = () => {
    if (props.userId != null && props.userId.action === "edit") {
      view.handleAppView("users");
      view.handleContent(null);
    }
  };
  console.log(props.userId.user);
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className="general-margin">
          <div className={`${styles.panel} p-3 shadow`}>
            <header className={styles.header}>
              <div className="row justify-content-between align-items-center">
                {" "}
                <div className="col-auto">
                  <h2 className="d-inline"></h2>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    onClick={editDetails}
                    className="btn btn-danger btn-small"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <hr></hr>
            </header>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Join Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputEmail4"
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputPassword4">Deaks ID</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword4"
                  disabled={edit}
                ></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  value={fullName}
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Booking Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  disabled={edit}
                  value={bookingName}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Contact Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={contact}
                  disabled={edit}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={email}
                  disabled={edit}
                ></input>
              </div>
            </div>
            {/* <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              ></input>
            </div> */}
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputCity">Unit Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  disabled={edit}
                  value={unitNumber}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputCity">Floor Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  disabled={edit}
                  value={floorNumber}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  disabled={edit}
                  value={city}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputState">Street</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZ"
                  disabled={edit}
                  value={street}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  disabled={edit}
                  value={zipCode}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Sex</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Male"
                  disabled={edit}
                  value={sex}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">DOB</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Male"
                  disabled={edit}
                  value={Dob}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Resident Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Male"
                  disabled={edit}
                  value={residentStatus}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Institute</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Male"
                  disabled={edit}
                  value={FSInstitute}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Male"
                  disabled={edit}
                  value={FSIDNumber}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">NRIC Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="General"
                  disabled={edit}
                  value={NRIC}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">PayNow Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Not Active"
                  disabled={edit}
                  value={PayNow}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Bank Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="General"
                  disabled={edit}
                  value={bankName}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Bank Account Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Not Active"
                  disabled={edit}
                  value={bankAccNumber}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Emargency Contact Number</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="General"
                  disabled={edit}
                  value={emeregencyContactNumber}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Emargency Contact Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="Not Active"
                  disabled={edit}
                  value={emeregencyContactName}
                ></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Relation</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue="General"
                  disabled={edit}
                  value={emeregencyContactRelation}
                ></input>
              </div>
            </div>
            <hr className="my-5"></hr>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="inputEmail4">Account Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  onChange={accountStatusHandler}
                  // defaultValue={props.form.user.accountStatus}
                  disabled={edit}
                  value={accountStatus}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Verification Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  onChange={verificationStatusHandler}
                  // defaultValue={props.form.user.accountStatus}
                  disabled={edit}
                  value={verificationStatus}
                ></input>
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmail4">Job Status</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  // defaultValue={props.form.user.jobStatus}
                  disabled={edit}
                  value={jobStatus}
                ></input>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Approve
            </button>
            <button
              type="submit"
              className="btn btn-danger ml-3"
              onClick={cancelForm}
            >
              Declian
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default UserDetails;
