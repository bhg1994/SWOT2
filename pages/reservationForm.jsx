import React, { useState } from "react";
import { Button, DatePicker, List, Typography } from "antd";
import { ReservationTable, Facilityrental } from "../components";
import PieChart from "react-minimal-pie-chart";

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
          <Text type="danger" style={{ marginRight: "30px", fontSize: "15px" }}>
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
      <div style={{ width: "500px", height: "500px" }}>
        <PieChart
          totalValue="48"
          radius="40"
          data={[
            { title: "One", value: 5, degrees: "10", color: "#E38627" },
            { title: "Two", value: 5, color: "#C13C37" },
            { title: "Three", value: 5, color: "#6A2135" },
            { title: "Four", value: 5, color: "red" },
            { title: "Five", value: 5, color: "orange" },
            { title: "Six", value: 5, color: "blue" }
          ]}
        />
      </div>
      {/* <ReservationTable /> */}
      <Facilityrental />
    </>
  );
};

export default reservationForm;
