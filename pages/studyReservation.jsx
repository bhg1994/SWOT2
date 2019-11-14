import React, { useState } from "react";
import { Button, DatePicker, List, Typography } from "antd";
import { Facilityrental, ReservationTime } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { DATE_SELECT, ROOM_RESERVATIONS_REQUEST } from "../reducers/room";
import SwotMap from "../containers/SwotMap";

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
        roomId: selectedRoom
      }
    });
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
    setReseravtionDate(dateString);
    dispatch({
      type: DATE_SELECT,
      data: dateString
    });
  }

  return (
    <>
      <List
        style={{
          marginTop: "30px"
        }}
      >
        <List.Item>
          <div
            style={{
              margin: "auto"
            }}
          >
            <SwotMap />
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <Button type="primary" icon="search" onClick={onButton}>
                조 회
              </Button>
            </div>
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
