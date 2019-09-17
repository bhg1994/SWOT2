import React, { useState } from "react";
import { Button, DatePicker, List } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

const reservationForm = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src="static/images/lectureroom2.jpg"></img>
      </div>
      <div>
        <DatePicker onChange={onChange} />
      </div>
    </>
  );
};

export default reservationForm;
