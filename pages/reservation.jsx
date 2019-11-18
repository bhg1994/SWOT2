import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import SwotMap from "../containers/SwotMap";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { useDispatch, useSelector } from "react-redux";
import { STUDY_RESERVATION_OFF } from "../reducers/room";
import {
  ReservationWrapper,
  ReservationGuide,
  MapWrapper
} from "../components/css/Reservation";
const reservation = () => {
  const dispatch = useDispatch();

  const { isStudyReservation } = useSelector(state => state.room);
  if (isStudyReservation) {
    dispatch({
      type: STUDY_RESERVATION_OFF
    });
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: LOAD_ROOMLIST_REQUEST,
      data: {
        token: token
      }
    });
  }, []);

  const { isLoggingIn } = useSelector(state => state.user);

  return (
    <>
      <ReservationWrapper>
        <Layout style={{ backgroundColor: "white" }}>
          <div>
            <img src="static/images/Reservation_logo.png" />
          </div>
          <MapWrapper>
            <SwotMap />
          </MapWrapper>
        </Layout>
        <ReservationGuide>강의실 선택하여 예약을 해주세요</ReservationGuide>
      </ReservationWrapper>
    </>
  );
};

export default reservation;
