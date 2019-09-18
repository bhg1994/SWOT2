import React, { useState } from "react";
import { Button, DatePicker, List, Typography } from "antd";
import { ReservationTable, Facilityrental } from "../components";

const { Text } = Typography;

const reservationForm = () => {
  const [reservationDate, setReseravtionDate] = useState("");

  function onChange(date, dateString) {
    console.log(date, dateString);
    setReseravtionDate(dateString);
  }

  console.log(reservationDate);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src="static/images/lectureroom2.jpg"></img>
      </div>
      <List style={{ marginTop: "30px" }}>
        <List.Item>
          <Text type="danger" style={{ marginRight: "30px",fontSize:"15px" }}>
            대여일자 선택
          </Text>
          <DatePicker onChange={onChange} />
          <Button style={{ marginLeft: "30px" }} type="primary" icon="search">
            조 회
          </Button>
          <Text style={{ fontSize: "15px", marginLeft: "270px" }} type="danger">
            {reservationDate}
          </Text>
        </List.Item>
      </List>
      <ReservationTable />
      <Facilityrental />
    </>
  );
};

export default reservationForm;
