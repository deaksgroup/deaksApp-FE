import React, { useContext, useState, useEffect } from "react";
import SlotStatus from "./SlotStatus.module";
import styles from "./styles/SlotStack.module.css";
import ViewContext from "../appView-context";

const SlotStack = (props) => {
  const view = useContext(ViewContext);
  const [loadedSlots, setLoadedSlots] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5002/slotList", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            secret_token: localStorage.getItem("JWtToken"),
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        //console.log(data, "......");
        setLoadedSlots(data);
      } catch (error) {
        //console.log(error.message);
      }
    };
    getData();
  }, []);
  let Content = "car";
  const editSlot = () => {
    view.handleAppView("edit-slot");
    view.handleContent("Car");
  };
  const deleteSlot = async (e) => {
    const response = await fetch(
      `http://localhost:5002/slotList/${e.target.value}`,
      {
        method: "DELETE",

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
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hotel</th>
              <th scope="col">Confirmed</th>
              <th scope="col">WaitingList</th>
              <th scope="col">status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loadedSlots.map((slot, i) => {
              return (
                <tr key={slot._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{slot.hotelName}</td>
                  <td>{slot.ConfirmedRequests.length}</td>
                  <td>{slot.WaitingRequests.length}</td>
                  <td>{slot.status}</td>
                  <td className="d-flex justify-content-start align-items-center">
                    {/* <button
                className="btn btn-danger btn-sm mx-2"
                onClick={editSlot}
              >
                Edit
              </button> */}
                    <button
                      onClick={deleteSlot}
                      value={slot._id}
                      className="btn btn-danger mx-2 btn-sm"
                    >
                      Delete
                    </button>

                    <SlotStatus
                      slots={{ Slot: slot, Users: props.users }}
                    ></SlotStatus>
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <th scope="row">2</th>
              <td>RITZ CARTLON</td>
              <td>20</td>
              <td>Deactivated</td>
              <td>
                <button className="btn btn-danger mx-2 btn-sm ">Delete</button>
                <button className="btn btn-danger mx-2 btn-sm">status</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Le Méridien</td>
              <td>10</td>
              <td>Active</td>
              <td>
                <button className="btn btn-danger  mx-2 btn-sm ">Edit</button>
                <button className="btn btn-danger  mx-2 btn-sm ">Delete</button>
                <button className="btn btn-danger mx-2 btn-sm">status</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default SlotStack;
