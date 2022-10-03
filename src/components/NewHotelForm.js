import React, { useEffect, useState } from "react";
import style from "./styles/NewHotelForm.module.css";
import Axios from "axios";
import $ from "jquery";
const NewHotelFrom = (props) => {
  const [id, setId] = useState(props.edit == "edit" ? props.hotel._id : "");
  const [name, setName] = useState(
    props.edit == "edit" ? props.hotel.hotelName : ""
  );
  const [mail, setMail] = useState(
    props.edit == "edit" ? props.hotel.SOAMail : ""
  );
  const [logoFile, setLogoFile] = useState(null);
  const [googleMapLink,setGoogleMapLink] = useState(
    props.edit == "edit" ? props.hotel.googleMapLink : ""
  );
  const [appleMapLink,setAppleMapLink] = useState(
    props.edit == "edit" ? props.hotel.ppleMapLink : ""
  );
  //console.log(props.edit, props.hotel);
  //console.log(name);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };
  const googleMapLinkChangeHandler = (event) => {
    setGoogleMapLink(event.target.value);
  };
  const appleMapLinkChangeHandler = (event) => {
    setAppleMapLink(event.target.value);
  };
  const fileSelected = (event) => {
    setLogoFile(event.target.files);
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
        image.classList.add(`${style.previewImage}`);
        preview.appendChild(image);
      };
      reader.readAsDataURL(file);
    });
  };

  const submitHotelFrom = async (event) => {
    event.preventDefault();
    const hotelDetails = {
      title: name,
      SOAmail: mail,
      appleMapLink:appleMapLink,
      googleMapLink:googleMapLink,
    };
    const formData = new FormData();
    Object.keys(logoFile).map(function(key, index) {
      formData.append("logo", logoFile[key]);
    });
    formData.append("state", JSON.stringify(hotelDetails));

    const token = localStorage.getItem("JWTTOken");
    //console.log(formData);

    // Axios({
    //   method: "POST",
    //   data :formData,
    //   withCredentials: true,
    //   headers:{
    //     'Content-Type': 'multipart/form-data',
    //     secret_token: localStorage.getItem("JWtToken"),
    //   },

    //   url: "http://localhost:5002/hotelList",
    // }).then((res) => { //console.log(res);
    // });
    const response = await fetch("http://localhost:5002/hotelList", {
      method: "POST",
      body: formData,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        secret_token: localStorage.getItem("JWtToken"),
      },
    });
    const ResponseData = await response;
    await props.fetchClients();
     document.getElementById("staticBackdropHotel").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    // $("#staticBackdropHotel").modal("toggle");
  };

  return (
    <React.Fragment>
      <button
        id="newHotelFormButton"
        type="button"
        className="btn btn-sm btn-danger ml-2"
        data-toggle="modal"
        data-target="#staticBackdropHotel"
        style={{
          borderRadius: "20px",
          height: "50px",
        }}
      >
        {props.edit != null ? "Edit" : " + New Hotel Form"}
      </button>{" "}
      <form onSubmit={submitHotelFrom}>
        <div
          className="modal fade"
          id="staticBackdropHotel"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabelHotel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabelHotel">
                  Add Hotel
                </h5>
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
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Hotel name"
                      value={name}
                      onChange={nameChangeHandler}
                      required
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="SOA Mail"
                      value={mail}
                      onChange={mailChangeHandler}
                      required
                    ></input>
                  </div>
                </div>

                <div className={`form-group ${style.next}`}>
                  <label htmlFor="exampleFormControlFile1">Hotel Logo</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                    onChange={fileSelected}
                    required
                    accept="image/png, image/jpeg ,image/jpg"
                  ></input>
                </div>
                <div id="previewImages"></div>
                <div className={style.next}>
                  <label>Add Geo Location</label>
                  <div className={`form-row`}>
                    <div className="col">
                      <input
                        required
                        
                        className="form-control "
                        placeholder="Google Map Link"
                        value={googleMapLink}
                        onChange={googleMapLinkChangeHandler}
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        required
                       
                        className="form-control"
                        placeholder="Apple Map Link"
                        value={appleMapLink}
                        onChange={appleMapLinkChangeHandler}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // data-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default NewHotelFrom;
