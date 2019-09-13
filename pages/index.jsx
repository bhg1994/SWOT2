import React, { useEffect } from "react";
import {
  Notification,
  LectureRoominfo,
  NotifiactionPagination
} from "../components";
import { SwotMap, Study } from "../containers";
import { Row, Col, Card, Pagination } from "antd";
// import MainCarousel from "../components/MainCarousel";

class Home extends React.Component {
  componentDidMount() {
    console.log("test");
    if (typeof window !== "undefined") {
      require("react-leaf-carousel");
    }
  }

  render() {
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
              {<SwotMap />}
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
  }
}

export default Home;
