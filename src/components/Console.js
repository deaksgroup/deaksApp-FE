import React from "react";
import styles from "./styles/Console.module.css";

const Console = () => {
  return (
    <React.Fragment>
      <div className="general-margin">
        <div className={`shadow p-3 ${styles.card}`}>
          <h4>Users</h4>
          <h3>2055</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Console;
