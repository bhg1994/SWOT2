import React, { useState } from "react";
import Responsive from "../components/common/Responsive";
import { Button, DatePicker, List, Typography } from "antd";
import { Facilityrental, ReservationTime } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { DATE_SELECT, ROOM_RESERVATIONS_REQUEST } from "../reducers/room";
import {
  ReservationWrapper,
  ReservationGuide
} from "../components/css/Reservation";
import { animateScroll as scroll } from "react-scroll";

const { Text } = Typography;

const reservationForm = () => {
  const [dateSelected, setDateSelected] = useState(false);
  const [lookup, setLookup] = useState("");
  const dispatch = useDispatch();
  const { selectedRoom, selectedRoomCode } = useSelector(state => state.room);

  const onButton = () => {
    setLookup("lookup");
    dispatch({
      type: ROOM_RESERVATIONS_REQUEST,
      data: {
        roomId: selectedRoom
      }
    });
    scroll.scrollTo(150);
  };

  function onChange(date, dateString) {
    setDateSelected(true);
    dispatch({
      type: DATE_SELECT,
      data: dateString
    });
    setLookup("");
  }

  return (
    <>
      <Responsive>
        <div style={{ textAlign: "center" }}>
          <img src={`static/images/classrooms/${selectedRoomCode}.jpg`}></img>
        </div>
        <List
          style={{
            margin: "auto",
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
              {dateSelected ? (
                <Button
                  style={{ marginLeft: "30px" }}
                  type="primary"
                  icon="search"
                  onClick={onButton}
                >
                  조 회
                </Button>
              ) : (
                ""
              )}
            </div>
          </List.Item>
        </List>
        {lookup && dateSelected ? (
          <div>
            <ReservationTime value={lookup} />
            <Facilityrental />
          </div>
        ) : (
          <ReservationWrapper>
            <ReservationGuide>대여 일자를 먼저 선택해주세요</ReservationGuide>
          </ReservationWrapper>
        )}
      </Responsive>
    </>
  );
};

export default reservationForm;
