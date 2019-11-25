import React from "react";
import { StudyBoard, MainCarousel } from "../components";
import { SwotMap } from "../containers";
import { Row, Col, Card, Typography, Divider } from "antd";
import { STUDY_RESERVATION_OFF } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { LOAD_POST_REQUEST } from "../reducers/post";

const { Text } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const { notifyPosts, studyPosts } = useSelector(state => state.post);

  console.log(notifyPosts, studyPosts);

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
              {/* <Text type="secondary">{notifyPosts[0].body}</Text>
              <Divider />
              <Text type="warning">{notifyPosts[1].body}</Text>
              <Divider />
              <Text type="danger">{notifyPosts[2].body}</Text> */}
            </Card>
            <Col xs={24} md={12}>
              <StudyBoard />
            </Col>
            <Col xs={24} md={12} style={{ marginBottom: "70px" }}>
              <StudyBoard />
            </Col>
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
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: {
      code: "1"
    }
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: {
      code: "2"
    }
  });
};

export default Home;
