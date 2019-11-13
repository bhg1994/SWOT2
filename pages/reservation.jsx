import React, { useState, useEffect } from "react";
import {
  Layout,
} from "antd";
import SwotMap from "../containers/SwotMap";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { useDispatch, useSelector } from "react-redux";
import { STUDY_RESERVATION_OFF } from "../reducers/room";


const reservation = () => {

  const dispatch = useDispatch();

  // const [token, setToken] = useState(undefined)
  const { isStudyReservation } = useSelector(state => state.room);
  if(isStudyReservation){
    dispatch({
      type: STUDY_RESERVATION_OFF,
    })
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: LOAD_ROOMLIST_REQUEST,
      data: {
        token: token,
      }
    });
  }, [])

  
  const { isLoggingIn } = useSelector(state => state.user);

  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ margin: "30px 110px 20px 0", textAlign: "center" }}>
          <img src="static/images/Reservation_logo.png" />
        </div>

        <div
          style={{
            margin: "auto"
          }}
        >
          <div style={{ marginRight: "100px" }}>
            <SwotMap />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default reservation;
