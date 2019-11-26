import React from "react";
import { StudyBoard, StudyBoardtwo, MainCarousel } from "../components";
import Link from "next/link";
import { SwotMap } from "../containers";
import { Table, Row, Col, Card, Typography, Divider } from "antd";
import { STUDY_RESERVATION_OFF } from "../reducers/room";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ROOMLIST_REQUEST } from "../reducers/master";
import { LOAD_POST_REQUEST } from "../reducers/post";

const { Column } = Table;
const { Text } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const { notifyPosts, studyPosts } = useSelector(state => state.post);

  console.log(notifyPosts, studyPosts);

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
      <div style={{ marginTop: "100px" }}>
        <Row gutter={24} type="flex">
          <Col xs={24} md={12}>
            <Table dataSource={notifyPosts} pagination={false}>
              <Column title="날짜" dataIndex="createdDate" key="createdDate" />
              <Column
                title="공지사항"
                dataIndex="title"
                key="title"
                render={text => (
                  <Link href="/notification">
                    <a>{text}</a>
                  </Link>
                )}
              />
              <Column title="내용" dataIndex="body" key="body" />
            </Table>
            <Card bordered={false} style={{ marginTop: "50px" }}>
              <Col xs={24} md={12}>
                <StudyBoard />
              </Col>
              <Col span={12}>
                <StudyBoardtwo />
              </Col>
            </Card>
          </Col>
          <div>
            <Card
              extra={<a href="reservation">Lecture ></a>}
              title={SWOTMapTitle}
              hoverable
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
