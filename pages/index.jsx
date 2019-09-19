import React, { useEffect } from "react";
import {
  Notification,
  ReservationRoominfo,
  NotifiactionPagination,
  LectureRoominfo,
  MainCarousel
} from "../components";
import { makeStyles } from "@material-ui/core/styles";
import { SwotMap } from "../containers";
import { Row, Col, Card } from "antd";

const useStyles = makeStyles({
  // ["@media (max-width:780px)"]: {
  //   map: {
  //     display: "none",
  //     backgroundColor: "red"
  //   }
  // }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <MainCarousel />
      <div>
        <Row gutter={24} type="flex">
          <Card bordered={false}>
            <Col xs={24} md={12}>
              <Notification />
            </Col>
            <Col xs={24} md={12} style={{ marginBottom: "70px" }}>
              <Notification />
            </Col>
            <div style={{ textAlign: "center" }}>
              <NotifiactionPagination />
            </div>
          </Card>
          <Col
            xs={24}
            md={12}
            style={{
              marginTop: "50px"
            }}
          >
            {/* <div style={{ overflow: "auto" position: "fixed", height: "100vh" }}> */}
            <Card
              extra={<a href="reservation">Lecture ></a>}
              title="SWOT MAP"
              hoverable
              style={{
                textAlign: "center"
              }}
            >
              <SwotMap />
              <ReservationRoominfo />
            </Card>
            {/* </div> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
