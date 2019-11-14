import React, { useState, useEffect } from "react";
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
import { LOAD_MYSTUDYPOST_REQUEST } from "../reducers/post";
import { useSelector, useDispatch } from "react-redux";
import { RESERVATION_STATUS_REQUEST } from "../reducers/lookup";
import {
  STUDY_MYAPPLY_REQUEST,
  STUDY_RESERVATION_REQUEST,
  STUDY_ACCEPT_REQUEST,
  STUDY_REJECT_REQUEST,
  STUDY_MYAPPLYCANCEL_REQUEST
} from "../reducers/study.js";
import { RESERVATION_CANCEL_REQUEST } from "../reducers/room.js";
import Link from "next/link";

const { Text } = Typography;
const { Column } = Table;
const { confirm } = Modal;
var requestUserId;
var apId;

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [boardId, setBoardId] = useState(0);
  const { reservationStatus } = useSelector(state => state.lookup);
  const { studys, posts } = useSelector(state => state.post);
  const {
    myApplyStudys,
    myApplyStudysApplications,
    studyReservation,
    applications
  } = useSelector(state => state.study);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: RESERVATION_STATUS_REQUEST
    });

    dispatch({
      type: STUDY_MYAPPLY_REQUEST
    });

    dispatch({
      type: LOAD_MYSTUDYPOST_REQUEST
    });
  }, []);

  console.log(myApplyStudys);

  const myStudys = studys.filter(study => study.code === 2);

  const showModal = () => {
    console.log(boardId);
    let token = localStorage.getItem("accessToken");
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

  const indexSelected = record => {
    return {
      onMouseEnter: () => {
        requestUserId = record.id;
      }
    };
  };

  const onAcceptBtn = () => {
    let token = localStorage.getItem("accessToken");
    applications.forEach(applicaton => {
      if (applicaton.userId === requestUserId) {
        apId = applicaton.id;
      }
    });

    dispatch({
      type: STUDY_ACCEPT_REQUEST,
      data: {
        token,
        leaderId: apId
      }
    });
  };

  const onRejectBtn = () => {
    let token = localStorage.getItem("accessToken");

    applications.forEach(applicaton => {
      if (applicaton.userId === requestUserId) {
        apId = applicaton.id;
      }
    });
    dispatch({
      type: STUDY_REJECT_REQUEST,
      data: {
        token,
        leaderId: apId
      }
    });
  };

  const reservationCancel = e => {
    let token = localStorage.getItem("accessToken");
    dispatch({
      type: RESERVATION_CANCEL_REQUEST,
      data: {
        token,
        id: e.target.id
      }
    });
  };

  const applicationCancel = e => {
    let id = 0;
    myApplyStudysApplications.forEach(application => {
      if (String(application.boardId) === e.target.id) {
        id = application.id;
      }
    });
    let token = localStorage.getItem("accessToken");
    confirm({
      title: "스터디 신청 취소",
      content: "정말로 취소하시겠습니까?",
      onOk() {
        dispatch({
          type: STUDY_MYAPPLYCANCEL_REQUEST,
          data: {
            token: token,
            id: id
          }
        });
      },
      onCancel() {}
    });
  };
  const onFailReason = failReason => {
    confirm({
      title: "신청이 거절됨",
      content: "사유 : " + failReason,
      onOk() {},
      onCancel() {}
    });
  };

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
                extra={
                  <Button size="small" id={item.id} onClick={reservationCancel}>
                    예약 취소
                  </Button>
                }
              >
                <div style={{ marginBottom: "20px", textAlign: "end" }}>
                  {item.state === "T" ? (
                    <Tag color="green">승인 완료</Tag>
                  ) : item.state === "C" ? (
                    <Tag color="blue">승인 대기</Tag>
                  ) : (
                    <div onClick={() => onFailReason(item.failReason)}>
                      <Tag color="red">승인 거절</Tag>
                    </div>
                  )}
                </div>
                <Text mark>
                  대여 시간 : {item.startTime}~ {item.endTime}
                </Text>
                <Divider />
                예약목적 : {item.reason} / {item.total}명
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
              스터디 모집 현황
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
                      신청 현황
                    </Button>
                  }
                >
                  <div style={{ marginBottom: "10px", textAlign: "end" }}>
                    {study.state === "T" ? (
                      <Tag color="blue">모집중</Tag>
                    ) : (
                      <Tag color="red">예약 완료</Tag>
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
                  <Button
                    type="danger"
                    size="small"
                    id={mystudy.id}
                    onClick={applicationCancel}
                  >
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
        width="800px"
        footer={[
          <Button>
            <Link href="/studyReservation">강의실 예약</Link>
          </Button>,
          <Button key="back" type="danger" onClick={onCloseBtn}>
            닫기
          </Button>
        ]}
      >
        <Icon
          type="team"
          style={{ fontSize: "20px", margin: "5px 20px 20px 0 " }}
        />
        <Table dataSource={studyReservation} onRow={indexSelected}>
          <Column title="유저 이메일" dataIndex="email" key="email" />
          <Column title="학번" dataIndex="studentId" key="studentId" />
          <Column title="유저 이름" dataIndex="name" key="name" />
          <Column title="휴대폰 번호" dataIndex="phone" key="phone" />
          <Column title="상태" dataIndex="state" key="state" />

          <Column
            title="확인란"
            key="action"
            render={reservation => (
              <span>
                <Button type="primary" onClick={onAcceptBtn}>
                  수락
                </Button>
                <Divider type="vertical" />
                <Button onClick={onRejectBtn} id={reservation}>
                  거절
                </Button>
              </span>
            )}
          />
        </Table>
      </Modal>
    </>
  );
};

export default Profile;
