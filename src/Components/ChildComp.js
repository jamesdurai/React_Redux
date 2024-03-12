import React, { useState } from "react";

const ChildComp = ({ receivedFromChild }) => {
  let [childData, setChildData] = useState("");
  let [resetValue] = useState("");

  let fromChild = () => {
    receivedFromChild(childData);
    // setChildData(null);
  };

  let resetData = () => {
    receivedFromChild(resetValue);
    // setChildData(null);
  };

  return (
    <div>
      <h1>From Child Component</h1>
      <input
        type="text"
        className="form-control w-50"
        onChange={(e) => setChildData(e.target.value)}
        //value={childData}
      />
      <button className="btn btn-success" onClick={fromChild}>
        Child To Parent
      </button>

      <button className="btn btn-danger" onClick={resetData}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

export default ChildComp;
