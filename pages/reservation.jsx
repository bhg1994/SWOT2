import React, { useState, useEffect } from "react";
import {
  Layout,
} from "antd";
import { ReservationRoominfo, LectureRoominfo } from "../components";
import SwotMap from "../containers/SwotMap";
import { ROOMLIST_REQUEST } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";


const studyboard = () => {

  const dispatch = useDispatch();

  // const [token, setToken] = useState(undefined)

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    dispatch({
      type: ROOMLIST_REQUEST,
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

export default studyboard;
