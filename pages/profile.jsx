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
  Icon,
  Row,
  Col
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
import {
  RESERVATION_CANCEL_REQUEST,
  INSERT_STUDY_RESERVATION_DATA,
  DATE_SELECT,
  START_TIME_SET,
  END_TIME_SET
} from "../reducers/room.js";
import Link from "next/link";
import Responsive from "../components/common/Responsive";

const { Text } = Typography;
const { Column } = Table;
const { confirm } = Modal;
var requestUserId;
var apId;

var dataListForTable = [];

const Profile = () => {
  const SMVTitle = (
    <div style={{ textAlign: "center" }}>
      <Text type="danger" style={{ fontSize: "20px" }}>
        예약 페이지로 이동
      </Text>
    </div>
  );

  const [visible, setVisible] = useState(false);
  const [boardId, setBoardId] = useState(0);

  const [SMVisible, setSMVisible] = useState(false);

  const [
    userListforMyStudyApplications,
    setUserListforMyStudyApplications
  ] = useState([]);

  const [myApplicationList, setMyApplicationList] = useState([]);

  const { reservationStatus } = useSelector(state => state.lookup);

  const { studys } = useSelector(state => state.post);
  const [selectedStudy, setSelectedStudy] = useState("");

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

  useEffect(() => {
    dataListForTable = [];
    studyReservation.forEach(user => {
      let state;
      applications.forEach(application => {
        if (user.id === application.userId) state = application.state;
      });
      let stateString = "";
      switch (state) {
        case "S":
          stateString = "완료됨";
          break;
        case "T":
          stateString = "승인됨";
          break;
        case "C":
          stateString = "대기중";
          break;
        case "D":
          stateString = "거절됨";
          break;
        case "R":
          stateString = "취소됨";
          break;
      }

      let dataForTable = {
        id: user.id,
        email: user.email,
        studentId: user.studentId,
        name: user.name,
        phone: user.phone,
        state: stateString
      };
      dataListForTable.push(dataForTable);
    });
    setUserListforMyStudyApplications(dataListForTable);
  }, [studyReservation]);

  useEffect(() => {
    dataListForTable = [];
    myApplyStudys.forEach(board => {
      let state;
      myApplyStudysApplications.forEach(application => {
        if (board.id === application.boardId) state = application.state;
      });

      let dataForTable = {
        id: board.id,
        title: board.title,
        body: board.body,
        meetingDate: board.meetingDate,
        startTime: board.startTime,
        endTime: board.endTime,
        total: board.total,
        state: state
      };
      dataListForTable.push(dataForTable);
    });
    setMyApplicationList(dataListForTable);
  }, [myApplyStudys]);

  const myStudys = studys.filter(study => study.code === 2);
  console.log(myStudys, studys);

  const showModal = () => {
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
    let boardIdForAccept;
    applications.forEach(applicaton => {
      if (applicaton.userId === requestUserId) {
        apId = applicaton.id;
        boardIdForAccept = applicaton.boardId;
      }
    });

    dispatch({
      type: STUDY_ACCEPT_REQUEST,
      data: {
        token,
        leaderId: apId,
        boardId: boardIdForAccept
      }
    });
  };

  const onRejectBtn = () => {
    let token = localStorage.getItem("accessToken");
    let boardIdForReject;
    applications.forEach(applicaton => {
      if (applicaton.userId === requestUserId) {
        apId = applicaton.id;
        boardIdForReject = applicaton.boardId;
      }
    });
    dispatch({
      type: STUDY_REJECT_REQUEST,
      data: {
        token,
        leaderId: apId,
        boardId: boardIdForReject
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

  const onStudyReservation = () => {
    let acceptedApp = [];
    applications.forEach(application => {
      if (application.state === "T") acceptedApp.push(application);
    });
    console.log(selectedStudy);

    if (acceptedApp.length < 1) {
      alert("너무적음");
    } else {
      dispatch({
        type: INSERT_STUDY_RESERVATION_DATA,
        data: {
          boards: selectedStudy,
          applications: acceptedApp,
          users: studyReservation
        }
      });
      dispatch({
        type: DATE_SELECT,
        data: selectedStudy.meetingDate
      });

      timeSetter(selectedStudy.startTime, START_TIME_SET);
      timeSetter(selectedStudy.endTime, END_TIME_SET);

      setSMVisible(true);
    }
  };

  const timeSetter = (time, dispatchType) => {
    let hourOnly = time.split(":");
    dispatch({
      type: dispatchType,
      data: hourOnly[0]
    });
  };

  return (
    <>
      <Responsive>
        <NicknameEditForm />
        <List
          itemLayout="horizontal"
          style={{ marginBottom: "40px" }}
          grid={{
            gutter: 16,
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
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
                style={{ marginTop: "40px" }}
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
          grid={{
            gutter: 16,
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
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
                  setSelectedStudy(study);
                }}
              >
                <Card
                  style={{ marginTop: "40px" }}
                  title={study.title}
                  extra={
                    study.state === "T" ? (
                      <Button size="small" onClick={showModal}>
                        신청 현황
                      </Button>
                    ) : (
                      ""
                    )
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
          grid={{
            gutter: 16,
            xs: 3,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          size="small"
          header={
            <div style={{ textAlign: "center", fontSize: "20px" }}>
              스터디 신청 현황
            </div>
          }
          bordered
          dataSource={myApplicationList}
          renderItem={mystudy => (
            <List.Item>
              <Card
                style={{ marginTop: "40px" }}
                title={mystudy.title}
                extra={
                  mystudy.state === "T" || mystudy.state === "S" ? (
                    ""
                  ) : (
                    <Button
                      type="danger"
                      size="small"
                      id={mystudy.id}
                      onClick={applicationCancel}
                    >
                      신청 취소
                    </Button>
                  )
                }
              >
                <div style={{ marginBottom: "10px", textAlign: "end" }}>
                  {mystudy.state === "T" || mystudy.state === "S" ? (
                    <Tag color="green">승인 완료</Tag>
                  ) : mystudy.state === "C" ? (
                    <Tag color="blue">승인 대기</Tag>
                  ) : (
                    <Tag color="red">승인 거절</Tag>
                  )}
                </div>
                <Text type="warning">스터디 주제 : {mystudy.body}</Text>
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
      </Responsive>

      {/* 스터디예약 현황 보기 모달 */}
      <Modal
        title="예약 현황"
        visible={visible}
        onCancel={onCloseBtn}
        width="800px"
        footer={[
          <Button onClick={onStudyReservation}>강의실 예약</Button>,
          <Button key="back" onClick={onCloseBtn}>
            닫기
          </Button>
        ]}
      >
        <Icon
          type="team"
          style={{ fontSize: "20px", margin: "5px 20px 20px 0 " }}
        />
        <Table
          dataSource={userListforMyStudyApplications}
          onRow={indexSelected}
        >
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

      <Modal
        title={SMVTitle}
        visible={SMVisible}
        onCancel={() => setSMVisible(false)}
        width="800px"
        footer={[
          <Button>
            <Link href="/studyReservation">확인</Link>
          </Button>,
          <Button key="back" onClick={() => setSMVisible(false)}>
            닫기
          </Button>
        ]}
      >
        <Card style={{ margin: "40px" }} title={selectedStudy.title}>
          <Text type="warning">스터디 주제 : {selectedStudy.title}</Text>
          <Divider />
          <Text mark>
            날짜 : {selectedStudy.meetingDate} ({selectedStudy.startTime} ~{" "}
            {selectedStudy.endTime} )
          </Text>
          <br />
          <br />
          스터디 목적 : {selectedStudy.body} <br />
          <Divider />
          최대 인원 수 : {selectedStudy.total} 명
        </Card>
      </Modal>
    </>
  );
};

export default Profile;
