import React from "react";

function StoreData({ formsData }) {
  return (
    <div className="store-data">
      <h3>Success!</h3>
      <li>
        <b>Name:</b> {formsData.name}
      </li>
      <li>
        <b>Email:</b>
        {formsData.email}
      </li>
      <li>
        <b>DOB:</b>
        {formsData.dob}
      </li>
      <li>
        <b>Password:</b>
        {formsData.password}
      </li>
    </div>
  );
}

export default StoreData;
