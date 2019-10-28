import React, { useState, useEffect } from "react";
import {
  Layout,
  Select,
  Divider,
  Button,
  Pagination,
  Row,
  Col,
  Card
} from "antd";
import { ReservationRoominfo, LectureRoominfo } from "../components";
import SwotMap from "../containers/SwotMap";
import { ROOMLIST_REQUEST } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";


const studyboard = () => {

  const dispatch = useDispatch();

  const [token, setToken] = useState(undefined)

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
    console.log("토큰 : "+token);
    dispatch({
      type: ROOMLIST_REQUEST,
      data: {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzM0NjE4MTMsInN1YiI6IjEzIn0.IbRFP2PL65CtA5spEI-A6AXtBB5FZRAA280tC86dON0",
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
