import React from "react";
import {
  StudyBoard,
  ReservationRoominfo,
  StudyBoardPagination,
  MainCarousel
} from "../components";
import { SwotMap } from "../containers";
import { Row, Col, Card, Typography, Divider } from "antd";
import { STUDY_RESERVATION_OFF } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { LOAD_POST_REQUEST } from "../reducers/post";

const { Text } = Typography;

const Home = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(state => state.post);

  const NotificationTitle = (
    <div style={{ textAlign: "center" }}>
      <Text type="danger" style={{ fontSize: "20px" }}>
        공지사항
      </Text>
    </div>
  );

  const SWOTMapTitle = (
    <div style={{ textAlign: "center" }}>
      <Text type="danger" style={{ fontSize: "20px" }}>
        SWOT MAP
      </Text>
    </div>
  );

  const { isStudyReservation } = useSelector(state => state.room);
  if (isStudyReservation) {
    dispatch({
      type: STUDY_RESERVATION_OFF
    });
  }

  return (
    <>
      <MainCarousel />
      <div>
        <Row gutter={24} type="flex">
          <Card bordered={false} style={{ marginTop: "50px" }}>
            <Card
              title={NotificationTitle}
              style={{ marginBottom: "50px" }}
              extra={<a href="Notification">Notification ></a>}
            >
              <Text>test</Text>
              <Divider />
              <Text>test2</Text>
              <Divider />
              <Text>test3</Text>
            </Card>
            <Col xs={24} md={12}>
              <StudyBoard />
            </Col>
            <Col xs={24} md={12} style={{ marginBottom: "70px" }}>
              <StudyBoard />
            </Col>
            <div style={{ textAlign: "center" }}>
              <StudyBoardPagination />
            </div>
          </Card>
          <div>
            <Card
              extra={<a href="reservation">Lecture ></a>}
              title={SWOTMapTitle}
              hoverable
              style={{
                textAlign: "center",
                marginTop: "74px"
              }}
            >
              <Col xs={24} md={12}>
                <SwotMap />
                <ReservationRoominfo />
              </Col>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

Home.getInitialProps = async context => {
  console.log("index");
  context.store.dispatch({
    type: LOAD_ROOMLIST_REQUEST
  });
  // context.store.dispatch({
  //   type: LOAD_POST_REQUEST,
  //   data: {
  //     code: "1"
  //   }
  // });
};

export default Home;
