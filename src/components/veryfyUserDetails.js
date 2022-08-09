import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/UserDetails.module.css";
import axios from "axios";
import ViewContext from "../appView-context";

const VeryfyUserDetails = (props) => {
  let submit = props.form.form;
  let user = props.form.user;
  //console.log(props.form);
  axios.defaults.headers.common["secret_token"] = `${localStorage.getItem(
    "JWtToken"
  )}`;
  let actions;
  const view = useContext(ViewContext);
  const [edit, isEdit] = useState(true);
  const [fullName, setFullName] = useState(user.fullName);
  const [deaksId, setDeaksId] = useState();
  const [bookingName, setbookingName] = useState(submit.bookingName);
  const [contact, setContact] = useState(user.contact);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(submit.street);
  const [zipCode, setZipCode] = useState(submit.zipCode);
  const [city, setCity] = useState(submit.city);
  const [unitNumber, setUnitNumber] = useState(submit.unitNumber);
  const [sex, setSex] = useState(submit.sex);
  const [Dob, setDob] = useState(submit.DOB);
  const [residentStatus, setResidentStatus] = useState(submit.residentStatus);
  const [FSInstitute, setFSInstitute] = useState(submit.FSInstitute);
  const [FSIDNumber, setFSIDNumber] = useState(submit.FSIDNumber);
  const [NRIC, setNRIC] = useState(submit.NRIC);
  const [PayNow, setPayNow] = useState(submit.PayNow);
  const [bankName, setBankName] = useState(submit.bankName);
  const [bankAccNumber, setBankAccNumber] = useState(submit.bankAccNo);
  const [verificationStatus, setVerificationStatus] = useState(
    user.verificationStatus
  );
  const [emeregencyContactNumber, setEmergencyContactNumber] = useState(
    submit.emergencyContactNumber
  );
  const [emeregencyContactName, setEmergencyContactName] = useState(
    submit.emergencyContactName
  );
  const [emeregencyContactRelation, setEmergencyContactRelation] = useState(
    submit.emergencyContactRelation
  );
  const [accountStatus, setAccounStatus] = useState(user.accountStatus);
  const [jobStatus, setJobStatus] = useState(user.jobStatus);

  //   const [submissions, setSubmissions] = useState([]);
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
  //console.log((props.form, ".form"));
  // //console.log(users, "..users");
  // //console.log(selectedUser, ".....verify");
  // //console.log(props.form, "....form");
  // props.formId != null &&
  //   useEffect(() => {
  //     useEffect(() => {
  //       const fetch = () => {
  //         axios(`https://deaksserver-version-1.herokuapp.com/submit`)
  //           .then((resp) => {
  //             //console.log("resp", resp.data);
  //             setSubmissions(resp.data);
  //           })
  //           .then(() => {
  //             // props.fetchGroups();
  //           });
  //       };
  //       fetch();
  //     }, []);
  //   });

  const submitHandler = (e) => {
    e.preventDefault();
    const verifiedUser = {
      userId: submit.userId,
      fullName: fullName,
      deaksId: deaksId,
      bookingName: bookingName,
      contact: contact,
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
      .patch("https://deaksserver-version-1.herokuapp.com/users", {
        verifiedUser,
      })
      .then((resp) => {
        //console.log(resp.body);
      });
  };
  const cancelForm = () => {
    if (props.userId != null && props.userId.action === "edit") {
      view.handleAppView("notifications");
      view.handleContent(null);
    }
  };
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
                  defaultValue={props.form.user.fullName}
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
                  defaultValue="Male"
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
                  defaultValue="Male"
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
export default VeryfyUserDetails;
