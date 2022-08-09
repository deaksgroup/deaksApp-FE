import React from "react";

import "./styles/generalStyle.css";
import styles from "./styles/Slotbar.module.css";

const Slotbar = () => {
  return (
    <React.Fragment>
      <div
        className={`row justify-content-around align-items-center ${styles.bar}`}
      >
        <div className="col-auto">0000</div>
        <div className="col-auto">Le Maridian</div>
        <div className="col-auto">15</div>
        <div className="col-auto">Active</div>
      </div>
    </React.Fragment>
  );
};

export default Slotbar;
