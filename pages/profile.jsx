import React, { useState } from "react";
import {
  List,
  Tag,
  Card,
  Typography,
  Divider,
  Button,
  Modal,
  Table,
  Icon
} from "antd";
import NicknameEditForm from "../components/NicknameEditForm.jsx";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { LOAD_MYSTUDYPOST_REQUEST, LOAD_POST_REQUEST } from "../reducers/post";
import { useSelector, useDispatch } from "react-redux";
import { RESERVATION_STATUS_REQUEST } from "../reducers/lookup";
import {
  STUDY_MYAPPLY_REQUEST,
  STUDY_RESERVATION_REQUEST,
  STUDY_ACCEPT_REQUEST
} from "../reducers/study.js";

const { Text } = Typography;
const { Column } = Table;

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [boardId, setBoardId] = useState(0);
  const { reservationStatus } = useSelector(state => state.lookup);
  const { studys, posts } = useSelector(state => state.post);
  const { myApplyStudys, studyReservation } = useSelector(state => state.study);

  const dispatch = useDispatch();

  const myStudys = studys.filter(study => study.code === 2);

  console.log(studyReservation);

  const showModal = () => {
    console.log(boardId);
    const token = localStorage.getItem("accessToken");
    setVisible(true);
    dispatch({
      type: STUDY_RESERVATION_REQUEST,
      data: {
        token,
        boardId
      }
    });
  };

  const onCloseBtn = () => {
    setVisible(false);
  };

  const onAcceptBtn = () => {
    const token = localStorage.getItem("accessToken");
    let myInfo = JSON.parse(localStorage.getItem("myInfo"));

    dispatch({
      type: STUDY_ACCEPT_REQUEST,
      data: {
        token,
        leaderId: myInfo.id
      }
    });
  };
  const onRejectionBtn = () => {};

  return (
    <>
      <div>
        <NicknameEditForm />
        <List
          itemLayout="horizontal"
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              강의실 예약 현황
            </div>
          }
          bordered
          dataSource={reservationStatus}
          renderItem={(item, i) => (
            <List.Item style={{ maraginTop: "20px" }}>
              <Card
                style={{ margin: "40px" }}
                title={"예약날짜 : " + item.reservationDate}
                extra={<a href="/reservation">More</a>}
              >
                <div style={{ marginBottom: "20px", textAlign: "end" }}>
                  {item.state === "T" ? (
                    <Tag color="blue">승인 완료</Tag>
                  ) : (
                    <Tag color="red">승인 대기</Tag>
                  )}
                  <Divider orientation="left">강의실 이미지</Divider>
                </div>
                <div style={{ textAlign: "center" }}>{item.userId}</div>
                <Divider />
                <Text mark>
                  대여 시간 : {item.startTime}~ {item.endTime}
                </Text>
                <Divider />
                예약목적 / 인원수 : {item.reason} / {item.total}명
                <Divider />
                휴대폰 번호 :{" " + item.phone}
              </Card>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 예약 현황
            </div>
          }
          bordered
          dataSource={myStudys}
          renderItem={study => (
            <List.Item>
              <div
                onMouseOver={() => {
                  setBoardId(study.id);
                }}
              >
                <Card
                  style={{ margin: "40px" }}
                  title={study.title}
                  extra={
                    <Button size="small" onClick={showModal}>
                      예약 현황
                    </Button>
                  }
                >
                  <div style={{ marginBottom: "10px", textAlign: "end" }}>
                    {study.state === "T" ? (
                      <Tag color="blue">승인 완료</Tag>
                    ) : (
                      <Tag color="red">승인 대기</Tag>
                    )}
                  </div>
                  <Text type="warning">스터디 주제 : {study.title}</Text>
                  <Divider />
                  <Text mark>
                    날짜 : {study.meetingDate} ({study.startTime} ~{" "}
                    {study.endTime} )
                  </Text>
                  <br />
                  <br />
                  스터디 목적 : {study.body} <br />
                  <Divider />
                  최대 인원 수 : {study.total} 명
                </Card>
              </div>
            </List.Item>
          )}
        />
        <List
          style={{ marginBottom: "40px" }}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 신청 현황
            </div>
          }
          bordered
          dataSource={myApplyStudys}
          renderItem={mystudy => (
            <List.Item>
              <Card
                style={{ margin: "40px" }}
                title={mystudy.title}
                extra={
                  <Button type="danger" size="small">
                    신청 취소
                  </Button>
                }
              >
                <div style={{ marginBottom: "10px", textAlign: "end" }}>
                  {mystudy.state === "T" ? (
                    <Tag color="blue">승인 완료</Tag>
                  ) : (
                    <Tag color="red">승인 대기</Tag>
                  )}
                </div>
                <Text type="warning">스터디 주제 : {mystudy.title}</Text>
                <Divider />
                <Text mark>
                  날짜 : {mystudy.meetingDate} ({mystudy.startTime} ~{" "}
                  {mystudy.endTime} )
                </Text>
                <br />
                <br />
                스터디 목적 : {mystudy.body} <br />
                <Divider />
                최대 인원 수 : {mystudy.total} 명
              </Card>
            </List.Item>
          )}
        />
      </div>

      {/* 스터디예약 현황 보기 모달 */}
      <Modal
        title="예약 현황"
        visible={visible}
        onCancel={onCloseBtn}
        width="700px"
        footer={[
          <Button key="back" onClick={onCloseBtn}>
            닫기
          </Button>
        ]}
      >
        <Icon
          type="team"
          style={{ fontSize: "20px", margin: "5px 20px 20px 0 " }}
        />
        <Table dataSource={studyReservation}>
          <Column title="유저 이메일" dataIndex="email" key="email" />
          <Column title="학번" dataIndex="studentId" key="studentId" />
          <Column title="유저 이름" dataIndex="name" key="name" />
          <Column title="휴대폰 번호" dataIndex="phone" key="phone" />

          <Column
            title="확인란"
            key="action"
            render={() => (
              <span>
                <Button type="primary" onClick={onAcceptBtn}>
                  수락
                </Button>
                <Divider type="vertical" />
                <Button onClick={onRejectionBtn}>거절</Button>
              </span>
            )}
          />
        </Table>
      </Modal>
    </>
  );
};

Profile.getInitialProps = async context => {
  console.log(context.isServer);

  context.store.dispatch({
    type: RESERVATION_STATUS_REQUEST
  });
  // context.store.dispatch({
  //   type: LOAD_POST_REQUEST,
  //   data: {
  //     code: "2"
  //   }
  // });
  context.store.dispatch({
    type: STUDY_MYAPPLY_REQUEST
  });
  context.store.dispatch({
    type: LOAD_MYSTUDYPOST_REQUEST
  });
};
export default Profile;
