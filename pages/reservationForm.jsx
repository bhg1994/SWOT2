import React, { useState } from "react";
import { Button, DatePicker, List, Typography } from "antd";
import { Facilityrental, ReservationTime } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { DATE_SELECT, ROOM_RESERVATIONS_REQUEST } from "../reducers/room";

const { Text } = Typography;

const reservationForm = () => {
  const [reservationDate, setReseravtionDate] = useState("");

  const [lookup, setLookup] = useState("");
  const dispatch = useDispatch();
  const { selectedRoom } = useSelector(state => state.room);


  const onButton = () => {
    setLookup("lookup");
    dispatch({
      type: ROOM_RESERVATIONS_REQUEST,
      data: {
        roomId: selectedRoom,
      }
    })
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
    setReseravtionDate(dateString);
    dispatch({
      type: DATE_SELECT,
      data: dateString,
    });
    setLookup("");
    console.log(lookup);
  }
  
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src="static/images/lectureroom2.jpg"></img>
      </div>

      <List
        style={{
          marginTop: "30px"
        }}
      >
        <List.Item>
          <div
            style={{
              margin: "auto",
              marginBottom: "30px"
            }}
          >
            <Text
              type="danger"
              style={{ marginRight: "30px", fontSize: "15px" }}
            >
              대여일자 선택
            </Text>
            <DatePicker onChange={onChange} />
            <Button
              style={{ marginLeft: "30px" }}
              type="primary"
              icon="search"
              onClick={onButton}
            >
              조 회
            </Button>
          </div>
        </List.Item>
      </List>

      <div style={{ margin: "auto", width: "80%" }}>
        <ReservationTime value={lookup} />
      </div>
      <Facilityrental />
    </>
  );
};

export default reservationForm;
