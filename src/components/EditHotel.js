import React, { useEffect, useState } from "react";
import style from "./styles/NewHotelForm.module.css";
import Axios from "axios";
const EditHotel = (props) => {
  const [id, setId] = useState(props.hotel._id);
  const [name, setName] = useState(props.hotel.hotelName);
  const [mail, setMail] = useState(props.hotel.SOAMail);
  const [logoFile, setLogoFile] = useState([]);
  const [Longitude, setLongitude] = useState(props.hotel.longitude);
  const [Latitude, setLatitude] = useState(props.hotel.latitude);
  //console.log(props.edit, props.hotel);
  //console.log(name);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const mailChangeHandler = (event) => {
    setMail(event.target.value);
  };
  const latitudeChangeHandler = (event) => {
    setLatitude(event.target.value);
  };
  const longitudeChangeHandler = (event) => {
    setLongitude(event.target.value);
  };
  const fileSelected = (event) => {
    setLogoFile(event.target.files);
    const preview = document.getElementById(`previewImages${props.hotel._id}`);

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
  useEffect(() => {
    const preview = document.getElementById(`previewImages${props.hotel._id}`);
    var image = new Image();
    image.src = String(
      `https://deaksappbe.herokuapp.com/images/${props.hotel.hotelEmblem}`
    );
    image.classList.add(`${style.previewImage}`);
    preview.appendChild(image);
  }, []);
  const submitHotelFrom = async (event) => {
    event.preventDefault();
    const hotelDetails = {
      id: props.hotel._id,
      title: name,
      SOAmail: mail,
      longitude: Longitude,
      latitude: Latitude,
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

    //   url: "https://deaksappbe.herokuapp.com/hotelList",
    // }).then((res) => { //console.log(res);
    // });
    const response = await fetch(
      "https://deaksappbe.herokuapp.com/hotelList",
      {
        method: "PATCH",
        body: formData,
        headers: {
          // 'Content-Type': 'multipart/form-data',
          secret_token: localStorage.getItem("JWtToken"),
        },
      }
    );
    const ResponseData = await response;
  };

  return (
    <React.Fragment>
      <button
        id="newHotelFormButton"
        type="button"
        className="btn btn-sm btn-danger ml-2"
        data-toggle="modal"
        data-target={`#staticBackdrop${props.hotel._id}`}
      >
        Edit
      </button>{" "}
      <form onSubmit={submitHotelFrom}>
        <div
          className="modal fade"
          id={`staticBackdrop${props.hotel._id}`}
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby={`staticBackdropLabel${props.hotel._id}${props.hotel.hotelName}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id={`staticBackdropLabel${props.hotel._id}${props.hotel.hotelName}`}
                >
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
                    accept="image/png, image/jpeg ,image/jpg"
                  ></input>
                </div>
                <div id={`previewImages${props.hotel._id}`}></div>
                <div className={style.next}>
                  <label>Add Geo Location</label>
                  <div className={`form-row`}>
                    <div className="col">
                      <input
                        required
                        type="number"
                        className="form-control "
                        placeholder="Longitude"
                        value={Longitude}
                        onChange={longitudeChangeHandler}
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Latitude"
                        value={Latitude}
                        onChange={latitudeChangeHandler}
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
                <button type="submit" className="btn btn-primary">
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

export default EditHotel;
