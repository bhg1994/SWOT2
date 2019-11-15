import React, { useState, useEffect } from "react";
import { Button, DatePicker, List, Typography } from "antd";
import { ReservationTime } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { DATE_SELECT, ROOM_RESERVATIONS_REQUEST, STUDY_RESERVATION_ON } from "../reducers/room";
import SwotMap from "../containers/SwotMap";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import FacilityrentalForStudy from "../components/FacilityrentalForStudy";

const { Text } = Typography;

const reservationForm = () => {
  const [reservationDate, setReseravtionDate] = useState("");

  const [lookup, setLookup] = useState("");

  const dispatch = useDispatch();
  const { selectedRoom, isStudyReservation, selectedRoomName  } = useSelector(state => state.room);

  if(!isStudyReservation){
    dispatch({
      type: STUDY_RESERVATION_ON,
    })
  }
  
  useEffect(() => {
    setLookup("");
  }, [selectedRoom])
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: LOAD_ROOMLIST_REQUEST,
      data: {
        token: token,
      }
    });
  }, [])

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
            <div>
            <Text>{selectedRoomName}</Text>
          </div>
          <div>
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
      <FacilityrentalForStudy />
    </>
  );
};

export default reservationForm;
