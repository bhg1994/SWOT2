import React, { useEffect } from "react";
import {
  Notification,
  LectureRoominfo,
  NotifiactionPagination
} from "../components";
import { makeStyles } from "@material-ui/core/styles";
import { SwotMap, Study } from "../containers";
import { Row, Col, Card, Pagination } from "antd";
// import MainCarousel from "../components/MainCarousel";

const useStyles = makeStyles({
  ["@media (max-width:780px)"]: {
    map: {
      display: "none",
      backgroundColor: "red"
    }
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      {/* <MainCarousel /> */}
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
        <Col xs={24} md={12} style={{ marginTop: "50px", minHeight: 900 }}>
          <Card
            extra={<a href="#">Lecture ></a>}
            title="SWOT MAP"
            hoverable
            style={{ textAlign: "center" }}
          >
            {<SwotMap className={classes.map} />}
            <Card
              style={{ marginTop: "30px" }}
              title="강의실 예약현황"
              hoverable
            >
              <LectureRoominfo />
            </Card>
          </Card>
        </Col>
      </Row>
      <Study />
    </>
  );
};

export default Home;
