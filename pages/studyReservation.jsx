import React, { useState, useEffect } from "react";
import Responsive from "../components/common/Responsive";
import { Button, List, Typography } from "antd";
import { ReservationTime } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  ROOM_RESERVATIONS_REQUEST,
  STUDY_RESERVATION_ON
} from "../reducers/room";
import SwotMap from "../containers/SwotMap";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import FacilityrentalForStudy from "../components/FacilityrentalForStudy";

const { Text } = Typography;

var map = new Map();
var isPossible;
for(let i = 0; i<24; i++){
  map.set(i,true);
}

const reservationForm = () => {
  const [lookup, setLookup] = useState("");

  const dispatch = useDispatch();
  const { selectedRoom, isStudyReservation, selectedRoomName, possibleTime, sTime, eTime } = useSelector(
    state => state.room
  );


  

  if (!isStudyReservation) {
    dispatch({
      type: STUDY_RESERVATION_ON
    });
  }

  useEffect(() => {
    setLookup("");
  }, [selectedRoom]);

  useEffect(() => {
    isPossible=true;
    for(let i=0; i<24; i++){
      if(!map.get(i)){
        if(!possibleTime.get(i)){
          isPossible=false;
        }
      }
    }
    console.log("ok?: "+isPossible);
  }, [possibleTime]);

  useEffect(() => {
    for(let i=0; i<eTime-sTime; i++){
      let index = parseInt(sTime)+ i;
      map.set(index,false);
    }
    
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: LOAD_ROOMLIST_REQUEST,
      data: {
        token: token
      }
    });
    console.log(map);
  }, []);

  const onButton = () => {
    setLookup("lookup");
    dispatch({
      type: ROOM_RESERVATIONS_REQUEST,
      data: {
        roomId: selectedRoom
      }
    });
  };

  return (
    <>
      <Responsive>
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
              <div style={{ textAlign: "center", marginTop: "20px" }}>
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
        {isPossible  ? "" : <div>12321</div>}
        {lookup === "" ? "" : <FacilityrentalForStudy />}
      </Responsive>
    </>
  );
};

export default reservationForm;
